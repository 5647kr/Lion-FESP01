"use strict";
(() => {
    console.log("==========상수 사용==========");
    const js = 'javascript';
    const ts = 'typsscript';
    function getSchedule(subject) {
        if ('js' === subject) {
            return `js 수업은 4일 교육, 2일 프로젝트`;
        }
        else if ('ts' === subject) {
            return `ts 수업은 3일 교육, 1일 프로젝트`;
        }
    }
    const jsSchedule = getSchedule(js);
    const tsSchedule = getSchedule(ts);
    console.log(jsSchedule);
    console.log(tsSchedule);
})();
