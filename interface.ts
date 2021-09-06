// インターフェイス（Interface）: 定義だけで実装がないクラスのようなもの
// クラスに特定のプロパティやメソッドの利用を強制する目的
interface CuteAnimal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void;
}

// Interfaceの継承もできる
interface SuperAnimal extends CuteAnimal {
  canRun: boolean;
}

// implements でインターフェイスを読み込み
class Cat implements SuperAnimal {
  name: string = 'Eve';
  legs: number = 4;
  isCry: boolean = true;
  canRun: true;

  cry(): void {
    if (this.isCry) {
      console.log('Meaow, meaow');
    } else {
      console.log("They don't cry..");
    }
  }
}

let maru = new Cat();
maru.cry();

// オブジェクトからも読み込み可能
let Rabbit: CuteAnimal = {
  name: 'Usa',
  legs: 4,
  isCry: false,
  cry: function() {
    console.log("They don't cry..");
  }
};
