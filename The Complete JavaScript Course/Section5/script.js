// Function constructor

/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
 
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = "Holtet";

var magnus = new Person("Magnus", 1998, "Teacher");;


// Objec.create

var personProto = {
    calculateAge: function() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

// Bad
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1998;
john.job = "Teacher";
john.calculateAge();

// Good, ish
var magnus = Object.create(personProto, {
    name: { value: "Magnus" },
    yearOfBirth: { value: 1998 },
    job: { value: "Teacher" }
});

*/

/*
let years = [1990, 1998, 1999, 2000, 1945, 2002, 2016];

// Callback functions
function calculateAge(el) {
    return (new Date().getFullYear() - el)
}

function personIsFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


// Main function
function arrayCalc(arr, fn) {
    let arrResult = [];
    
    for (let i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]))
    }

    return arrResult;
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, personIsFullAge);
let heartRates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartRates);

*/

/*
// Anonymouse functions 
function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name, ", can you please explain what UX design is?");
        };
    } else if (job === "teacher") {
        return function(name) {
            console.log(name, ", can you please explain what you teach?");
        };
    } else {
        return function(name) {
            console.log("Hello", name, ", what do you do?");
        };
    }
}

let teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Magnus");

interviewQuestion("designer")("Andreas");

*/

/*
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);æ
})();

*/

/*
function retirement(retirementAge) {
    let a = ' years left until retirement';
    return function(yearOfBirth) {
        let age = (new Date().getFullYear() - yearOfBirth);
        console.log((retirementAge - age) + a);
    }
}

let retirementAge = retirement(66);
retirement(67)(1998);

*/

/*
function interviewQuestion(job) {
    return function (name) {
        if (job === "designer") {
            console.log(name, "er designer.")

        } else if (job === "teacher") {
            console.log(name, "er lærer");
        } else {
            console.log("Hva jobber du med, ", name, "?");
        }
    }
}
interviewQuestion("teacher")("magnus");
*/


let john = {
    name: "John",
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", ladies and gentlemen! I\'m " + this.name + " I\'m " + this.age + " years old and I\'m a " + this.job);
        } else if (style === 'friendly') {
            console.log("Hey, sup?" + "I\'m " + this.name + "I\'m " + this.age + " years old and I\'m a " + this.job + ". Have a nice " + timeOfDay + "!")
        }
    }
}

john.presentation("formal", "morning");

let emily = {
    name: "Emily",
    age: 20,
    job: 'designer'
}

john.presentation.call(emily, 'friendly', 'night');