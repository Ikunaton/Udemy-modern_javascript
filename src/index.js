/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能.
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能.
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // letは上書き可能.
// val2 = "let変数を上書き";
// console.log(val2);
// // letは再宣言不可.
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// // constは上書き不可.
// //val3 = "const変数を上書き";
// // constは再宣言不可.
// const val3 = "const変数再宣言";

// const val4 = {
//   name: "あああ",
//   age: "22"
// };
// val4.name = "いいい";

// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "mijinko";
// val5.push("momonga");
// console.log(val5);

// テンプレート文字列.
// const name = "山田";
// const age = 22;
// // 「私の名前は"name"です。年齢は"age"です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート.
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数.
// レガシ.
// function hunc1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("山田"));

const func2 = (str) => str;
console.log(func2("田中"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(1, 3));
