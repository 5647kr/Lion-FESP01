"use strict";
(() => {
    console.log("==========const Enum==========");
    function getSchedule(subject) {
        if ("javascript" /* ClassName.JS */ === subject) {
            return `${"javascript" /* ClassName.JS */} 수업은 4일 교육, 2일 프로젝트`;
        }
        else if ("typescript" /* ClassName.TS */ === subject) {
            return `${"typescript" /* ClassName.TS */} 수업은 3일 교육, 1일 프로젝트`;
        }
    }
    const jsSchedule = getSchedule("javascript" /* ClassName.JS */);
    const tsSchedule = getSchedule("typescript" /* ClassName.TS */);
    console.log(jsSchedule);
    console.log(tsSchedule);
})();
