document.addEventListener("DOMContentLoaded", function(){
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
window.addEventListener("scroll", function (){
    let nav=document.querySelector("nav");
    if (window.scrollY>200){
        nav.style.background="black";
    } else {
        nav.style.background="transparent";
    }
});
});
// document.querySelector("form").addEventListener("submit", function(e){
//     e.preventDefault();
//     alert("Message Sent Successfully!");
// });