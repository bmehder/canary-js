# CanaryJS Function Reference

A minimalist toolkit deserves minimalist docs. Below you'll find all of CanaryJS's functions—clear, consistent, and cheerfully curried.

---

## Arrays

### `map`

**Description:** Applies a function to each item in a list.

**Signature:** `(a → b) → [a] → [b]`

```js
map(x => x * 2)([1, 2, 3]) // → [2, 4, 6]
```

### `filter`

**Description:** Filters a list based on a predicate function.

**Signature:** `(a → Boolean) → [a] → [a]`

```js
filter(x => x > 1)([1, 2, 3]) // → [2, 3]
```

### `reduce`

**Description:** Reduces a list to a single value.

**Signature:** `((b, a) → b) → b → [a] → b`

```js
reduce((acc, x) => acc + x)(0)([1, 2, 3]) // → 6
```

### `slice`

**Description:** Returns a section of a list.

**Signature:** `Number → Number → [a] → [a]`

```js
slice(1)(3)([0, 1, 2, 3]) // → [1, 2]
```

### `find`

**Description:** Finds the first element matching a predicate.

**Signature:** `(a → Boolean) → [a] → a | undefined`

```js
find(x => x > 1)([1, 2, 3]) // → 2
```

### `findIndex`

**Description:** Returns the index of the first element matching a predicate.

**Signature:** `(a → Boolean) → [a] → Number`

```js
findIndex(x => x === 2)([1, 2, 3]) // → 1
```

### `findLast`

**Description:** Finds the last element matching a predicate.

**Signature:** `(a → Boolean) → [a] → a | undefined`

```js
findLast(x => x % 2 === 0)([1, 2, 4, 6, 3]) // → 6
```

### `some` (alias: `any`)

**Description:** Returns true if at least one element matches a predicate.

**Signature:** `(a → Boolean) → [a] → Boolean`

```js
some(x => x > 2)([1, 2, 3]) // → true
```

### `every` (alias: `all`)

**Description:** Returns true if all elements match a predicate.

**Signature:** `(a → Boolean) → [a] → Boolean`

```js
every(x => x < 5)([1, 2, 3]) // → true
```

### `at` (alias: `nth`)

**Description:** Gets the element at a given index (supports negative indexing).

**Signature:** `Number → [a] → a | undefined`

```js
at(-1)([1, 2, 3]) // → 3
```

### `includes`

**Description:** Checks if a value is present in an array or string.

**Signature:** `a → [a] | String → Boolean`

```js
includes(2)([1, 2, 3]) // → true
includes('a')('cat') // → true
```

### `sort`

**Description:** Sorts a list using default or custom comparison.

**Signature:** `((a, a) → Number) → [a] → [a]`

```js
sort((a, b) => a - b)([3, 1, 2]) // → [1, 2, 3]
```

### `reverse`

**Description:** Reverses the list.

**Signature:** `[a] → [a]`

```js
reverse([1, 2, 3]) // → [3, 2, 1]
```

### `flatMap`

**Description:** Maps and flattens the result.

**Signature:** `(a → [b]) → [a] → [b]`

```js
flatMap(x => [x, x])([1, 2]) // → [1, 1, 2, 2]
```

### `flat`

**Description:** Flattens one level of nested arrays.

**Signature:** `[[a]] → [a]`

```js
flat([[1], [2, 3]]) // → [1, 2, 3]
```

### `concat`

**Description:** Concatenates two arrays.

**Signature:** `[a] → [a] → [a]`

```js
concat([1, 2])([3]) // → [1, 2, 3]
```

### `join`

**Description:** Joins array elements into a string.

**Signature:** `String → [a] → String`

```js
join('-')([1, 2, 3]) // → '1-2-3'
```

### `indexOf`

**Description:** Finds the first index of a value.

**Signature:** `a → [a] → Number`

```js
indexOf(2)([1, 2, 3]) // → 1
```

### `lastIndexOf`

**Description:** Finds the last index of a value.

**Signature:** `a → [a] → Number`

```js
lastIndexOf(2)([1, 2, 3, 2]) // → 3
```

### `length`

**Description:** Returns the length of an array or string.

**Signature:** `[a] | String → Number`

```js
length([1, 2, 3]) // → 3
length('abc') // → 3
```

---

## Strings

### `split`

**Description:** Splits a string by a separator.

**Signature:** `String → String → [String]`

```js
split('-')('a-b-c') // → ['a', 'b', 'c']
```

### `trim`

**Description:** Trims whitespace from both ends of a string.

**Signature:** `String → String`

```js
trim('  hello  ') // → 'hello'
```

### `trimStart`

**Description:** Removes leading whitespace from a string.

**Signature:** `String → String`

```js
trimStart('   hello') // → 'hello'
```

### `trimEnd`

**Description:** Removes trailing whitespace from a string.

**Signature:** `String → String`

```js
trimEnd('hello   ') // → 'hello'
```

### `repeat`

**Description:** Repeats the string `n` times.

**Signature:** `Number → String → String`

```js
repeat(3)('hi') // → 'hihihi'
```

### `padStart`

**Description:** Pads the beginning of a string with spaces until it reaches the given length.

**Signature:** `Number → String → String`

```js
padStart(5)('42') // → '   42'
```

### `padEnd`

**Description:** Pads the end of a string with spaces until it reaches the given length.

**Signature:** `Number → String → String`

```js
padEnd(5)('42') // → '42   '
```

### `toUpper`

**Description:** Converts a string to uppercase.

**Signature:** `String → String`

```js
toUpper('hi') // → 'HI'
```

### `startsWith`

**Description:** Checks if a string starts with the value.

**Signature:** `String → Boolean`

```js
startsWith('he')('hello') // → true
```

### `endsWith`

**Description:** Checks if a string ends with the value.

**Signature:** `String → Boolean`

```js
startsWith('a')('hello') // → false
```

### `toLower`

**Description:** Converts a string to lowercase.

**Signature:** `String → String`

```js
toLower('HI') // → 'hi'
```

---

## Numbers

### `add`

**Description:** Adds two numbers.

**Signature:** `Number → Number → Number`

```js
add(2)(3) // → 5
```

### `subtract`

**Description:** Subtracts the second number from the first.

**Signature:** `Number → Number → Number`

```js
subtract(5)(2) // → 3
```

### `multiply`

**Description:** Multiplies two numbers.

**Signature:** `Number → Number → Number`

```js
multiply(3)(4) // → 12
```

### `divide`

**Description:** Divides the first number by the second.

**Signature:** `Number → Number → Number`

```js
divide(10)(2) // → 5
```

### `modulo`

**Description:** Gets the remainder of division.

**Signature:** `Number → Number → Number`

```js
modulo(10)(3) // → 1
```

### `abs`

**Description:** Returns the absolute value of a number.

**Signature:** `Number → Number`

```js
abs(-7) // → 7
```

### `floor`

**Description:** Rounds a number down to the nearest integer.

**Signature:** `Number → Number`

```js
floor(4.8) // → 4
```

### `round`

**Description:** Rounds a number to the nearest integer.

**Signature:** `Number → Number`

```js
round(4.3) // → 4
```

### `ceil`

**Description:** Rounds a number up to the nearest integer.

**Signature:** `Number → Number`

```js
ceil(4.1) // → 5
```

### `pow`

**Description:** Raises a base number to an exponent.

**Signature:** `Number → Number → Number`

```js
pow(2)(3) // → 8
```

---

## Objects

### `keys`

**Description:** Gets the keys of an object.

**Signature:** `Object → [String]`

```js
keys({ a: 1, b: 2 }) // → ['a', 'b']
```

### `values`

**Description:** Gets the values of an object.

**Signature:** `Object → [a]`

```js
values({ a: 1, b: 2 }) // → [1, 2]
```

### `entries`

**Description:** Gets an array of key-value pairs.

**Signature:** `Object → [[String, a]]`

```js
entries({ a: 1 }) // → [['a', 1]]
```

### `fromEntries`

**Description:** Builds an object from key-value pairs.

**Signature:** `[[String, a]] → Object`

```js
fromEntries([['a', 1]]) // → { a: 1 }
```

### `prop`

**Description:** Gets a property from an object.

**Signature:** `String → Object → a`

```js
prop('a')({ a: 1, b: 2 }) // → 1
```

### `freeze`

**Description:** Makes an object immutable by freezing its properties.

**Signature:** `Object → Object`

```js
const obj = freeze({ a: 1 })
obj.a = 2
obj.a // → 1
```

### `seal`

**Description:** Seals an object to prevent new properties from being added or existing properties from being removed.

**Signature:** `Object → Object`

```js
const obj = seal({ a: 1 })
obj.b = 2
obj.b // → undefined
```

### `is`

**Description:** Determines whether two values are the same value (like `===` but handles `NaN` and `-0` correctly).

**Signature:** `a → a → Boolean`

```js
is(NaN)(NaN) // → true
is(0)(-0) // → false
```

## Comparison & Boolean

### `not`

**Description:** Logical NOT.

**Signature:** `a → Boolean`

```js
not(true) // → false
```

### `equals`

**Description:** Checks strict equality.

**Signature:** `a → a → Boolean`

```js
equals(2)(2) // → true
```

### `lt`

**Description:** Checks if the first value is less than the second.

**Signature:** `Number → Number → Boolean`

```js
lt(10)(5) // → true
```

### `lte`

**Description:** Checks if the first value is less than or equal to the second.

**Signature:** `Number → Number → Boolean`

```js
lte(10)(10) // → true
```

### `gt`

**Description:** Checks if the first value is greater than the second.

**Signature:** `Number → Number → Boolean`

```js
gt(5)(10) // → true
```

### `gte`

**Description:** Checks if the first value is greater than or equal to the second.

**Signature:** `Number → Number → Boolean`

```js
gte(5)(5) // → true
```

---

## Core Utilities

### `identity`

**Description:** Returns the same value it was given.

**Signature:** `a → a`

```js
identity(42) // → 42
```

### `always`

**Description:** Returns a constant function.

**Signature:** `a → () → a`

```js
always(3)() // → 3
```

### `converge`

**Description:** Applies two functions to the same input, then combines their results using a curried function.

**Signature:** `(b → c → d) → (a → b) → (a → c) → a → d`

**Note:**  
This is a curried version of what’s known in functional programming as the **S combinator**. It allows you to fork a single input into two branches, apply different functions to each, and then recombine them with a third.

```js
const double = x => x * 2
const increment = x => x + 1
const add = a => b => a + b

const compute = converge(add)(double)(increment)

compute(3) // → 10 (double(3) + increment(3) → 6 + 4)
```

### `tap`

**Description:** Applies a function for side effects, then returns the input.

**Signature:** `(a → any) → a → a`

```js
tap(console.log)(42) // → logs 42, returns 42
```

### `pipe`

**Description:** Composes functions left-to-right.

**Signature:** `[(a → b), ..., (y → z)] → a → z`

```js
pipe(
	x => x + 1,
	x => x * 2
)(3) // → 8
```

### `compose`

**Description:** Composes functions right-to-left.

**Signature:** `[(y → z), ..., (a → b)] → a → z`

```js
compose(
	x => x * 2,
	x => x + 1
)(3) // → 8
```

### `curry`

**Description:** Converts a multi-arg function into a chain of unary functions.

**Signature:** `(a, b, ...) → c → a → b → ... → c`

```js
curry((a, b) => a + b)(1)(2) // → 3
```

### `uncurry`

**Description:** Flattens a curried function into a single call.

**Signature:** `(a → b → c) → (a, b) → c`

```js
uncurry(a => b => a + b)(1, 2) // → 3
```

### `addIndex`

**Description:** Allows `map`, `filter` etc. to receive the index.

**Signature:** `((a, Number) → b) → [a] → [b]`

```js
addIndex(map)((x, i) => x + i)([10, 20, 30]) // → [10, 21, 32]
```

### `flip`

**Description:** Reverses the order of arguments for a curried binary function.

**Signature:** `(a → b → c) → b → a → c`

```js
const subtract = a => b => a - b

const flipped = flip(subtract)

flipped(2)(10) // → -8
```

### `binary`

**Description:** Converts a curried binary function into a standard 2-argument function, useful for `reduce`, `sort`, and other native JS methods.

**Signature:** `(a → b → c) → (a, b) → c`

```js
const sum = binary(add)[(1, 2, 3)].reduce(sum) // → 6

const cmp = binary(subtract)[(3, 2, 1)].sort(cmp) // → [1, 2, 3]
```

### `trinary`

**Description:** Converts a curried ternary function into a standard 3-argument function. Useful when working with methods like `map`, `filter`, or `forEach` that provide `(element, index, array)`.

**Signature:** `(a → b → c → d) → (a, b, c) → d`

```js
const describe = trinary(x => i => arr => `${x} at ${i} in ${arr}`)[
	(10, 20, 30)
].map(describe)
// → ['10 at 0 in [10, 20, 30]', '20 at 1 in [10, 20, 30]', '30 at 2 in [10, 20, 30]']
```

---

## Control Flow

### `ifElse`

**Description:** Branches logic based on a predicate.

**Signature:** `(a → Boolean) → (a → b) → (a → b) → a → b`

```js
ifElse(x => x > 0)(() => 'positive')(() => 'non-positive')(1) // → 'positive'
```

### `cond`

**Description:** Matches the first predicate and applies its function.

**Signature:** `[[a → Boolean, a → b]] → a → b`

```js
cond([
	[x => x < 0, () => 'negative'],
	[x => x > 0, () => 'positive'],
])(-1) // → 'negative'
```

### `tryCatch`

**Description:** Wraps a potentially unsafe function and provides a fallback in case of error. The fallback receives both the error and the original input. Useful in pipelines when working with functions that might throw (like `JSON.parse`, `decodeURIComponent`, etc).

**Signature:** `(a → b) → (Error, a → b) → a → b`

```js
const safeParse = tryCatch(JSON.parse, (err, input) => {
	console.warn('Parse failed for:', input, err.message)
	return {}
})

safeParse('{"ok": true}') // → { ok: true }
safeParse('not JSON') // → {} and logs a warning
```

---

## Discriminated Union Helpers

### `match`

**Description:** A plain function for pattern matching on discriminated unions (e.g., those created with Zod’s `z.discriminatedUnion`). You provide the value and an object mapping `kind` (or `tag`) values to handler functions. Optionally, include a fallback handler via `_`. The function dispatches to the appropriate handler based on the union's `kind` property.

**Signature:** `( { kind: string, ... }, { kind: (val) → b, ... , _?: (val) → b } ) → b`

```js
import { z } from 'zod'

// Define a discriminated union type
const Shape = z.discriminatedUnion('kind', [
	z.object({ kind: z.literal('circle'), radius: z.number().positive(0) }),
	z.object({
		kind: z.literal('rectangle'),
		width: z.number().positive(0),
		height: z.number().positive(0),
	}),
])

const area = match({
	circle: ({ radius }) => Math.PI * radius * radius, // handler for 'circle' kind
	rectangle: ({ width, height }) => width * height,  // handler for 'rectangle' kind
})
area({ kind: 'circle', radius: 2 }) // → 12.566...
area({ kind: 'rectangle', width: 3, height: 4 }) // → 12

// With fallback handler for non-exhaustive unions
const describe = match({
	circle: ({ radius }) => `Circle of radius ${radius}`, // specific handler
	_: shape => `Unknown shape: ${shape.kind}`,           // fallback handler
})
describe({ kind: 'circle', radius: 5 }) // → "Circle of radius 5"
describe({ kind: 'triangle', base: 3, height: 4 }) // → "Unknown shape: triangle"
```
