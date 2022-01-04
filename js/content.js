function makeChanges(colors) {
	const allRect = document.querySelectorAll(".ContributionCalendar-day");

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
}

console.log("Change Github Contribution Graph Color");
console.log("by @withrvr || Extension started...");

// Callback for when a message is received //
// Listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log(message);
	// if (message.defaultColor) {
	// 	// green
	// 	makeChanges(["", "#9be9a8", "#40c463", "#30a14e", "#216e39"]);
	// } else {
	// 	// blue
	// 	makeChanges(["", "#79b8ff", "#2188ff", "#0366d6", "#005cc5"]);
	// }
});
