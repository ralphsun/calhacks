document.getElementById("print_button").addEventListener("click", click);

function click() {
	var msg = [
		"Believe you can and you will.",
		"You never know until you try."
	];

	var rand = msg[Math.floor(Math.random() * msg.length)];

	window.alert(rand);
}