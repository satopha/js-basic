//getElementById

let date = new Date();
let hoge = document.getElementById('hoge');
hoge.textContent = date.toLocaleDateString();

//getElementsByTagName
let list = document.getElementsByTagName('a');
console.log(list);


//このgetElementsByTagNameで取得したaタグのhrefのURLを全件consoleに表示する処理を書いてみる
for(i = 0; i < list.length; i++){
	console.log(list[i].href);
}
//lengthで配列の中身の数を取得できる。


// イベントハンドラーやるよ
function btna_click(){
	window.alert('ボタンAがクリックされた');
}

