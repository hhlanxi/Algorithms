
class DoublyNode {
	constructor(element) {
		this.elem = element
		this.next=null
		this.prev=null
	}
}
class DoublyLinkList{
	#head=null
	#tail = null;
	#count=0
	push (data) {
		let currer =this.#head
		const res = new DoublyNode(data)
		if (this.#head === null) {
			this.#head = res
			this.#tail = res
			res.prev=this.#head
		} else {
			while (currer.next !== null) {
				currer=currer.next
			}
			currer.next = res
			res.prev=currer
			this.#tail=res
		}
		this.#count++
		return true
	}

	insert (data, index) {
		//判断是否符合插入条件
		if (this.isCountRange(index)) {
			const res = new DoublyNode(data)
			let currer = this.#head
			//从头部插入
			if (index === 0) {
				//头部无数据时直接调用push方法
				if (currer === null) {
					this.push(data)
					return true;
				} 
				//否则需要进行下列操作
				else {
					//老数据前驱指向新数据
					currer.prev = res
					//新数据后继指向老数据
					res.next = currer
					//头节点指向新数据
					this.#head = res
					//新数据前驱指向头节点
					res.prev = this.#head
					//尾节点指向老数据
					this.#tail=currer
				}
				//从尾部插入
			} else if (index === this.#count) {
				//老数据的后继指向新数据
				this.#tail.next = res
				//新数据的前驱指向老数据
				res.prev = this.#tail
				//尾节点指向新数据
				this.#tail = res
				
				//从中间任何部位插入
			} else {
				//获取插入索引前的数据
				currer = this.indexNode(index)
				//新数据前驱指向老数据
				res.prev = currer
				//新数据后继指向索引前数据的后继数据
				res.next = currer.next
				//索引前数据的后继指向新数据
				currer.next = res
			}
			this.#count++
			return true
		}
		return false
	}

	deleteIndexData (index) {
		if (this.isEmity()) return false
		if (this.isCountRange(index) && index < this.#count) {
			let currer = this.#head
			if (index === 0) {
				this.#head = currer.next
				//是否只有一个元素
				if (this.size() === 1) {
					currer.next.prev=this.#head
				} else {
					this.#tail=null
				}
			} else if (index === this.#count - 1) {
				if (this.size() === 1) {
					this.#head = null
					this.#tail=null
				} else {
					currer = this.#tail
					this.#tail.prev.next = null
					this.#tail=this.#tail.prev
				}

			} else {
				currer = p = this.indexNode(index)
				p = p.next
				currer.next.next.prev = currer
				currer.next=currer.next.next
				currer=p
			}
			this.#count--
			return currer
		}
		return false
	} 
	deleteNodeData (data) {
		if (this.isEmity()) return false
		let currer = this.#head
		let flag = 0
		let isFind=false
		while (currer.next === null) {
			if (currer.elem == data) { isFind = true; break;} 
			currer=currer.next
			flag++
		}
		if (isFind) {
			let res = this.deleteIndexData(flag)
			return res
		}
		return false
	}


	indexNode (index) {
		//索引为零或非零则前面无数据
		if (index <= 0) return false;
		let currer = this.#head
		//索引比一大时进行循环获取，否则返回头节点指向的数据
		while (index>1) {
				currer=currer.next
        index--
		} 
		return currer
	}

	isCountRange (index) {
		return (index => 0 && index <= this.#count)
	}

	size () {
		return this.#count;
	}
	
	isEmity () {
		return this.size() === 0
	}
}


let list=new DoublyLinkList()