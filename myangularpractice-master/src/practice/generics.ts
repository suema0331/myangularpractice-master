// ジェネリック (Generics)
//データ型のみが違う場合、複数のクラスを用意するのが手間
//クラスの外から内部の型を指定できる

class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}

//型チェックが機能しない
// class AnyStore {
//   data: any;
// }

//ジェネリックを使ってクラスの外から内部の型を指定できる

class Store<T> {
  // T(Type), U , V , T1, T2, T3
  data: T; // number
  getStore(): T {
    //メソッドにもジェネリック使用可能
    return this.data;
  }
}
// let stringData = new Store<string>(); //Storeクラス内のデータ型がstringになる！
let stringData = new Store<number>(); //Storeクラス内のデータ型がnumberになる！
let booleanData = new Store<boolean>(); //boolean

//関数にもジェネリック使用可能
//引数のデータ型、返り値に指定できる

function hello<T>(keyword: T) {
  console.log(`Log: ${keyword}.`);
}
hello<string>("Hello, Neko"); //実行時に型を指定
hello<number>(10000);

//複数の型を指定可能

class Component<T, U> {
  name: T; //型の参照
  created: U;
}

//呼び出し時もカンマで区切る
let component = new Component<string, number>();

// component.created = '2020/04/01';
