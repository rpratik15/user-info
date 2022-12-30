import { getPincode } from "./getPininfo.js";
export async function getUserinfo(data)
{
    

    const response= await fetch(`https://ipinfo.io/${data}/json?token=a27e50ecf8bfce`)
    const userInfo=await response.json();
//    console.log(userInfo)
    // localStorage.setItem("userdata",JSON.stringify(userInfo))
    renderUserData(userInfo)

}


function renderUserData(userInfo)
{
    document.getElementById("user-info").style.display="block";
    const loc=userInfo.loc.split(',')
    const provider=userInfo.org.split(',')
   
    const data=[loc[0],loc[1],userInfo.city,userInfo.region,provider[0],provider[1]]
    const element=[document.getElementById("lat"),document.getElementById("lon"),document.getElementById("city"),
                   document.getElementById("region"),document.getElementById("org"),document.getElementById("host") ]

for(const i in data)
{
    
    element[i].textContent=data[i];
    console.log(data[i])
   
    // element[i].fontSize="10px"
}
// document.getElementById("user-info").style.display="block";
//for google map
const iframeElement=document.createElement("iframe")
const mapDiv=document.getElementById("map")
iframeElement.width="90%"
iframeElement.height="100%"
iframeElement.frameBorder="0"
iframeElement.src=`https://maps.google.com/maps?q=${loc[0]},${loc[1]}&z=15&output=embed`;
iframeElement.scroll="no"
mapDiv.appendChild(iframeElement)


//for time zone, date,pincode and message
const timeDiv=document.getElementById("time-pin")
const tmZone=createElement("div","t-zone","Time Zone :"+userInfo.timezone);
const dtTime=createElement("div","dt-time","Date and Time :"+new Date().toLocaleString("en-US", { timeZone: `${userInfo.timezone}` }))
const pinCode=createElement("div","pin","Pin Code :"+userInfo.postal)
timeDiv.appendChild(tmZone)
timeDiv.appendChild(dtTime)
timeDiv.appendChild(pinCode)

//get pin code
getPincode(userInfo)

}

function createElement(element,elid,value)
{
    const newElement= document.createElement(element);
    newElement.id=elid
    newElement.textContent=value
    return newElement

}

