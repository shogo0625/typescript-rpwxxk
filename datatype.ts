// データ型

// 文字列型
var title: string = 'Angular';
title = 'Angular!';

// 数値型
var n: number = 9;

// 真偽値型
var isOpen: boolean = true;

// 配列型
var keywords: (string | number)[] = ['name', 'email', 'body', 0];

// タプル型（配列内の順番指定）
var payment: [number, string, number] = [1, 'apple', 0];

// オブジェクト型
var object: { [key: string]: string } = {
  name: 'Shogo Nakajima',
  id: 'test'
};
// JavaScriptのtypeOf演算子でObject判定できるデータ
var post: object = [{ id: 12, content: 'lorem ipsum' }];

// 共用型（Union型）
var sample: string | number | boolean;
sample = 'Shogo';
sample = 100;
sample = true;

// enum型（定数を列挙してグルーピングするための型）
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13
}
console.log(KeyCode.Backspace); // 8

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 401
}
console.log(ErrorCode.OK); // 200

// 値を入れないとインデックスが振られる
enum Character {
  Bob,
  Dad,
  Mom
}
console.log(Character.Mom); // 2

// any型（全てのデータ型を許容）
var something: any = 'foo';
something = 100;
something = true;
something = { id: 1 };

// null, undefined型（null : HTMLの要素を取得する前にエラーにならないよう）
var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;

// 型推論（定義時に型指定しないと自動的に割り当てられる）
var unknown = 'string';
// unknown = 10; ⇒ エラーになる
