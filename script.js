// window.alert("Hello World!");
// console.log("Hello!");
// prompt("What is your name?");
// console.log(document);
// document.writeln("<h1 style='color: blue;'>Hello World!</h1>");
// document.getElementById("text").innerText = "Hello Fatima!";
//lete,var,const
// var num = 12;
// let word = "Hello";
// const pi = 3.14;
//hoisting=yuxarda caxirmaq mentiqidir (var,let,const)
//hosting scope=>global scope, function scope, block scope
// var num =12;
// var num =18;
// console.log(num);

// console.log(word);
// let word = "Hello";
// word=12;

// console.log(pi);
// const pi = 3.14;

// console.log(num);
// if(true){
//     const num = 12;
// }

//oz scopunda islediyi ucun console logu yuxari cixarsaq undefined verecek=>let,const
//amma let her yerde elcatandi

// function A(){
//     console.log(num);//scope xaricinde islemir,undefined verecek
//     let num = 12;
// }
// A();

// let num = 12;
// if (true){
//     console.log(num);
// }//global scope da isleyir,12 verecek

//operators
//aritmetic operators=> +,-,*,/,%,++(increment),--(decrement)
//assignment operators=> =,+=,-=,*=,/=
//comparison operators=> ==,===,!=,!==,>,<,>=,<=
//logical operators=> &&(and),||(or),!(not)
//ternary operator=> condition ? expr1 : expr2

//truthy and falsy values
//falsy values=> false,0,"",null,undefined,NaN
//truthy values=> true,1," ",[],{},function(){}}

// let numbers =["helloo",12,true,null,undefined,NaN,[],{name:"Fatima"}];
// // for(let i=0;i<numbers.length;i++){
// //     console.log(numbers[i]);
// // }

// numbers.push("new value");//sonuna elave edir
// numbers.unshift("first value");//basa elave edir
// numbers.pop();//sonuncunu silir
// numbers.shift();//basindaki element silir
// console.log(numbers);

// try{
//     const num =12;
//     num=18;
// }
// catch(error){
//     console.log( error.message);
// }
// finally{
//     console.log("This will always be executed.");
// }

// throw new Error("This is an error message!");

//function yaratmaq yollari=> function declaration, function expression, arrow function
// function declaration
function Print(message) {
    console.log("Hello " + message);
}
Print("Fatima!");

// function expression
const Print2 = function (message) {
    console.log("Hello " + message);
}
Print2("Fatima!");

//arrow function
const Print3 = (message) => {
    console.log("Hello " + message);
}
Print3("Fatima!");