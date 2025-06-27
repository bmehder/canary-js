// CanaryJS TypeScript Definitions (partial)

// Array
export declare const flat: <T>(xs: T[][]) => T[]
export declare const concat: <T>(ys: T[]) => (xs: T[]) => T[]
export declare const join: (sep: string) => (xs: string[]) => string
export declare const indexOf: <T>(val: T) => (xs: T[]) => number
export declare const lastIndexOf: <T>(val: T) => (xs: T[]) => number
export declare const flatMap: <T, U>(fn: (x: T) => U[]) => (xs: T[]) => U[]
export declare const map: <T, U>(fn: (x: T) => U) => (xs: T[]) => U[]
export declare const filter: <T>(fn: (x: T) => boolean) => (xs: T[]) => T[]
export declare const reduce: <T, U>(fn: (acc: U) => (x: T) => U) => (init: U) => (xs: T[]) => U
export declare const slice: (start: number) => (end: number) => <T>(xs: T[]) => T[]
export declare const find: <T>(fn: (x: T) => boolean) => (xs: T[]) => T | undefined
export declare const findIndex: <T>(fn: (x: T) => boolean) => (xs: T[]) => number
export declare const findLast: <T>(fn: (x: T) => boolean) => (xs: T[]) => T | undefined
export declare const some: <T>(fn: (x: T) => boolean) => (xs: T[]) => boolean
export declare const every: <T>(fn: (x: T) => boolean) => (xs: T[]) => boolean
export declare const at: (idx: number) => <T>(xs: T[]) => T | undefined
export declare const includes: <T>(val: T) => (xs: T[]) => boolean
export declare const sort: <T>(fn: (a: T, b: T) => number) => (xs: T[]) => T[]
export declare const reverse: <T>(xs: T[]) => T[]
// TODO: length

// String
export declare const startsWith: (substr: string) => (str: string) => boolean
export declare const endsWith: (substr: string) => (str: string) => boolean
export declare const split: (sep: string) => (str: string) => string[]
export declare const toLower: (str: string) => string
export declare const toUpper: (str: string) => string
export declare const trim: (str: string) => string

// Object
export declare const keys: (obj: object) => string[]
export declare const values: (obj: object) => any[]
export declare const entries: (obj: object) => [string, any][]
export declare const fromEntries: (entries: [string, any][]) => object
export declare const prop: <T, K extends keyof T>(key: K) => (obj: T) => T[K]

// Math & Logic
export declare const add: (a: number) => (b: number) => number
export declare const subtract: (a: number) => (b: number) => number
export declare const multiply: (a: number) => (b: number) => number
export declare const divide: (a: number) => (b: number) => number
export declare const modulo: (a: number) => (b: number) => number
export declare const abs: (x: number) => number
export declare const pow: (a: number) => (b: number) => number
export declare const floor: (x: number) => number
export declare const ceil: (x: number) => number
export declare const round: (x: number) => number
export declare const equals: <T>(a: T) => (b: T) => boolean
export declare const not: (x: any) => boolean
export declare const negate: <T>(fn: (x: T) => boolean) => (x: T) => boolean

// Control Flow
export declare const ifElse: <T>(pred: (x: T) => boolean) => (onTrue: (x: T) => any) => (onFalse: (x: T) => any) => (x: T) => any
export declare const cond: <T>(pairs: Array<[(x: T) => boolean, (x: T) => any]>) => (x: T) => any

// Function
export declare const pipe: (...fns: Array<(x: any) => any>) => (x: any) => any
export declare const compose: (...fns: Array<(x: any) => any>) => (x: any) => any
export declare const identity: <T>(x: T) => T
export declare const always: <T>(x: T) => () => T
export declare const tap: <T>(fn: (x: T) => any) => (x: T) => T
export declare const addIndex: <T>(fn: (f: (x: T, i: number) => any) => (xs: T[]) => any) => (f: (x: T, i: number) => any) => (xs: T[]) => any