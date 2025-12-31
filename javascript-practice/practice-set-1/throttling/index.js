// Throttle implementation
function throttle(fn, delay) {
  let lastExecuted = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecuted >= delay) {
      lastExecuted = now;
      fn.apply(this, args);
    }
  };
}

// Real-world task: tracking scroll position
function handleScroll() {
  const scrollTop = window.screenY;
  document.getElementById("scrollValue").innerText = scrollTop;
  console.log("Scroll handler executed at", new Date().toLocaleTimeString());
}

// Throttle scroll handler (once every 500ms)
const throttledScrollHandler = throttle(handleScroll, 500);

// Attach to scroll event
window.addEventListener("scroll", throttledScrollHandler);

//real usecase-
// Can we put it on scroll for lazy loading of image?
// Yes, throttling is absolutely applicable to lazy loading on scroll.
// It prevents the scroll handler from firing API/image-load logic too frequently while still reacting regularly as the user scrolls.
