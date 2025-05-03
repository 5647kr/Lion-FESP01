"use strict";
(() => {
    console.log("========== 상수가 필요한 경우 ==========");
    // 변수명, 함수명: 카멜 케이스(소문자 시작 두번째 단어의 첫글자 대문자)
    //클래스명, 인터페이스명, 타입별칭: 파스칼 케이스(대문자시작)
    function getSchedule(subject) {
        if ("javascript" === subject) {
            return `js 수업은 4일 교육, 2일 프로젝트`;
        }
        else if ("typescript" === subject) {
            return `ts 수업은 3일 교육, 1일 프로젝트`;
        }
    }
    const jsSchedule = getSchedule("javascript");
    const tsSchedule = getSchedule("typescript");
    console.log("jsSchedule:", jsSchedule);
    console.log("tsSchedule:", tsSchedule);
})();
