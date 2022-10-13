const base = document.querySelector("#base")
const height = document.querySelector("#height")
const calculateAreaButton = document.querySelector("#calculate-area-button")
const output = document.querySelector("#output")


function calculateArea(){
    
    var area = 1/2*(Number(base.value)*Number(height.value))
    area = area.toFixed("2")
    showOutput("The area of the triangle is : " + area);
}


function showOutput(str){
    output.innerText = str
}

function clickHandler(){
    if(base.value === "" || height.value ===""){
        showOutput("Please enter in all the input fields")
    }
    else if(base.value<=0 || height.value<=0){
        showOutput("Invalid values!. The values should be positive and greater than 0")
    }

    else{
        calculateArea();
    }
}
calculateAreaButton.addEventListener("click",clickHandler)