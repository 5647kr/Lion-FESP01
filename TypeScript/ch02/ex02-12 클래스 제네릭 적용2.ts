(()=>{
  console.log("========== 클래스에 제네릭 적용 ==========");

  class Queue<T> {
    data: T[] = [];
    push(item: T): void {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  var stringQ = new Queue<string>();
  stringQ.push("hello");
  stringQ.push("js");
  stringQ.push("world");

  var str1 = stringQ.pop();
  var str2 = stringQ.pop();
  var str3 = stringQ.pop();

  console.log(str1, str2, str3);

  var numberQ = new Queue<number>();
  numberQ.push(100);
  numberQ.push(200);
  numberQ.push(300);

  var num1 = numberQ.pop();
  var num2 = numberQ.pop();
  var num3 = numberQ.pop();

  console.log(num1, num2, num3);
})();
