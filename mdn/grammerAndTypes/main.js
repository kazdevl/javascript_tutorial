// コメント
/*
複数行コメント
*/

// 変数宣言
// const...ローカル変数とグローバル変数に使う
// const a; // missing initializer
const a = 1;
console.log("a: " + a);

var b; // ブロックスコープのローカル変数。読み取り専用
console.log("b: " + b);
console.log("c: " + c);
var c;

let d; // ブロックスコープのローカル変数
console.log("d: " + d);
// console.log("reference err" + e);
// let e;

// console.log("reference error" + f);

var input;
if (input === undefined) {
    console.log("inout: undef");
} else {
    console.log("input: not undef")
}

var myArray = [];
if (!myArray[0]) console.log("myArray[0] is undef"); // undefはfalseとして評価される

// undefは数値の場合NaNと評価
var g;
console.log(g + 2); //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN

// nullは数値のコンテキストでは0として振る舞う
var n = null;
console.log(n * 32);

/* ECMA2015以前ではブロック文のスコープがない
letが導入されてブロック文のスコープを限定できるように
*/
if (true) {
    var x = 5;
}
console.log(x); // print 5

if (true) {
    let y = 5;
}
// console.log(y); // reference error

/* 変数の巻き上げ
...例外を発生させることなく後に宣言した変数を参照できる
しかし、巻き上げられた変数はundefを返す
変数を使用したり、参照した後に宣言や初期化を行うと、undefが返されたままになる
＊letとconstは巻き上げが行われるが、初期化はされない
*/
/*例1*/
console.log(x === undefined);
var x = 3;
// 上記は以下と同じ
var x;
console.log(x === undefined)
x = 3;

/*例2*/
var myvar = 'my value';
(function () {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();
// 上記は以下と同じ
var myvar = 'my value';
(function () {
    var myvar;
    console.log(myvar); // undefined
    var myvar = 'local value';
})();

/*例3...以下はreference error*/
// console.log(z);
// let z = 3;

/* 関数の巻き上げ
関数宣言は巻き上げられるが、関数式は巻き上げられない
*/
/*関数宣言*/
foo(); // "bar"
function foo() {
    console.log('bar');
}
/*関数式*/
// baz(); //TypeError: bazは関数ではない
// var baz = function () {
//     console.log('bar2');
// };

// constについて
// 定数が代入されたオブジェクトのプロパティは保護されない
const MY_OBJ = { "key": "value" };
MY_OBJ.key = "otherValue";
console.log(MY_OBJ);
// 配列の中身も保護されない
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JavaScript");
console.log(MY_ARRAY);

// TODO 配列リテラル・オブジェクトリテラル・拡張オブジェクトリテラル・文字列リテラル
