chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ rules: [] });
    console.log('Rules engine installed');
  });