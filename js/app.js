// 'use strict';

// Prompt
function myName() {
  let myName = window.prompt('What is your name?');
  if (myName === 'Dondre West') {
    alert('Yes my name is Dondre West');
  } else {
    alert('Please try again');
  }
}
myName();


function myState() {
  let myState = window.prompt('Where are you from?');
  if (myState === 'Georgia') {
    alert('Yes I am from Georgia.');
  } else {
    alert('Please try again');
  }
}
myState();



function cityState() {
  let cityState = window.prompt('Would you ever come to Atlanta, Ga?');
  if (cityState === 'yes') {
    alert("You're making a grand gesture.");
  } else {
    alert('Well screw you!');
  }
}
cityState();



function blackUniversity() {
  let blackUniversity = window.prompt("Do you know any of the HBCU's in Atlanta, Ga?");
  if (blackUniversity === 'yes.') {
    alert('RIGHT ON!');
  } else {
    alert('Later for you.');
  }
}
blackUniversity();



function blackOwned() {
  let blackOwned = window.prompt('Do you know how many black-owned bussines there are in Georgia');
  if (blackOwned === 'yes') {
    alert("Beautiful, ain't it?");
  } else {
    alert('BYE!');
  }
}
blackOwned();




function boughtHouse() {
  let boughtHouse = window.prompt('Did you know that Steve Harvey bought Tyler Perry\'s house in Atlanta.');
  if (boughtHouse === 'yes') {
    alert("I didn't know Steve Harvey was ballin like that!!");
  } else {
    alert("It's true.");
  }
}
boughtHouse();




function dreamCar() {
  let dreamCar = window.prompt('What is your dream car?');
  if (dreamCar === 'Rolls Royce') {
    alert('You got it!');
  } else {
    alert('Nah, fam.');
  }
}
dreamCar();


function numberGuess() {
  let numberGuess = window.prompt('Guess a number between 1-11.');
  if (numberGuess === '6') {
    alert('Lucky Winner!');
  } else {
    alert('No, try again.');
  }
}
numberGuess();


// alert(`The answer is ${answer}`);

// let car3 = ['Roll Royce', 'Range Rover', 'Porche', 'Bentley', 'Audi', 'Maybach'];
// let rightAnswer = 'Rolls Royce';
// let answer3 = prompt('What is the users dream car?' + car3);
// let x = 0;
// let userPoints = 0;

// while (x < 7) {
//   if (answer3.toLowerCase !== rightAnswer) {
//     alert('nope');
//     answer3 = prompt('What is the users dream car?');
//   } else {
//     alert('Thats Correct!!!');
//     alert(`You have ${userPoints} left`);
//     userPoints++;
//   }
//   x++;
// }

// while (x < 7) {
//   for (let i = 0; i < ingredientsToPizza.length; i++) {
//     // alert(ingredientsToPizza[i]);
//     if (answer3 === ingredientsToPizza[i]) {
//       // If we find the answer, it true.
//       alert(answer3);
//       alert(ingredientsToPizza[i]);
//       x = 7;
//     }
//   }
//   answer3 = prompt('What are the main ingredients to make a pizza?');
//   x++;
// }
