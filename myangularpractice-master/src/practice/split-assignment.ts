//分割代入
let categories = ['post', 'news', 'info', 'other' ];

//let a = categories[0];
// let b = categories[1];

//変数をブラケット形式にすることで分割代入可能

// let[a,b] = categories;
//console.log(a,b); //post news

// 残りの演算子をまとめてゲット
//let[a,b, ...rest ] = categories;
//console.log(a,b,rest); //post news ["info", "other"]

//初期値を入れる
let[a=10, b=7] = [1]; //配列1
console.log(a,b);  //aは1,bはないので、初期値の7が入る

//オブジェクトも可能
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

// const { id }= post;
// console.log(id); //1

//変数名を変更できる
const {id ,content: body }= post;
console.log(id , body); //contentが bodyに変更された

//このように深い階層のデータをスッキリ取得できる
//const {id ,name }= user.accountInfo.data;

//関数の引数で、オブジェクトを受けるときにも使える
//function test ({a,b,c}){
//}
