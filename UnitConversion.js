console.log(" enter 1 for Feet to Inch");
console.log(" enter 3 for Feet to Meter");
console.log(" enter 2 for Inch to Feet");

console.log(" enter 4 for Meter to Feet");


var readlineSync = require('readline-sync');

var input = parseInt(readlineSync.question("Enter the number :")) 

switch(input)
{
case 1:
  var readlineSync = require('readline-sync');

var input1 = parseInt(readlineSync.question("Enter No in Feet :"))

let result = 12*input1;
console.log(input1 +"ft =" +result+"inch");
break;

case 2:
var readlineSync = require('readline-sync');
var input2 = parseInt(readlineSync.question("Enter Number in Feet :"));
let result1 = 0.3048*input2;
console.log(input2 +"ft =" +result1+"meter");
break;

case 3:
var readlineSync = require('readline-sync');
var input3 = parseInt(readlineSync.question("Enter Number in inch :"));
let result2 = 0.0833*input3;
console.log(input3 +"inch =" +result2+"ft");
break;

case 4:
var readlineSync = require('readline-sync');
var input4 = parseInt(readlineSync.question("Enter Number in meter :"));
let result3 = 3.2808*input4;
console.log(input4 +"meter =" +result3+"ft");
break;
default :
console.log("Enter a valid number");
break;
}
