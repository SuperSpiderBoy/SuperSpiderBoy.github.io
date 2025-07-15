const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/loopy.jpg") {
        myImage.setAttribute("src", "images/Khalil.jpg");
    } else {
        myImage.setAttribute("src", "images/loopy.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Music is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};

