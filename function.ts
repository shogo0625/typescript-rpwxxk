// アロー関数
// () => { }

// function add(x1: number, x2: number): number {
//   return x1 + x2;
// }
let add = (x1: number, x2: number): number => {
  return x1 + x2;
};

console.log(add(1, 3));

// 一行で返す場合は、引数の括弧（型指定しない場合）・関数囲う括弧省略できる
let hello = name => `Hello, ${name}!`;
console.log(hello('Shogo'));

let getValue = (): number => {
  return document
    .getElementById('app')
    .getElementsByTagName('div')
    .firstChild.getAttribute('value')
    .toFixed(2);
};

// 通常のfunction関数とアロー関数でthisの参照先が違う
document.getElementById('button1').addEventListener('click', function() {
  console.log(this); // <button></button>
});

// this => Window
document.getElementById('button1').addEventListener('click', () => {
  console.log(this); // Window
});
