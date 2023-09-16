chrome.runtime.onInstalled.addListener(function () {
  const otherFileType = ["wav", "avi", "wmv", "mov"] // working now maybe

  function converter(url) { // Main Code
    for (let i = 0; i < otherFileType.length; i++) { // Check VideoType
      if (url.includes(otherFileType[i])) {
        url = url.replace(otherFileType[i], "mp4")
      }
    }
    const parts = url.split('/');
  
    if (!isNaN(parts[5])) { // "5/2/6/1"
      parts[2] = "v.theync.com";
      parts.splice(3, 2, "videos");
      parts.pop()
  
      return parts.join('/');
    } else if (parts[5] === "v") { // "v/i/d/e/"
      parts[4] = "videos"
      parts.pop()
  
      return parts.join('/');
    }
  }
  
  const parent = chrome.contextMenus.create({ //右クリック時のメニューを作成
    id: "share",
    title: "画像を動画に変換",
    contexts: ["image"],
  });

  console.log("Context Menu Created:", parent);

  chrome.contextMenus.onClicked.addListener((info, tab) => { //メニューをクリックしたときの処理
    console.log("Clicked Menu: ", info)
    if (tab.url.startsWith("https://theync")) {
      const convert = converter(info.srcUrl)
      console.log("Converted URL:", convert);
      chrome.tabs.create({
        url: convert
      })
    }
  })

  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) { // client(popup.js)からbackgroundに送信されたとき
    switch (message.action) {
      case "convertAndOpen": //画像urlが送られてくるのでそれをbackgroundで変換→新しいタブで開く
        const convertedURL = converter(message.data);
        chrome.tabs.create({
          url: convertedURL
        });
        break;
    }
  });
})