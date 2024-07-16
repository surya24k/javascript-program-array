// Array Creation and Initialization

let i=" ";
for(i=0;i<5;i++){
    document.write(i);
}
document.write("<br>")

// is for the array manipulation

let color = ["red","yellow","blue","green"];
document.write(color);
document.write("<br>")

// using push to manipulate the array by adding

let shape = ["circle","square","rectangle"];
shape.push("triangle");
document.write(shape);
document.write("<br>")

// using pop to manipulate the array by removing 

let number = ["0","2","1","5"];
number.pop();
document.write(number);
document.write("<br>")

// using shift to manipulate the array by removing

let alpha = ["x","y","z"];
alpha.shift("x");
document.write(alpha);
document.write("<br>")

// using unshift to manipulate the array by adding

let digit = ["10","20","30","40"];
digit.unshift("50");
document.write(digit);
document.write("<br>")

//Array Searching
let vegtable=["tomato","Onion","greens"]
document.write(vegtable);
document.write("<br>")

//Indexof
document.write(vegtable.indexOf("Onion"));
document.write("<br>")

//Array joining
document.write(vegtable.join("fruit"))
document.write("<br>")

//Array Merging
const ar=fruit.concat(vegtable);
document.write(ar);