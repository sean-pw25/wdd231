import { dateTime } from "./global.js";

// Change document title to 'Welcome' on first visit
function setTitle() {
    if (!localStorage.lastVisitHomePage) {
        document.title = 'Welcome | RedEmber Web Design';
    }
    localStorage.setItem('lastVisitHomePage', dateTime);
}

setTitle();