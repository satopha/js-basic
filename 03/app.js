
document.addEventListener('DOMContentLoaded', function(){
	//idが複数あるときはdocument.getElement's'ById
	let elem = document.getElementById('elem');
	elem.addEventListener('mouseover', function(){
		//mouseover = カーソルが要素に乗っている状態の時
		//thisはイベントの発生元を表すもともと用意されている変数
		//今回はthis = elem
		//elemのスタイルキーがあたっている中のカラーを変更
		this.style.color = '#ff0000';
	});
	//ここにマウスアウトの処理を書く
	elem.addEventListener('mouseout', function(){
		//mouseout = カーソルが要素から離れた状態の時
		//''内に何もいれないと元に戻す命令となる
		this.style.color = '';
	});
});

//マウスオーバーされたときに、クラス名をつける
let elem2 = document.getElementById('elem2');
elem2.addEventListener('mouseover', function(){
	//クラスをつける
 	this.className = 'blue';
 });
//マウスアウトしたら元に戻す
elem2.addEventListener('mouseout', function(){
	//クラスを外す
 	this.className = '';
 });

//if文でクリック処理をするとき
let elem3 = document.getElementById('elem3');
elem3.addEventListener('click', function(){
	//もしelem3にクラス.blueがついてなかったら
	if(this.className === 'blue'){
		this.className = '';
	}else if(this.className === ''){
		this.className = 'blue';
	}
});

//toggle処理
let elem4 = document.getElementById('elem4');
elem4.addEventListener('click', function(){
	//toggleを使いたい場合はclassListを使う
	//elem4のclassListのtoggleに.blueをいれる
	this.classList.toggle('blue');
});

