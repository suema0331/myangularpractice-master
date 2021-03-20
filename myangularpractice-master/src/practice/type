// TSでの型定義

// 文字列
var title: string = 'Angular';
title = 'Angurlar';

// 数値
var n: number = 9;

// 真偽
var isOpen: boolean = true;

// 配列 stringと数値を入れられる
var keywords: (string | number)[] = ['neme', 'email', 'body', 0];

// タブル型
var payment: [number, string, number] = [1, 'apple', 0];

// オブジェクト型
var object: { [key: string]: string } = {
  name: 'Neko',
  id: 'test'
};

//オブジェクトキーワード　(JSでオブジェクト判定できるもの。)
var post: object = [{id: 12, content: 'lorem ipsum'}];

// 共用型(Union型)  共用されてない型はNG
var sample: string | number | boolean;
sample = 'Yohei';
sample = 100;
sample = true;

// enum型
//enum KeyCodeというグルーピング内に、自分でキーワードをつけて、変更されない値（定数）を作る
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13
}

console.log(KeyCode.Backspace); // プレビューコンソールで確認！8

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 401
}

console.log(ErrorCode.OK);

// 定数を省略したら、自動でインデックスが入る
enum Character {
  Bob, // 0
  Dad, // 1
  Mom // 2
}

console.log('Bob ' + Character.Bob);

// 汎用的な型
// any型　：全データ型を許容
var something: any = 'foo';
something = 100;
something = true;
something = {id: 1};

// null, undefined型 :HTMLの要素がnullになってもOK
// ElementはHTMLの要素を表す型
var el: Element | null = document.querySelector('#app');
// undefinedしか入らない
var foo: undefined = undefined;

// 型推論
var unknown = 'string';　 //unknownは文字列を入れたので、文字列型と判定
unknown = 10; //数値は不可
