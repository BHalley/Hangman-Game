window.onload = function () {

    //Initializing functions
    urlIncrementor();

    //Defining global variables
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
    var secretWord = document.getElementById("letter-blanks");
        

    var game = {
        wordList: ["recognize", "earn", "pleasure", "oranges", "operation", "amazing", "doctor", "slay", "determined", "tread", "certain", "rain", "storm", "foretell", "profuse", "animal", "tasteful"],
        lettersGuessed: [],
        slashes: [],
        randomWord: this.getRandomWord,
        getRandomWord: function () {
            this.randomWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        },
        setSlashes: function () {
            for (var i = 0; i < this.randomWord.length; i++) {
                this.slashes.push("_");
                
            }
        }
    };
    game.getRandomWord();
    game.setSlashes();
    $("#letter-blanks").append(game.slashes);
    console.log(game.randomWord);

    document.onkeyup = function (event) {
        var key = event.key.toLowerCase();
        var validGuess = /^[a-zA-Z]$/.test(key);
        if (validGuess) {
            if (game.randomWord.indexOf(key) === -1) {
                game.lettersGuessed.push(key);
                guessesRemaining--;
                urlIncrementor(guessesRemaining);
                $("#guesses-remaining").text(guessesRemaining);                
                $("#letters-guessed").text(game.lettersGuessed);
            }
            else {
                for (var x = 0; x < game.randomWord.length; x++) {
                    if (game.randomWord[x] === key) {
                        game.slashes[x] = game.randomWord[x];
                        $("#letter-blanks").text(game.slashes.join(""));
                    }
                }

            }

        }

    };

    if(game.slashes.toString() === game.randomWord){
        $("#rounds-won").text("You won!");   
             
    }

};

// Changes hangman image as guessesRemaining decreases 
function urlIncrementor(guessRemain) {
    var a = guessRemain;
    if (a < 10) {
        $("#hangman-score").attr("src", "https://www.oligalma.com/downloads/images/hangman/hangman/" + (10 - a) + ".jpg");
    }
}




