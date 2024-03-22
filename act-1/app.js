import { func1  } from "./info.js";
import { func2 } from "./img.js";
import { cards, cardsTitle } from "./card.js";

const wrapper = document.querySelector(".wrapper")
const wrapper2 = document.querySelector(".wrapper2")
const wrapper3 = document.querySelector(".wrapper3")

const data = {
    title1: "JAY OBEDENCIO",
    para: "Hi there! My name is Jay, and I'm thrilled to share a bit about myself. I'm a passionate individual with a deep curiosity for the world around me. Whether it's delving into the latest technology trends, exploring new cuisines, or immersing myself in the beauty of nature, I'm always eager to learn and experience new things.",
    btn: "Click Here",
    img: "./jay.png",
    proj: "Projects",
    img1: "./R.jpg",
    img2: "./s.jpeg",
    img3: "./t.webp",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn1: "Click Here",
    btn2: "Click Here",
    btn3: "Click Here"
}


const { title1, para, btn, img, proj, para1, para2, para3,img1, img2, img3,btn1,btn2,btn3 } = data

wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))

