const copyrightInfo = document.querySelector('#copyright');
const lastModified = document.querySelector('#last-modified');
const now = new Date();


copyrightInfo.innerHTML = now.getFullYear();
lastModified.innerHTML = document.lastModified;