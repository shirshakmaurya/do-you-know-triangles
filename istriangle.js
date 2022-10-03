const inputs = document.querySelectorAll(".angle-input")
const checkTriangleBtn = document.querySelector("#check-triangle-btn")
const output = document.querySelector("#output")


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
    // console.log(sumOfAngles);
}

function isTriangle(){
    
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sumOfAngles === 180){
        output.innerText = "The angles provided forms a triangle"
    }
    else{
        output.innerText = "No, The angles provided doesn't form a triangle"
    }

}

checkTriangleBtn.addEventListener("click",isTriangle);
console.log(inputs) 