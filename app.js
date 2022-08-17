
// a=97;
function genLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// console.log(genLowercase());
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
// A=65
function genUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// console.log(genUppercase());
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

// 0=48;
function genNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// console.log(genNumbers());
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

// 0=48;
function genSymbols() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    // return symbols[0]; generating random index number
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(genSymbols());
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');



function passwordGenerator() {
    // here we have checked the types and generated an password array according to them..
    const typesChecked = [];
    if (uppercaseEl.checked) typesChecked.push(genUppercase());
    if (lowercaseEl.checked) typesChecked.push(genLowercase());
    if (numbersEl.checked) typesChecked.push(genNumbers());
    if (symbolsEl.checked) typesChecked.push(genSymbols());
    // console.log(typesChecked);
    if (typesChecked.length === 0) {
        return "";
    }
    else {
        const password = typesChecked[Math.floor(Math.random() * typesChecked.length)];
        return password;
    }
}


generateEl.addEventListener("click", function generatePassword() {
    const length = lengthEl.value;
    console.log(length);
    if (length > 20) {
        alert('Good passwords are either not so long or short  \nplease keep the length within 20 ');
        return;
    }
    else {
        let generatedPass = '';
        for (let i = 0; i < length; i++) {
            const passStrings = passwordGenerator();
            console.log(passStrings);
            generatedPass += passStrings;

        }
        console.log(generatedPass);
        resultEl.innerText = generatedPass;
        document.getElementById('result').style.opacity = 1;
    }
});

clipboard.addEventListener("click", function () {
    // https://www.arclab.com/en/kb/htmlcss/how-to-copy-text-from-html-element-to-clipboard.html
    var r = document.createRange();
    r.selectNode(document.getElementById('result'));

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    let ele = document.execCommand('copy');
    if (ele === true) {
        alert('👏copied successfull👏')
    }
    window.getSelection().removeAllRanges();

});

