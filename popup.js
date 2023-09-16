document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('convertButton').addEventListener('click', function () { // Convert
    const url = document.getElementById('urlInput').value;　//入力ボックスに入ってるテキストを取得
    if(url.includes('theync')) { //サムネイル画像がtheYNCか確認
      chrome.runtime.sendMessage({ action: "convertAndOpen", data: url }); //backgroundに送信
    }　else {
      alert('TheYNCの画像ではない可能性があります!')
      document.getElementById('urlInput').value = '';
    }
  });

  document.getElementById('paste').addEventListener('click', function () { // Paste URL from Clipboard
    navigator.clipboard.readText().then(function (clipboardText) {
      document.getElementById('urlInput').value = clipboardText;
    });
  })

  document.getElementById('cls').addEventListener('click', function () { // CLear Input value
    document.getElementById('urlInput').value = '';
  })
})