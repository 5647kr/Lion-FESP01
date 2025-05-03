"use strict";
(() => {
    console.log("========== 숫자형 Enum 사용 ==========");
    //* Enum: 상수 데이터들의 집합을 정의
    let ClassName;
    (function (ClassName) {
        ClassName[ClassName["JS"] = 0] = "JS";
        ClassName[ClassName["TS"] = 1] = "TS";
        ClassName[ClassName["React"] = 2] = "React";
    })(ClassName || (ClassName = {}));
    console.log("ClassName:", ClassName);
    function getSchedule(subject) {
        if (ClassName.JS === subject) {
            return `js 수업은 4일 교육, 2일 프로젝트`;
        }
        else if (ClassName.TS === subject) {
            return `ts 수업은 3일 교육, 1일 프로젝트`;
        }
    }
    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);
    console.log("jsSchedule:", jsSchedule);
    console.log("tsSchedule:", tsSchedule);
})();
