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
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록
console.log('map() 남은 할일 목록', remainList);

// reduce() 남은 할일 수
console.log('reduce() 남은 할일 수', remainList);

// find() _id=2인 할일
console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
console.log('every() 할일이 모두 완료 되었는가?', busy);
