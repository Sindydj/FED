// JavaScript Document
console.log("hi");

const navMenu = document.querySelector("header nav ul")

const buttonNav = document.querySelector("nav button")

const buttonImgNav = document.querySelector("nav button img")


function visibilityNavMobile () {

    navMenu.classList.toggle("visible") 
    buttonImgNav.classList.toggle("close")
    }

buttonNav.addEventListener('click', visibilityNavMobile)