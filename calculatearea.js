const base = document.querySelector("#base")
const height = document.querySelector("#height")
const calculateAreaButton = document.querySelector("#calculate-area-button")
const output = document.querySelector("#output")


function calculateArea(){
    
    const area = 1/2*(Number(base.value)*Number(height.value))
    output.innerText = "The area of the triangle is : " + area;
}

calculateAreaButton.addEventListener("click",calculateArea)