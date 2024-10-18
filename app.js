let h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.color = "yellow";
  h2.style.backgroundColor = "blueviolet";
});

let btn = document.createElement("button");
btn.innerText = "click me";
let body = document.querySelector("body");
body.append(btn);
