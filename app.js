const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

checkNumberButton.addEventListener('click', checkBirthdateIsLucky);

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    const sum = calculateSum(dob);
    if(dob && numberToCheck)
        compareValues(sum, numberToCheck);
    else
    outputBox.innerText = "Please enter both the fields!";
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index = 0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber == 0){
        outputBox.innerText = "Your birthday is lucky! 🚀";
    }
    else{
        outputBox.innerText = "Your birthday is not lucky! 🤕";
    }
}