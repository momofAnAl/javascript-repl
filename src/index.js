// Use this file as a general scratch pad for running code.

// Run in the terminal from the project directory with
//   node src/index.js

// Or as
//   npm start

// Files other than src/index.js must be run using
//   node path/to/file.js

// Where `path/to/file.js` represents the path to the file to be run relative to
// the current working directory.

// The `Code Runner` VS Code Extension can be installed to add a Play button for
// JavaScript code.

// Refer to math.js and math.test.js for an example of a small test.
// More details will be covered in Unit 3, Tests.

// Run from the terminal with
//   npm test

// The `Jest` VS Code Extension can be installed so that the tests are detected
// and appear under the VS Code Testing panel.

// Replace with the code you'd like to run
// console.log('Hello, World!');
// console.log(1 + 1);

// console.log(Array.prototype);
// console.log('Hello, World!');

const calculateTotalPrice = function (order) {
    let total = 0;
    for (const item of order){
        total += item.price;
    }
    return total;
    // for (let i = 0; i < order.length; i++){

    // }
}
const myOrder = [
    { 
        entre: 'Fish Tacos', 
        price: 14.9, 
    },
    { 
        entre: 'Vegan Spaghetti', 
        price: 21.47,
    },
];

const myTotal = calculateTotalPrice(myOrder)
console.log(`The total is $${myTotal}`);