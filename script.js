// Script.js 



const alertBar = document.getElementById('alert-div');
const closeAlertIcon = document.getElementById('cross-icon');

const bell = document.getElementById('bell');
const bellAlertMsg = document.getElementById('bell-alert-msg');

const sendBtn = document.getElementById('send-btn');
const sentMsg = document.getElementById('msg-sent-confirm');


//Make alert box disappear when user clicks X

closeAlertIcon.addEventListener('click', () => {
	alertBar.style.display = "none";
});


// Click on bell to view alert msg

bell.addEventListener('click', () => {
	if(bellAlertMsg.style.display === "none") {
		bellAlertMsg.style.display = "block";
	} else {
		bellAlertMsg.style.display = "none";
	}
});


// Message sent confirmation msg appears

sendBtn.addEventListener('click', () => {
	sentMsg.style.display = "block";
});