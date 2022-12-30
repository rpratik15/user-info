
const userIP=new Promise((resolve,reject)=>
{
    $.getJSON("https://api.ipify.org?format=json",(data)=>
    {
        resolve(data.ip)
    },(error)=>{
        reject(error)
    })
})

export async function getUserIP()
{

    const user=await userIP;
    console.log(user)
    const ipInfo=document.createElement("span")
    const header=document.getElementById("ip")
    ipInfo.id="user-ip"
    ipInfo.textContent=user
      header.appendChild(ipInfo)

}
export const user=await userIP;



