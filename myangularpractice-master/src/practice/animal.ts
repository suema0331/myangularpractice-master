// クラス
// クラスは年齢,cryメソッドを持っている
class Animal {

  //データ型を指定
  age: number = 10;

//インスタンス化する時に、isCryというデータを受け取る

  constructor(public isCry: boolean) {
    //isCryプロパティを作ってもいいが、アクセス修飾子publicで、自動でプロパティを受け取れる
    // this.isCry = isCry;
  }

//引数なし、返り値void
  cry(): void {
    if (this.isCry) {
      // alert(`age: ${this.age}`);
    }
  }
}


let dog = new Animal(true);
dog.cry();
