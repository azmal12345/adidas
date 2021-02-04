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

// ******************* gallery **************************
let galleryList = document.querySelectorAll(".gallery1_text");
let imgList = document.querySelectorAll(".imgIconList");

for(let i = 0; i < galleryList.length; i++){
    galleryList[i].addEventListener("mousemove", function(){
        for(let b = 0; b < imgList.length; b++){
            imgList[i].style.display = "block";
        }
    })
}

for(let i = 0; i < galleryList.length; i++){
    galleryList[i].addEventListener("mouseleave", function(){
        for(let b = 0; b < imgList.length; b++){
            imgList[i].style.display = "none";
        }
    })
}

// card change img hover 

const imgHoverListCard = document.querySelectorAll(".cardDisplay_text");
const hoverImgClick = document.querySelectorAll(".hoverClickImg");
const buttonClick = document.querySelectorAll(".btn");

for(let i = 0; i < imgHoverListCard.length; i++){
    imgHoverListCard[i].addEventListener("mouseenter", () => {
        for(let b = 0; b < hoverImgClick.length; b++){
            hoverImgClick[i].style.display = "block";
        }
    })
}

for(let i = 0; i < imgHoverListCard.length; i++){
    imgHoverListCard[i].addEventListener("mouseleave", () => {
        for(let b = 0; b < hoverImgClick.length; b++){
            hoverImgClick[i].style.display = "none";
        }
    })
}


for(let cd = 0; cd < buttonClick.length; cd++){
    buttonClick[cd].addEventListener("click", () => {
        buttonClick[cd].textContent = swal("Order Book!", "Coming Sonn Your Products!", "success", {
            button: "Aww yiss!",
          }); 
    })
}