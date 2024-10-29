let questions = ["Who was the discisple whom Jesus loved?", "Who was the first man to be created?",
     "Who killed Goliath?", "Who was sold to Egypt?", "Who betrayed Jesus?"]

let answers = ["john", "adam", "david", "joseph", "judas iscariot"]
let response
let score = 0;
let totalScore = Number(questions.length);

function checkResponse(){
    alert("Welcome to CEO's One-Word-Trivia Game!!!")

    let firstResponse = prompt("There are 5 questions in this game, Think you can Handle that?")

    if(firstResponse.toLowerCase() === "yes"){
        alert("Let's see how much of a 'Bible Student' you really are")

        for(i = 0; i < 5; i++){
            response = prompt(questions[i])

            if(response.length == 0){
                alert("Please Input Answer!!")
                checkResponse()
            }
        
            else if(response.length > 0){
                if(response.toLowerCase() == answers[i]){
                    score += 1
                    alert("Correct!!!")
                }
                else{
                    alert("Incorrect!!!")
                }
            }
        }
        alert("You scored "+score + " out of " + totalScore)

        if(score >= 3){
            alert("YOU ARE AWESOME BRO!!!")
        }

        else{
            alert("BETTER LUCK NEXT TIME BUDDY!!!")
        }
    }

    else{
        alert("COME BACK WHEN YOU ARE READY!!!")
        checkResponse()
    }
}
    

checkResponse()

