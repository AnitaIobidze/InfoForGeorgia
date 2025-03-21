const fetchInfo=async()=>{
    const response=await fetch("https://restcountries.com/v3.1/name/Georgia")
    const items=await response.json()
    console.log(items)

    // const itemsList=document.getElementById("itemsList")
    // itemsList.innerHTML=""
    // items.forEach((item)=> {
    //     const div=document.createElement("div")
    //     div.className="items"
    //     div.innerHTML=`
    //     <span>${item.name} - $${item.price}</span>`
    //     itemsList.appendChild(div)
    // });
}
fetchInfo()