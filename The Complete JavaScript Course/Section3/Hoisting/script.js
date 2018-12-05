// Functions

calculateAge(1998);

function calculateAge(year) {
    console.log(2018 - year);
}

// retirement(1998);

var retirement = function(year) {
    console.log(65 - (2018 - year));
}


// variables

console.log(age);       // undefined
var age = 25;
console.log(age);


function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);