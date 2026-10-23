import "./style.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";
home();
const homeBtn = document.querySelector("#Home");
homeBtn.addEventListener('click',()=>{
    home();
})

const menuBtn = document.querySelector("#Menu");
menuBtn.addEventListener('click',()=>{
    menu();
})

const aboutBtn = document.querySelector("#About");
aboutBtn.addEventListener('click',()=>{
    about();
})