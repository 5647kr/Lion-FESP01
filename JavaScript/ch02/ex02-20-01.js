var todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(function(elem) {
  if(elem.done === true) {
    doneList.push(elem)
  }
});
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter(function(elem) {
  if(elem.done === true) {
    return elem;
  }
});
console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록
var remainList = todolist.map(function(elem) {
  if(elem.done === false) {
    return elem.title;
  }
}).filter((i) => {
  return i !== undefined;
});
console.log('map() 남은 할일 목록', remainList);

// reduce() 남은 할일 수
var remainList = todolist.reduce(function(count, elem) {
  return elem.done === false ? count : count + 1;
}, 0);
console.log('reduce() 남은 할일 수', remainList);

// find() _id=2인 할일
var todo = todolist.find(function(elem) {
  return elem._id === 2
});
console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
var todoIndex = todolist.find(function(elem) {
  return elem._id === 3;
});
todoIndex = todolist.indexOf(todoIndex);
console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(function(elem) {
  if(elem.done === false)
  return true
});
console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(function(elem) {
  if(elem.done === true) {
    return true
  }
});
console.log('every() 할일이 모두 완료 되었는가?', busy);
