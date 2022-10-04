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
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    output.innerText = ("The length of hypotenuse is : "+ lengthOfHypotenuse)
    }
    else{
        output.innerText = ("Please enter the sides correctly")
    }
}

calculateHypotenuseButton.addEventListener("click", calculateHypotenuse)