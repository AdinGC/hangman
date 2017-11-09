var word="";
var letters =[];
var guesses=0;
var guessedLetters=[];
//user chooses a number that corrosponds to a letter to guess
var wordNum = 0;
var difficulty=0;

//runs input and output on click of button
function onButton(){
    input();
    output();
}

//pulls from html
function input(){
    difficulty=parseInt(document.getElementById(difficulty));
    console.log(difficulty);
    wordNum=getWordNum(difficulty);
    word= words(wordNum);

}

//generates a number from easy, med, or hard to corospond to a word
function getWordNum (difficulty){
    if (difficulty==1){
         wordNum= randomWithRange(0, 3);
        {
    }
    if (difficulty==2){
        wordNum= randomWithRange(3, 6);
    }
    if (difficulty==3){
        wordNum= randomWithRange(6, 9);
    }
    console.log(wordNum)
}


function words (wordNum){
    word=index.wordNum["bat", "cow", "and"];
    return word;
}

function output(){
    document.getElementById("word").innerHTML=words(wordNum);
}
}
