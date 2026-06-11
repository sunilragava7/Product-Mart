let cart = 0;

let cartCount =
document.getElementById("cart-count");

document.querySelectorAll(".card button")
.forEach(button => {

button.addEventListener("click", () => {

cart++;

cartCount.innerText =
"🛒 Cart: " + cart;

});

});
function toggleDarkMode(){

document.body.classList.toggle("dark");

}