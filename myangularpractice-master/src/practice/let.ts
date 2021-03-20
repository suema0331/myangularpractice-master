// let変数
// let変数はブロックスコープ中の変数が参照できない
// let foo = 'foo';
let date = new Date();

if (true) {
  // let foo = 'foo';
  var foo = 'foo';
}
console.log(foo);

// {
//   let foo1 = 'foo1';
// }

// OK
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// letのj変数は参照できない
for (let j = 0; j < 5; j++) {
  console.log(j);
}
// console.log(j);



//変数の巻き上げ

var hoge = "hoge";

function logHoge() {
  //変数の巻き上げとは、関数の中で定義された変数は、関数の先頭で暗黙的に定義される
  //var hoge;　 という感じ
  console.log(hoge); //undefined　この時点では、名前の定義だけだから、undefになる

  var hoge = "new hoge!";
  console.log(hoge); // new hoge!
}

logHoge();

// letでは関数内で、変数が巻き上げられないので、シンプルな挙動

var hoge2 = "hoge";

function logHoge2() {

  console.log(hoge2); //警告が出る。
  // ブロック内での変数は、ブロック街変数と別物なので、
  // 以下のhoge2は予約変数として認識され、宣言してくださいという警告が出る

  let hoge2 = "new hoge!";
  console.log(hoge2); // new hoge!
}

logHoge2();
