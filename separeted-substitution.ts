// 分割代入（データの中の任意の値に新しい変数にセットできる仕組み）
let postCategories = ['post', 'news', 'info', 'other'];

// let a = categories[0];
// let b = categories[1];
let [a, b, , d] = postCategories;
console.log(a, b, d); // post, news, other

let [first, ...others] = postCategories;
console.log(...others); // news, info, other

let posts = { id: 1, content: 'dummy', created: '2020-04-01' };

const { id, content: body } = posts;
console.log(id, body); // 1, dummy

// const {id , name} = user.accountInfo.data;
// user.accountInfo.data.id;

// function test({ a, b, c}) {
// }
