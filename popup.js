document.getElementById("print_button").addEventListener("click", click);

function click() {
	var msg = [
		"Believe you can and you will.",
		"You never know until you try.",
		"The early bird catches the worm.",
		"If you feel down yesterday, stand up today. —H.G. Wells",
		"The secret to getting ahead is getting started. —Mark Twain",
		"If you are going through hell, keep going. —Winston Churchill",
		"Never, never, never give up. —Winston Churchill",
		"Things do not happen.  Things are made to happen. —John F. Kennedy",
		"It's always too early to quit."
	];

	var rand = msg[Math.floor(Math.random() * msg.length)];

	window.alert(rand);
}