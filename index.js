// <!-- @acxbank sort-an-array-of-numbers -->
// ### Q1. sort-an-array-of-numbers

// Write a function named `sortArrNum` that takes in an array of numbers and returns the array sorted from lowest to highest.

// Examples:
// ```javascript
// sortArrNum([3, 5, 7, 1, 9, 0]);  // returns [0, 1, 3, 5, 7, 9]

const sortArrNum = arr => arr.sort();

console.log(sortArrNum([3, 5, 7, 1, 9, 0]));

// ```
// <!-- end @acxbank -->


// <!-- @acxbank sort-an-array-of-strings -->
// ### Q2. sort-an-array-of-strings

// Write a function named `sortArrStr` that takes in an array of strings and returns the array sorted alphabetically.

// Examples:
// ```javascript
// sortArrStr(['cat', 'elephant', 'dog', 'walrus']);  // returns ['cat', 'dog', 'elephant', 'walrus']
// ```
// <!-- end @acxbank -->
// <!-- @acxbank sort-a-string -->
const sortArrStr = arr => arr.sort((a, b) => a - b);

console.log(sortArrStr(['cat', 'elephant', 'dog', 'walrus']));

// ### Q3. sort-a-string

// Write a function named `sortStr` that takes in a string and returns a string of the letters sorted alphabetically.

// Examples:
// ```javascript
// sortStr('hello');  // returns 'ehllo'
// sortStr('big apple'); // returns ' abegilpp'
// ```
const sortStr = str => [...str].sort().join("");

console.log(sortStr('big apple'));


// <!-- end @acxbank -->
// <!-- @acxbank reverse-an-array -->
// ### Q4. reverse-an-array

// Write a function named `arrReverse` that takes in an array of numbers and returns an array of numbers in the reverse order.

// Examples:
// ```javascript
// arrReverse([1, 2, 3, 4, 5]);  // returns [5, 4, 3, 2, 1]
// ```
const arrReverse = arr => arr.reverse();

console.log(arrReverse([1, 2, 3, 4, 5]));

// <!-- end @acxbank -->
// <!-- @acxbank reverse-string-2 -->
// ### Q5. reverse-string-2

// Write a function called `reverseStr` that uses the [`reverse`](http://www.w3schools.com/jsref/jsref_reverse.asp) method to reverse a string and return the reversed string. Do NOT use a typical loop; just use the `reverse` method.


// Examples:
// ```js
// reverseStr('hello'); //returns 'olleh'
// reverseStr('when am i?'); //returns ?i ma nehw'

const reverseStr = str => [...str].reverse().join("");

console.log(reverseStr('when am i?'));


// ```
// <!-- end @acxbank -->
// <!-- @acxbank sort-objects -->
// ### Q6. sort-objects

// Write a function named `sortObjs` that takes in an array of objects and sorts them alphabetically by their `name` property.

// Examples:
// ```javascript
// sortObjs([{name: 'lesane'}, {name: 'sean'}, {name: 'kendrick'}, {name: 'christopher'}, {name: 'young thug'}]);  // returns [{name: 'christopher'}, {name: 'kendrick'}, {name: 'lesane'}, {name: 'sean'}, {name: 'young thug'}]
// ```

const sortObjs = obj => obj.sort((a, b) => (a.name > b.name) ? 1 : -1);

console.log(sortObjs([{ name: 'lesane' }, { name: 'sean' }, { name: 'kendrick' }, { name: 'christopher' }, { name: 'young thug' }]));


// <!-- end @acxbank -->
// <!-- @acxbank high-low-sort -->
// ### Q7. high-low-sort

// Write a function called `highLow` that uses the [`sort`](http://www.w3schools.com/jsref/jsref_sort.asp) method to sort an array of methods from high to low. 

// Examples:
// ```js
// highLow([1,2,3,4,5]); //returns [5,4,3,2,1]
// highLow([10,5,11,2,6,7,26]); //returns [26,11,10,7,6,5,2]

const highLow = arr => arr.sort((a, b) => b - a);

console.log(highLow([10, 5, 11, 2, 6, 7, 26]));


// ```
// <!-- end @acxbank -->
// <!-- @acxbank legal-drinking-age -->
// ### Q8. legal-drinking-age

// Write a function named `checkDrinkingAge` that takes in an array of objects, each of which has a `name` property and `age` property. The function should return `true` if everyone's 21 or older, and should return `false` if anyone is under 21. 

// Examples:
// ```javascript
// checkDrinkingAge([{name: "Adrian", age: 33}, {name: "Jojo", age: 23}, {name: "Cornelius", age: 26}]);  // returns true
// checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 20}]); // returns false
// ```
const checkDrinkingAge = arr => arr.every(x => x.age >= 21);

console.log(checkDrinkingAge([{ name: "Tommy", age: 22 }, { name: "Chucky", age: 24 }, { name: "Lil", age: 20 }]));


// <!-- end @acxbank -->
// <!-- @acxbank implement-sort -->
// ### Q9. implement-sort

// Write a function named `sort` that takes in an array of numbers and sorts them in order from lowest to highest. Do not use the built in `.sort` array method in your answer.

// Examples:
// ```javascript
// sort([11, 2, 36, 4, 15]);  // returns [2, 4, 11, 15, 36]
// ```


//Bubble sort
let sort = arr => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};


console.log(sort([11, 2, 36, 4, 15]));


// <!-- end @acxbank -->



