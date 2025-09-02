// background color changing button
document.body.style.backgroundColor = "#45b5e6";
const btn = document.querySelector("#colorChange");
let isBlue = true;

btn.addEventListener("click", () =>{
    if (isBlue){
        document.body.style.backgroundColor = "#e64545";
    }
    else{
        document.body.style.backgroundColor = "#45b5e6";
    }
    isBlue = !isBlue; 
})