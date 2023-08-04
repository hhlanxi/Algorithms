/* 性能不好，由于从数组第一位删除，从而导致数组中所有的值需要往前移动 */
// class Group{
// 	#ans = []
// 	push (data) {
// 		this.#ans.push(data)
// 	}
// 	pop () {
// 		if (!this.isEmpty()) {
// 			return this.#ans.shift()
// 		}
// 	}
// 	peek () {
// 		return this.#ans.at(-1)
// 	}

// 	size () {
// 		return this.#ans.length
// 	 }

// 	isEmpty () {
// 		return this.size() === 0
// 	}
// 	clear () {
// 		this.#ans=[]
// 	 }
// }


class Group{
	#ans = {}
	#lowsnum = 0
	#count=0
	push (data) { 
		this.#ans[this.#count] = data
		this.#count++
	}
	pop () { 
		if (!this.isEmpty()) {
			let res = this.#ans[this.#lowsnum]
			delete this.#ans[this.#lowsnum]
			this.#lowsnum++
			return res
		}
		return new Error("队列为空，请插入数据！")
	}
	peek () { 
		return this.#ans[this.#lowsnum]
	}

	size () {
		return this.#count - this.#lowsnum
	 }

	isEmpty () { 
		return this.size() === 0
	}
	clear () {
		this.#ans = {}
		this.#lowsnum = 0
		this.#count=0
	 }
}

//击鼓传花游戏
//指定第n下淘汰，决胜一人
game = (data, count) => {
	let group=new Group()
	for (let i = 0; i < data.length; i++){
		group.push(data[i])
	}

	while (group.size() > 1) {
		for (let j = 0; j < count; j++){
			group.push(group.pop())
		}
		group.pop()
	}
	return group.peek()
}

let res = game(["as", "bs", "cs", "ds", 'es'], 1)
console.log(res);