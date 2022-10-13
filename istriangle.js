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
       showOutput("The angles provided forms a triangle")
    }
    else{
        showOutput("No, The angles provided doesn't form a triangle")
    }

}

function showOutput(str){
    output.innerText = str
}

function clickHandler(){
    if(inputs[0].value ==="" || inputs[1].value==="" ||inputs[2].value===""){
        showOutput("Please enter in all the fields")
    }
    else if(inputs[0].value <0 || inputs[1].value<0 ||inputs[2].value<0){
        showOutput("Values cannot be negative")
    }
    else{
        isTriangle()
    }
}

checkTriangleBtn.addEventListener("click",clickHandler);
