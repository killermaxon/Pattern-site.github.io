
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Добрый день, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Добрый день, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
}

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/oranges.jpg') {
		myImage.setAttribute('src', 'images/google-backgraund.jpg');
	} else {
		myImage.setAttribute('src', 'images/oranges.jpg');
	}
}