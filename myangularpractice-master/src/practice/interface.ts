// インターフェイス (Interface)

interface Animal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void; //戻り値
}

// インターフェースは継承可能

interface SuperAnimal extends Animal {
  //新しく定義を追加
  canRun: boolean;
}

//実装クラス

class Dog implements SuperAnimal {
  name: string = "Pochi";
  legs: number = 4;
  isCry: boolean = true;
  canRun: boolean = true;

  cry(): void {
    if (this.isCry) {
      console.log("わん!");
    }
  }
}

let pochi = new Dog();
pochi.cry(); //わん!

// インターフェースはオブジェクトにも適用可能

let Dog2: Animal = {
  name: 'Maron',
  legs: 4,
  isCry: true,
  cry: function () {
    console.log('わんわん!');
  }
}
