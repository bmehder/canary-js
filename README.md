# CanaryJS

[![npm version](https://img.shields.io/npm/v/canary-js)](https://www.npmjs.com/package/canary-js)
[![License: MIT](https://img.shields.io/npm/l/canary-js)](https://opensource.org/licenses/MIT)
[![Minified size](https://img.shields.io/bundlephobia/min/canary-js)](https://bundlephobia.com/package/canary-js)
[![Types](https://badgen.net/npm/types/canary-js)](https://www.npmjs.com/package/canary-js)


*A minimalist, functional JavaScript toolkit for mere mortals.*

---

## Why CanaryJS?

> **CanaryJS wraps the JavaScript you already know in a functional overcoat, then offers you a nice cup of tea.**
>
> * Includes most built-in JS methods—but curried, data-last, and pleasantly unfussy.
> * Designed to be simple enough for mortals.
> * Easy to learn, hard to outgrow.
> * Works great on its own, or as an on-ramp to Ramda and Sanctuary.

If you’ve glanced at **lodash/fp** and felt it looked a bit like a supermarket sweep, CanaryJS is the corner shop: just the essentials, nicely arranged.

---

## Installation

```bash
npm i canary-js
```

Zero dependencies. ES Module. Tree‑shakable.

Also available via CDN:

```js
import * as C from "https://esm.sh/canary-js@latest"
```

---

## Quick Start

```js
import * as C from 'canary-js'

const isEven = C.pipe (
  C.flip (C.modulo) (2),
  C.equals (0)
)
const add10 = C.add (10)

const transform = C.pipe (
  C.filter (isEven),
  C.map (add10)
)

const result = transform ([1, 2, 3, 4])

console.log (result) // → [12, 14]
```

---

## Core Ideas (in excessively tidy bullets)

| Principle                  | What it means                                                                     |
| -------------------------- | --------------------------------------------------------------------------------- |
| **Curried & data‑last**    | Functions take arguments one at a time, with data passed last—perfect for `pipe`. |
| **Pure & predictable**     | No mutation. Functions always return the same output for the same input.          |
| **Partial application**    | You can pass fewer arguments to get a new function. Build behavior gradually.     |
| **Built‑ins first**        | Array, String, Number, Object, and Boolean methods       |
| **Ramda‑compatible names** | Familiar vocabulary if you move to Ramda.                                               |
| **Small surface**          | \~80 functions; your brain remains underwhelmed.                                 |

---

## What’s Inside?

### Arrays

`map`, `filter`, `reduce`, `find`, `findIndex`, `findLast`, `indexOf`, `lastIndexOf`, `some`, `every`, `includes`, `at`, `flat`, `flatMap`, `slice`, `concat`, `join`, `reverse`, `sort`, `length`

### Strings

`split`, `trim`, `trimStart`, `trimEnd`, `repeat`, `toUpper`, `toLower`, `startsWith`, `endsWith`, `padStart`, `padEnd`

### Numbers

`add`, `subtract`, `multiply`, `divide`, `modulo`, `abs`, `floor`, `round`, `ceil`, `pow`

### Objects

`keys`, `values`, `entries`, `fromEntries`, `prop`, `freeze`, `seal`, `is`

### Comparison & Boolean

`equals`, `not`, `negate`, `lt`, `lte`, `gt`, `gte`

### Core Utilities

`identity`, `always`, `converge`, `tap`, `pipe`, `compose`, `curry`, `uncurry`, `addIndex`, `flip`, `binary`, `trinary`

### Control Flow

`ifElse`, `cond`, `tryCatch`

### ADT Helpers

`createADT`, `match`, `unwrap`

---

## What’s *not* Inside (and where to find it)

| Feature                                          | Where to look   |
| ------------------------------------------------ | --------------- |
| Placeholders (`__`)                              | Ramda           |
| Fancy combinators (`juxt`, `lens`, `zipWith`)    | Ramda           |
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

MIT © 2025 Brad Mehder
# canary-js
