var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function () {

  // ここにjQueryの記述をする


  // スライドショー
  $(function(){


    //（１）ページの概念・初期ページを設定
    var page=0;
    
    //（２）イメージの数を最後のページ数として変数化
    var lastPage =parseInt($("#slide img").length-1);
    
    //（３）最初に全部のイメージを一旦非表示
    $("#slide img").css("display","none");
    
    //（４）初期ページを表示
  $("#slide img" ).eq(page).css("display","block");
    
    //（５）ページ切換用、自作関数作成
    function changePage(){
      // １秒かけてフェードアウト
      $("#slide img").fadeOut(1000);
      $("#slide img").eq(page).fadeIn(1000);
    };
    
    //（６）～秒間隔でイメージ切換の発火設定
    var Timer;
    function startTimer(){
    Timer =setInterval(function(){
      if(page === lastPage){
        page = 0;
        changePage();
      }else{
        page ++;
        changePage();
      };
      },3000);
    }
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer(){
    clearInterval(Timer);
    }
    
    //（８）タイマースタート
    startTimer();
    
    /*オプションを足す場合はここへ記載*/
    
    });

    // フッタートグル
  $(function(){
  //要素をクリックしたら発動
      $(".footer_navbar_t").on("click", function() {
        // 擬似要素CSS変更
          $(this).toggleClass('footer_navbar_t_b');
      });
    });

  $(function(){
    //id属性がtop_buttonの要素をクリックすると
    $('#top_button').click(function(){
     
        //画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
        $('html, body').animate({scrollTop: 0}, 500);
    });
  });

})

document.head.appendChild(script)

// javascript
