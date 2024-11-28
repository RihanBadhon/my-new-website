'use strict';

const contactSection = document.querySelector('.contact');
const projectSection = document.querySelector('.project');
const knowSection = document.querySelector('.information');

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

function scrollToKnow() {
    if (knowSection) {
        knowSection.scrollIntoView({ behavior: 'smooth' });
    }
}



console.log('Button clicked!'); 