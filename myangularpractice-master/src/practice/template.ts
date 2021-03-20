// テンプレート文字列 (Template Literals)
// バッククオートで囲む。

let template1 = `This is Template strings.`;
let name = 'Yohei Isokawa';

// 改行が保持される
// ${}を使うと、変数に格納される文字列を表示できる
let template2 = `
  Hello, TypeScript tutorial.
  ${name}
  Thank you.
`;

console.log(template2);
