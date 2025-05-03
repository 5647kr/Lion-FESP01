(() => {
  console.log("========== const Enum ==========");

  //* Enum: 상수 데이터들의 집합을 정의
  const enum ClassName {
    JS = "javascript",
    TS = "typescript",
    React = "react",
  }

  function getSchedule(subject: ClassName): string | undefined {
    if (ClassName.JS === subject) {
      return `${ClassName.JS} 수업은 4일 교육, 2일 프로젝트`;
    } else if (ClassName.TS === subject) {
      return `${ClassName.TS} 수업은 3일 교육, 1일 프로젝트`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log("jsSchedule:", jsSchedule);
  console.log("tsSchedule:", tsSchedule);
})();
