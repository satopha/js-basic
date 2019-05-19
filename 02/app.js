//getElementById
//dateという変数を作ります。発火すると最新の日付を出す
let date = new Date();
//hogeという変数を作ります。発火するとHTMLで#hogeを当てた場所を指定します。
//documentはHTMLが持っている情報のこと
let hoge = document.getElementById('hoge');
//#hogeに日付を表示させます。
hoge.textContent = date.toLocaleDateString();

//getElementsByTagName
//listという変数を作ります。発火するとHTML内にaタグを作ります。
let list = document.getElementsByTagName('a');
//コンソールのログにlist(aタグ)を書き出します。
//なので今回は既存４つのaタグ+追加したaタグの計５つを書き出します
console.log(list);


//このgetElementsByTagNameで取得したaタグのhrefのURLを全件consoleに表示する処理を書いてみる
//lengthで配列の中身の数を取得できる。(文字列の数を教えてくれる)
//iは０で、リストの文字数より少ない。そしてiは1ずつ増える。
for(i = 0; i < list.length; i++){
	//コンソールのログにlist(aタグ)の持っているURLを書き出す。
	//[i]は１ずつ増加する
	console.log(list[i].href);
}

//イベントハンドラーやるよ
//コードが開始される瞬間のことを発火って言うんだって

//ここはHTML側でトリガーを用意して、jsでトリガー引いた時の発火アクションを書いてる
function btna_click(){
	window.alert('ボタンAがクリックされた');
}

//画面がロードされたときにイベントの読み込み
//コンテンツ・画像がロードされたら発火
window.onload = function(){
	// . はキー。document(HTML)の#btnBを取得するよ　てきな
	//#btnBが押されたらwindow.alert(アラートウインドウを出す)で()内を表示する
	document.getElementById('btnB').onclick = function(){
		window.alert('ボタンがクリックされました');
	}
}

//DOMContentLoaded→コンテンツのロードが終わったら実行
//画像のロードは待たない。
//addEventListenerはイベント処理のメソッド。
//今回は画像以外のコンテンツのロードが終わったときにイベント処理を実行する
document.addEventListener('DOMContentLoaded', function(){
	//btnCがクリックされたときにウインドウアラートを出す
	document.getElementById('btnC').addEventListener('click', function(){
		window.alert('ボタンCがクリックされました');
	});
});

//getElementsByClassName
//戻り値はNodeListオブジェクト→docmentを配列化したもの
//クラス名を複数指定すると全てを含んでいる要素だけ返す
//let fuga = document.getElementsByClassName('fuga moge');とか
let fuga = document.getElementsByClassName('fuga');
for(let i = 0; i < fuga.length; i++){
	//.fugaの文字列を順番に書き出す。
	console.log(fuga[i].textContent);
}

//textContent,innerHTMLの違い。
document.addEventListener('DOMContentLoaded', function(){
	//値をセット。
	//document.getElementById('text').textContent = '<a href="https://amazon.com">amazonzon</a>';
	//textContentの場合はタグ入れててもテキスト表示。 タグとして認識して欲しいときはinnerHTMLを使う。
	document.getElementById('text').innerHTML = '<a href="https://amazon.com">amazonzon</a>';
});

//入力内容の取得と出力
document.addEventListener('DOMContentLoaded', function(){

	document.getElementById('addbtn').addEventListener('click', function(){
		//変数にNodeListを格納
		//urlという変数を作成、HTML内の#urlを取得
		let url = document.getElementById('url');
		//siteという変数を作成、HTML内の#siteを取得
		let site = document.getElementById('site');
		//必要なタグを生成し、変数に格納
		//createElementで任意の新しいタグを作成
		//anchorという変数を作成、aタグを新たに作成
		let anchor = document.createElement('a');//aタグ追加
		//がっちゃんこして
		//anchorのurlは＃urlのvalue部分
		anchor.href = url.value;
		//createTextNodeで新たにテキストノードを作成する
		//テキストという変数を作成、HTML内に新しくsite.valueのテキストを作成
		let text = document.createTextNode(site.value);
		//anchor(新しく作成したaタグ)の子要素にtext(site.valueの中身をテキスト化したもの)を作成する。
		anchor.appendChild(text);
		//console.log(url.value);
		//HTMLのlistにanchorのタグを追加
		//listという変数を作成、HTML内の＃listを取得
		let list = document.getElementById('list');
		//listの子要素にanchor(新しく作成したaタグ)を作成
		list.appendChild(anchor);
		//改行処理を入れる
		//brという変数を作成、新しくbrタグを作成する
		let br = document.createElement('br');
		//anchorの子要素にbrを追加
		list.appendChild(br);
	});
		//削除ボタンつくって、追加したanchorを１つずつ削除できるようにする。
		//id取得して、clickしたときに処理できるようにする。
		//HTML内の#deletebtnを取得、クリックされたらイベント発火
	document.getElementById('delbtn').addEventListener('click', function(){
		//発火内容：リストの子要素に対して削除命令
		//listはローカル変数なのでもう一度idを取得する
		//ここではlistはaddbuttonのローカル変数なので、宣言し直し
		let list = document.getElementById('list');
		list.removeChild(list.firstChild);
	});
});




