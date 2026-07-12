/* =====================================================
   Nhlanhla Lucky Shirilele Portfolio
   Milestone 3 - Advanced Script
===================================================== */


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {



/* =====================================================
   PRELOADER
===================================================== */


const preloader = document.getElementById("preloader");


if(preloader){

    window.addEventListener("load",()=>{

        preloader.classList.add("hide");


        setTimeout(()=>{

            preloader.style.display="none";

        },500);


    });

}







/* =====================================================
   MOBILE SIDEBAR MENU
===================================================== */


const menuBtn =
document.getElementById("menuBtn");


const sidebar =
document.querySelector(".sidebar");


const overlay =
document.querySelector(".mobile-overlay");



function closeMenu(){

    sidebar?.classList.remove("active");

    overlay?.classList.remove("active");

}



if(menuBtn){

menuBtn.addEventListener("click",()=>{


    sidebar.classList.toggle("active");

    overlay.classList.toggle("active");


});


}




if(overlay){

overlay.addEventListener("click",closeMenu);

}




document.querySelectorAll(".sidebar-nav a")
.forEach(link=>{


link.addEventListener("click",()=>{

    closeMenu();

});


});









/* =====================================================
   SCROLL PROGRESS
===================================================== */


const progress =
document.getElementById("progress-bar");



window.addEventListener("scroll",()=>{


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progressValue =
(window.scrollY / height) * 100;



if(progress){

progress.style.width =
progressValue + "%";

}


});









/* =====================================================
   BACK TO TOP
===================================================== */


const backTop =
document.querySelector(".back-to-top");



window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

    backTop?.classList.add("show");

}

else{

    backTop?.classList.remove("show");

}


});









/* =====================================================
   SMOOTH SCROLL
===================================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


let target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});









/* =====================================================
   ACTIVE SIDEBAR LINK
===================================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".sidebar-nav a");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


let sectionTop =
section.offsetTop - 200;



if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add("active");


}



});


});









/* =====================================================
   TYPING EFFECT
===================================================== */


const typing =
document.querySelector(".typing-text");



const words=[

"Telecommunications Engineer",

"Fibre Network Specialist",

"Network Infrastructure Engineer",

"Security Systems Engineer",

"Digital Engineering Professional"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


if(!typing)
return;



let word =
words[wordIndex];



if(!deleting){


typing.textContent =
word.substring(0,charIndex++);



if(charIndex > word.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}


}


else{


typing.textContent =
word.substring(0,charIndex--);



if(charIndex===0){

deleting=false;

wordIndex =
(wordIndex+1)%words.length;


}


}



setTimeout(typeEffect,
deleting ? 50 : 100);



}



typeEffect();









/* =====================================================
   COUNTER ANIMATION
===================================================== */


const counters =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter =
entry.target;


const target =
Number(counter.dataset.target);



let count=0;


const speed =
target / 80;



function update(){


count += speed;


if(count < target){


counter.innerHTML =
Math.floor(count);


requestAnimationFrame(update);


}

else{


counter.innerHTML =
target;


}


}



update();


counterObserver.unobserve(counter);


}



});


});



counters.forEach(counter=>{

counterObserver.observe(counter);


});









/* =====================================================
   SKILL BARS
===================================================== */


const skillBars =
document.querySelectorAll(".skill-progress");



const skillObserver =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


let progress =
entry.target.dataset.progress;



entry.target.style.width =
progress+"%";



skillObserver.unobserve(entry.target);


}



});


});



skillBars.forEach(bar=>{

skillObserver.observe(bar);

});









/* =====================================================
   THEME SWITCH
===================================================== */


const themeBtn =
document.getElementById("theme-toggle");



if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark-mode");



localStorage.setItem(

"theme",

document.body.classList.contains("dark-mode")
?
"dark"
:
"light"

);



});


}




if(
localStorage.getItem("theme")
==="dark"
){

document.body.classList.add("dark-mode");

}









/* =====================================================
   QR CODE GENERATOR
===================================================== */


window.generateQR=function(){



const qrContainer =
document.getElementById("qrcode");



if(!qrContainer)
return;



qrContainer.innerHTML="";



const contactData = `

BEGIN:VCARD

VERSION:3.0

FN:Nhlanhla Lucky Shirilele

TITLE:Electrical & Electronic Engineer

TEL:+27710059058

EMAIL:shirilelenl94@gmail.com

URL:https://shirilnl.github.io/nhlanhlashirilele.github.io/

NOTE:Telecommunications Engineer | Fibre Networks | Security Systems

END:VCARD

`;




new QRCode(qrContainer,{

text:contactData,

width:220,

height:220

});



};





const qrButton =
document.getElementById("generateQR");



if(qrButton){

qrButton.addEventListener(
"click",
generateQR
);

}









/* =====================================================
   DEFAULT QR GENERATION
===================================================== */


if(
document.getElementById("qrcode")
){

generateQR();

}









/* =====================================================
   SERVICE WORKER
===================================================== */


if("serviceWorker" in navigator){


navigator.serviceWorker.register(
"service-worker.js"
)

.then(()=>{

console.log(
"Service Worker Registered"
);

})

.catch(error=>{

console.log(
"Service Worker Error:",
error
);

});


}



});
