var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function () {

  // ここにjQueryの記述をする
  $(function() {
    $('.slideshow').each(function() {
      // スライド（画像）の数を取得
      var $slides = $(this).find('img'),
          slideNum = $slides.length,
          currentIdx = 0; // 何番目か
   
      // 最初の画像をフェードイン
      $(".slideshow img").eq(currentIdx).fadeIn();
   
      // 3秒後に次のスライドを表示
      setTimeout(dispNextSlide, 3000);
   
      // 次のスライドを表示するメソッド
      function dispNextSlide() {
        var nextIdx = currentIdx + 1;
   
        // 最後のスライドの場合ははじめに戻る
        // if (nextIdx > (slideNum - 1)) {
        //   nextIdx = 0
        // }
        
        // 現在のスライドをフェードアウト
        $(".slideshow img").eq(currentIdx).fadeOut();
        
        // 次のスライドをフェードイン
        $(".slideshow img").eq(nextIdx).fadeIn();
        
        // インデックスを更新
        currentIdx = nextIdx;
        
      }

    })

  })
  

})

document.head.appendChild(script)

// javascript
