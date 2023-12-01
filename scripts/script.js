// JavaScript Document
console.log("hi");

const navMenu = document.querySelector("header nav ul")

const buttonNav = document.querySelector("nav button")



function visibilityNavMobile () {

    navMenu.classList.toggle("visible") 
    }

buttonNav.addEventListener('click', visibilityNavMobile)