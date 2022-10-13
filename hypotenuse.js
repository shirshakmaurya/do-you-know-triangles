const sideInputs = document.querySelectorAll(".side-inputs")
const calculateHypotenuseButton = document.querySelector("#calculate-hypotenuse-button")
const output = document.querySelector("#output")


function calculateSumOfSquares(l1,l2){
    const sum = l1*l1+l2*l2
    return sum;
}
function calculateHypotenuse(){
    if(sideInputs[0].value >=0 || sideInputs[1].value >=0){
    const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value))
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    lengthOfHypotenuse = lengthOfHypotenuse.toFixed("2")
    showOutput("The length of hypotenuse is : "+ lengthOfHypotenuse)
    }
    else{
        showOutput("Please enter the sides correctly")
    }
}

function showOutput(str){
    output.innerText = str
}

function clickHandler(){
    if(sideInputs[0].value==="" || sideInputs[1].value === ""){
        showOutput("Enter in all the input fields")
    }
    else if(sideInputs[0].value<=0 || sideInputs[1]<=0){
        showOutput("The values should be greater than 0")
    }
    else{
        calculateHypotenuse()
    }
}

calculateHypotenuseButton.addEventListener("click", clickHandler)