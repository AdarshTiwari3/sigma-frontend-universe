const docs = document.getElementById("heading-title");

// docs.innerText = "Learning DOM Manipulation";
docs.textContent = "Learning DOM Manipulation";

console.log(docs.innerHTML);

console.log(docs.outerHTML);

docs.style.color = "lightgray";

console.log(docs.id); //heading-title
console.log(docs.className); //div-heading
