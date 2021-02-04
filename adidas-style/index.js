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

// color image
let childImgColor = document.querySelectorAll(".Color");
let prentImgColor = document.getElementById("changeImg");

childImgColor.forEach(buttonImg => {
    buttonImg.parentElement.children[0].addEventListener("click", () => {
        prentImgColor.setAttribute("src", "adidas-img/blue.png.png");
        buttonImg.parentElement.children[1].addEventListener("click", () => {
            prentImgColor.setAttribute("src", "adidas-img/red.png.png");
            buttonImg.parentElement.children[2].addEventListener("click", () => {
                prentImgColor.setAttribute("src", "adidas-img/yellow.png.png");
                buttonImg.parentElement.children[3].addEventListener("click", () => {
                    prentImgColor.setAttribute("src", "adidas-img/blue.png.png");
                    buttonImg.parentElement.children[4].addEventListener("click", () => {
                        prentImgColor.setAttribute("src", "adidas-img/orange.png.png");
                        buttonImg.parentElement.children[5].addEventListener("click", () => {
                            prentImgColor.setAttribute("src", "adidas-img/lime.png.png");
                        })
                    })
                })
            })
        })
    })
})

// img demo 

let img_demo = document.getElementById("imgDemo");
img_demo.style = `width: 100%; max-width: 100%; height: 100%;`;
const img_pervouius = document.querySelectorAll(".imgPervious");

const timesCloseIcon = document.getElementById("timesClose");
const demoPerviousShow = document.querySelector(".demo_pervious");
const bookKnowButton = document.getElementById("bookKnow");

bookKnowButton.addEventListener("click", () => {
    demoPerviousShow.style.display = "block";
})

timesCloseIcon.addEventListener("click", () => {
    demoPerviousShow.style.display = "none";
})


img_pervouius.forEach(imgPerousImg => {
    imgPerousImg.parentElement.children[0].addEventListener("click", () => {
        img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous1.png.png");
        imgPerousImg.parentElement.children[1].addEventListener("click", () => {
            img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous2.png.png");
            imgPerousImg.parentElement.children[2].addEventListener("click", () => {
                img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous3.png.png");
                imgPerousImg.parentElement.children[3].addEventListener("click", () => {
                    img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous4.png.png");
                    imgPerousImg.parentElement.children[4].addEventListener("click", () => {
                        img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous5.png.png");
                        imgPerousImg.parentElement.children[5].addEventListener("click", () => {
                            img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous6.png.png");
                            imgPerousImg.parentElement.children[6].addEventListener("click", () => {
                                img_demo.setAttribute("src", "adidas-img/perivousImg1/perivous7.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
})

// ************************* click button img pop show *********************************
// click button 1 
const buttonClickPop = document.getElementById("click1Button");

buttonClickPop.addEventListener("click", () => {
    const bodyCreate1 = document.createElement("div");
    bodyCreate1.innerHTML = `<div class="bodyColor">
    <h1> Adidas Mens Copa 20.4 Fg Football Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="clickButtonTime"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click1.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click2.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click3.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click4.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click5.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg2/click6.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/perivousImg2/click1.png.png">
    </div>
    </div>
    </div>`;
    document.body.appendChild(bodyCreate1);
    // click img 
    const clickImg = document.querySelectorAll(".clickImgChange");
    const imgContainer = document.getElementById("clickImgContainer");
    // all img
    clickImg.forEach(imgPerousImg1 => {
        imgPerousImg1.parentElement.children[0].addEventListener("click", () => {
            imgContainer.setAttribute("src", "adidas-img/perivousImg2/click1.png.png");
            imgPerousImg1.parentElement.children[1].addEventListener("click", () => {
                imgContainer.setAttribute("src", "adidas-img/perivousImg2/click2.png.png");
                imgPerousImg1.parentElement.children[2].addEventListener("click", () => {
                    imgContainer.setAttribute("src", "adidas-img/perivousImg2/click3.png.png");
                    imgPerousImg1.parentElement.children[3].addEventListener("click", () => {
                        imgContainer.setAttribute("src", "adidas-img/perivousImg2/click4.png.png");
                        imgPerousImg1.parentElement.children[4].addEventListener("click", () => {
                            imgContainer.setAttribute("src", "adidas-img/perivousImg2/click5.png.png");
                            imgPerousImg1.parentElement.children[5].addEventListener("click", () => {
                                imgContainer.setAttribute("src", "adidas-img/perivousImg2/click6.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    const closeTimes = document.getElementById("clickButtonTime");
    closeTimes.addEventListener("click", () => {
        bodyCreate1.innerHTML = "";
    })
})

// click button 2

const clickButton2container = document.getElementById("clickButton2");
clickButton2container.addEventListener("click", () => {
    const creatDiv = document.createElement("div");
    creatDiv.innerHTML = `<div class="bodyColor">
    <h1> Adidas Mens Copa 20.4 Fg Football Shoe </h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg1.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg2.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg3.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg4.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg5.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg3/clickImg6.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer" src="adidas-img/perivousImg3/clickImg1.png.png">
    </div>
    </div>
    </div>`;
    document.body.appendChild(creatDiv);
    // img select start 
    const clickImgChange1 = document.querySelectorAll(".clickImgChange");
    let clickContainerImg = document.getElementById("clickImgContainer");

    clickImgChange1.forEach(ClickImg1 => {
        ClickImg1.parentElement.children[0].addEventListener("click", () => {
            clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg1.png.png");
            ClickImg1.parentElement.children[1].addEventListener("click", () => {
                clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg2.png.png");
                ClickImg1.parentElement.children[2].addEventListener("click", () => {
                    clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg3.png.png");
                    ClickImg1.parentElement.children[3].addEventListener("click", () => {
                        clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg4.png.png");
                        ClickImg1.parentElement.children[4].addEventListener("click", () => {
                            clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg5.png.png");
                            ClickImg1.parentElement.children[5].addEventListener("click", () => {
                                clickContainerImg.setAttribute("src", "adidas-img/perivousImg3/clickImg6.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // img select end 
    const closeButtonIcon = document.getElementById("timesCloseButton");
    closeButtonIcon.addEventListener("click", () => {
        creatDiv.innerHTML = "";
    })
})

// img click button 3

const clickButton3Container = document.getElementById("clickButton3");

clickButton3Container.addEventListener("click", () => {
    const creatDiv1 = document.createElement("div");
    creatDiv1.innerHTML = `<div class="bodyColor">
    <h1> This is a adidas Shoes in all color related </h1> <br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton1"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick1.png.png">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick2.png.png">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick3.png.png">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick4.png.png">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick5.png.png">
    <img class="clickImgChange" src="adidas-img/pervousImg4/adidasClick6.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgContainer2" src="adidas-img/pervousImg4/adidasClick1.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv1);
    // click img start 
    const clickImgShow = document.querySelectorAll(".clickImgChange");
    let imgClickShow = document.getElementById("clickImgContainer2");
    clickImgShow.forEach(clickImgSet => {
        clickImgSet.parentElement.children[0].addEventListener("click", () => {
            imgClickShow.setAttribute("src", "adidas-img/pervousImg4/adidasClick1.png.png");
            clickImgSet.parentElement.children[1].addEventListener("click", () => {
                imgClickShow.setAttribute("src", "adidas-img/pervousImg4/adidasClick2.png.png");
                clickImgSet.parentElement.children[2].addEventListener("click", () => {
                    imgClickShow.setAttribute("src", "adidas-img/pervousImg4/adidasClick3.png.png");
                    clickImgSet.parentElement.children[3].addEventListener("click", () => {
                        imgClickShow.setAttribute("src", " adidas-img/pervousImg4/adidasClick4.png.png");
                        clickImgSet.parentElement.children[4].addEventListener("click", () => {
                            imgClickShow.setAttribute("src", "adidas-img/pervousImg4/adidasClick5.png.png");
                            clickImgSet.parentElement.children[5].addEventListener("click", () => {
                                imgClickShow.setAttribute("src", "adidas-img/pervousImg4/adidasClick6.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click img end 
    const clickButtonRemove = document.getElementById("timesCloseButton1");
    clickButtonRemove.addEventListener("click", () => {
        creatDiv1.innerHTML = "";
    })
})

// click container 4

const clickButton4Container = document.getElementById("clickButton4");

clickButton4Container.addEventListener("click", () => {
    const creatDiv2 = document.createElement("div");
    creatDiv2.innerHTML = `<div class="bodyColor">
    <h1>This is a adidas Shoes</h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton3"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew1.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew2.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew3.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew4.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew5.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg5/adidasNew6.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgChange3" src="adidas-img/perivousImg5/adidasNew1.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv2);
    // click select img start
    const imgList = document.querySelectorAll(".clickImgChange");
    const divImg = document.getElementById("clickImgChange3");

    imgList.forEach(imgListShow => {
        imgListShow.parentElement.children[0].addEventListener("click", () => {
            divImg.setAttribute("src", "adidas-img/perivousImg5/adidasNew1.png.png");
            imgListShow.parentElement.children[1].addEventListener("click", () => {
                divImg.setAttribute("src", "adidas-img/perivousImg5/adidasNew2.png.png");
                imgListShow.parentElement.children[2].addEventListener("click", () => {
                    divImg.setAttribute("src", "adidas-img/perivousImg5/adidasNew3.png.png");
                    imgListShow.parentElement.children[3].addEventListener("click", () => {
                        divImg.setAttribute("src", "adidas-img/perivousImg5/adidasNew4.png.png");
                        imgListShow.parentElement.children[4].addEventListener("click", () => {
                            divImg.setAttribute("src","adidas-img/perivousImg5/adidasNew5.png.png");
                            imgListShow.parentElement.children[5].addEventListener("click", () => {
                                divImg.setAttribute("src", "adidas-img/perivousImg5/adidasNew6.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click select img end 
    const closeTimesNew = document.getElementById("timesCloseButton3");

    closeTimesNew.addEventListener("click", () => {
        creatDiv2.innerHTML = "";
    })
})

// ******************************** secound container **************************************

// / click container 4

const clickButton4Container1 = document.getElementById("adidasContainer1");

clickButton4Container1.addEventListener("click", () => {
    const creatDiv3 = document.createElement("div");
    creatDiv3.innerHTML = `<div class="bodyColor">
    <h1>This is a adidas Shoes</h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton3"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas1.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas2.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas3.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas4.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas5.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg6/adidas6.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgChange3" src="adidas-img/perivousImg6/adidas1.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv3);
    // click select img start
    const imgList = document.querySelectorAll(".clickImgChange");
    const divImg = document.getElementById("clickImgChange3");

    imgList.forEach(imgListShow => {
        imgListShow.parentElement.children[0].addEventListener("click", () => {
            divImg.setAttribute("src", "adidas-img/perivousImg6/adidas1.png.png");
            imgListShow.parentElement.children[1].addEventListener("click", () => {
                divImg.setAttribute("src", "adidas-img/perivousImg6/adidas2.png.png");
                imgListShow.parentElement.children[2].addEventListener("click", () => {
                    divImg.setAttribute("src", "adidas-img/perivousImg6/adidas3.png.png");
                    imgListShow.parentElement.children[3].addEventListener("click", () => {
                        divImg.setAttribute("src", "adidas-img/perivousImg6/adidas4.png.png");
                        imgListShow.parentElement.children[4].addEventListener("click", () => {
                            divImg.setAttribute("src","adidas-img/perivousImg6/adidas5.png.png");
                            imgListShow.parentElement.children[5].addEventListener("click", () => {
                                divImg.setAttribute("src", "adidas-img/perivousImg6/adidas6.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click select img end 
    const closeTimesNew = document.getElementById("timesCloseButton3");

    closeTimesNew.addEventListener("click", () => {
        creatDiv3.innerHTML = "";
    })
})

// / click container 5

const clickButton4Container2 = document.getElementById("adidasContainer2");

clickButton4Container2.addEventListener("click", () => {
    const creatDiv4 = document.createElement("div");
    creatDiv4.innerHTML = `<div class="bodyColor">
    <h1>This is a adidas Shoes</h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton3"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas7.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas8.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas9.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas10.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas11.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg7/adidas12.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgChange3" src="adidas-img/perivousImg7/adidas7.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv4);
    // click select img start
    const imgList = document.querySelectorAll(".clickImgChange");
    const divImg = document.getElementById("clickImgChange3");

    imgList.forEach(imgListShow => {
        imgListShow.parentElement.children[0].addEventListener("click", () => {
            divImg.setAttribute("src", "adidas-img/perivousImg7/adidas7.png.png");
            imgListShow.parentElement.children[1].addEventListener("click", () => {
                divImg.setAttribute("src", "adidas-img/perivousImg7/adidas8.png.png");
                imgListShow.parentElement.children[2].addEventListener("click", () => {
                    divImg.setAttribute("src", "adidas-img/perivousImg7/adidas9.png.png");
                    imgListShow.parentElement.children[3].addEventListener("click", () => {
                        divImg.setAttribute("src", "adidas-img/perivousImg7/adidas10.png.png");
                        imgListShow.parentElement.children[4].addEventListener("click", () => {
                            divImg.setAttribute("src","adidas-img/perivousImg7/adidas11.png.png");
                            imgListShow.parentElement.children[5].addEventListener("click", () => {
                                divImg.setAttribute("src", "adidas-img/perivousImg7/adidas12.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click select img end 
    const closeTimesNew = document.getElementById("timesCloseButton3");

    closeTimesNew.addEventListener("click", () => {
        creatDiv4.innerHTML = "";
    })
})

// / click container 6

const clickButton4Container3 = document.getElementById("adidasContainer3");

clickButton4Container3.addEventListener("click", () => {
    const creatDiv5 = document.createElement("div");
    creatDiv5.innerHTML = `<div class="bodyColor">
    <h1>This is a adidas Shoes</h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton3"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas13.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas14.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas15.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas16.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas17.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg8/adidas18.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgChange3" src="adidas-img/perivousImg8/adidas13.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv5);
    // click select img start
    const imgList = document.querySelectorAll(".clickImgChange");
    const divImg = document.getElementById("clickImgChange3");

    imgList.forEach(imgListShow => {
        imgListShow.parentElement.children[0].addEventListener("click", () => {
            divImg.setAttribute("src", "adidas-img/perivousImg8/adidas13.png.png");
            imgListShow.parentElement.children[1].addEventListener("click", () => {
                divImg.setAttribute("src", "adidas-img/perivousImg8/adidas14.png.png");
                imgListShow.parentElement.children[2].addEventListener("click", () => {
                    divImg.setAttribute("src", "adidas-img/perivousImg8/adidas15.png.png");
                    imgListShow.parentElement.children[3].addEventListener("click", () => {
                        divImg.setAttribute("src", "adidas-img/perivousImg8/adidas16.png.png");
                        imgListShow.parentElement.children[4].addEventListener("click", () => {
                            divImg.setAttribute("src","adidas-img/perivousImg8/adidas17.png.png");
                            imgListShow.parentElement.children[5].addEventListener("click", () => {
                                divImg.setAttribute("src", "adidas-img/perivousImg8/adidas18.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click select img end 
    const closeTimesNew = document.getElementById("timesCloseButton3");

    closeTimesNew.addEventListener("click", () => {
        creatDiv5.innerHTML = "";
    })
})

// / click container 7

const clickButton4Container4 = document.getElementById("adidasContainer4");

clickButton4Container4.addEventListener("click", () => {
    const creatDiv6 = document.createElement("div");
    creatDiv6.innerHTML = `<div class="bodyColor">
    <h1>This is a adidas Shoes</h1><br><br>
    <i class="fa fa-times clickButtonTime" id="timesCloseButton3"></i>
    <div class="displayFelx">
    <div class="javascriptImg">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas23.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas24.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas25.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas26.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas27.png.png">
    <img class="clickImgChange" src="adidas-img/perivousImg9/adidas28.png.png">
    </div>
    <div class="javascriptOneImg">
    <img id="clickImgChange3" src="adidas-img/perivousImg9/adidas23.png.png">
    </div>
    </div>
    </div>`
    document.body.appendChild(creatDiv6);
    // click select img start
    const imgList = document.querySelectorAll(".clickImgChange");
    const divImg = document.getElementById("clickImgChange3");

    imgList.forEach(imgListShow => {
        imgListShow.parentElement.children[0].addEventListener("click", () => {
            divImg.setAttribute("src", "adidas-img/perivousImg9/adidas23.png.png");
            imgListShow.parentElement.children[1].addEventListener("click", () => {
                divImg.setAttribute("src", "adidas-img/perivousImg9/adidas24.png.png");
                imgListShow.parentElement.children[2].addEventListener("click", () => {
                    divImg.setAttribute("src", "adidas-img/perivousImg9/adidas25.png.png");
                    imgListShow.parentElement.children[3].addEventListener("click", () => {
                        divImg.setAttribute("src", "adidas-img/perivousImg9/adidas26.png.png");
                        imgListShow.parentElement.children[4].addEventListener("click", () => {
                            divImg.setAttribute("src","adidas-img/perivousImg9/adidas27.png.png");
                            imgListShow.parentElement.children[5].addEventListener("click", () => {
                                divImg.setAttribute("src", "adidas-img/perivousImg9/adidas28.png.png");
                            })
                        })
                    })
                })
            })
        })
    })
    // click select img end 
    const closeTimesNew = document.getElementById("timesCloseButton3");

    closeTimesNew.addEventListener("click", () => {
        creatDiv6.innerHTML = "";
    })
})