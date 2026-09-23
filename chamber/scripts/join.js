const membershipInfo = [
    {
        name: 'Nonprofit Membership',
        cost: 'Free',
        benefits: [
            "Invited to all events except Gold Member Only events.",
            "Designated seating at events.",
            "Dedicated spotlight in monthly newsletter.",
            "Public listing in chamber directory.",
            "Unlimited access to community board postings for volunteer and fundraiser events.",
            "Signed Certificate of Nonprofit Membership in the Noblesville Chamber of Commerce."
        ]
    },
    {
        name: 'Bronze Membership',
        cost: '$22.00 Billed Annually',
        benefits: [
            "Invited to public events and monthly meetings.",
            "Public listing in chamber directory.",
            "Quarterly access to community board postings.",
            "Signed Certificate of Bronze Membership in the Noblesville Chamber of Commerce."
        ]
    },
    {
        name: 'Silver Membership',
        cost: '$28.00 Billed Annually',
        benefits: [
            "Invited to all events except Gold Member Only events.",
            "Quarterly access to conference hall for business meetings.",
            "Dedicated spotlight on site home page.",
            "Monthly access to community board postings.",
            "Discount on Noblesville Chamber of Commerce Merchandise",
            "Signed Certificate of Silver Membership in the Noblesville Chamber of Commerce."
        ]
    },
    {
        name: 'Gold Membership',
        cost: '$33.00 Billed Annually',
        benefits: [
            "Invited to All Events + Gold Member Only events.",
            "Designated seating at events.",
            "Monthly access to conference hall for business meetings.",
            "Dedicated spotlight in monthly newsletter and site home page.",
            "Weekly access to community board postings.",
            "Free Noblesville Chamber of Commerce Merchandise.",
            "Custom engraved Gold Membership Plaque"
        ]
    }
];
const infoModal = document.querySelector('#infoModal');
const membershipList = document.querySelector('#membershipList');
const formLoadTime = new Date();

const timeStamp = document.querySelector('#timeStamp').setAttribute('value', `${formLoadTime.toLocaleString()}`);

function displayMembershipLevels() {

    membershipInfo.forEach((membership) => {
        const membershipCard = document.createElement('article');
        const membershipTitle = document.createElement('h3');
        const infoButton = document.createElement('button');

        membershipTitle.textContent = `${membership.name}`;
        infoButton.addEventListener('click', () => {
            displayInfoModal(membership);
        })
        membershipCard.classList.add(`${membership.name.replace(' ', '-').toLowerCase()}`)
        infoButton.textContent = 'More Info';

        membershipCard.appendChild(membershipTitle);
        membershipCard.appendChild(infoButton);
        membershipList.appendChild(membershipCard);
    })
}

function displayInfoModal(membership) {
    infoModal.innerHTML = ``;

    const membershipTitle = document.createElement('h2');
    const membershipCost = document.createElement('p');
    const benefitList = document.createElement('ul');
    const closeButton = document.createElement('button');

    membershipTitle.textContent = `${membership.name}`;
    membershipCost.innerHTML = `<strong>Cost: ${membership.cost}</strong>`;
    membership.benefits.forEach((benefit) => {
        const benefitItem = document.createElement('li');
        benefitItem.textContent = `${benefit}`

        benefitList.appendChild(benefitItem);
    });
    closeButton.textContent = 'X';
    closeButton.setAttribute('aria-label', 'close');
    closeButton.addEventListener('click', () => {
        infoModal.close();
    })

    infoModal.addEventListener('click', (click) => {
        if (click.target === infoModal) {
            infoModal.close();
        }
    })

    infoModal.appendChild(membershipTitle);
    infoModal.appendChild(benefitList);
    infoModal.appendChild(membershipCost);
    infoModal.appendChild(closeButton);
    infoModal.showModal();
}

displayMembershipLevels();