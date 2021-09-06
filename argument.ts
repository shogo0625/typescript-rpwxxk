// 変数

// let
// let foo = 'foo';
let date = new Date();

// letはブロックスコープ内でしか参照できない、varは参照可能
if (true) {
  var foo = 'foo';
}
console.log(foo);

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

for (let j = 0; j < 5; j++) {
  console.log(j);
}
// console.log(j);

// letは変数の巻き上げが起こらない
var hoge = 'hoge';

function logHoge() {
  console.log(hoge); // undefined
  var hoge = 'new hoge'; // 暗黙的に関数の最初で定義されたことになる
  console.log(hoge); // new hoge
}
logHoge();
