const container=document.querySelector(".container");
document.querySelector(".toggle-button").addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    const getrotation=parseInt(getComputedStyle(container).getPropertyValue("--rotation"));
     container.style.setProperty("--rotation",getrotation+180);
    console.log(getrotation+180);
})
