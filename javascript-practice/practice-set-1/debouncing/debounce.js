// Debouncing ensures a function runs only after a certain delay has passed since the last time it was called.

// we will define a debounce function which will be triggered in a particular time, means if we have delay of e.g 300 ms, then after only the actual api call or function will be called

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args); // apply will take the actual params to remember in this binding and will be used inside api function or utility function
    }, delay);
  };
}

function fetchData(query, method) {
  console.log("Fetching Data for", query, "method=", method, "...");
}

const debouncedFetch = debounce(fetchData, 300);

//input box simulation

debouncedFetch("h", "POST");
debouncedFetch("he", "POST");
debouncedFetch("hel", "POST");
debouncedFetch("hello", "POST");

/*

┌──────────────────────────────────────────┐
│ debouncedFetch("h", "POST") CALLED       │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ timerId exists? → NO                     │
│ timerId = undefined                      │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ setTimeout(T1, 300ms)                    │
│ timerId = T1                             │
└───────────────┬──────────────────────────┘
                │
                ▼
        WAIT (300ms) ──────────────┐
                                   │
                                   ▼
┌──────────────────────────────────────────┐
│ debouncedFetch("he", "POST") CALLED      │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ timerId exists? → YES (T1)               │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ clearTimeout(T1) ❌                      │
│ setTimeout(T2, 300ms)                    │
│ timerId = T2                             │
└───────────────┬──────────────────────────┘
                │
                ▼
        WAIT (300ms) ──────────────┐
                                   │
                                   ▼
┌──────────────────────────────────────────┐
│ debouncedFetch("hel", "POST") CALLED     │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ timerId exists? → YES (T2)               │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ clearTimeout(T2) ❌                      │
│ setTimeout(T3, 300ms)                    │
│ timerId = T3                             │
└───────────────┬──────────────────────────┘
                │
                ▼
        WAIT (300ms) ──────────────┐
                                   │
                                   ▼
┌──────────────────────────────────────────┐
│ debouncedFetch("hello", "POST") CALLED   │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ timerId exists? → YES (T3)               │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ clearTimeout(T3) ❌                      │
│ setTimeout(T4, 300ms)                    │
│ timerId = T4                             │
└───────────────┬──────────────────────────┘
                │
                ▼
        WAIT (300ms, no more calls)         │
                │
                ▼
┌──────────────────────────────────────────┐
│ T4 fires (event loop)                    │
│ fn.apply(context, ["hello","POST"])     │
│ fetchData("hello","POST")                │
└───────────────┬──────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────┐
│ OUTPUT                                   │
│ "Fetching Data for hello method= POST…"  │
└──────────────────────────────────────────┘


note-dry run credit- chatgpt
*/
