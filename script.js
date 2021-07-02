
const numbers = document.querySelectorAll(".number"); //mengambil element <button>

// Dapatkan masing-masing angka dari constant “numbers” dengan menggunakan method forEach
numbers.forEach((number) => {
  number.addEventListener("click", (event) => { // Menambah event Click ke setiap element
    inputNumber(event.target.value);  //menambahkan argument event dan Anda bisa mengakses angka menggunakan event.target.value.
    updateScreen(currentNumber);
    console.log(event.target.value);
  }) 
})

//Definisikan Function untuk Memperbarui Layar Tampilan
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

// Definisikan Variable untuk melakukan kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// Memberikan the Number yang di klik ke variable currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
  }
}

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      inputOperator(event.target.value);
      console.log(event.target.value);
    }) 
  })

const inputOperator = (operator) => {
    if(calculationOperator === ''){
      prevNumber = currentNumber;  
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    console.log('equal button is pressed');
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+' :
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-' :
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*' :
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/' :
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case '%' :
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
    console.log('AC button is pressed');
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    console.log(event.target.value);
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}