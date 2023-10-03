let readlineSync=require("readline-sync");
let kuler = require("kuler");
let count = 0;

let userName= readlineSync.question("Please enter your name:");
console.log(kuler(`\nHello ${userName} welcome to Quizify!!`, "#dc2626"));
/** Creating data set */
let database={
  data:[
    {
      question:`Let a={} and b={}
      console.log(a == b)
      console.log(a === b)`,
      option:{
        a:`false,false`,
        b:`false true`,
        c:`true false`,
        d:`true true`,
      },
      correctAnswer:`a`
    },
    {
      question:`Object.assign(targer, source) creates which type of copy?`,
      option:{
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference"
      },
      correctAnswer:`b`
    },
    {
      question:`What is the full form of DOM ?`,
      option:{
        a:`Document object modal`,
        b:`Document object model`,
        c:`Document object machine`,
        d:`None of the above`,
      },
      correctAnswer:`b`
    },
    {
      question:`Is method chaining possible with forEach?`,
      option:{
        a: "Yes",
        b: "No"
      },
      correctAnswer:`b`
    },
    {
      question:`Which of the following methods is used to access HTML elements using Javascript?`,
      option:{
        a:`getElementbyid()`,
        b:`getElementbyClassName()`,
        c:`Both a and b`,
        d:`None of these`
      },
      correctAnswer:`c`
    }
  ]
}
/** Creating Leader Board*/
let leaderboard={
  data:[
    {
      name:`Shubham`,
      score:3
    },
    {
      name:`Shreya`,
      score:4
    },
    {
      name:`Ranjan`,
      score:1
    }
  ]
}
/** Main Logic */
function playGame(userAnswer,correctAnswer){
  if(userAnswer===correctAnswer){
    console.log(kuler("Correct Answer","#059669"));
    count++;
  }
  else{
    console.log(kuler(`Wrong Answer`,"#b91c1c"));
    console.log(kuler(`The Correct Answer is: ${correctAnswer}`,"#1d4ed8"));
  }
}
/** Main Logic */

function showLeaderboard(leaderboard){

  leaderboard.data.push({name:userName,score:count});
  let sortedScoreList = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047"));
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"));
}
  if(count>=sortedScoreList[0].score){
    console.log(kuler(`YOU MADE A HIGHSCORE !`,"#FF8C00"));
  }
}

function showQuestionAndOptions(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`\n Q${i+1} - ${database.data[i].question}\n `);
    for(let key in database.data[i].option){
    console.log(`${key} - ${database.data[i].option[key]}`);
  }
    let userAnswer=readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();
    playGame(userAnswer,database.data[i].correctAnswer);
    console.log(`Your score is: ${count}`);
  }
}


showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${count}`, "#5eead4"));
showLeaderboard(leaderboard);
