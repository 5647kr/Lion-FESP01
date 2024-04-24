console.log("----------배열 메소드 실습----------");

// 실습

let stack = [];
// 100, 200, 300 저장하고
// 300, 200, 100 순서로 출력

stack[0] = 100 ;
console.log(stack);
stack[1] = 200;
console.log(stack);
stack[2] = 300;
console.log(stack);


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log('-------------------------------------');

stack.push(100);
console.log(stack);
stack.push(200);
console.log(stack);
stack.push(300);
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log('-------------------------------------');

let queue = [];
// 100, 200, 300 저장하고
// 100, 200, 300 출력

queue.push(100);
console.log(queue);
queue.push(200);
console.log(queue);
queue.push(300);
console.log(queue);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

console.log('-------------------------------------');

queue[0] = 100;
console.log(queue);
queue[1] = 200;
console.log(queue);
queue[2] = 300;
console.log(queue);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log('------------------Teacher-------------------');

stack.unshift(100);
console.log(stack);
stack.unshift(200);
console.log(stack);
stack.unshift(300);
console.log(stack);

console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());

console.log('-------------------------------------');

queue.unshift(100);
console.log(queue);
queue.unshift(200);
console.log(queue);
queue.unshift(300);
console.log(queue);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
