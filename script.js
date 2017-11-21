var word="";
var guessedLetters=[""];
var easyWords=["hi","cow", "bat", "car", "man"];
var medWords=["school", "bagpipe", "person", "whiteboard"];
var hardWords=["otorhinolaryngological", "immunoelectrophoretically", "psychophysicotherapeutics", "spectrophotofluorometrically"];
var possibleInputs=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function startGame(){

   //resests everything
    document.getElementById("showGuessedLetters").innerHTML = ("");
    document.getElementById("guessesLeft").innerHTML = ("");
    document.getElementById("win").innerHTML = ("");
    document.getElementById("GameOver").innerHTML = ("");

    guessedLetters=[""];


    //picks word
    var difficulty=document.getElementById("difficulty").value;
    if (difficulty==1) {
        word = easyWords[Math.floor(Math.random() * easyWords.length)];
    }

        if (difficulty==2){
            word = medWords[Math.floor(Math.random() * medWords.length)];
        }
        if (difficulty==3){
            word = hardWords[Math.floor(Math.random() * hardWords.length)];
        }

    console.log (word);
    printWord();




}

function handleGuess(){

    document.getElementById("error").innerHTML=("");

    var guessFromPage=(document.getElementById("guess").value);
    console.log(guessFromPage);
    console.log(guessedLetters);
    var guessesLeft=(13-guessedLetters.length);
    //have guesses left
    if(guessesLeft>=0){
       //input is ok
        if(possibleInputs.indexOf(guessFromPage)>-1 && guessedLetters.indexOf(guessFromPage)<0){
            guessedLetters.push(guessFromPage);
            document.getElementById("guess").value= "";
            document.getElementById("showGuessedLetters").innerHTML = (guessedLetters);
            document.getElementById("guessesLeft").innerHTML = (guessesLeft);
            printWord();
            var returnValue = printWord();
            console.log(returnValue);
            if (returnValue.indexOf("_")==-1){
                document.getElementById("win").innerHTML=("Congradulations, you win! Play Again?")
            }
        }else{
            //input not ok
            document.getElementById("error").innerHTML=("Either you already guessed that letter or your input was not a single lower case letter. Try again");
        }

    }else{
        //no guesses left
        document.getElementById("GameOver").innerHTML=("You lose! GameOver. Hit 'new game' to try again.");
    }

}

function printWord(){
    var r = "";
    for (var i=0; i<word.length; i++){
        if (guessedLetters.indexOf(word[i])>-1){
          r+=word[i];
        }else{
            r+="_  ";
        }
    }
    document.getElementById("print").innerHTML = r;
    return r;


}