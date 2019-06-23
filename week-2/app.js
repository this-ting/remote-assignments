// Button Collapsible Content Boxes
const button = document.querySelector("button");
const showBox = document.querySelector("div.button")

button.addEventListener ('click', () => { 
	showBox.style.display = "contents";
})