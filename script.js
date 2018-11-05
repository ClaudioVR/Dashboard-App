// Script.js 

const alertBar = document.getElementById('alert-div');
const closeAlertIcon = document.getElementById('cross-icon');

closeAlertIcon.addEventListener('click', () => {
	alertBar.style.display = "none";
});