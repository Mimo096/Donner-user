/**
 * Bonus 3
 */

const userFirstName = window.prompt("Hey ! Quel est votre prénom ?");
const userLastName = window.prompt("Hey ! Quel est votre nom de famille ?");
const userBirthDay = window.prompt("Hey ! Quel est votre jour de naissance ? (Format : entre 1 et 31.)");
const userBirthMonth = window.prompt("Hey ! Quel est votre mois de naissance ? (Format : entre 1 et 12.)");
const userBirthYear = window.prompt("Hey ! Quelle est votre année de naissance ? (Format : AAAA.)");

// Building user's birth date.
// Note that JavaScript is expecting a number between 0 and 11 for the month.
// It wouldn't be very intuitive for the user, though, so we normally ask him
// for a number between 1 and 12, then process it ourselves.
const userBirthDate = new Date(userBirthYear, userBirthMonth - 1, userBirthDay);

const currentDate = new Date();

// Processing user's age.
// First we have to substract the user's birth date from the current date.
// This will give us the difference between the two dates in milliseconds.
let userAge = currentDate - userBirthDate;
// Then we convert these milliseconds in years: we divide it by the number
// of milliseconds in a year.
userAge = userAge / (365 * 24 * 60 * 60 * 1000);
// Finally we floor the found number of years. It's an age, so decimals
// wouldn't be relevant here.
userAge = Math.floor(userAge);
// Not that we could have done this in one line:
// const userAge = `Math.floor(currentDate - userBirthDate) / (365 * 24 * 60 * 60 * 1000));
// There was a lot of other possibilities to get this result. It's okay if
// your code does not exactly look like this.

const greetingMsg = "Salut " + userFirstName + " " + userLastName + ", tu as " + userAge + " ans !";

console.log(greetingMsg);
