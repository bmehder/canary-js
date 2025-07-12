// CanaryJS Core Functions

// Array
export const flat = xs => xs.flat()
export const concat = ys => xs => xs.concat(ys)
export const join = sep => xs => xs.join(sep)
export const indexOf = val => xs => xs.indexOf(val)
export const lastIndexOf = val => xs => xs.lastIndexOf(val)
export const flatMap = fn => xs => xs.flatMap(fn)
export const map = fn => xs => xs.map(fn)
export const filter = fn => xs => xs.filter(fn)
export const reduce = fn => init => xs => xs.reduce(fn, init)
export const slice = start => end => xs => xs.slice(start, end)
export const find = fn => xs => xs.find(fn)
export const findIndex = fn => xs => xs.findIndex(fn)
export const findLast = fn => xs => [...xs].reverse().find(fn)
export const some = fn => xs => xs.some(fn)
export const every = fn => xs => xs.every(fn)
export const at = idx => xs => xs.at(idx)
export const nth = at
export const includes = val => xs => xs.includes(val)
export const sort = fn => xs => [...xs].sort(fn)
export const reverse = xs => [...xs].reverse()
export const length = val => val.length

// String
export const startsWith = substr => str => str.startsWith(substr)
export const endsWith = substr => str => str.endsWith(substr)
export const split = sep => str => str.split(sep)
export const toLower = str => str.toLowerCase()
export const toUpper = str => str.toUpperCase()
export const trim = str => str.trim()
export const trimStart = str => str.trimStart()
export const trimEnd = str => str.trimEnd()
export const repeat = n => str => str.repeat(n)
export const padStart = len => str => str.padStart(len)
export const padEnd = len => str => str.padEnd(len)

// Object
export const keys = obj => Object.keys(obj)
export const values = obj => Object.values(obj)
export const entries = obj => Object.entries(obj)
export const fromEntries = xs => Object.fromEntries(xs)
export const prop = key => obj => obj[key]
export const freeze = obj => Object.freeze(obj)
export const seal = obj => Object.seal(obj)
export const is = a => b => Object.is(a, b)

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
export const lt = a => b => b < a
export const lte = a => b => b <= a
export const gt = a => b => b > a
export const gte = a => b => b >= a

// Control Flow
export const ifElse = pred => onTrue => onFalse => x =>
	pred(x) ? onTrue(x) : onFalse(x)

export const cond = pairs => x => {
	for (const [pred, fn] of pairs) {
		if (pred(x)) return fn(x)
	}
	throw new Error('No matching condition in cond')
}

export const tryCatch = tryFn => catchFn => x => {
	try {
		return tryFn(x)
	} catch (err) {
		return catchFn(err, x)
	}
}

// Function
export const curry =
	fn =>
	(...args) =>
		args.length >= fn.length
			? fn.apply(null, args)
			: (...next) => curry(fn)(...args.concat(next))

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
export const converge = f => g => h => x => f(g(x))(h(x))
export const tap = fn => x => (fn(x), x)
export const addIndex = fn => f => xs => fn((x, i) => f(x, i))(xs)
export const flip = fn => x => y => fn(y)(x)
export const binary = fn => (a, b) => fn(a)(b)
export const trinary = fn => (a, b, c) => fn(a)(b)(c)

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
	const handler = cases[val._tag] || cases._
	if (!handler) throw new Error(`No match for ${val._tag}`)
	return handler(...val._args)
}

export const unwrap = x => x._args?.[0] ?? x
