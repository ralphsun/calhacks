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
		"Nothing is impossible, the word itself says I'm possible! —Audrey Hepburn",
		"One child, one teacher, one book, one pen can change the world. —Malala Yousafzai",
		"Don't go through life, grow through life. —Eric Butterworth",
		"It's always too early to quit",
		"Be the person you needed when you were younger",
		"Do it before you're ready",
		"To live a creative life, we must lose our fear of being wrong",
		"Learn to be comfortable with discomfort--it is how you grow",
		"Family is not only inherited but can be discovered as well",
		"Sharing emotion does not make us weak; it makes us more powerful than ever. —Jordan Henson",
		"We need to do a better job of putting ourselves higher on our own to-do list. —Michelle Obama",
		"Worry is a misuse of your imagination."
	];

	var rand = msg[Math.floor(Math.random() * msg.length)];

	window.alert(rand);
}
