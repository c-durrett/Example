function magicEightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
        "help me, I'm stuck in this magic 8 ball!!!!"
    ];
    var i = Math.floor(Math.random() * lifesAnswers.length);
    var answer = lifesAnswers[i];
    console.log(answer);
}

magicEightBall();

// get random number between 0-lifesanswers.length
// use random number as index value for lifesAnswers
// return string value at index and console.log