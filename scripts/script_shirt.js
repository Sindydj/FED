// JavaScript Document
console.log("hi");

/****************************/
/* CODE VOOR DE NAV */
/****************************/

const navMenu = document.querySelector("header nav ul")

const buttonNav = document.querySelector("nav button")

const buttonImgNav = document.querySelector("nav button img")


function visibilityNavMobile() {

    navMenu.classList.toggle("visible")
    navMenu.setAttribute('aria-hidden', false)
    navMenu.classList.toggle("nav_open")
}

buttonNav.addEventListener('click', visibilityNavMobile)


const sizeButton = document.querySelector(".size ul li")

function selectButton() {
    sizeButton.classList.toggle("selected_button")
}

sizeButton.addEventListener('click', selectButton)





/*********************************/
/* CODE VOOR DE QUANTITY KNOPPEN.*/
/*********************************/


/* CODE VOOR DE PLUSKNOP.*/
const quantityPlusButton = document.querySelector("#plus");

function quantityPlus() {
    let quantityValue = document.querySelector("input")
    quantityValue.value = parseInt(quantityValue.value) + 1;
}

quantityPlusButton.addEventListener('click', quantityPlus)


/* CODE VOOR DE MINKNOP.*/
const quantityMinButton = document.querySelector("#min");

function quantityMin() {
    let quantityValue = document.querySelector("input")
    if (quantityValue.value > 0) {

        quantityValue.value = parseInt(quantityValue.value) - 1;
    }
}

quantityMinButton.addEventListener('click', quantityMin)


/****************************/
/* CODE VOOR DE KOOPKNOPPEN. 
Code van https://codepen.io/shooft/pen/rNdqQdO */
/****************************/

var shopButtons = document.querySelectorAll("button.shop");
for (let i = 0; i < shopButtons.length; i++) {
    shopButtons[i].onclick = addToShoppingCart;
}

/***********************/
/* winkelwagen vullen */
/**********************/
function addToShoppingCart() {
    /* het getal (de span) in de Shopping-cart-link in de nav opzoeken */
    /* die span in de variabele 'shoppingCartAmount' opslaan */
    let shoppingCartAmount = document.querySelector(".shopping-cart span");

    /* het huidige aantal vissen in de cart bepalen */
    let currentAmount = shoppingCartAmount.innerHTML;
    /* dat is een string - dus even omzetten naar een getal */
    currentAmount = parseInt(currentAmount);

    /* het nieuwe aantal vissen in de cart bepalen */
    /* 1 bij het huisige aantal optellen */

    // let newAmount = currentAmount + de quantity van de quantity selector;
    let quantity = document.querySelector("input").value;
    let newAmount = parseInt(currentAmount) + parseInt(quantity);

    /* tenslotte het nieuwe aantal in de HTML zetten */
    shoppingCartAmount.innerHTML = newAmount;

    shoppingCartAmount.classList.add("updated");

    shoppingCartAmount.addEventListener("animationend", () => {
        shoppingCartAmount.classList.remove("updated");
    });

}

