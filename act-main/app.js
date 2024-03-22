import { func1  } from "./info.js";
import { func2 } from "./img.js";
import { cards, cardsTitle } from "./card.js";

const wrapper = document.querySelector(".wrapper")
const wrapper2 = document.querySelector(".wrapper2")
const wrapper3 = document.querySelector(".wrapper3")

const data = {
    title1: "MY PORTFOLIO",
    para: " My journey so far has been filled with exciting experiences and challenges, each of which has shaped me into who I am today. ",
    btn: "Click Here",
    img: "./jay.png",
    proj: "MY PROJECTS",
    img1: "./R.jpg",
    img2: "./s.jpeg",
    img3: "./t.webp",
    para1: "FIRST CARD PROJECT VERY BAD",
    para2: "SECOND CARD PROJECT VERY GOOD",
    para3: "THIRD CARD PROJECT EXCELLENT",
    btn2: "Click Here",
    btn3: "Click Here"
}


const { title1, para, btn, img, proj, para1, para2, para3,img1, img2, img3,btn1,btn2,btn3 } = data

wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))
wrapper3.append(cardsTitle(proj))
wrapper2.append(cards(img1, para1,btn1))
wrapper2.append(cards(img2, para2,btn2))
wrapper2.append(cards(img3, para3,btn3))
