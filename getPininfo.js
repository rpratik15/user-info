

export async function getPincode(userInfo)
{
    //https://api.postalpincode.in/pincode/411028
    
    const response= await fetch(`https://api.postalpincode.in/pincode/${userInfo.postal}`)
    const pinInfo=await response.json();

    // localStorage.setItem("userdata",JSON.stringify(userInfo))
    renderUserData(pinInfo)
}

function renderUserData(pinData)
{
    console.log(pinData)
    const postal=document.getElementById("postal")
    const msg=createElement("div","msg","Message :"+pinData[0].Message)
    postal.appendChild(msg)
/*  <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search">
  </div>*/
    const formGroup=document.createElement("div")
    formGroup.classList="form-group has-search";
  const icon=document.createElement("span")
  icon.classList="fa fa-search form-control-feedback"

    const searchBox=document.createElement("input")
    searchBox.id="searchbar"
    searchBox.classList="form-control"
    searchBox.type="text"
    searchBox.placeholder="Enter name or branch"
    searchBox.addEventListener("keyup",search_data)

    formGroup.appendChild(icon)
    formGroup.appendChild(searchBox)
    postal.appendChild(formGroup)
    // postal.appendChild(searchBox)
    
    const container=document.createElement("div")
    container.classList="container1"
    postal.appendChild(container)
    // const row=document.createElement("div");
    // row.classList="row align-items-start"
    // container.appendChild(row)
    const pinCodes=pinData[0].PostOffice
    // add filter here

    console.log(pinCodes)
    // <!-- input tag -->
	// <input id="searchbar" onkeyup="search_animal()" type="text"
	// 	name="search" placeholder="Search animals..">

 
    
    pinCodes.forEach(res => {
        
        const card=document.createElement("div");
       
        card.classList="card col-md-3";
        const name = createElements("p","name",`Name: ${res.Name}`)
        card.appendChild(name);
        const branch = createElements("p","branch",'Branch Type:' + res.BranchType);
        card.appendChild(branch);
        const delStatus = createElements("p","delstatus",'Delivry Status:' + res.DeliveryStatus);
        card.appendChild(delStatus);
        const dist = createElements("p","dist",'District:' + res.District);
        card.appendChild(dist);
        const division = createElements("p","division",'Division:' + res.Division);
        card.appendChild(division);
        
        container.appendChild(card)
    });
}

function search_data()
    {
    //     let input = document.getElementById('searchbar').value
	// input=input.toLowerCase();
	// let x = document.getElementsByClassName('card col-md-3');
    // console.log(x)
	// for (let i = 0; i < x.length; i++) {
        
	// 	if (!x[i].innerHTML.toLowerCase().includes(input)) {
	// 		x[i].style.display="none";
	// 	}
	// 	else {
	// 		x[i].style.display="block";				
	// 	}
	// }

    let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let search_name = document.getElementsByClassName('name');
    let search_branch=document.getElementsByClassName('branch');
    let card=document.getElementsByClassName('card col-md-3')
    // console.log(x)
	for (let i = 0; i < search_name.length; i++) {
        
		if (!search_name[i].innerHTML.toLowerCase().includes(input) && !search_branch[i].innerHTML.toLowerCase().includes(input) ) 
        {
			card[i].style.display="none";
		}
		else {
			card[i].style.display="block";				
		}
	}
    }

function createElement(element,elid,value="")
{
    const newElement= document.createElement(element);
    newElement.id=elid
    newElement.textContent=value
    return newElement

}

function createElements(element,elclass,value="")
{
    const newElement= document.createElement(element);
    newElement.classList=elclass
    newElement.textContent=value
    return newElement

}