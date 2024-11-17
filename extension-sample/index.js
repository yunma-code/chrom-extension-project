async function sayHello() {
	let [tab] = await chrome.tabs.query({ active: true});
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => {
			{/* document point to current page */}
			document.body
			alert('Hello from my extension');
		}
	});
}
document.getElementById("ext-button").addEventListener("click", sayHello);