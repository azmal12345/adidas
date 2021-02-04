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

// ************************* click button img pop show *********************************
// click button 1 
const womenClickButton = document.getElementById("womenClick");

womenClickButton.addEventListener("click", () => {
    const createWomen = document.createElement("div");
    createWomen.innerHTML = `<div class="bodyColor">
    <h1> Adidas Women Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="clickButtonTime"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women1.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women2.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women3.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women4.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women5.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg10/women6.jpeg.jpeg">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/pervousImg10/women1.jpeg.jpeg">
    </div>
    </div>
    </div>`;
    document.body.appendChild(createWomen);
    // click img 
    const clickImg = document.querySelectorAll(".clickImgChange");
    const imgContainer = document.getElementById("clickImgContainer");
    // all img
    clickImg.forEach(imgPerousImg1 => {
        imgPerousImg1.parentElement.children[0].addEventListener("click", () => {
            imgContainer.setAttribute("src", "adidas-img/pervousImg10/women1.jpeg.jpeg");
            imgPerousImg1.parentElement.children[1].addEventListener("click", () => {
                imgContainer.setAttribute("src", "adidas-img/pervousImg10/women2.jpeg.jpeg");
                imgPerousImg1.parentElement.children[2].addEventListener("click", () => {
                    imgContainer.setAttribute("src", "adidas-img/pervousImg10/women3.jpeg.jpeg");
                    imgPerousImg1.parentElement.children[3].addEventListener("click", () => {
                        imgContainer.setAttribute("src", "adidas-img/pervousImg10/women4.jpeg.jpeg");
                        imgPerousImg1.parentElement.children[4].addEventListener("click", () => {
                            imgContainer.setAttribute("src", "adidas-img/pervousImg10/women5.jpeg.jpeg");
                            imgPerousImg1.parentElement.children[5].addEventListener("click", () => {
                                imgContainer.setAttribute("src", "adidas-img/pervousImg10/women6.jpeg.jpeg");
                            })
                        })
                    })
                })
            })
        })
    })
    const closeTimes = document.getElementById("clickButtonTime");
    closeTimes.addEventListener("click", () => {
        createWomen.innerHTML = "";
    })
})

// click button 2
const womenClickButton2 = document.getElementById("womenClick2");

womenClickButton2.addEventListener("click", () => {
    const createWomen2 = document.createElement("div");
    createWomen2.innerHTML = `<div class="bodyColor">
    <h1> Adidas Women Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="clickButtonTime"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women7.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women8.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women9.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women10.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women11.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg11/women12.jpeg.jpeg">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/pervousImg11/women7.jpeg.jpeg">
    </div>
    </div>
    </div>`;
    document.body.appendChild(createWomen2);
    // click img 
    const clickImg = document.querySelectorAll(".clickImgChange");
    const imgContainer = document.getElementById("clickImgContainer");
    // all img
    clickImg.forEach(imgPerousImg1 => {
        imgPerousImg1.parentElement.children[0].addEventListener("click", () => {
            imgContainer.setAttribute("src", "adidas-img/pervousImg11/women7.jpeg.jpeg");
            imgPerousImg1.parentElement.children[1].addEventListener("click", () => {
                imgContainer.setAttribute("src", "adidas-img/pervousImg11/women8.jpeg.jpeg");
                imgPerousImg1.parentElement.children[2].addEventListener("click", () => {
                    imgContainer.setAttribute("src", "adidas-img/pervousImg11/women9.jpeg.jpeg");
                    imgPerousImg1.parentElement.children[3].addEventListener("click", () => {
                        imgContainer.setAttribute("src", "adidas-img/pervousImg11/women10.jpeg.jpeg");
                        imgPerousImg1.parentElement.children[4].addEventListener("click", () => {
                            imgContainer.setAttribute("src", "adidas-img/pervousImg11/women11.jpeg.jpeg");
                            imgPerousImg1.parentElement.children[5].addEventListener("click", () => {
                                imgContainer.setAttribute("src", "adidas-img/pervousImg11/women12.jpeg.jpeg");
                            })
                        })
                    })
                })
            })
        })
    })
    const closeTimes = document.getElementById("clickButtonTime");
    closeTimes.addEventListener("click", () => {
        createWomen2.innerHTML = "";
    })
})

// click button 3
const womenClickButton3 = document.getElementById("womenClick3");

womenClickButton3.addEventListener("click", () => {
    const createWomen3 = document.createElement("div");
    createWomen3.innerHTML = `<div class="bodyColor">
    <h1> Adidas Women Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="clickButtonTime"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women13.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women14.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women15.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women16.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women17.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg12/women18.jpeg.jpeg">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/pervousImg12/women13.jpeg.jpeg">
    </div>
    </div>
    </div>`;
    document.body.appendChild(createWomen3);
    // click img 
    const clickImg = document.querySelectorAll(".clickImgChange");
    const imgContainer = document.getElementById("clickImgContainer");
    // all img
    clickImg.forEach(imgPerousImg1 => {
        imgPerousImg1.parentElement.children[0].addEventListener("click", () => {
            imgContainer.setAttribute("src", "adidas-img/pervousImg12/women13.jpeg.jpeg");
            imgPerousImg1.parentElement.children[1].addEventListener("click", () => {
                imgContainer.setAttribute("src", "adidas-img/pervousImg12/women14.jpeg.jpeg");
                imgPerousImg1.parentElement.children[2].addEventListener("click", () => {
                    imgContainer.setAttribute("src", "adidas-img/pervousImg12/women15.jpeg.jpeg");
                    imgPerousImg1.parentElement.children[3].addEventListener("click", () => {
                        imgContainer.setAttribute("src", "adidas-img/pervousImg12/women16.jpeg.jpeg");
                        imgPerousImg1.parentElement.children[4].addEventListener("click", () => {
                            imgContainer.setAttribute("src", "adidas-img/pervousImg12/women17.jpeg.jpeg");
                            imgPerousImg1.parentElement.children[5].addEventListener("click", () => {
                                imgContainer.setAttribute("src", "adidas-img/pervousImg12/women18.jpeg.jpeg");
                            })
                        })
                    })
                })
            })
        })
    })
    const closeTimes = document.getElementById("clickButtonTime");
    closeTimes.addEventListener("click", () => {
        createWomen3.innerHTML = "";
    })
})

// click button 4
const womenClickButton4 = document.getElementById("womenClick4");

womenClickButton4.addEventListener("click", () => {
    const createWomen4 = document.createElement("div");
    createWomen4.innerHTML = `<div class="bodyColor">
    <h1> Adidas Women Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="clickButtonTime"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women19.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women20.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women21.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women22.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women23.jpeg.jpeg">
    <img class="clickImgChange" src="adidas-img/pervousImg13/women24.jpeg.jpeg">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/pervousImg13/women19.jpeg.jpeg">
    </div>
    </div>
    </div>`;
    document.body.appendChild(createWomen4);
    // click img 
    const clickImg = document.querySelectorAll(".clickImgChange");
    const imgContainer = document.getElementById("clickImgContainer");
    // all img
    clickImg.forEach(imgPerousImg1 => {
        imgPerousImg1.parentElement.children[0].addEventListener("click", () => {
            imgContainer.setAttribute("src", "adidas-img/pervousImg13/women19.jpeg.jpeg");
            imgPerousImg1.parentElement.children[1].addEventListener("click", () => {
                imgContainer.setAttribute("src", "adidas-img/pervousImg13/women20.jpeg.jpeg");
                imgPerousImg1.parentElement.children[2].addEventListener("click", () => {
                    imgContainer.setAttribute("src", "adidas-img/pervousImg13/women21.jpeg.jpeg");
                    imgPerousImg1.parentElement.children[3].addEventListener("click", () => {
                        imgContainer.setAttribute("src", "adidas-img/pervousImg13/women22.jpeg.jpeg");
                        imgPerousImg1.parentElement.children[4].addEventListener("click", () => {
                            imgContainer.setAttribute("src", "adidas-img/pervousImg13/women23.jpeg.jpeg");
                            imgPerousImg1.parentElement.children[5].addEventListener("click", () => {
                                imgContainer.setAttribute("src", "adidas-img/pervousImg13/women24.jpeg.jpeg");
                            })
                        })
                    })
                })
            })
        })
    })
    const closeTimes = document.getElementById("clickButtonTime");
    closeTimes.addEventListener("click", () => {
        createWomen4.innerHTML = "";
    })
})

// ********************************** card container *************************************

// hover mouseenter 
const iconHover = document.querySelectorAll(".featucher_text");
const likeHoverElement = document.querySelectorAll(".cardLikeElement");
const alertBox = document.querySelectorAll(".addToCart");

alertBox.forEach(alertPop => {
    alertPop.addEventListener("click", (e) => {
        swal("Thanks!", "Your Order Successfull Book!", "success");
        const createAudio = document.createElement("div");
        createAudio.innerHTML = `<audio autoplay src="adidas-img/reviews/orderBook.mp3.mp3">
        </audio>`
        document.querySelector(".addToCart").appendChild(createAudio);
    })
})

for(let i = 0; i < iconHover.length; i++){
    iconHover[i].addEventListener("mouseenter", () => {
        for(let b = 0; b < likeHoverElement.length; b++){
            likeHoverElement[i].style.display = "block";
        }
    })
}

// hover mouseout 
const iconHoverOut = document.querySelectorAll(".imgIconShow");
const likeHoverElement1 = document.querySelectorAll(".cardLikeElement");

for(let j = 0; j < iconHoverOut.length; j++){
    iconHoverOut[j].addEventListener("mouseleave", () => {
        for(let cd = 0; cd < likeHoverElement1.length; cd++){
            likeHoverElement1[j].style.display = "";
        }
    })
}

const likeCard = document.querySelectorAll(".fa-heart, .fa-search");

for(let i = 0; i < likeCard.length; i++){
    likeCard[i].addEventListener("click", (e) => {
        e.target.style.backgroundColor = "red";
    })
}


const removeLike = document.querySelectorAll(".heart, .fa-search");
for(let a = 0; a < removeLike.length; a++){
    removeLike[a].addEventListener("dblclick", (e) => {
        e.target.style.backgroundColor = "black";
    })
}