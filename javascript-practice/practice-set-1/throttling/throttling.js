// Throttling is a performance optimization technique that limits
// how frequently a function can be executed.
// It ensures a function runs at most once within a specified time interval,
// preventing it from being triggered too often (e.g., during scroll or resize events).
// In short- Throttling ensures a function executes at a fixed rate, regardless of how frequently it is triggered.

function throttle(fn, delay) {
  let lastExecuted = 0;

  return function (...args) {
    //spread operator which takes the argument it could be normal params or array but gives in form of array
    //this forms a closure with lastExecuted

    const context = this; // current context for this
    //apply will be used here to bind the data with real function so that it remembers the context or `this` with actual data
    const currentTime = Date.now();

    if (currentTime - lastExecuted >= delay) {
      //checks the time delta if it is more than delay, then it will be excuted else discarded
      lastExecuted = currentTime;
      fn.apply(context, args);
    }
  };
}

function fetchData() {
  console.log("API call at", new Date().toLocaleTimeString());
}

const throttledFetchMethod = throttle(fetchData, 500);

const interval = setInterval(() => {
  console.log("Hit the request-");

  throttledFetchMethod();
}, 600);

setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped intervals");
}, 3000);

/* output-
Hit the request-
API call at 4:36:59 PM
Hit the request-
API call at 4:37:00 PM
Hit the request-
API call at 4:37:00 PM
Hit the request-
API call at 4:37:01 PM
Stopped intervals

*/
// only 4 API calls were executed in 3 seconds due to throttling but request was hit 5, one was discarded

//Throttling ensures a function executes at a fixed rate, regardless of how frequently it is triggered.

// Debouncing vs Throttling-

// only 4 API calls were executed in 3 seconds due to throttling but request was hit 5, one was discarded

// If this were debouncing, the function would execute ONLY ONCE
// after 500ms of inactivity (after the interval stops).

// or

// Output explanation:
//
// - The interval triggers roughly every 600ms
// - Throttling allows execution once every 500ms
// - Since 600ms > 500ms, most calls pass through
// - Around 4 API calls execute before cleanup
//
// If this were debouncing:
// - No API call would execute while events keep firing
// - A single API call would execute after 500ms of inactivity

/*
In short-
Debouncing:
Executes only after a pause in events, where the gap between two events
is greater than or equal to the specified delay. Each new event cancels
the previously scheduled execution.

Throttling:
Executes at a fixed time interval while events continue to fire,
discarding intermediate triggers.

In short:
Debouncing is about waiting.
Throttling is about limiting.

*/
