// スプレッド演算子
let categories = ['post', 'news', 'info'];
// ...categories

// 複製
let copyCat = [...categories]; // 'post', 'news', 'info'
console.log(copyCat, copyCat === categories); // 'post', 'news', 'info', false

// 連結
let pushCat = ['other', ...categories];
console.log(pushCat);

let unshiftCat = [...categories, 'other'];
console.log(unshiftCat);

// 途中に挿入
let insertCat = ['other', ...categories, 'Q$A'];
console.log(insertCat);

// 2つの配列をマージ
let mergeCat = [...categories, ...copyCat];
console.log(mergeCat);

// オブジェクト
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

let copyObj = { ...post };
console.log(copyObj);

let pushObj = { ...post, updated: '2020-04-05' };
console.log(pushObj);

let mergeObj = { ...post, ...pushObj };
console.log(mergeObj);

// オブジェクトの中に配列を展開（インデックス値がキーとなる）
let test = { ...categories };
console.log(test);
