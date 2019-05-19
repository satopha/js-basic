//jQueryを読み込む方法は２つあるけど今回はCDNを使う
//$ = getElementBy

$(function(){
	//ボタンのサイズ変更
	//idかclassかまでは判別できないので、値にキーコードを書く
	$('#js-click-btn').on('click', function(){
		$(this).addClass('large-btn');
	});

	//マウスオーバーでホバーする
	//idかclassかまでは判別できないので、値にキーコードを書く
	$('#js-hover-btn').mouseover(function(){
		$(this).addClass('opacity');
	//↓.でメソッドをつなげることができる
	}).mouseout(function(){
		//もしマウスアウトしたら、
		//#js-hover-btnから.opacityをはずす
		$(this).removeClass('opacity');
	});

	//ボタンを押したら＃js-target-elementを
	//表示.5s,非表示1sで切り替え
	// $('#js-show-btn').on('click', function(){
	// 	$('＃js-target-element').show();
	// });
	//ゼッテーに全角使うんじゃねえぞ動かんからな
	//絶対だぞ
	$('#js-show-btn').on('click', function(){
		$('#js-target-element').fadeIn(500);
  	});

  	$('#js-hide-btn').on('click', function(){
		$('#js-target-element').fadeOut(1000);
  	});

  	//要素の追加(同じ階層に追加)
  	$('#js-add-btn').on('click', function(){
  		$(this).before('<li class="btn">左に追加されたよ</li>');
  		$(this).after('<li class="btn">右に追加されたよ</li>');
  	});

  	//子要素として追加
 	$('#js-add-btn2').on('click', function(){
 		//上に追加
  		$(this).prepend('<li>ややこ上</li>');
  		//下に追加
  		$(this).append('<li>ややこ下</li>');
  	});

 	//toggleメニュー
 	$('.js-toggle').on('click', function(){
 		//siblingsで.js-toggleの兄弟要素を取得
 		//ここでは兄弟要素はddとなり
 		//このこらをslideToggleでスライドさせる
 		$(this).siblings().slideToggle();
 	});


 	//ハンバーガー
 	$('.js-hamburger').on('click', function(){
 		$(this).toggleClass('on');
 	});

 	//スムーズスクロール
 	$('.js-scroll').on('click', function(){
 		//.animate({処理: どこまで処理するか}, 処理を行う秒数)
 		$('body, html').animate({scrollTop: 0}, 1000);
 	});

 	//モーダル
 	//fadeIn,fadeOutを使う
 	//×じるしを押しても、背景を押しても消える
	$('.js-modal').on('click', function(){

 		$('.modal-content').fadeIn(500);
		$('#modal-bg').fadeIn(500);
 	});

 	$('.js-modal-close').on('click', function(){
 		$('.modal-content').fadeOut(500);
		$('#modal-bg').fadeOut(500);
 	});

 	//タブメニュー
 	//aタグがクリックされたとき
 	$('.tab-nav a').on('click', function(){
 		//もしactiveクラスが付いていれば処理停止
 		//.tav-nav aのなかですでにアクティブになっているとき
 		if($(this).hasClass('active')){
 			return false;
 			//これ以降の関数内の処理は停止
 		}
 		//アクティブをはずす
 		$('.tab-nav a').removeClass('active');
 		console.log(this.hash);
 		//アクティブをつける
 		$(this).addClass('active');
 		$('.tab-content > div').removeClass('active');
 		$('.tab-content > div').filter(this.hash).addClass('active');
 	});

 	//スライダー
 	var slideWidth = $('.slide').outerWidth();
 	var slideNum = $('.slide').length;
 	//全体の幅を取得
 	var slideWrapperWidth = slideWidth * slideNum;
 	var currentSlide = 0;
 	$('.slide-wrapper').css('width', slideWrapperWidth);

 	//次へ
 	$('.next-slider').on('click', function(){
 		//最後のスライドだった場合は→return false;
 		if(currentSlide >= slideNum -1){
 			return false;
 		}
 		currentSlide++;
 		// console.log(currentSlide);
 		slide();

 		});
 	//前へ
 	$('.prev-slider').on('click', function(){
  		if(currentSlide <= 0){
 			return false;
 		}

 		currentSlide--;

 		//console.log(currentSlide);
 		slide();

 		});

 	function slide(){
 		//stop()をいれると更新途中でもリクエストがあると処理を実行する
 		 	$('.slide-wrapper').stop().animate({
 			left: currentSlide * -slideWidth
 	});

 	}

  $(function () {
    $('.slide-wrapper2').slick({
      autoplay: true,//自動再生
      autoplaySpeed: 3000,//自動再生の間隔ss
      pauseOnHover: true,//マウスオーバーで自動再生を一時停止
		nextArrow:'<button type="button" class="next-slider2{">◀︎</button>',
		prevArrow:'<button type="button" class="prev-slider2{">▷</button>'

		   });
  });


 	});
