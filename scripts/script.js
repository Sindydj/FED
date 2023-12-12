// JavaScript Document
console.log("hi");

const navMenu = document.querySelector("header nav ul")

const buttonNav = document.querySelector("nav button")

const buttonImgNav = document.querySelector("nav button img")


function visibilityNavMobile () {

    navMenu.classList.toggle("visible") 
    navMenu.setAttribute('aria-hidden', false)
    navMenu.classList.add("nav_open")
    buttonImgNav.classList.toggle("close")
    }

buttonNav.addEventListener('click', visibilityNavMobile)