"use strict";
(() => {
    console.log("========== mapped type2 ==========");
    const kim = {
        id: "1",
        name: "김철수",
        address: "서울시",
        phone: "01012345678"
    };
    const lee = {
        id: ["1"],
        name: ["이수정"],
        address: ["서울시"],
        phone: ["01098765432"]
    };
    console.log("kim:", kim);
    console.log("lee:", lee);
})();
