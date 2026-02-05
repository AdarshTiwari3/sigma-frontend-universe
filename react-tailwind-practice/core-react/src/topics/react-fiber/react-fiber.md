# React Fiber

React Fiber is **React’s reconciliation engine**, introduced in **React 16**.  
Its primary goal is to make rendering **interruptible, prioritizable, and more efficient**, enabling smoother user experiences.

Fiber does not change _what_ React renders — it changes _how_ React schedules and performs rendering work.

---

## Why React Fiber Was Introduced

Before Fiber:

- Rendering was **synchronous**
- Large updates could **block the main thread**
- UI could become **unresponsive**

Fiber solves this by:

- Breaking rendering into **small units of work**
- Allowing React to **pause, resume, or discard work**
- Prioritizing **user interactions** over background updates

---

## Key Capabilities of React Fiber

- Splits rendering work into **small chunks**
- Prioritizes tasks based on importance
- Can pause and resume work
- Can reuse or abort unnecessary work
- Enables **asynchronous (concurrent) rendering**
- Makes React not just _faster_, but _smarter_
- Each Fiber is a **plain JavaScript object**
- Each Fiber represents a **unit of work**

---

## React Fiber Phases

React Fiber works in **two distinct phases**:

1. **Render Phase**
2. **Commit Phase**

---

## 1. Render Phase

- **Asynchronous** and **interruptible**
- Runs entirely in **JavaScript**
- No DOM mutations occur here
- Not visible to the end user
- Can be paused, resumed, or restarted

### What happens in this phase:

- React builds a **new Fiber tree**
- Compares it with the previous Fiber tree
- Determines **what has changed**
- Prepares a list of side effects (effects list)

### Internal functions involved:

- `beginWork()`
- `completeWork()`

> This phase may run multiple times before React commits the changes.

---

## 2. Commit Phase

- **Synchronous**
- **Cannot be interrupted**
- Applies all calculated changes to the **real DOM**
- Executes side effects

### What happens here:

- DOM updates
- Ref updates
- Lifecycle methods
- `useEffect` callbacks

### Internal function:

- `commitWork()`

> Once React enters the commit phase, it must complete it.

---

## Fiber as a Data Structure

- Each Fiber has a **1:1 relationship** with something:
  - A function component
  - A class component
  - A DOM node
  - A fragment
  - A context provider

Fiber nodes form a **tree structure** that mirrors the UI.

---

## Important Fiber Properties

### `tag`

- Identifies the **type of work** the Fiber represents
- Stored as a numeric enum for performance

Example:

```js
export const FunctionComponent = 0;
export const ClassComponent = 1;
export const Fragment = 7;
export const Mode = 8;
export const ContextProvider = 10;
export const CacheComponent = 24;
```
