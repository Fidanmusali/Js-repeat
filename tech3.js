const user = {
    name: 'fidan',
    age: 20
}
const user2 = new Object()
let user3 = Object.create()

function Person(name, age) {
    this.name = name
    this.age = age
}
var obj = Person("fidan", 20)

function Car(){}
Car.prototype.model='toyata'
var obj2= new Car()