// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Errors received:
// TypeError: expect(...).toequal is not a function
describe ('shuffleArray', ()=>{
    it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order):
        const output1 = ["yellow", "blue", "pink", "green"]

        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order):
        const output2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(output1))
        expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(output2))
    })
})

// b) Create the function that makes the test pass.
// A function that accepts an array
shuffleArray = (array1) => {

    // Removes the first item
    array1.splice(0,1)

    // Shuffles the remaining content using Fisher and Yates modern algorithm
        // for i from array.length-1 down to 1
    for (i=array1.length-1 ; i > 0 ; i--){
        // random integer j, where 0 <= j <= i
        // Due to speed/efficiency considerations, the i is used as a boundary for j instead of array1.length, however both work
        let j = Math.floor(Math.random()*array1.length)
        // Exchange array[j] and array[i]
        let k = array1[i]
        array1[i] = array1[j]
        array1[j] = k
    }
    // Return the modified array
    return array1
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe ('tallyVotes', ()=>{
    it('takes in an object that contains up votes and down votes and returns the end tally', () => {

        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const output1 = 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31
        const output2 = -31

        expect(tallyVotes(votes1)).toEqual(output1)
        expect(tallyVotes(votes2)).toEqual(output2)
    })
})

// b) Create the function that makes the test pass.
// A function that takes in an objetc
const tallyVotes = (obj1) => {

    // Subtract the downVotes property from the upVotes property
    return obj1.upVotes - obj1.downVotes
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe ('twoToOne', ()=>{
    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {

        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        const output = ["array", "object", "number", "string", "Boolean", "null", "undefined"]

        expect(twoToOne(dataArray1,dataArray2)).toEqual(output)
    })
})
// Errors received:
// ReferenceError: Cannot access 'filterDuplicates' before initialization

// b) Create the function that makes the test pass.
// A function that takes 2 arrays
const twoToOne = (arr1,arr2) => {

    // A function that takes in an array and returns it without duplicate entries
    const noDuplicates = (array1) => {

        // Iterate over the array in ascending order
        for (let i = 0 ; i < array1.length ; i++){

            // Iterate over the array in descending order
            for (let j = array1.length-1 ; j > -1  ; j--){

                // Check if a value of a certain index has a duplicate not itself
                if (array1[i] == array1[j] && i != j){

                    // If a duplicate exists, splice it away
                    array1.splice(j,1)
                }
            }
        }
        // Return the argument array without duplicates
        return array1
    }

    // Ensure no duplicates in 1st argument array
    // const arr3 = noDuplicates(arr1)

    // Ensure no duplicates in 2nd argument array
    // const arr4 = noDuplicates(arr2)

    // Ensure no duplicates in concatenated no-duplicate argument arrays
    // const arr5 = arr3.concat(arr4)

    // Ensure no duplicates in concatenated no-duplicate arrays and return
    // return noDuplicates(arr5)

    // Below is the above 4 lines of code in one
    return noDuplicates((noDuplicates(arr1)).concat(noDuplicates(arr2)))
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// Errors generated:
// TypeError: args.flat is not iterable

// STRETCH function below, accepts variable amount of arguments
const manyToOne = (...args) => {

    // A function that takes in an array and returns it without duplicate entries
    const noDuplicates = (array1) => {

        // Iterate over the array in ascending order
        for (let i = 0 ; i < array1.length ; i++){

            // Iterate over the array in descending order
            for (let j = array1.length-1 ; j > -1  ; j--){

                // Check if a value of a certain index has a duplicate not itself
                if (array1[i] == array1[j] && i != j){

                    // If a duplicate exists, splice it away
                    array1.splice(j,1)
                }
            }
        }
        // Return the argument array without duplicates
        return array1
    }
    // Use .flat() method to concatenate multiple arrays as arguments
    // return the flattened arrays without duplicates
    return noDuplicates([...args.flat()])
}

// Describe block for STRETCH implementation of variable argument quantity
describe ('manyToOne', () => {
    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {

        const dataArray1 = ["array", "object", "number", "string", "Boolean"]

        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

        const dataArray3 = ["string", "null", "Boolean", "string", "undefined"]

        const dataArray4 = ["array", "object", "number", "string", "Boolean"]

        const output = ["array", "object", "number", "string", "Boolean", "null", "undefined"]

        expect(manyToOne(dataArray1,dataArray2,dataArray3,dataArray4)).toEqual(output)
    })
})

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total