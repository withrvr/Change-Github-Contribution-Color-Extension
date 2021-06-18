console.log("Change Github Contribution Graph Color");
console.log("by @withrvr || Extension started...");

const allRect = document.querySelectorAll(" .ContributionCalendar-day");

let colors = ["", "#c8e1ff", "#79b8ff", "#2188ff", "#0366d6"];

for (let i = 0; i < allRect.length; i++) {
	// point to the rect
	const rect = allRect[i];

	// get data level of react
	const dataLevel = rect.getAttribute("data-level");

	// const dataCount = rect.getAttribute("data-count");
	// console.log(dataLevel, " - ", dataCount);

	// uses fill attribute not background color as its svg not any element
	rect.style["fill"] = colors[dataLevel];
}
