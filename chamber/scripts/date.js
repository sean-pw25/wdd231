const copyrightInfo = document.querySelector('#copyright');
const lastModified = document.querySelector('#last-modified');
const today = new Date();


copyrightInfo.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;