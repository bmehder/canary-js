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

### `some`

**Description:** Returns true if at least one element matches a predicate.

**Signature:** `(a → Boolean) → [a] → Boolean`

```js
some(x => x > 2)([1, 2, 3]) // → true
```

### `every`

**Description:** Returns true if all elements match a predicate.

**Signature:** `(a → Boolean) → [a] → Boolean`

```js
every(x => x < 5)([1, 2, 3]) // → true
```

### `at`

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

---

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

**Description:** Checks if the second value is less than the first.

**Signature:** `Number → Number → Boolean`

```js
lt(10)(5) // → true
```

### `lte`

**Description:** Checks if the second value is less than or equal to the first.

**Signature:** `Number → Number → Boolean`

```js
lte(10)(10) // → true
```

### `gt`

**Description:** Checks if the second value is greater than the first.

**Signature:** `Number → Number → Boolean`

```js
gt(5)(10) // → true
```

### `gte`

**Description:** Checks if the second value is greater than or equal to the first.

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
  [x => x > 0, () => 'positive']
])(-1) // → 'negative'
```

---

## ADT Helpers

### `createADT`

**Description:** Creates an algebraic data type with variants.

**Signature:** `{ tag: (...args) → any } → ADT`

```js
const Option = createADT({ Some: x => x, None: () => null })
Option.Some(42).toString() // → 'Some(42)'
```

### `match`

**Description:** Pattern-matches on ADT values.

**Signature:** `{ tag: (...args) → b } → ADT → b`

```js
match({ Some: x => x + 1, None: () => 0 })(Option.Some(2)) // → 3
```

### `unwrap`

**Description:** Extracts the first argument from an ADT.

**Signature:** `ADT → a`

```js
unwrap(Option.Some(5)) // → 5
```
