// CanaryJS Core Functions (v0.9)

// Array
export const flat = xs => xs.flat()
export const concat = ys => xs => xs.concat(ys)
export const join = sep => xs => xs.join(sep)
export const indexOf = val => xs => xs.indexOf(val)
export const lastIndexOf = val => xs => xs.lastIndexOf(val)
export const flatMap = fn => xs => xs.flatMap(fn)
export const map = fn => xs => xs.map(fn)
export const filter = fn => xs => xs.filter(fn)
export const reduce = fn => init => xs => xs.reduce((acc, x) => fn(acc)(x), init)
export const slice = start => end => xs => xs.slice(start, end)
export const find = fn => xs => xs.find(fn)
export const findIndex = fn => xs => xs.findIndex(fn)
export const findLast = fn => [...xs].reverse().find(fn)
export const some = fn => xs => xs.some(fn)
export const every = fn => xs => xs.every(fn)
export const at = idx => xs => xs.at(idx)
export const includes = val => xs => xs.includes(val)
export const sort = fn => xs => [...xs].sort(fn)
export const reverse = xs => [...xs].reverse()

// String
export const startsWith = substr => str => str.startsWith(substr)
export const endsWith = substr => str => str.endsWith(substr)
export const split = sep => str => str.split(sep)
export const toLower = str => str.toLowerCase()
export const toUpper = str => str.toUpperCase()
export const trim = str => str.trim()

// Object
export const keys = obj => Object.keys(obj)
export const values = obj => Object.values(obj)
export const entries = obj => Object.entries(obj)
export const fromEntries = xs => Object.fromEntries(xs)
export const prop = key => obj => obj[key]

// Math & Logic
export const add = a => b => a + b
export const subtract = a => b => a - b
export const multiply = a => b => a * b
export const divide = a => b => a / b
export const modulo = a => b => a % b
export const abs = Math.abs
export const pow = a => b => Math.pow(a, b)
export const floor = Math.floor
export const ceil = Math.ceil
export const round = Math.round
export const equals = a => b => a === b
export const not = x => !x
export const negate = fn => x => !fn(x)

// Control Flow
export const ifElse = pred => onTrue => onFalse => x =>
	pred(x) ? onTrue(x) : onFalse(x)

export const cond = pairs => x => {
	for (const [pred, fn] of pairs) {
		if (pred(x)) return fn(x)
	}
	throw new Error('No matching condition in cond')
}

// Function
export const curry = fn =>
	function curried(...args) {
		return args.length >= fn.length
			? fn.apply(this, args)
			: (...next) => curried.apply(this, args.concat(next))
	}

export const uncurry =
	fn =>
	(...args) =>
		args.reduce((acc, arg) => acc(arg), fn)

export const pipe =
	(...fns) =>
	x =>
		fns.reduce((v, f) => f(v), x)
export const compose =
	(...fns) =>
	x =>
		fns.reduceRight((v, f) => f(v), x)
export const identity = x => x
export const always = x => () => x
export const tap = fn => x => (fn(x), x)
export const addIndex = fn => f => xs => fn((x, i) => f(x, i))(xs)

// ADT
export const createADT = variants => {
	const type = {}
	for (const tag in variants) {
		type[tag] = (...args) => {
			const val = Object.create(type)
			val._tag = tag
			val._args = args
			val.toString = () => `${tag}(${args.join(', ')})`
			return val
		}
	}
	return type
}

export const match = cases => val => {
	const handler = cases[val._tag]
	if (!handler) throw new Error(`No match for ${val._tag}`)
	return handler(...val._args)
}

export const unwrap = x => x._args?.[0] ?? x
