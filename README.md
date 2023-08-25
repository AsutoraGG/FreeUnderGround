# UnderGround Converter 　
**大体の動画(例:　生きたメキシコ)は見れたんですが一部の動画が見れない場合があります**    
[Download ZIP](https://github.com/AsutoraGG/idk/archive/refs/heads/main.zip)からダウンロードしてzipファイルを解凍してGoogleの拡張機能のページ(chrome://extensions/)を開いてデベロッパーモードを有効にしたら**パッケージ化されてない拡張機能を読み込む**を押してダウンロードして解凍したフォルダーを選択する  
  ![image](https://github.com/AsutoraGG/idk/assets/76235964/30c1e6a4-178a-4b2b-a65f-25944f8559a0)

## 使い方
### Paste Image URL    
サムネイルの画像urlをコピーしてからこのボタンを押すと自動でurlが入力されます   
### Copy Video URL
urlを入力するところに入ってるurlを見れるように変換しその変換された動画のurlをコピーします  
### Convert and Open   
上のと違って変換しそのURLを新しいタブで開きます　　　
### Clear URL
urlを入力するところの中身を削除します   

## 仕組み   
theYNCの動画の直リンクにつながるためのサムネイル画像URL、これをベースとして動画の直URLに変換しています。
大体3,4種類サムネイル画像URLがあります。  

### Type1:   
元サムネイルURL: theync.com/media/thumbs/5/2/7/8/0/5278095a61728ca91d5.mp4/5278095a61728ca91d5.mp4-9.jpg   
こんな感じにmedia/thumbsとなっていたらその部分をvideosに変え最後の/...jpgの部分を消しtheync.comの前にv.を追加することで見れます   
変換後: v.theync.com/videos/6/9/0/4/8/690489606f9c4eb9d19.mp4   
### Type2:   
元サムネイルURL: theync.com/media/thumbs/v/i/d/e/o/video64157.mp4/video64157.mp4-3.jpg   
こんな感じに本来数字の部分が/v/i/d/e/oだとやり方が少し変わりType1でmedia/thumbsをvideosにしたがこの場合media/videosに変えることで見れるようになる。また最後の/...jpgを消して完了   
変換後: theync.com/media/videos/v/i/d/e/o/video64157.mp4   

### Type3:
元サムネイルURL:　忘れた
これはType1,2とほぼ同じだが.mp4の部分が.aviや.movみたいに拡張子が変わっている場合そのURLのままだと見れないため元の拡張子を.mp4に変えることで見れるようになる

### Type4:   
現在見ることのできない動画
theync.com/media/thumbs/9/4/7/6/9/94769362806e28417b6.mp4/94769362806e28417b6.mp4-3.jpg
このように全くType1と同じだけど見れない動画があります。変換の仕方が判明したら報告します
