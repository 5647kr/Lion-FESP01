// for과 if문으로

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

// 완료된 할일 목록
var doneList = [];
for(var i = 0; i < todolist.length; i++) {
  if(todolist[i].done === true) {
    doneList.push(todolist[i])
  }
}
console.log('완료된 할일 목록', doneList);

// 남은 할일 목록
//var reaminList = []; //!오타
var remainList = [];
for(var i = 0; i < todolist.length; i++) {
  if(todolist[i].done !== true) {
    remainList.push(todolist[i])
  }
}
console.log('남은 할일 목록', remainList);

// 남은 할일 수
var remainCount = 0;
for(var i = 0; i < remainList.length; i++) {
  remainCount++;
}
console.log('남은 할일 수', remainCount);

// _id=2인 할일
var todo = {};
for(var i = 0; i < todolist.length; i++) {
  if(todolist[i]._id === 2) {
    todo = todolist[i].title;
  }
}
console.log('_id=2인 할일', todo);

// _id=3인 할일의 index
var todoIndex = 0;
for(var i = 0; i < todolist.length; i++) {
  if(todolist[i]._id === 3) {
    todoIndex = todolist[i]._id -1;
  }
}
console.log('_id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
if (remainCount > 0) {
  hasTodo = true;
}
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
if (remainCount !== 0) {
  busy = false
}
console.log('할일이 모두 완료 되었는가?', busy);