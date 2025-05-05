"use strict";
(() => {
    var div = document.querySelector("div");
    // div.innerHTML = "hello"; error
    // !를 붙여주면 non null assertion
    // div!.innerHTML = "hello";
    if (div !== null) { // 타입 가드
        div.innerHTML = "Hello";
    }
    console.log(div);
})();
