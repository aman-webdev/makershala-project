const navToggleButton=document.querySelector(".nav-toggle-btn");
const primaryNavigation=document.querySelector(".primary-nav")
const line1=document.querySelector(".line-1")
const line2=document.querySelector(".line-2")
const line3=document.querySelector(".line-3")

const navigationHandler=()=>{
    console.log("object")
    navToggleButton.classList.toggle("open-nav-btn");
    primaryNavigation.classList.toggle("open-navigation")
   line1.classList.toggle("open-nav-line-1")
   line2.classList.toggle("open-nav-line-2")
   line3.classList.toggle("open-nav-line-3")
}

navToggleButton.addEventListener("click",navigationHandler)