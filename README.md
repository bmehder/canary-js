# CanaryJS

*A minimalist, functional JavaScript toolkit for mere mortals.*

---

## Why CanaryJS?

> **CanaryJS wraps the JavaScript you already know in a functional overcoat, then offers you a nice cup of tea.**
>
> * Includes most built-in JS methods—but curried, data-last, and pleasantly unfussy.
> * Designed to be simple enough for mortals, not JS monks.
> * Easy to learn, hard to outgrow.
> * Works great on its own, or as an on-ramp to Ramda and Sanctuary.

If you’ve glanced at **lodash/fp** and felt it looked a bit like a supermarket sweep, CanaryJS is the corner shop: just the essentials, nicely arranged.

---

## Installation

```bash
npm i canaryjs
```

Zero dependencies. ES Module. Tree‑shakable.

---

## Quick Start

```js
import { pipe, map, filter, add } from 'canaryjs'

const isEven = n => n % 2 === 0
const add10 = add(10)

const transform = pipe(
  filter(isEven),
  map(add10)
)

const result = transform([1, 2, 3, 4])

console.log(result) // → [12, 14]
```

---

## Core Ideas (in excessively tidy bullets)

| Principle                  | What it means                                                                     |
| -------------------------- | --------------------------------------------------------------------------------- |
| **Curried & data‑last**    | Functions take arguments one at a time, with data passed last—perfect for `pipe`. |
| **Pure & predictable**     | No mutation. Functions always return the same output for the same input.          |
| **Partial application**    | You can pass fewer arguments to get a new function. Build behavior gradually.     |
| **Built‑ins first**        | Array, String, Number, Object, Boolean methods—it’s curried and calm, bruv.       |
| **Ramda‑compatible names** | Familiar territory if you graduate.                                               |
| **Small surface**          | \~60 functions; your brain remains un‑overheated.                                 |

---

## What’s Inside?

### Arrays

`map`, `filter`, `reduce`, `find`, `findIndex`, `findLast`, `some`, `every`, `includes`, `at`, `flat`, `flatMap`, `slice`, `concat`, `join`, `reverse`, `sort`

### Strings

`split`, `trim`, `toUpper`, `toLower`, `replace`, `match`

### Numbers

`add`, `sub`, `mul`, `div`, `mod`, `abs`, `floor`, `round`, `ceil`, `pow`

### Objects

`keys`, `values`, `entries`, `fromEntries`, `prop`, `merge`

### Comparison & Boolean

`not`, `eq`, `lt`, `lte`, `gt`, `gte`

### Core Utilities

`identity`, `always`, `tap`, `pipe`, `compose`, `curry`, `uncurry`, `addIndex`

### Control Flow

`ifElse`, `cond`

### ADT Helpers

`createADT`, `match`, `unwrap`

---

## What’s *not* Inside (and where to find it)

| Feature                                          | Where to look   |
| ------------------------------------------------ | --------------- |
| Placeholders (`__`)                              | Ramda           |
| Fancy combinators (`flip`, `juxt`, `converge`)   | Ramda           |
| Fantasy‑Land‑certified ADTs                      | SanctuaryJS     |
| Lenses, traversals, profunctors (brace yourself) | Ramda & friends |


CanaryJS keeps the water shallow; when you’re ready to dive, Ramda and Sanctuary have the deep end nicely chlorinated.

---

## Naming Aside

Why *CanaryJS*?

It’s named after **Canary Wharf in London**, where the idea for the library clicked into place—over a coffee and a long think about functional programming.

This is a second attempt, after learning firsthand how quickly a utility library can grow too large, while still not quite measuring up to its inspirations. CanaryJS is a fresh start—intentionally small, focused, and designed to help others avoid some of the detours I took along the way.

Nothing to do with canaries in mines, alerts, or early warning systems. Probably.

---

## License

MIT © 2025 Your Name
# canary-js
