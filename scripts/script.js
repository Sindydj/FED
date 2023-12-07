// JavaScript Document
console.log("hi");

const navMenu = document.querySelector("header nav ul")

const buttonNav = document.querySelector("nav button")

const buttonImgNav = document.querySelector("nav button img")

document.querySelector("nav ul").ariaHidden.te


function visibilityNavMobile () {

    navMenu.classList.toggle("visible") 
    navMenu.setAttribute('aria-hidden', false)
    buttonImgNav.classList.toggle("close")
    }

buttonNav.addEventListener('click', visibilityNavMobile)