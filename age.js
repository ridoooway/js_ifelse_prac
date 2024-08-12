let age= 65;
let isStudent = false;

let fare;

const REGULAR_FARE = 700;

if(age < 10) {
    fare = 0; //free for children
}
else if (isStudent) {
    fare = REGULAR_FARE* 0.5; //50% for students
}
else if (age >= 60) {
    fare = REGULAR_FARE *0.85 //15% for seniors //this should be output
}
else{
    fare= REGULAR_FARE;
}
console.log("Ticket fare " + fare + " tk");