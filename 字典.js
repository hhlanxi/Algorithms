class Dictionary{
	#table = {}
	
	toStrFn (item) {
		if (item === null) {
			return "NULL"
		} else if (item === undefined) {
			return "UNDEFINED"
		} else if (typeof item === 'string' || item instanceof String) {
			return item
		} else {
			return JSON.stringify(item)
		}
	}

	hasKey (item) {
		return this.#table[this.toStrFn(item)] !== null
	}
	
	get (key) { 
		const valuepair = this.#table[key]
		return valuepair == null?undefined:valuepair.value
	}

	set (key, value) { 
		if (key != null && value != null) {
			const tableKey = this.toStrFn(key)
			this.#table[tableKey] = new ValuePair(key, value)
			return true
		}
		return false
	}
	remove (key) {
		if (this.hasKey(key)) {
			delete this.#table[this.toStrFn(key)]
			return true
		}
		return false
	}

	Keys () { 
		return this.KeyValues().map(item => {
			return item.key
		})
	}
	Values () { 
			return this.KeyValues().map(item => {
			return item.value
		})
	}
	KeyValues () {
		return Object.values(this.#table)
	}
	size () {
		return Object.keys(this.#table).length
	}
	isEmity () {
		return this.size() === 0
	}
	clear () {
		this.#table={}
	}
}
class ValuePair {
	constructor(key, value) {
		this.key = key
		this.value = value
	}
}
let dic = new Dictionary()
dic.set({a:1},"aaa")
dic.set(1,"bbb")
dic.set([1,2],"ccc")