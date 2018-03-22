$(document).ready(function() {
    //Define global vars
    var sum = 0;
    var random = 0;
    var wins = 0;
    var losses = 0;
    var red = 0;
    var blue = 0;
    var yellow = 0;
    var green = 0;

    //Define startGame function
    var startGame = function() {
        sum = 0
        //Generates random number between 19-120
        random = 18 + Math.floor(Math.random() * 102);
        //Displays random number in html
        $("#random-number").text(random);
        
        //Generates random numbers for all crystals
        red = 1 + Math.floor(Math.random() * 11);
        blue = 1 + Math.floor(Math.random() * 11);
        yellow = 1 + Math.floor(Math.random() * 11);
        green = 1 + Math.floor(Math.random() * 11);

        //on click functions the value of each crystal adds to the sum 
        $("#red").on("click", function() {
            sum+=red;
            $("#total-score").text(sum);
            check();
        });
        
        $("#blue").on("click", function() {
            sum+=blue;
            $("#total-score").text(sum);
            check();
        });
        

        $("#yellow").on("click", function() {
            sum+=yellow;
            $("#total-score").text(sum);
            check();
        });
        
        $("#green").on("click", function() {
            sum+=green;
            $("#total-score").text(sum);
            check();
        });
    }
    //Call startGame function
    startGame();
    

    //??????????????????????????????????????????????????? if statemenst dont work
    //If statements to define wins and losses
    var check = function() {
        if (sum === random) {
            console.log("Yeah!")
            wins++;
            $("#wins").text("Wins: " + wins);
            $("#empty").text("You Won!");
            reset();
            }   
    
        else if (sum > random) {
            console.log("Naaah!")
            $("#empty").text("You Lost!");  
            losses++;
            $("#losses").text("losses: " + losses);
            reset();
        }       
    }

    var reset = function() {
        red = 0;
        blue = 0;
        yellow = 0;
        green = 0;
        sum = 0;
        random = 0;
        $("#total-score").text("");
        startGame();
    }
    
});