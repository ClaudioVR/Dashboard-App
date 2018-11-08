// Script.js 

const alertBar = document.getElementById('alert-div');
const closeAlertIcon = document.getElementById('cross-icon');

const bell = document.getElementById('bell');
const bellAlertMsg = document.getElementById('bell-alert-msg');
const bellRedDot = document.getElementById('notification-dot');

const sendBtn = document.getElementById('send-btn');
const msgSentConfirm = document.getElementById('msg-sent-confirm');
const memberSearch = document.getElementById('member-search');
const messageUser = document.getElementById('message-text-area');


//Make alert box disappear when user clicks X

closeAlertIcon.addEventListener('click', () => {
	alertBar.style.display = "none";
});


// Click on bell to view alert msg

bell.addEventListener('click', () => {
	if(bellAlertMsg.style.display === "none") {
		bellAlertMsg.style.display = "block";
		bellRedDot.style.display = "none";
	} else {
		bellAlertMsg.style.display = "none";
	}
	
});


// "Message sent" confirmation msg or alert appears

sendBtn.addEventListener('click', () => {
	const name = memberSearch.value;
	const msg = messageUser.value;
	if (name == "") {
		msgSentConfirm.style.color = 'red';
		msgSentConfirm.textContent = "NB: Please state a valid username A.";
	}
	else if (msg == "") {
		msgSentConfirm.style.color = 'red';
		msgSentConfirm.textContent = "NB: Enter valid message.";
	}
 else if (name && msg !== "" ) {
		msgSentConfirm.style.color = '#7377BF';
		msgSentConfirm.textContent = "NB: Your message has been sent.";
	} 
});










