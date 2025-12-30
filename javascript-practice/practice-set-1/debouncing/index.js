// Debouncing ensures a function runs only after a certain delay has passed since the last time it was called.

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;
    // capture the current calling context to preserve `this` inside fn
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args); // apply invokes the original function with the same `this` context and forwards all arguments correctly
    }, delay);
  };
}

function fetchData(query, method) {
  console.log("Fetching Data for", query, "method=", method, "...");
}

const debouncedFetch = debounce(fetchData, 300);

const inputField = document.getElementById("search-input");

inputField.addEventListener("input", function (e) {
  debouncedFetch(e.target.value, Date.now());
});
