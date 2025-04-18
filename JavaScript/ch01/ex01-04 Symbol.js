//* Symbol
console.log("========== Symbol(Symbol) ==========");

var sym1 = Symbol('hello');
var sym2 = Symbol('world');
var sym3 = Symbol('hello');

console.log("type:", typeof sym1, "/ value:", sym1);
console.log("type:", typeof sym1, "/ value:", sym1);
console.log("type:", typeof sym1, "/ value:", sym1);

console.log("sym1 === sym2:", sym1 === sym2);
console.log("sym2 === sym3:", sym2 === sym3);
console.log("sym1 === sym3:", sym1 === sym3);


console.log("========== Symbol.for(Symbol.for) ==========");
// Symbol.for(): 자바스크립트 엔진이 관리하는 전역 심볼 레지스트리에 저장됨

var obj1 = {
  'hello': 10,
  'world': 20
};

obj1.hello = 30;
console.log("obj1:", obj1);

var obj2 = {
  [Symbol('hello')]: 10,
  [Symbol('world')]: 20,
};

obj2[Symbol('hello')] = 30;
console.log("obj2:", obj2);