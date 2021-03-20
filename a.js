
Bot.send("Welcome to Sentiment Analysis Bot");
Bot.send("Please type Start to begin");
var stage = "begin";
async function respond(inputText) {
	console.log("Entered by user " + inputText);
	console.log("Current Stage " + stage);
	if (inputText.toLowerCase() == "start" && stage == "begin") {
		Bot.send("Please enter statement to get sentiment analysis");
		stage = "statement";
	}
	else if (stage == "statement") {
		var score = await CampK12.getSentimentScore(inputText);// Helper function to call Model
		console.log("Sentiment Score : " + score);
	
	****}
	else {
		Bot.send("Please type correct keyword");
	}

}
function getSentimentAnalysis(score){// Declartion of function 
	var analysis;
    if( score > 0 ) {
         analysis = "Positive";
    }
    else {
        analysis = " Negative ";
    } 
	return analysis;
}
