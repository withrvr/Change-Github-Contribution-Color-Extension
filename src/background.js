let toggleColor = true;

// Add a listener for the browser action // sender
chrome.browserAction.onClicked.addListener(function (tab) {
	toggleColor = !toggleColor;

	chrome.tabs.sendMessage(tab.id, {
		defaultColor: toggleColor,
	});
});
