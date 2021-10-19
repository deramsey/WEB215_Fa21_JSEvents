/*
function mouseLocation(e){
    var xLocation = e.pageX;
    document.querySelector("#mouselocation").innerHTML = xLocation;
}

const mouseLocation = (e) => {
    var xLocation = e.pageX;
    document.querySelector("#mouselocation").innerHTML = xLocation;
} 

document.addEventListener("mousemove", mouseLocation, false);
*/

const b = document.querySelector("button");
const modal = document.querySelector("section");
const close = document.querySelector("#close");
const emailInput = document.querySelector("#email");

const showModal = () => {
    modal.style.display =  "block";
}

const closeModal = () => {
    modal.style.display =  "none";
}

function highlightField() {
    emailInput.style.backgroundColor = "yellow";
}

function clearHighlight(){
    emailInput.style.backgroundColor = "transparent";
}

const boldText = () => {
    b.style.fontWeight = "bolder";
}

const revertText = () => {
    b.style.fontWeight = "normal";
}

b.addEventListener("click", showModal);
close.addEventListener("click", closeModal);
emailInput.addEventListener("focus", highlightField);
emailInput.addEventListener("blur", clearHighlight);
b.addEventListener("mouseenter", boldText);
b.addEventListener("mouseleave", revertText);