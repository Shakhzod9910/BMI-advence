// console.log(Math.round(Math.random() * 100000));
// console.log(Math.round(5.4));
// console.log(43.53422.toFixed(10));

// var x = prompt("ixtiyoriy raqam");
// var y = prompt("yana bir marta");
// var z = prompt(`${x}+${y}=`);
// var x = x-0
// var y = y-0
// var z = z-0


// if(x===27){
//     console.log('Assalomu alekum Farrux aka')
// }else if(x===23){
//     console.log('Salom Shaxzod')
// }else{
//     console.log('Tanimadim aka')
// }


// if(x+y===z){
//     console.log('true')
// }else{
//     console.log('false')
// }

var elForm = document.querySelector('.form');
var elweight = elForm.querySelector('.weight');
var elheight = elForm.querySelector('.height');
var result = document.querySelector('.box');

// console.log(elForm,elweight,elheight,result)


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var weight = elweight.value;
    var height = elheight.value;
    var BMI = weight / (height*height);
    if(BMI < 15){
        result.textContent=('Vazningizni oshirishingiz kerak')
    }else if( BMI >= 15 && BMI <= 24.9){
        result.textContent=('Sizning vazningiz normal')
    }else if( BMI >= 25 && BMI <= 26){
        result.textContent=('Siz bir oz vazn yo\'qotishingiz kerak')
    }else if( BMI >= 26 && BMI <= 27){
        result.textContent=('Sizda keragidan ko\'proq vazn bor')
    }else{
        result.textContent=('Siz ozishingiz shart')
    }
    
    elweight.value = null
    elheight.value = null
})








let ElForm = document.querySelector(".val")
let elUzs = ElForm.querySelector(".uzs")
let elMoney = ElForm.querySelector(".money")
let ElResult = ElForm.querySelector(".output")
let usd = 10800;
let euro = 12200;
let funt = 14500;

function calculate(money){
    if(elMoney.value === "usd"){
        return('$'+ (money / usd).toFixed(2))
    }else if (elMoney.value === "euro"){
        return((money / euro).toFixed(2) + ' euro')
    }else if (elMoney.value === "funt"){
        return((money / funt).toFixed(2) + ' funt')
    }
}

ElForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let Eluzss = elUzs.value
    if( Eluzss < 0 || isNaN(Eluzss)){
        console.log('xato')
        elUzs.style.border ='3px solid red'
        return;
    }else{
        console.log('perfect')
    }


    
    ElResult.textContent = (calculate(Eluzss));
})
// FizzBuzz
let elFizz = document.querySelector(".fizbaz")
let inNumber = elFizz.querySelector(".inNumber")
let ElAnswer = elFizz.querySelector(".answer")
// console.log(elFizz,inNumber,ElAnswer)
elFizz.addEventListener('submit', function(evt){
    evt.preventDefault();
    let iNumber = inNumber.value
    if (iNumber % 3 === 0 && iNumber % 5 === 0){
        ElAnswer.textContent = ('ok ok ok')
    }else if(iNumber % 5 === 0){
        ElAnswer.textContent = ('ok ok')
    }else if(iNumber % 3 === 0){
        ElAnswer.textContent = ('ok')
    }else{
        ElAnswer.textContent = ('no no no')
    }
    
})

function FizzBuzz(number){
    let messege = '';
    if(number % 3 === 0){
        messege = messege + 'fizz'
    }

    if(number % 5 === 0){
        messege = messege + 'buzz'
    }

    return messege || number;
}
console.log(FizzBuzz(30))