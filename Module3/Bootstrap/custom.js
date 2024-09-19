// comments 
/* multi line comments 
can be done as follows 
*/
// variables definining using var and let keywords 
var student = "Habtamu Bore";
let currentYear = 2024;

let isRaining = false;


let firstName = `Tesfaye T`;//'Tesfaye T';//"Tesfaye T";
let lastName = "Gari";

//let fullName = firstName + " " + lastName; //Tesfaye T Gari
let fullName = `${firstName} ${lastName}`; //Tesfaye T Gari

let demo;
let test = null;

let students = ["Habtamu", "Getnet", "Meski"]

let studentObj = { name: "John Do", dateOfBirth: "4/1/2000", phone: "123-987-9877", email: "habtamu@email.com", canContact: false }

let a = 10;
let b = 20;
let c = "20";

let testInc = 60;
testInc = testInc + 20; // testInc  += 20;

testInc = testInc + 1; //testInc++;

a == b; //false
a === b; //false
a > b; //false
a < b; //true
a >= b; //false
b == c; //true
b === c; //false
b != c; //false


//conditional statement 
/** 
 * Syntax of if ... else if ... else ..  statement 
 *  if(expression1){
 *      true value for expression1 block....
 * }else if(expression2){
 *      true value for expression 2
 * }else {
 *     statement when expression1 and expression2 is not true 
 * }
*/
let m = 10;  // if m = 1 then month is Jan, if m = 2 month is Feb ..... Dec

console.log("Advanced JS file Part II of JS class ");

if (m == 1) {
    console.log("Month is January");
} else if (m == 2) {
    console.log("Month is February");
} else if (m == 3) {
    console.log("Month is March");
} else if (m == 4) {
    console.log("Month is April");
} else if (m == 5) {
    console.log("Month is May");
} else if (m == 6) {
    console.log("Month is June");
} else if (m == 7) {
    console.log("Month is July");
} else if (m == 8) {
    console.log("Month is August");
} else if (m == 9) {
    console.log("Month is September");
} else if (m == 10) {
    console.log("Month is October");
} else if (m == 11) {
    console.log("Month is November");
} else if (m == 12) {
    console.log("Month is December");
} else {
    console.log("Month is Not valid");
}

console.log('Switch case statemt outpuit ')
switch (m) {
    case 1: console.log("Month is January");
        break;
    case 2: onsole.log("Month is February");
        break;
    case 3: console.log("Month is March");
        break;
    case 4: onsole.log("Month is April");
        break;
    case 5: console.log("Month is May");
        break;
    case 6: onsole.log("Month is June");
        break;
    case 7: console.log("Month is July");
        break;
    case 8: console.log("Month is August");
        break;
    case 9: console.log("Month is Sept");
        break;
    case 10: console.log("Month is Oct");
        break;
    case 11: console.log("Month is Nov");
        break;
    case 12: console.log("Month is Dec");
        break;
    default: console.log("Month is Invalid");
}


console.log("end of the code")

let month = (m == 1) ? "JANUARY" : "Not JANUARY";
console.log("value of month is : ", month)

//Looping 

let pricing = [
    {
        title: "Free",
        price: 0,
        numUsers: 10,
        numStorage: 2,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
    {
        title: "Pro",
        price: 10,
        numUsers: 20,
        numStorage: 10,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Enterprise",
        price: 29,
        numUsers: 30,
        numStorage: 15,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Silver",
        price: 40,
        numUsers: 50,
        numStorage: 20,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Signup for free", url: "https://google.com" }
    },
    {
        title: "Platinum",
        price: 50,
        numUsers: 70,
        numStorage: 30,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    },
    {
        title: "Gold",
        price: 60,
        numUsers: 75,
        numStorage: 100,
        emailInclude: true,
        helpAccess: true,
        link: { title: "Get Started", url: "https://google.com" }
    }
]

//For loop 
/** Sytax of for loop 
 * for(initilization; condition1; action){
 *      Loop statements 
 * }
 */
for (let index = 0; index < pricing.length; index = index + 1) {
    console.log("item #" + index + " is " + pricing[index].title);
}

console.log("Simplified version of the for loop")

for( let index in pricing){
    console.log("item #" + index + " is " + pricing[index].title);
}


console.log("Even more Simplified version of the for loop")

for(let p of pricing){
    console.log( "Item: ", p.title);
}

// some builtin functions 
//let fnc = alert("I am teting alert function");

let fnc  =confirm("Testing confirm function ");

console.log(fnc);





