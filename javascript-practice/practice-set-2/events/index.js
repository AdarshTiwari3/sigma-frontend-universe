//event practice in javscript
const button = document.getElementById("btn-id");

// paint the button in red color
const btnStyle = button.style;

btnStyle.backgroundColor = "red";
btnStyle.padding = "10px";
btnStyle.borderRadius = "10px";
btnStyle.fontSize = "14px";

// addEventListener(type, listener(callback function), useCapture);
// useCapture
// false → Event Bubbling (default)
// true → Event Capturing

// Event Capturing (true):
// Event travels from window → document → body → parent → target (top → down)

// Event Bubbling (false - default):
// Event travels from target → parent → body → document → window (down → up)

// Event propagation is the process by which a browser decides the order in which event handlers are executed when an event occurs on an element.
// or How an event travels through the DOM tree. it has 3 phases

/*

1. Capturing Phase (Top → Down)

Event starts at the top of the DOM

Travels down to the target element

2. Target Phase

Event reaches the actual element clicked

3.
Bubbling Phase (Bottom → Up)

Event bubbles back up to the root

// how to stop it -  e.stopPropagation();
//e.preventDefault() , it prevents the default behaviour e.g when we click on submit button of a form we use it to prevent default behaviour otherwise the form will be submitted immediately without doing any checks or operation
*/

let isClicked = false;

/*

button.addEventListener("click", function () {
  if (isClicked) {
    button.textContent = "Click me";
    btnStyle.backgroundColor = "red";
    isClicked = false;
  } else {
    button.textContent = "Clicked";
    btnStyle.backgroundColor = "green";
    isClicked = true;
  }
},false); //false is optional params by default it is set with false value

*/
//or

button.addEventListener("click", () => {
  isClicked = !isClicked;
  button.textContent = isClicked ? "Clicked" : "Click me";
  btnStyle.backgroundColor = isClicked ? "green" : "red";
});

//best approach with css

// button.addEventListener("click", () => {
//   button.classList.toggle("active");
//   button.textContent = button.classList.contains("active")
//     ? "Clicked"
//     : "Click me";
// });
