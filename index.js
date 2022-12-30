import { getUserIP,user as userIP } from "./getIP.js"
import { getUserinfo } from "./getUserinfo.js"



    getUserIP()//show  client ip addredd
const fetchButton=document.getElementById("fetch-btn")
fetchButton.addEventListener("click",()=>getUserinfo(userIP))







