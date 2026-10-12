const userInfo = new URLSearchParams(window.location.search);
const formMsg = document.getElementById('formMsg');

formMsg.innerHTML = `
<h1 class="capitalize">Hey ${userInfo.get('fname')}!</h1>
<p class="pad text-center">Thanks for reaching out to us! We will get back to you as soon as possible using the information you provided</p>
<p class="pad text-center">Name: <strong class="capitalize">${userInfo.get('fname')} ${userInfo.get('lname')}</strong></p>
<p class="pad text-center">Phone Number: <strong>${userInfo.get('phone')}</strong></p>
<p class="pad text-center">Phone Email: <strong>${userInfo.get('email')}</strong></p>
<p class="pad text-center">Reason: <strong class="capitalize">${userInfo.get('reason')}</strong></p>
<p class="pad text-center">Time Submitted: <strong>${userInfo.get('timestamp')}</strong></p>
`;