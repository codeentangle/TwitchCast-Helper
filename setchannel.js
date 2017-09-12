chrome.storage.sync.get("channel", function(item) {
	document.getElementById('cast-channel').value = item.channel;
	document.querySelector(".btn-cast").click();
	document.getElementById("video").click();
});