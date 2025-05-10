(() => {
  console.log("========== 기본 타입 ==========");

  console.log("========== string ==========");

  var str1: string = "hello";
  console.log("str1:", str1);
  console.log("typeof str1:", typeof str1);

  console.log("========== number ==========");

  var num1: number = 30;
  console.log("num1:", num1);
  console.log("typeof num1:", typeof num1);

  console.log("========== boolean ==========");

  var true1: boolean = true;
  console.log("true1:", true1);
  console.log("typeof true1:", typeof true1);

  console.log("========== object ==========");

  var obj1: object = { title: "object", done: false };
  console.log("obj1:", obj1);
  console.log("typeof obj1:", typeof obj1);

  console.log("========== array ==========");

  var arr1: Array<string> = ["array1", "array2"];
  console.log("arr1:", arr1);
  console.log("typeof arr1:", typeof arr1);

  var arr2: string[] = ["array1", "array2"];
  console.log("arr2:", arr2);
  console.log("typeof arr2:", typeof arr2);

  console.log("========== tuple ==========");
  // 갯수가 정해져 있는 배열, 각요소의 타입이 지정된 배열

  var tuple1: [string, string] = ["tuple1", "tuple2"];
  
  console.log("tuple1:", tuple1);
  console.log("typeof tuple1:", typeof tuple1);
  
  var tuple2: [string, number] = ["tuple1", 30];
  console.log("tuple2:", tuple2);
  console.log("typeof tuple2:", typeof tuple2);
  
  console.log("========== any ==========");
  //! 가능한 사용하지 않는다

  var any: any = "any1";

  console.log("any:", any);
  console.log("typeof any:", typeof any);

  console.log("========== null ==========");

  var null1:null = null;

  console.log("null1:", null1);
  console.log("typeof null1:", typeof null1);

  console.log("========== undefined ==========");

  var undefined1: undefined;

  console.log("undefined1:", undefined1);
  console.log("typeof undefined1:", typeof undefined1);
})();
