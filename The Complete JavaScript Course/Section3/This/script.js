calculateAge(1998);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}


var magnus = {
    name: "Magnus",
    yearOfBirth: 1998,
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
        console.log(this);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

magnus.calculateAge();