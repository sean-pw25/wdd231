import { dateTime } from "./global.js";

// Review Carousel
// elements of the review carousel
const reviewCarousel = document.getElementById('reviewCarousel');
const carouselItem = document.querySelectorAll('.review-page');
const scrollMarker = document.querySelectorAll('.carousel-dots span');

// settings for intersectionObserver
const intersectionObserverOptions = {
    root: reviewCarousel,
    threshold: 0.6
};

// update the color of each scroll marker as the user scrolls through reviews
const updateDotColor = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // create an array and get the index of the current review
            const index = Array.from(carouselItem).indexOf(entry.target);

            // change color of corresponding scroll marker
            scrollMarker.forEach((marker, markerIndex) => {
                marker.classList.toggle('active', markerIndex === index);
            });
        }
    });
};
const observer = new IntersectionObserver(updateDotColor, intersectionObserverOptions);
carouselItem.forEach((element) => observer.observe(element));


// change document title to 'Welcome' on first visit
function setTitle() {
    if (!localStorage.lastVisitHomePage) {
        document.title = 'Welcome | RedEmber Web Design';
    }
    localStorage.setItem('lastVisitHomePage', dateTime);
}
setTitle();