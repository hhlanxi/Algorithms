class mySet{
	#set={}
	
	add (element) {
		if (!this.has(element)) {
			this.#set[element]=element
		}
	}
	remove (element) {
		if (this.has(element)) {
			delete this.#set[element]
			return true
		} 
		return false
	}

	has (element) {
		return this.#set[element] === element
	}

	get data() {
		return this.#set
	}
	clear () {
		this.#set={}
	}

	[Symbol.iterator] =  function *() {
		let keys = Object.keys(this.#set)
		for (let i=0; i < keys.length; i++){
			yield this.#set[keys[i]]
		}
	}
}
