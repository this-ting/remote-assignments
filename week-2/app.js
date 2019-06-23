// Button Collapsible Content Boxes
const button = document.querySelector("button");
const showBox = document.querySelector("div.section-show")

button.addEventListener ('click', () => { 
    showBox.style.display = "contents";
})
