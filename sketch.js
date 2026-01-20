// let names=["john", "david", "mary"];
// console.log(names[0]);
// names[1]="brian"; // changing the value of an item in an array if you know the index
// names.push("bethany"); //adds item at the end of an array
// names.pop(); //removes the last item in an array
// names.shift(); //removes the first item in an array
// names.unshift("charles"); //adds item at the start of an array
// for (let i = 0; i < names.length; i++){ //for each item in an array, show the item at that index
// 	console.log(names[i]);
// }
// console.log(names);
// console.log(names.indexOf("mary")) //displays the index of a specific item
// let cool_names = names.slice(1,3);
// console.log(cool_names); //displays a section of an array by deciding the start and end point
// names.splice(1,1); //starts at a specific index and removes the next x amount of items 
// console.log(names);

// ==================================== START OF FRUIT LAB ==================================== \\

let fruits=["apple", "banana", "orange", "pear"];


//Read from the array

console.log(fruits[0]); //first
console.log(fruits[(fruits.length)-1]); //last


// Modify the basket

let bIndex = fruits.indexOf("banana");
fruits[bIndex] = "kiwi";

fruits.pop();

fruits.unshift("mango");

for (let i = 0; i < fruits.length; i++){
	console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}


// Search for fruit

if (fruits.indexOf("orange") === -1) {
	console.log("Orange not found");
} else {
	console.log(`Orange found at index ${fruits.indexOf("orange")}`)
}

// Copy part of the basket

let mid = 0

//if array is odd, take the halfway point and take away 0.5 to find a value
if ((fruits.length)%2 === 1) {
	mid = (fruits.length/2) - 0.5;
} else {
	mid = (fruits.length/2);
}

let citrus = fruits.slice(mid, mid+2);

console.log(citrus)


function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
