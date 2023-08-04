class Node{
	constructor(element) {
		this.elem = element
		this.next=null
	}
}

class ListNode{
		#head = null
		#count=0
  //按顺序组成链表
	add (data) {
		let res = new Node(data)
		if (this.#head === null) {
			this.#head = res
		} else {
			let currer = this.#head
			while (currer.next !== null) {
				currer=currer.next
			}
			currer.next=res
		}
			this.#count++
	}
    //删除对应索引数据
	deleteindex (index) {
		let currer = this.#head
		if (index >= 0 && index < this.#count) {
			if (index === 0) {
				this.#head=currer.next
			} else {
                let p=this.indexNode(index)
                currer=p.next
				p.next=p.next.next
			}
		}
		this.#count--
		return currer.elem
	}
    //删除对应链表中第一出现的数据
    deletedata(data){
        let currer =this.#head
        let flag=0
        while(currer.next !== null){
            if(currer.elem === data) break;
            currer=currer.next
            flag++
        }
       return this.deleteindex(flag)
	}
    //添加至索引前
	addIndex (data, index) {
		let res = new Node(data)
		let currer=this.#head
		if (index === 0) {
			res.next = currer
			this.#head=res
		} else if(index > 0 && index<=this.#count){
			currer = this.indexNode(index)
			res.next = currer.next
			currer.next=res
		} else {
			return
		} 
		this.#count++
	}
    //获取第n-1结点
	indexNode (index) {
		if(index === 0) return
		let currer = this.#head
		while (index>1) {
				currer=currer.next
        index--
		} 
		return currer
	}
}

