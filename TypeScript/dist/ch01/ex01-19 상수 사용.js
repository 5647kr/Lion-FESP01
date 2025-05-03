"use strict";
(() => {
    console.log("========== 상수 사용 ==========");
    const JS = 'javascript';
    const TS = 'typsscript';
    function getSchedule(subject) {
        if (JS === subject) {
            return `js 수업은 4일 교육, 2일 프로젝트`;
        }
        else if (TS === subject) {
            return `ts 수업은 3일 교육, 1일 프로젝트`;
        }
    }
    const jsSchedule = getSchedule(JS);
    const tsSchedule = getSchedule(TS);
    console.log("jsSchedule:", jsSchedule);
    console.log("tsSchedule:", tsSchedule);
})();
