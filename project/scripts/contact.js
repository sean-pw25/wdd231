const userInfo = new URLSearchParams(window.location.search);
const formMsg = document.getElementById('formMsg');

formMsg.innerHTML = `
<h1 class="capitalize">Hey ${userInfo.get('fname')}!</h1>
<p>Thanks for reaching out to us! We will get back to you as soon as possible using the information you provided</p>
<p class=userInfo>Name: <strong class="capitalize">${userInfo.get('fname')} ${userInfo.get('lname')}</strong></p>
<p class=userInfo>Phone Number: <strong>${userInfo.get('phone')}</strong></p>
<p class=userInfo>Phone Email: <strong>${userInfo.get('email')}</strong></p>
<p class=userInfo>Reason: <strong class="capitalize">${userInfo.get('reason')}</strong></p>
<p class=userInfo>Time Submitted: <strong>${userInfo.get('timestamp')}</strong></p>
`;