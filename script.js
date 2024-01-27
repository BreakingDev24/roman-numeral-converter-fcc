//variables
const inputNumber = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const numbersArabicToRoman=[
    {
        value: 1000, romanNum: "M"
    },
    {
        value: 900, romanNum: "CM"
    },    {
        value: 500, romanNum: "D"
    },    {
        value: 400, romanNum: "CD"
    },    {
        value: 100, romanNum: "C"
    },    {
        value: 90, romanNum: "XC"
    },    {
        value: 50, romanNum: "L"
    },    {
        value: 40, romanNum: "XL"
    },    {
        value: 10, romanNum: "X"
    },    {
        value: 9, romanNum: "IX"
    },    {
        value: 5, romanNum: "V"
    },    {
        value: 4, romanNum: "IV"
    },    {
        value: 1, romanNum: "I"
    }
]

const getNumber = (num)=> {
    let arabicNumber = num.value
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
    console.log(getNumber(inputNumber));
}

convertBtn.addEventListener('click', handleButton)
