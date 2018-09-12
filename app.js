'use strict';

//What is my name?
var name = prompt('What is my name?');
var properName = name.toLowerCase();
var correctAnswer = 'Hi, ' + name + ' welcome to my super rad site';
if ( properName === "dashiell"){
  console.log('Your answer was ' + properName + ' the correct answer is: ' + correctAnswer);
  alert('Well done, your answer was ' + properName + ' the correct answer is: ' + correctAnswer);
} else{ 
  console.log ('Your answer was ' + properName + ' the correct answer is: ' + correctAnswer)
  alert ('No no no, ' + properName + 'is incorrect');
}

//Was I born in North Carolina?
var birthQ = prompt ('Was I born in North Carolina?');
var birthA = birthQ.toLowerCase();
var correctAnswer = 'yes';
if ( birthA === correctAnswer){
  console.log ('Your answer was ' + birthA + ' the correct answer is: ' + correctAnswer);
  alert('Superb, your answer was ' + birthA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your response was ' + birthA + ' the correct response is: ' + correctAnswer);
  alert ('Nice guess, ' + birthA + 'is incorrect');
}

//What month is my birthday?
var bdayQ = prompt ('What month is my birthday?');
var bdayA = bdayQ.toLowerCase();
var correctAnswer = 'september';
if ( bdayA === correctAnswer){
  console.log ('Your answer was ' + bdayA + ' the correct answer is: ' + correctAnswer);
  alert('Superb, your answer was ' + bdayA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your response was ' + bdayA + ' the correct response is: ' + correctAnswer);
  alert ('Nice guess, ' + bdayA + 'is incorrect');
}

 //Do I brush my teeth in the shower?
var brushQ = prompt('Do I brush my teeth in the shower?');
var brushA = brushQ.toLowerCase();
var correctAnswer = 'no';
if ( brushA === correctAnswer){
  console.log('Your answer was ' + brushA + ' the correct answer is: ' + correctAnswer);
  alert('Well done, your answer was ' + brushA + ' the correct answer is: ' + correctAnswer);
} else{ 
  console.log ('Your answer was ' + brushA + ' the correct answer is: ' + correctAnswer)
  alert ('Grosssssss, ' + properName + 'is incorrect');
}

//Do I like to sing karaoke?
var singQ = prompt ('Do I like to sing karaoke?');
var singA = singQ.toLowerCase();
var correctAnswer = 'no';
if( singA === correctAnswer){
  console.log ('Your answer was ' + singA + ' the correct answer is: ' + correctAnswer);
  alert ('You rock! Your answer was ' + singA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your answer was ' + singA + ' the correct answer is: ' + correctAnswer);
  alert ('Sorry, wrong answer ' + singA + ' is incorrect');
}

//Do I like to take naps?
var napQ = prompt ('Do I like to take naps?');
var napA = napQ.toLowerCase();
var correctAnswer = 'yes';
if(napA === correctAnswer){
  console.log ('Your answer was ' + napA + ' the correct answer is: ' + correctAnswer);
  alert ('Yes! Your answer was ' + napA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your answer was ' + napA + ' the correct answer is: ' + correctAnswer);
  alert ('Not a chance! ' + napA + ' is incorrect');
}

//Cake or pie?
var cakeQ = prompt ('Cake or pie?');
var cakeA = cakeQ.toLowerCase();
var correctAnswer = 'pie';
if( cakeA === correctAnswer){
  console.log ('Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
  alert ('Yes! Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
  alert ('Nice try! ' + cakeA + ' is incorrect');
}

//Do I own a segway?
var segQ = prompt ('Do I own a segway?')
var segA = segQ.toLowerCase();
var correctAnswer = 'no';
if( segA === correctAnswer){
  console.log ('Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
  alert ('Yes! Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
} else{
  console.log ('Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
  alert (segA + ' is incorrect');
}
