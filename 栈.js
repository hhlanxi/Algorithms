class Statk{
	#ans = []
	push (data) {
		this.#ans.push(data)
	}
	pop () { 
		if (!this.isEmpty()) {
			return this.#ans.pop()
		}
		return new Error("栈为空，无数据出栈")
	}
	peek () { 
		return this.#ans.at(-1)
	}

	size () {
		return this.#ans.length
	 }

	isEmpty () { 
		return this.#ans.length === 0
	}
	clear () {
		this.#ans=[]
	 }
}

function canvas (data, base) {
	let basestring = "0123456789ABCDEF"
	let number = data
	let string = ""
	let statk =new Statk()
	while (number > 0) {
		statk.push(number % base)
		number = Math.floor(number / base)
	}
	while (!statk.isEmpty()) {
		string+= basestring[statk.pop()]
	}
	return string
}
console.log(canvas(500,16))

