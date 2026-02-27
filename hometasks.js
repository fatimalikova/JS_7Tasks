//1
// let number = prompt("Enter first number:");
// if(number % 21 === 0){
//     console.log("The number is divisible by 3 and 7.");
// }
// else{
//     console.log("The number is not divisible by 3 and 7.");
// }

//2
// let n = Number(prompt("Enter first number:"));
// let m = Number(prompt("Enter second number:"));
// let count = 0;
// if(n<m){
//     for(let i=n;i<=m;i++){
//         if(i%2!=0){
//             count++;
//         }
//     }
// }
// console.log("There are " + count + " odd numbers between " + n + " and " + m + ".");

//3
// let n = Number(prompt("Enter first number:"));
// let m = Number(prompt("Enter second number:"));
// let sum = 0;
// if(n<m){
//     for(let i=n;i<=m;i++){
//         if(i%2!=0){
//             sum+=i;
//         }
//     }
// }
// console.log("The sum of odd numbers between " + n + " and " + m + " is: " + sum);


//4-complex and prime numbers
// let n = Number(prompt("Enter a number:"));
// let isPrime = true;
// if(n<=1){
//     isPrime = false;
// }
// else{
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     console.log(n + " is a prime number.");
// }
// else{
//     console.log(n + " is not a prime number.");
// }

//5
// let array = [1, 12, 123, 43, 5,34,23,35,12,11,45,67,89,90];
// let sum =0;
// for(let i=0;i<array.length;i++){
//     if (array[i]%2===0){
//         sum+=array[i];
//     }
// }
// console.log("The sum of even numbers in the array is: " + sum);

//6
// let numbers = [11,23,46,86,34,56,78,90,97,45,67,89,1];
// let sum = 0;
// for(let i=0;i<numbers.length;i++){
//     if (numbers[i]%2===0){
//         sum+=numbers[i]**2;
//     }
// }
// console.log("The sum of squares of even numbers in the array is: " + sum);

//7
// function CheckNumTypeORnot(a,b){
//     let sum = 0;
//     if(typeof a === "number" && typeof b === "number"){
//         console.log("Both variables are numbers.");
//         if(a<b){
//             for(let i=a;i<=b;i++){
//                 sum +=i;
//             }
//         }
//         console.log("The sum of numbers between " + a + " and " + b + " is: " + sum);
//     }
//     else{
//         console.log("At least one of the variables is not a number.");
//     }
// }

// CheckNumTypeORnot(12,34);
// CheckNumTypeORnot(12,"hello");