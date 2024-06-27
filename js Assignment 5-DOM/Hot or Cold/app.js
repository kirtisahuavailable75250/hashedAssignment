function displayRandomNumber() {
	const randomNumber = Math.round(Math.random() * 40) - 20; // Generates a random number between -20 and 20
	const numParagraph = document.getElementById("num");
	numParagraph.textContent = randomNumber;

	const feedbackDiv = document.createElement("div");
	feedbackDiv.textContent = randomNumber < 0 ? "Cold" : "Hot";
	document.body.appendChild(feedbackDiv);
}