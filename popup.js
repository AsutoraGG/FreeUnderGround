document.addEventListener('DOMContentLoaded', function () {
  const notSupportVideoType = ["wav", "avi", "wmv"] // sorry not working now..

  function converter(url) { // Main Code
    for (let i = 0; i < notSupportVideoType.length; i++) { // Check VideoType
      if (url.includes(notSupportVideoType[i])) {
        return alert("Sorry! Unknown Video Type")
      }
    }
    const parts = url.split('/');

    if (!isNaN(parts[5])) { // "5/2/6/1"
      parts[2] = "v.theync.com";
      parts.splice(3, 2, "videos");
      parts.pop()

      return parts.join('/')
    } else if (parts[5] === "v") { // "v/i/d/e/"
      parts[4] = "videos"
      parts.pop()

      return parts.join('/')
    } else { // Unknown URL
      return alert('Sorry! This is Unknown URL!')
    }
  }

  document.getElementById('convertButton').addEventListener('click', function () { // Convert
    const url = document.getElementById('urlInput').value;
    console.log('clicked')
    const convertedURL = converter(url);
    if (convertedURL) {
      chrome.tabs.create({
        url: convertedURL
      });
    }
  });

  document.getElementById('paste').addEventListener('click', function () { // Paste URL from Clipboard
    navigator.clipboard.readText().then(function (clipboardText) {
      document.getElementById('urlInput').value = clipboardText;
    });
  })

  document.getElementById('copyvideo').addEventListener('click', function () { // Convert and Copy to Clipboard
    if (document.getElementById('urlInput').value === "") {
      return alert('Please put the video thumbnail url!')
    }
    navigator.clipboard.writeText(converter(document.getElementById('urlInput').value))
  })

  document.getElementById('cls').addEventListener('click', function () { // CLear Input value
    document.getElementById('urlInput').value = ''
  })
})