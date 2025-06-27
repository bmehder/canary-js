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
