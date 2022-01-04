console.log("pop up js file is working");

// onclick do something
document.getElementById("pickColorToChange").onchange = (event) => {
	console.log(event.value);
	// getting all tabs
	chrome.tabs.query(
		{
			active: true,
			currentWindow: true,
		},
		(tabs) => {
			// sending message to current tab
			chrome.tabs.sendMessage(tabs[0].id, {
				event: event,
				value: event.value,
			});
		}
	);
};
