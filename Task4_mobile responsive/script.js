let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backtoTop");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");


window.onscroll = function () {
    scrollFunction()
};
/*
function headerFunction(){
    if (document.body.scrollTop > 100 || 
        document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#2424248e";
        header.style.color = "#fff";

      } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "#000";
        header.style.padding = "2rem";
      }
};*/

function scrollFunction(){
    if (document.body.scrollTop > 100 || 
        document.documentElement.scrollTop > 100){
          header.classList.add("bg");
          buttonBackToTop.style.display = "block";
      }
      
      else {
        header.classList.remove("bg");
        buttonBackToTop.style.display = "none";
      }
      };

function topFunction() {
    document.documentElement.scrollTop = 0;
}
const getToTop = () => {
    SourceBuffer.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
};
 const mobMenu = () => {
nav.classList.toggle("responsive");
for (let i = 0; i < links.length; i++)
{
    links[i].addEventListener.scrollTop("click", mobmenu)
}
 }

buttonBackToTop.addEventListener("click", getToTop);


buttonMobile.addEventListener("click", mobMenu); 