// ジェネリック（Generics）: 型を外部から指定できるクラス・関数を作れる

// class NumberStore {
//   data: number;
// }

// class StringStore {
//   data: string;
// }

// クラス
class Store<T> {
  // T(Type), U, V, T1, T2, T3
  data: T;
  getStore(): T {
    return this.data;
  }
}

let stringData = new Store<string>();
let booleanData = new Store<boolean>();

// 関数
function sayHello<T>(keyword: T) {
  console.log(`Log: ${keyword}.`);
}
// 関数実行時
sayHello<string>('Hello, Shogo!');
sayHello<number>(10000);

// 複数指定も可能
class Component<T, U> {
  name: T;
  created: U;
}
let component = new Component<string, number>();
// component.created = 'hello'; // エラー
component.created = 808;
