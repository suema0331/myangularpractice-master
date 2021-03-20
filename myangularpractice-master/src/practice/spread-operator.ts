// スプレッド演算子

// 配列
// =========================
let categories = ['post', 'news', 'info'];
//...categories //データの中身を展開できる！これで配列も簡単に作れる！

// 複製
let copyCat = [...categories]; // 'post', 'news', 'info'
//console.log(copyCat);
console.log(copyCat, copyCat === categories); //false 新しく配列が生成されているので、別のオブジェクト。

// 連結
let pushCat = ['other', ...categories];
//console.log(pushCat); //otherを先頭に追加 ["other", "post", "news", "info"]

let unshiftCat = [...categories, 'other'];
console.log(unshiftCat); //["post", "news", "info", "other"]

// 途中に挿入
let insertCat = ['other', ...categories, 'Q&A'];
console.log(insertCat); //["other", "post", "news", "info", "Q&A"]

// 2つの配列をマージ
let mergeCat = [...categories, ...copyCat];
console.log(mergeCat); //["post", "news", "info", "post", "news", "info"]


// オブジェクト
//　同じように展開できる
// =========================
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

// 複製
let copyObj = { ...post }; //プレースの中でspread演算子を展開
console.log(copyObj); //{id: 1, content: "dummy", created: "2020-04-01"}

// 連結 （追加）
let pushObj = { ...post, updated: '2020-04-05' };
console.log(pushObj); //{id: 1, content: "dummy", created: "2020-04-01", updated: "2020-04-05"…}

// 上書き
let overrideObj = { ...post, created: '2021-01-23' };
console.log(overrideObj); //{id: 1, content: "dummy", created: "2021-01-23"}

// オブジェクトのマージ
let mergeObj = { ...post, ...pushObj };
console.log(mergeObj); //{id: 1, content: "dummy", created: "2020-04-01", updated: "2020-04-05"}

// 配列にオブジェクトを展開することはできない
// let test = [...post];　 //配列では展開できない

// 逆に配列はオブジェクトに展開できる
let test = { ...categories }; //オブジェクト中で配列は展開できる
console.log(test); //indexがキー:値がvalue　に入る
