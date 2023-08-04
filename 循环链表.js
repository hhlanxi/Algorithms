class Node{
	constructor(element) {
		this.elem = element
		this.next=null
	}
}

class roundLinkList{
	#head = null
	#count = 0
	push (data) {
		const res=new Node(data)
		if (this.#head === null) {
			this.#head = res
			res.next=this.#head
		} else {
			let currer = this.#head
			while (currer.next !== this.#head) {
				currer=currer.next
			}
			currer.next = res
			res.next = this.#head
		}
		this.#count++
		return true;
	}
	insert (data, index) {
		if (index >= 0 && index <= this.#count) {
			const res = new Node(data)
			let currer = this.#head
			if (index === 0) {
				if (this.isEmity()) {
					this.push(data)
					return true;
				} else {
					this.#head = res
					res.next = currer
					currer.next = this.#head
				}
			} else {
				currer = this.findbeforIndexNode(index)
				if (index === this.#count) {
					res.next=this.#head
				} else {
					res.next=currer.next
				}
				currer.next=res
			}
			this.#count++
			return true
		}
		return false
	}
	removeIndex (index) {
		if (this.isEmity()) return false
		if (index >= 0 && index < this.#count) {
			let currer =this.#head
			if (index === 0) {
				if (this.size() === 1) {
					this.#head = null
					return true;
				}
				while (currer.next != this.#head) {
					currer=currer.next
				}
				this.#head = this.#head.next
				currer.next=this.#head
			} else{
				currer = this.findbeforIndexNode(index)
				currer.next = currer.next.next
			}
			this.#count--
			return true
		}
		return false
	}
	removeData (data) {
		if (this.isEmity()) return false
		let flag = 0
		let isFind = false
		let currer = this.#head
		while (flag < this.#count) {
			if (currer.elem === data) {
				isFind = true;
				break;
			}
			currer=currer.next
			flag++
		}
		if (isFind) {
		 this.removeIndex(flag)
		return true
		}
		return false
	}
	findbeforIndexNode (index) {
		if (index <= 0) return false;
		let currer = this.#head
		while (index > 1) {
			currer = currer.next
			index--
		}
		return currer
	}

	size () {
		return this.#count
	}

	isEmity () {
		return this.size() === 0
	}
}
