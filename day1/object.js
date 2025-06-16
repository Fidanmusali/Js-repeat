

// sual 1 ; JavaScript-də obyekt yaratmağın neçə yolu var? Hər birini misal ilə göstərin.

// 1. object literal
const user = { name: 'fidan', age: 20 }

//2. construction function
function Person(name, age) {
    this.name = name
    this.age = age
}
const obj2 = new Person('fidan', 30)

//3. object create 
const obj3 = Object.create({ name: 'ayse' })

//4. class
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade
    }
}
const obj4 = new Student('Fidan', 'a')

//5. factory function 

function createUser(name) {
    return {
        name: name,
        greet() { return `salam ${this.name}` }
    }
}
const obj5 = createUser('fidan ')

//2. Object.create() metodunun istifadəsini izah edin və {} literal-dan fərqini göstərin.
// cavab ; Object.create() prototype-based inheritance yaradır, {} literal isə sadə obyekt yaradır.

const parent = { type: 'parent' }
const child1 = Object.create(parent)// parent protype u olur
const child2 = {}//object.protype protype u dur

// 3. Constructor function və class arasında nə fərq var?
// cavab; Constructor function ES5 sintaksisdir, class ES6-da gəlmişdir və daha oxunaqlıdır:

//constructor
function Car(brand) { this.brand = brand }
Car.prototype.start = function () { return 'started' }

//class
class Car {
    constructor(brand) { this.brand = brand }
    start() { return 'started' }
}

// 4.Factory function nədir və nə vaxt istifadə edilir?
// cavab; Factory function obyekt qaytaran adi funksiyadır, new keyword-ə ehtiyac yoxdur:

function createProduct(name, price) {
    return {
        name,
        price,
        getInfo() { return `${name} ${price} azn` }
    }
}

// 5. JavaScript-də obyektin property-lərinə müraciət etməyin neçə yolu var?

const obj = { name: 'Ali', age: 20 }

//Dot
console.log(obj.name);

//bracket
console.log(obj['age']);

//dynamic
const prop = 'name'
console.log(obj[prop]);


// 6. for...in, Object.keys(), Object.values(), və Object.entries() arasında nə fərq var?

const obj6 = { a: 1, b: 2, c: 3 };

// for...in loop 
for (let key in obj6) {
    console.log(key);
}

Object.keys(obj6)
Object.values(obj6)
Object.entries(obj6)

//7.  hasOwnProperty() metodunun məqsədi nədir?
// cavab; hasOwnProperty() property-nin obyektin öz property-si olub-olmadığını yoxlayır:

const parent1 = { x: 1 }
const child = Object.create(parent1)
child.y = 2
child.hasOwnProperty('y') //true
child.hasOwnProperty('x')//false


//8.  Computed property names nədir və necə istifadə edilir?

const propName = 'userName';
const obj7 = {
    [propName]: 'lali',
    [`${propName}Age`]: 24
}

//Destructuring Assignment

//9. Array destructuring-də rest operator (...) necə işləyir?

const arr = [1, 2, 3, 4, 5, 6]
const { first, second, ...rest } = arr

//10. Object destructuring-də default dəyərlər necə təyin edilir?

const { name = 'Anonim', age = 0 } = { name: 'Ali' };
// name: 'Ali', age: 0

//11. Bu kodun nəticəsi nə olacaq?
const { a: x = 5, b: y = 10 } = { a: 3 };
console.log(x, y);//3, 10

// 12.nested
const person = {
    name: 'Ali',
    address: {
        city: 'Bakı',
        street: 'Nizami küç.'
    }
};
const { address: { city, street } } = person



// Praktiki Cavablar

//13. Verilmiş array-dan cüt ədədləri tapıb onların kvadratını hesablayan kod yazın.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = numbers.filter(num % 2 === 0).map(num => num ** 2)

//14. Obyektin bütün key-value cütlərini göstərən funksiya yazın.
function showKeyValue(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}; ${value}`);

    })
}
//15. İki array-ı birləşdirərək yeni obyekt yaradan kod yazın.
const keys = ['name', 'age', 'city'];
const values = ['Ali', 25, 'Bakı'];

const obj8 = Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
)// {name: 'Ali', age: 25, city: 'Bakı'}


//16. Nested obyektdən müəyyən property-ni destructuring ilə necə çıxarmaq olar?
const data = {
    user: {
        profile: {
            name: 'Ali',
            settings: {
                theme: 'dark'
            }
        }
    }
};

// Nested destructuring
const {user: {profile: {settings: {theme}}}} = data;
console.log(theme); // 'dark'

// Və ya alias ilə
const {user: {profile: {name: userName}}} = data;
console.log(userName); // 'Ali'
