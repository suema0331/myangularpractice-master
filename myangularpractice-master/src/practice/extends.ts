// クラスの継承

//Animalクラスを継承してDogクラスを作る

class Animal {

  age: number = 10;

  constructor(public isCry: boolean) {
    this.age = 2;
  }

  cry(): void {
    if (this.isCry) {
      // alert(`age: ${this.age}`);
    }
  }
}

class Dog extends Animal {

//上書きしないと、親のコンストラクタが呼ばれる
  constructor(public isCry: boolean) {
    super(isCry); //親のコンストラクタを実行できる
    //継承先でもコンストラクタを実行し、初期化する必要がある

    this.age = 10; //プロパティの初期化
  }

//Animalの実装を上書き可能

  cry(): void {
    // if (this.isCry) {
    //   alert('Bow, wow'!);
    // }
    console.log('dog is cry!');
    super.cry(); //元のクラスにアクセスできる！！ageのアラート
  }
}

let dog = new Dog(true);
dog.cry();
