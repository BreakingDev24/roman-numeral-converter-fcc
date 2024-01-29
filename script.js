//variables
const inputNumber = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const numbersArabicToRoman = [
    { value: 1000, romanNum: "M" },
    { value: 900, romanNum: "CM" },
    { value: 500, romanNum: "D" },
    { value: 400, romanNum: "CD" },
    { value: 100, romanNum: "C" },
    { value: 90, romanNum: "XC" },
    { value: 50, romanNum: "L" },
    { value: 40, romanNum: "XL" },
    { value: 10, romanNum: "X" },
    { value: 9, romanNum: "IX" },
    { value: 5, romanNum: "V" },
    { value: 4, romanNum: "IV" },
    { value: 1, romanNum: "I" }
];

function isValidInput(num){
    switch(true){
        case (num > 3999): 
            return 'Please enter a number less than or equal to 3999'

        case (num < 1 && num !== ""):
            return "Please enter a number greater than or equal to 1"
            
        case (num === ""):
            return  'Please enter a valid number'
        
        default: return true
    }

}

function getNumber() {
    const inputValue = inputNumber.value
    const isValidResult = isValidInput(inputValue)
   
    output.classList.remove('output-hidden')

    if(isValidResult === true){
        output.classList.remove('output-error')
        output.textContent = convertNumber(inputValue)
    } else {
        output.classList.add('output-error')
        output.textContent = isValidResult
    }
    
}

const convertNumber = (num)=> {
    let arabicNumber = num
    let result = ""
    numbersArabicToRoman.forEach((number) =>{
        while(arabicNumber >= number.value){
            result += number.romanNum
            arabicNumber -= number.value
        }
    })
    return result
}



function handleButton(){
    getNumber();
}

convertBtn.addEventListener('click', handleButton)


