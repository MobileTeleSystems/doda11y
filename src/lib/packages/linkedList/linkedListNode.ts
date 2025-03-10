export class LinkedListNode<P> {
	public key: string
	public payload: P
	public prev: LinkedListNode<P> | null = null
	public next: LinkedListNode<P> | null = null

	constructor(key: string, payload: P) {
		this.key = key
		this.payload = payload
	}
}
