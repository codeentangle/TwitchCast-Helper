chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlMatches: 'https:\/\/www.twitch.tv\/.+' },
          })
        ],
        actions: [
            new chrome.declarativeContent.ShowPageAction()
        ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab){
    let channel = tab.url.split('/').pop();
    chrome.storage.sync.set({ channel }, function() {
      chrome.tabs.update(tab.id, {url: "https://nightdev.com/twitchcast/"});
    });
});

