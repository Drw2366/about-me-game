'use strict';

// Prompt
let theirName = prompt('What is your name?');
let response1 = 'Greetings to you: ';
alert(response1 + theirName);

// If conditional based confirm command. The 5 questions

let answer1 = confirm('Are you from Georgia?');
if (answer1 === true) {
//   console.log('Really, so am I.');
  alert('Really, so am I.');
} else {
//   console.log('All thats too bad');
  alert('All thats too bad.');
}


let cityState = confirm('Would you ever come to Atlanta, Ga?');
if (cityState === true) {
//   console.log('Your making a grand gesture.');
  alert('Your making a grand gesture.');
} else {
//   console.log('Well stay where you at lol..');
  alert('Well stay where you at lol!!!!');
}

let blackUniversity = confirm('Do you know any of the HBCU\'s in Atlanta, Ga?');
if (blackUniversity === true) {
//   console.log('There are 10 HBCU\'s in Atanta, Ga');
  alert('There are 10 HBCU\'s in Atlanta, Ga');
} else {
//   console.log('You should definitely visit at least 5 HBCU\'s when you come and visit.');
  alert('You should definitely visit at least 5 HBU\'s when you come and visit.');
}

let facts = confirm('Do you know how many black-owned bussines there are in Georgia');
if (facts === true) {
//   console.log('I didn\'t know that');
  alert('I didn\'t know that.');
} else {
//   console.log('There are about 8,900 black-owned business in the state, that employ just under 83,800 people.');
  alert('There are about 8,900 black-owned businesses in the state, that employ just under 83,800 people.');
}

let tylerPerry = confirm('Did you know that Steve Harvey bought Tyler Perry\'s house in Atlanta.');
if(tylerPerry === true) {
//   console.log('Its 35,000 sqft and cost 15 million dollars.');
  alert('It\'s 35,000 sqft and cost $15 million dollars');
} else {
//   console.log('Go to google and see it for yourself. You will not be dissatisfied');
  alert('You have to google and see it for yourself.');
}

// TolowerCase or ToUppercase

let car = prompt('What is your dream car?');

switch (car.toLowerCase()) {
case 'Rolls Royce':
  console.log('Your favorite car was a Rolls Royce');
  break;
case 'Range Rover':
  console.log('Your favorite car was Range Rover');
  break;
default:
  console.log('I now know what is your dream car.');
}

// Question 6
alert('Guess a number between 1-11. You will have 4 attempts!');

let i = 0;
let guess = prompt('Guess a number');
const answer = 6;

while(i < 3 && guess !== answer){
  if(guess < answer){
    alert(`Too low ${3 - i} guesses left`);
    guess = prompt('Guess a number');
  }
  else if (guess > answer){
    alert(`Too high ${3 - i} guesses left`);
    guess = prompt('Guess a number');
  }
  else if(guess === answer){
    alert('correct answer');
  }
  i++;
}

alert(`The answer is ${answer}`);

let car3 = ['Roll Royce', 'Range Rover', 'Porche', 'Bentley', 'Audi', 'Maybach'];
let rightAnswer = 'Rolls Royce';
let answer3 = prompt('What is the users dream car?' + car3);
let x = 0;
let userPoints = 0;

while( x < 7){
  if(answer3.toLowerCase !== rightAnswer){
    alert('nope');
    answer3 = prompt('What is the users dream car?');
  } else {
    alert('Thats Correct!!!');
    alert(`You have ${userPoints} left`);
    userPoints++;
  }
  x++;
}

while(x < 7){
  for (let i = 0; i < ingredientsToPizza.length; i++) {
    // alert(ingredientsToPizza[i]);
    if(answer3 === ingredientsToPizza[i]){
      // If we find the answer, it true.
      alert(answer3);
      alert(ingredientsToPizza[i]);
      x = 7;
    }
  }
  answer3 = prompt('What are the main ingredients to make a pizza?');
  x++;
}
