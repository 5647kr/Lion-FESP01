console.log("========== 배열 메소드 실습 ==========");

console.log("----- stack -----");
let stack = [];
// 100, 200, 300 저장하고
// 300, 200, 100 순서로 출력

stack.unshift(100)
console.log(stack)
stack.unshift(200)
console.log(stack)
stack.unshift(300)
console.log(stack)

console.log(stack.shift())
console.log(stack.shift())
console.log(stack.shift())


console.log("----- queue -----");

let queue = [];
// 100, 200, 300 저장하고
// 100, 200, 300 출력

stack.unshift(100)
console.log(stack)
stack.unshift(200)
console.log(stack)
stack.unshift(300)
console.log(stack)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())


console.log("----- stackT -----");

stack.unshift(100);
console.log(stack);
stack.unshift(200);
console.log(stack);
stack.unshift(300);
console.log(stack);

console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());


console.log("----- queueT -----");

queue.unshift(100);
console.log(queue);
queue.unshift(200);
console.log(queue);
queue.unshift(300);
console.log(queue);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
