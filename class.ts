// クラス
// オブジェクト生成のためのテンプレートを定義する

class クラス名 {
  プロパティ = 'プロパティ1';

  constructor() {
    // 初期化関数（newされたときに実行される / プロパティの初期化等を行う）
    this.プロパティ = 'プロパティ';
  }

  メソッド1() {
    console.log('テスト');
    this.プロパティ = 'プロパティ3';
  }
}

const インスタンス = new クラス名(); // インスタンス化
インスタンス.プロパティ = 'プロパティ2';
インスタンス.メソッド1();

//
class Animal {
  age: number = 10;
  private _legs = 1;

  // アクセス修飾子（public, protected, private）: プロパティとして取り込める
  constructor(public isCry: boolean) {
    this.age = 2;
  }

  cry(): void {
    if (this.isCry) {
      console.log(`age: ${this.age}`);
    }
  }

  // アクセサメソッド（getter, setter）：privateなプロパティは外から参照できないためアクセサメソッドを使う
  get legs() {
    if (this._legs > 2) {
      return this._legs;
    }
  }
  set legs(value: number) {
    if (value > 1) {
      this._legs = value;
    }
  }
  //
  get email() {
    return this.formGroup.get('email');
  }
  // dog.email();
}

class Dog extends Animal {
  constructor(public isCry: boolean) {
    // 親のクラスのconstructorを実行
    super(isCry);
    this.age = 15;
  }

  cry(): void {
    if (this.isCry) {
      console.log(`Bow wow`);
    }

    console.log('Dog is crying!');
    // 親クラスにアクセス
    super.cry();
  }
}

let dog = new Dog(true);

dog.cry();

dog.legs = 4; // setterへアクセス
console.log(dog.legs); // getterへアクセス

// アクセス修飾子
// public : どこからでもアクセス可（未指定時もpublic）
// protected : 自身のクラスと派生クラスの中でアクセス可（クラスの外でインスタンスからはアクセスできない）
// private : そのクラスの中でのみアクセス可
