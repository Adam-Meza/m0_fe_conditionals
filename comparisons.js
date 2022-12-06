// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// console log the boolean value of the comparison (is 4 less than 9?), this would read as "true"
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// the variable "books" has been established and assigned the value of 3, 
// then, console log the boolean value of the comparison (is 4 less than the value of the variable 'books'")
// in this case it would read as "false" 
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// the variables friends and siblings have been established and assigned the value or 6 and 2, respectively
// console log the boolean value of the comparision (is the value ot he variable 'friends' greater than the value of the variable 'siblings?')
// in this case it would read as "true"
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// the variable attendees has been established and assigned the value of 9
// the variable meals has been established and assigned the value of 8
// console log the boolean value of the comparison (is the value of the variable 'attendees strictly unequal to the value of the variable 'meals'?)
// in this case it would print out "true"

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy

if (age <= 3 && lovesToPlay) {
    console.log("This puppy loves to play!");
}

// What did your final line of code evaluate to? Why do you think that is? Explain.

// ANSWER:

// not sure how to answer this. I havent established any varibale or criteria on what defines 'puppy'
// My instinct was to establish this for myself in order to determine that yes in fact the dog is a puppy
// however i'm not sure if you guys wanted me to run it and get an error message? 
// but assuming I wrote the code correctly, I assumed that a puppy is any dog under the age of 3
// this returned a boolean value of true and so it ran the console log I wrote