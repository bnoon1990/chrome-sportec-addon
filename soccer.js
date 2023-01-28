const extensions = 'https://totalsportek.pro/game/'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions)) {

    await chrome.scripting.executeScript({
      files: ["playVid.js"],
      target: { tabId: tab.id },
    });

  } else {
    await chrome.scripting.executeScript({
      files: ["playOnFullScreen.js"],
      target: { tabId: tab.id },
    });
  }
});