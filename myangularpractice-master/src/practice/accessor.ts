// クラス
class Animal {

  age: number = 10;
  private _legs = 1; //プライベートプロパティには外からアクセスできない

  constructor(public isCry: boolean) { }

  cry(): void {
    if (this.isCry) {
      alert(`age: ${this.age}`);
    }
  }

  // アクセサメソッド(getter, setter)
  //プロパティ名と同じアクセサメソッドは定義できない


  // get legs0() {
  //     return 4;  //普通に4を返す
  // }

  get legs() {
    if (this._legs > 2) {  //1の時はundef
      return this._legs;  //プライベートプロパティに参照できる
    }
  }

  set legs(value: number) {  //=で代入できる
    if (value > 1) {  //代入した値が4より大きい時、出力
      this._legs = value;
    }
  }


  let dog = new Animal(true);
// dog.cry();
  dog.legs = 4; //set で4を代入
  console.log(dog.legs);


//ショートハンドとしても使える
// get email() {
//   return this.formGroup.get('email');
// }
// dog.email
// }


