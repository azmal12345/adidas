const btnBars = document.querySelector("#bars");
const ul = document.querySelector("#list-items");

btnBars.addEventListener("click", function(){
    ul.classList.toggle("activeToggle");
})

// scroll button 
let buttonScroll = document.getElementById("scrollButton");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 150){
        buttonScroll.classList.add("scrollButton1");
    }else{
        buttonScroll.classList.remove("scrollButton1");
    }
})