// コメントアウト

//console.logでコンソールのログにコメントを残す
console.log('--------------consolelog----------------');

console.log('hoge');

console.log('--------------四則演算----------------');
console.log(1 + 1);
console.log(2 * 1);
console.log(5 / 2);
console.log(5 % 2);
console.log('5 % 2');//シングルコーテーションで囲うと文字列になる

console.log('---------文字列連結---------');
console.log('ふじなみ' + 'たいじゅ');

console.log('------------変数-------------')
// 変数はデータを入れるための箱みたいなもん
//箱の名前→変数名
//変数を使用する理由
//1変更に対応しやすい
//2同じ値を繰り返し使える
//3値の値がわかりやすい

//nameという変数を作り、text'はしもと'をいれる
let name = 'はしもと';

//コンソールにlogでname(はしもと)を表示
console.log(name);


//numという変数を作成、中に２をいれる
let num = 2;
//コンソールにnum(2)を表示
console.log(num);

//num = num(2) + 2となるように指定する
num = num + 2;

//コンソールにnum(num + 2)の結果を表示
console.log(num);


num += 2;//変数を使った計算と省略形
console.log(num);

const age = 20;

console.log(age);

console.log(`私の年齢は${age}歳です`);

console.log('------------条件分岐--------------');
console.log('if文');

// if(条件式){
// 	処理
// }
let int = 5;

if(int > 3){
	console.log(`${int}は３より大きいです`);
}

// true もしくは false で返すこと→真偽値

//比較演算子
// < , <= , > , >= , === , !==

//論理演算子
//&& (◯◯かつ◯◯) , // (◯◯もしくは◯◯)

console.log('else if-----------------');
if(int >= 10){
	console.log(int + 'は10以上です。');
}else if(int > 3){
	console.log(int + 'は３より大きいです');
}else{
	console.log(int + 'は３以下です');
}

console.log('switch文-----------------');
let signal = "green";

switch(signal){
	case 'red':
	 	console.log('止まれ');
	 	break;
	case 'green':
	 	console.log('進め');
	 	break;
	default:
		console.log('その他');
		break;
}

console.log('------------繰り返しの処理-------------');
console.log('for----------');
//for(変数の定義, 条件式, 変数の更新){処理}
for (let i = 1; i <= 10; i++){
	console.log(i);
}

console.log('while----------------------------');
let j = 10;
while(j <= 20){
	console.log(j);
	j++;
}

console.log('fizzbuzz問題-------------------');
// ３の倍数はfizz
// ５の倍数はbuzz
// どっちもの倍数の場合はfizzbuzz

let num2 = 30;

for(i = 1; i <= num2; i++){
	if(i % 3 == 0 && i % 5 == 0){
		console.log('fizz');
	}else if(i % 3 == 0){
		console.log('buzz');
	}else if(i % 5 == 0){
	 	console.log('fizzbuzz');
	}else{
		console.log(i);
	}
}


console.log('-----------関数--------------');

// 関数とは「複数の処理をまとめたもの」
// finction 関数名(){処理}

 function greeting(){
 	console.log('おはよう');
 }

 greeting();

// 変数名も、関数も、キャメルケースにする

console.log('---------引数-----------');
function speak(say){
	console.log('わたしが' + say + 'っていってたって');
}

speak('こんちは');

console.log('---------ローカル変数---------');

function local(name){
	let hoge = '私の名前は' + name + 'です';
	return hoge;
	//結果を返す。
	//local変数は{}内でletの宣言をしているので、{}外では使えない
}

console.log(local('くによし'));
// console.log(hoge); ←これは参照できなくてエラーがでる


console.log('-----------配列-----------');
//配列 = グループ化されたデータ
//[値1,値2]

let studentlist = ['橋下さん','三宅さん','佐藤さん'];

console.log(studentlist);

console.log(studentlist[1]);//三宅さんがでる
console.log(studentlist[1] = '藤並');//値を上書き
console.log(studentlist);
studentlist.push('松島さん');
studentlist.pop();//末尾の値を削除
studentlist.shift();//先頭の値を削除
console.log(studentlist);

console.log('------------連想配列-----------');
//{キー1:値 , キー2:値２}
let user = {
	food:'ラーメン',
	age:50,
	from:'沖縄'
};

let user2 = {
	food:'やきそば',
	age:40,
	from:'大阪'
};

console.log(user);
console.log(user['food']);

console.log('-------------二次元配列---------------');
let users = [user, user2];

console.log(users);

console.log(users[0]['from']);

console.log(users[0].age);//連想配列（オブジェクト）は「.」でつなぐことができる

console.log('------------メソッド-------------');
let user3 = {
	foot:'寿司',
	age:20,
	from:'千葉',
	greet: function(name){//メソッド
		console.log('私の名前は' + name + 'です' + this.from + 'から来ました。');
	}
}

user3.greet('斎藤');

console.log('--------日付--------');
let date = new Date();
console.log(date);

console.log('---------DOM------------');
//Javascriotから、HTMLにアクセスするための様々な命令をDOM(Document object model)をいう。

let test = document.getElementById('test');
test.style.color = 'blue';
console.log(test);
test.classname = 'addClass';

console.log('----------イベント----------');

document.getElementById('btn').addEventListener('click',//ボタンクリックした際の操作
	function(){
		let tag = document.createElement('p');//ここでpタグを生成
		let text = document.createTextNode('Hello js');//タグに入れるコメント
		document.body.appendChild(tag).appendChild(text);//bodyにタグとテキストを表示させる
	})





















