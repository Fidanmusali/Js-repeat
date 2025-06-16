// sual 1
typeof "Fidan";     // "string"
typeof 123;         // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (JavaScript-in tarixi səhvidir)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){} // "function"


// sual 2

let x = [1, 2, 3];
let y = "Salam";
let z = { name: "Fidan" };
let w = null;

Array.isArray(x) // ✅ true
Array.isArray(y) // ✅ false
Array.isArray(z) // ✅ false
Array.isArray(w) // ✅ false


//sual 3

let a = 42;             // ✅ number
let b = "JS";           // ✅ string
let c = true;           // ✅ boolean
let d = null;           // ❗️ object (JavaScript səhvidir, amma belədir)
let e = undefined;      // ✅ undefined
let f = function() {};  // ✅ function
let g = [1,2,3];        // ✅ object (array olmasına baxmayaraq typeof `object` verir)
let h = 123n;           // ✅ bigint

//sual 4

console.log(Boolean(""))     // ✅ false
console.log(Boolean("0"))    // ✅ true
console.log(Boolean(0))      // ✅ false 0->falsy deyerdir
console.log(Boolean([]))     // ✅ true
console.log(Boolean(null))   // ✅ false
