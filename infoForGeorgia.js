const infoBtn=document.getElementById("info-btn")
const country=document.getElementById("geo")
const tbilisi=document.getElementById("city")
const population=document.getElementById("num")
const language=document.getElementById("language")
const flag=document.getElementById("png")

const fetchInfo=async()=>{
    const response=await fetch("https://restcountries.com/v3.1/name/Georgia")
    const items=await response.json()
    const georgia=items[1]
    console.log(georgia)
    country.innerHTML=`<span>${georgia.name.common}</span>`
    tbilisi.innerHTML=`<span>დედაქალაქი: ${georgia.capital[0]}</span>`
    population.innerHTML=`<span>მოსახლეობა: ${georgia.population}</span>`
    language.innerHTML=`<span>ოფიციალური ენა: ${georgia.languages.kat}</span>`
    flag.innerHTML=`<img src="${georgia.flags.png}"/>`
}
infoBtn.addEventListener("click",fetchInfo)