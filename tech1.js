//1. what are possible ways to create objects in JS?
// 1. object literal syntax
const obj1 = {
    name: "x",
    age: 20
}
// 2. object constructor
var object = new Object()
var object = Object()
//3. object create
const object = Object.create(null)
// 4. function constructor with prototype
function Person() { }
Person.prototype.name = 'fidan'
//5. function constructor
function Car() {
    this.year = 2021
    this.model = model
}
var object = new Car('toyata')
//6. object assign
const orgObj = { model: "xyz" }
const carObj = { name: "aze" }
const staff = Object.assign({}, orgObj, carObj)
//7. class syntax es6
class Food {
    constructor(name) {
        this.name = name
    }
}
var object = new Food('kartof')

//2. what is a prottotype chain?
// 1.
function Chain() { }
const chain1 = new Chain()
console.log(Object.prototype(chain1) === Chain.prototype);//true
//2.
function Person(name) {
    this.name = name
}
Person.prototype.sayHi = function () {
    console.log(`hi ${this.name}`);

}
const fidan = new Person('Fidan');
fidan.sayHi(); // hi Fidan

//3. what is the differ between call, apply, bind?

//call syntax
function call(thisArg, arg1, arg2) { }

var emp1 = { name: 'x', last: "y" }
var emp2 = { name: 'z', last: "k" }

function invite(greet1, greet2) {
    console.log(greet1 + " " + this.name + " " + this.last + " " + greet2)
}
invite.call(emp1, 'hello', 'how are you')

//apply syntax
function apply(thisArg, [ar1, arg2]) { }

invite.apply(emp1, ['hello', 'how are you'])

//bind syntax
// function bind(thisArg[, arg1[, arg2[, ...]]]){}

const inviteEmp1 = invite.bind(emp1, 'Salam', 'xoş gəlmisiniz!');
inviteEmp1();

const inviteEmp2 = invite.bind(emp2, 'Hi', 'welcome!');
inviteEmp2();

//4. pure vs impure 
//pure-> same input, same output, console.log(), alert()dont work, not side effect, not dom , not api fetch

//impure
let numberArr = []
const impureAddNumber = (number) => numberArr.push(number)

//pure
const pureAddNumber = (number) => (inputArray) => inputArray.concat([number])

//5. currying and parical 
//currying syntax
const curry1 = a => b => c => a + b + c
const curry2 = (a) => (b) => (c) => a + b + c
//partical synatx
// const partical = function.bind(null, arg1, arg2){}

// example 1
function orderFood(mainDish, tea, dessert) {
    console.log(`sifaris ${mainDish},${tea}, ${dessert} `);

}
const orderWithTea = orderFood(null, undefined, 'cay')
orderWithTea('salad', 'tort')

//misal2 
function add(a, b, c) {
    return a + b + c
}

const addOne =add.bind(null, 1)
console.log(addOne(2,3));

const addTwo = add.bind(null, 1, 2)
console.log(addTwo(3));
