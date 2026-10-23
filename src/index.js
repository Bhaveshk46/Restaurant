import "./style.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
home();
const homebtn = document.querySelector("#Home");
homebtn.addEventListener('click',()=>{
    home();
})

const menubtn = document.querySelector("#Menu");
menubtn.addEventListener('click',()=>{
    menu();
})
