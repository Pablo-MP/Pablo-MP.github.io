// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello Comunity!";
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ecomama.jpeg") {
    myImage.setAttribute("src", "images/agricultor.jpg");
  } else {
    myImage.setAttribute("src", "images/ecomama.jpeg");
  }
});
let myButton = document.querySelector("button");
let myheading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myheading.textContent = `Welcome to Ecomama, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myheading.textContent = `Welcome to Ecomama, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
