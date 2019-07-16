const heroTitle = document.querySelector(".hero-title");
const heroDesc = document.querySelector(".hero-description");

const meetEv = document.querySelector(".meetEvelyn");
const meetEvBoard = document.querySelectorAll(".meetEvelyn-board");


TweenMax.from([heroTitle, heroDesc], 2, {
    x: -100,
    opacity: 0,
    color: 'black',
});


TweenMax.fromTo(meetEvBoard, 3, {
    transform: 'scale(1.5)',
    opacity: 0
}, {
    transform: 'scale(1)',
    opacity: 1
});


console.log("app.js");