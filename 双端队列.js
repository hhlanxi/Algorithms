class DeQueue{
	#ans = {}
	#lowsnum = 0
	#count=0
	lastadd (data) { 
		this.#ans[this.#count] = data
		this.#count++
	}
	frontdelet () { 
		if (this.isEmpty()) return;
			let res = this.#ans[this.#lowsnum]
			delete this.#ans[this.#lowsnum]
			this.#lowsnum++
			return res
		
	}
	frontadd (data) {
		if (this.isEmpty()) {
			this.lastadd(data)
		} else {
			if (this.#lowsnum < 1) {
				for (let i = this.#count; i > 0; i--) {
					this.#ans[i] = this.#ans[i - 1]
				}
				this.#ans[0] = data
				this.#count++
			} else {
				this.#lowsnum--
				this.#ans[this.#lowsnum] = data
			}
		}
	}
	lastdelet () {
		if (this.isEmpty()) return;
		this.#count--
		const res =this.#ans[this.#count]
		delete this.#ans[this.#count]
		return res
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