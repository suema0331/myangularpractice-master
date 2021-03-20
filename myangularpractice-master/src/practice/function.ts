// 関数


//引数のデータ型を定義 :で返り値のデータ型を指定（voidではなくてもいい）
function greet(name: string): void {
  console.log(`Hello world! ${name}`); //
}
greet('Neko'); //Hello world! Neko

//引数省略可能 この場合、引数にindefinedが入る
function greet2(name?: string): void {
  console.log(`Hello world! ${name}`); //
}
greet2(); //Hello world!


//引数に初期値を設定
function greet3(name: string = 'CAT'): void {
  console.log(`Hello world! ${name}`);
}
greet3(); //Hello world! CAT


// 可変長引数
//引数でspread演算子を使うことで,1配列にまとめる

function sum(...values: number[]): number {
  //配列のreduceメソッドで合計する
  return values.reduce(function(prev, current) {
    return prev + current;
  });
}
console.log(sum(1, 3, 5, 9)); //18
