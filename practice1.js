//Task1
var money = 1000;
var appleprice = 320;
var orangeprice = 380;
console.log(appleprice + orangeprice);
console.log(money - (appleprice + orangeprice));
console.log(handcase = money - (appleprice + orangeprice));
console.log(handcase);
//Task2
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log(totalMarks);
console.log(totalMarks / 5);
console.log( totalMarks .toFixed(2) ); // toFixed(2) ensures two decimal places
//Average marks
//Task3

var remainder = (119 % 5);
console.log(remainder);

var remainder = (125 % 5);
console.log(remainder);

var remainder = (125/5);
console.log(remainder);

var remainder =125*5;
console.log(remainder);

//Task4
var a = isNaN("I am a string");
var b = isNaN('100');
console.log(a);
console.log(b);

var c = isNaN(50-40);
console.log(c);

var d = isNaN("iam a string"*50);
console.log(d);

//string
//Task1
var text = "amer soner bangla ami tomay valobashi a";
var count = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        count++;
    }
}
console.log(count);
var text1 = "I am a web developer";
var text2 = "an awesome web developer";
var text3 = text1 + " " + text2;
//console.log(text3);
                  
//Task2
var text4 = "Amer soner banglA ami tomay valobashi A  AMADER deshta sopno pore";
var sum = 0;
for (var i = 0; i < text4.length; i++) {
    if (text4[i] === 'a' || text4[i] === 'e' || text4[i] === 'm' || text4[i] === 'A')sum++;
       
    }

//console.log(sum);
//console.log("Total count of vowels (a, e, m, A): " + sum);


//### Task-3: 

//Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`

var text5 = "I am a web developer  and I love coding and programming in JavaScript";
var lowertext=text5.toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelcount ={
                  a: 0,
                  e: 0,
                  i: 0,
                  o: 0,
                  u: 0
};

let totalvowel = 0;

for (let char of lowertext) {
    if (vowels.includes(char)) {
        vowelcount[char]++;
        totalvowel++;
    }
}
console.log("Total vowels:", totalvowel);
console.log("Count of 'a','e','i':", vowelcount['a'], vowelcount['e'], vowelcount['i']);
console.log("Count of 'o':", vowelcount['o']);
console.log("Count of 'u':", vowelcount['u']);