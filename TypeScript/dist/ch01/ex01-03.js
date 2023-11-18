"use strict";
(() => {
    console.log("==========함수에 타입 지정==========");
    // 매개 변수명 뒤에 지정
    //리턴 타입 지정
    // 매개변수 선언무 뒤에 지정하며, 리턴값이 없을 경우 void로 지정한다.
    function getCount(count) {
        return 'count: ' + count;
    }
    console.log(getCount(10));
    // console.log(getCount('10')); //!Error
    // console.log(getCount(10, 20)); //!Error
    // console.log(getCount()); //!Error
    var number = getCount(30);
    console.log(number);
})();
