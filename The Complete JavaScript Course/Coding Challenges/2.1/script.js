var p1 = prompt("Height one: ");
var p2 = prompt("Height two: ");
var p3 = prompt("Height three: ");

var age1 = prompt("Age one: ");
var age2 = prompt("Age two: ");
var age3 = prompt("Age three: ");

var sum1 = p1 + 5 * age1;
var sum2 = p2 + 5 * age2;
var sum3 = p3 + 5 * age3;

if (p1 > p2 && p1 > p3) {
    console.log("P1 is the winner!");
} else if (p2 > p1 && p2 > p3) {
    console.log("P2 is the winner!");
} else if (p3 > p1 && p3 > p2) {
    console.log("P3 is the winner!");
} else {
    console.log("No winner!");
}
