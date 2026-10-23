import "./style.css";
import {home} from "./home.js";
home();
const homebtn = document.querySelector("#Home");
homebtn.addEventListener('click',()=>{
    home();
})