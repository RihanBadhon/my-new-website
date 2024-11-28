'use strict';

const contactSection = document.querySelector('.contact');
const projectSection = document.querySelector('.project');


function scrollToContact() {
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}


function scrollToProject() {
    if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
    }
}


console.log('Button clicked!'); 