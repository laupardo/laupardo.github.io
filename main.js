//loads the recipe on the page
'use strict';
const words = ["Computer Scientist and Engineer ", "Mechanical Engineer ", "Woman in STEM ", 
"Language Enthusiast "];
let i = 0;
let time;
let year= "April 2021";
var rounds=0;
const months = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",];

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('intro').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		time = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop(); 
			document.getElementById('intro').innerHTML = word.join("");
		} else {

			if (i<words.length -1) {
				i++;
			} else {

				i = 0;
			};
			typingEffect();
			return false;
		};
		time = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};


function crazyNumbers()
{
	var crazyNums = function() {
		if(rounds<20)
		{

			let j = Math.floor(Math.random() * 12);
			
			document.getElementById('gradYear').innerHTML =months[j]+" "+ (Math.floor(Math.random() * 2000)+1000);
		}
		else
		{
			document.getElementById('gradYear').innerHTML = year;
		}
		rounds++;
		time = setTimeout(crazyNums, 200);
	};
	crazyNums();
}

crazyNumbers();
typingEffect();