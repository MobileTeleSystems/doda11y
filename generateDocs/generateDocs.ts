// @ts-ignore

import * as fs from 'fs'
import * as path from 'path'
import * as ts from 'typescript'
import { TypeFlags } from 'typescript'

interface DocEntryTypeParams {
	name: string
	text: string
}

interface DocEntry {
	name: string;
	documentation?: string;
	type?: string;
	typeParams?: DocEntryTypeParams[];
	properties?: DocEntry[]
	isTypeAlias?: boolean
}

const isNonLiteralType = (type: ts.Type) => [TypeFlags.String, TypeFlags.Number, TypeFlags.Boolean, TypeFlags.BigInt].includes(type.flags)

const generateTypeTableMD = (values: Array<{ name: string, type: string, desc: string }>) => {
	let r = ''

	values.forEach(({ name, type, desc }) => {
		r += `| \`${name}\`  | \`${type.replace(/\|/gi, '\\|')}\`   | ${desc}  | \n`
	})

	return (
		`| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
${r}`
	).trim()
}

const generateTypeAliasTableMD = (type?: string) => {
	return (
		`|       |                       |
|------:|:----------------------|
| Type: | \`${type?.replace(/\|/gi, '\\|')}\` |
`)
}

const generateTypeAliasSectionMD = (name: string, type?: string) => {
	return (`
### \`${name}\`

${generateTypeAliasTableMD(type)}
	`).trim()
}


const generateTypeSectionMD = (name: string, values: Array<{ name: string, type: string, desc: string }>) => {
	return (`
### \`${name}\`

${generateTypeTableMD(values)}
	`).trim()
}

const generateDocs = (fileNames: string[], outDir: string, options: ts.CompilerOptions): void => {
	const program = ts.createProgram(fileNames, options)
	const sources  = program.getSourceFiles()
	const checker = program.getTypeChecker()

	const output: DocEntry[] = []

	for (const sourceFile of sources) {
		if (!sourceFile.isDeclarationFile) {
			ts.forEachChild(sourceFile, visit)
		}
	}

	let fileText = ''

	output.forEach((doc) => {
		let name = doc.name

		if (doc.typeParams) {
			name = `${doc.name}<${doc.typeParams.map(({ text }) => text).join(', ')}>`
		}

		const props = doc.properties?.map(({ name, type, documentation }) => ({ name, type, desc: documentation }))

		if (!fs.existsSync(outDir)) {
			fs.mkdirSync(outDir)
		}

		if (props) {
			fileText += `${generateTypeSectionMD(name, props as never)} \n\n`
		}

		if (doc?.isTypeAlias && !props) {
			fileText += `${generateTypeAliasSectionMD(name, doc?.type)} \n\n`
		}
	})

	fs.writeFileSync(`${outDir}/types.md`, fileText)

	return

	function visit(node: ts.Node) {
		if (!isNodeExported(node)) return

		if (ts.isInterfaceDeclaration(node) && node.name) {
			const symbol = checker.getSymbolAtLocation(node.name)

			if (symbol) {
				const type = checker.getDeclaredTypeOfSymbol(symbol)
				const properties = type.getProperties()

				output.push(serializeInterface(symbol, properties, node.typeParameters))
			}
		} else if (ts.isTypeAliasDeclaration(node) && node.name) {
			const symbol = checker.getSymbolAtLocation(node.name)

			if (symbol) {
				const type = checker.getDeclaredTypeOfSymbol(symbol)
				const properties = type.getProperties()

				if ((type.isUnionOrIntersection() && type.types.some((type) => type.isLiteral())) || isNonLiteralType(type)) {
					output.push(serializeTypeAlias(symbol, undefined, node.typeParameters, node.type.getFullText()))
				} else {
					output.push(serializeTypeAlias(symbol, properties, node.typeParameters))
				}
			}
		} else if (ts.isModuleDeclaration(node)) {
			ts.forEachChild(node, visit)
		}
	}

	function serializeSymbol(symbol: ts.Symbol): DocEntry {
		return {
			name: symbol.getName(),
			documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
			type: checker.typeToString(
				checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
			)
		}
	}

	function serializeTypeParam(typeParam: ts.TypeParameterDeclaration) {
		return {
			name: typeParam.name.escapedText as string,
			text: typeParam.getText(),
		}
	}

	/** Serialize a type alias symbol information */
	function serializeTypeAlias(symbol: ts.Symbol, properties?: ts.Symbol[], typeParams?:  ts.NodeArray<ts.TypeParameterDeclaration>, type?: string) {
		const details = serializeSymbol(symbol)

		const serializedTypeParams= typeParams?.map(serializeTypeParam)
		const props = properties?.map(serializeSymbol)

		return {
			...details,
			typeParams: serializedTypeParams,
			properties: props,
			type,
			isTypeAlias: true
		}
	}

	/** Serialize a interface symbol information */
	function serializeInterface(symbol: ts.Symbol, properties: ts.Symbol[], typeParams?:  ts.NodeArray<ts.TypeParameterDeclaration>) {
		const details = serializeSymbol(symbol)

		const serializedTypeParams= typeParams?.map(serializeTypeParam)
		const props = properties.map(serializeSymbol)

		return {
			...details,
			typeParams: serializedTypeParams,
			properties: props,
		}
	}

	/** True if this is visible outside this file, false otherwise */
	function isNodeExported(node: ts.Node): boolean {
		return (
			(ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0 ||
				(!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
		)
	}
}

const args = process.argv.slice(2)

const files = fs.readdirSync(args[0], { recursive: true })

const typeFiles = files.filter((file) => {
	const __stringifyFile = file.toString()

	const { ext, name } = path.parse(__stringifyFile)
	return name === 'types' && ext === '.ts'
}).map((v) => `${args[0]}/${v}`)

let outDir = `${__dirname}/docs.md`

if (args.indexOf('--out') !== -1) {
	outDir = args[args.indexOf('--out') + 1]
}

generateDocs(typeFiles as string[], outDir, {
	noEmitOnError: true,
	noImplicitAny: true,
	target: ts.ScriptTarget.ES5,
	module: ts.ModuleKind.CommonJS
})
