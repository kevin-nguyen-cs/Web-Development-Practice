//alter firefox image
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

//mult function
function multiply(num1, num2) {
	return num1*num2;
}

//button var declarations
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//function set user's name
function setUserName() {
	var myName = prompt('Please enter your name!');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//check if name exists?
if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//onclick button
myButton.onclick = function() {
	setUserName();
}

//NOTE: Chrome-users make sure 3rd party cookies are enabled for localStorage