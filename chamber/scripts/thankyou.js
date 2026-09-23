const userInfo = new URLSearchParams(window.location.search);

const results = document.querySelector('#results').innerHTML = `
            <p><strong>Applicant Name:</strong></p>
            <span>${userInfo.get('fname')} ${userInfo.get('lname')}</span>
            <p><strong>Email Address:</strong> </p>
            <span>${userInfo.get('email')}</span>
            <p><strong>Phone Number:</strong> </p>
            <span>${userInfo.get('phone')}</span>
            <p><strong>Business Name:</strong> </p>
            <span>${userInfo.get('organization')}</span>
            <p><strong>Membership Level:</strong> </p>
            <span>${userInfo.get('membership-level')}</span>
            <p><strong>Time of Form Submission:</strong> </p>
            <span>${userInfo.get('timestamp')}</span>
`