// Button Collapsible Content Boxes
const button = document.querySelector("button");
const showBox = document.querySelector("div.section-show")

button.addEventListener ('click', () => { 
    showBox.style.display = "contents";
});

// change text to "Have a Good Time!", when click on Welcome banner
const clickBanner = document.querySelector("div.change-banner");
const changeText = document.querySelector("h1.welcome-banner");

clickBanner.addEventListener ('click', () => {
    changeText.textContent = "Have a Good Time!";
})

// Create mobile menu display
const openNav = document.querySelector("i.fa-ellipsis-h");
const closeNav = document.querySelector("i.fa-times");
const slide = document.getElementById("navigation");

openNav.addEventListener ('click', () => {
    slide.style.display = "block";
})

closeNav.addEventListener ('click', () => {
    slide.style.display = "none";
})
