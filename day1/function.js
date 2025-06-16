// 1. Nəticələr nə olacaq?
const person = {
    name: "Ayşe",
    regularFunction: function () {
        return this.name;
    },
    arrowFunction: () => {
        return this.name;
    }
};

console.log(person.regularFunction());//ayse
console.log(person.arrowFunction());//sehvdir

// 2.
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5));//10

// 3.
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(3));//8

//4.
const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    }
};

const getValue = obj.getValue;
console.log(getValue());//undefined
console.log(obj.getValue());//42

const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue());//42

// 5.
function createFunctions() {
    var functions = [];
    for (var i = 0; i < 3; i++) {
        functions[i] = function () {
            return i;
        };
    }
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]());//3
console.log(funcs[1]());//3
console.log(funcs[2]());//3

//6.
var x = 10;

function outer() {
    var x = 20;
    
    function inner() {
        var x = 30;
        console.log(x);
    }
    
    inner();
    console.log(x);
}

outer();
console.log(x);//30

// 7.
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            return ++count;
        },
        decrement: function() {
            return --count;
        },
        getCount: () => count
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());//1
console.log(counter1.increment());//2
console.log(counter2.increment());//1
console.log(counter1.getCount());//2