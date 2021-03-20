// アロー関数
// () => { } でシンプルに定義できる

let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
console.log(add(1, 3));  //4

// アロー関数が一文の場合、{}省略可能
// {}省略すると、returnも省略可能
// 引数の()も省略可能、引数なしの時は省略不可能

let hello = (name: string) => {
  return `Hello, ${name}!`;
}
console.log(hello('Cat'));

//省略後
// let hello = name => `Hello, ${name}!`;
// console.log(hello('Yohei'));


let getValue = (): number => {
  return document.getElementById('app').getElementsByTagName('div').firstChild.getAttribute('value').toFixed(2);
}

//function定義の場合内部で参照できるthisの扱い

//あるDOMにclick イベントリスナーを使う

//function定義の場合
document.getElementById('button1').addEventListener('click', function() {
  console.log(this); // <button></button>を参照できる
});

//アロー関数では、関数(addEventListener)が定義された場所のthisを参照する
// addEventListenerのthisなのでグローバルスコープのthis
// this => Window
document.getElementById('button1').addEventListener('click', () => {
  console.log(this); // Window
});
