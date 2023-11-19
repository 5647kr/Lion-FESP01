(()=>{
  console.log("==========상수 그룹화==========");

  type ReadOnly = {
    readonly JS: string,
    readonly TS: string,
    readonly React: string
  }

  const ClassName: ReadOnly = {
    JS: 'javascript',
    TS: 'typescript',
    React: 'react'
  }
  function getSchedule(subject: string): string | undefined {
    if(ClassName.JS === subject) {
      return `js 수업은 4일 교육, 2일 프로젝트`;
    }else if(ClassName.TS === subject) {
      return `ts 수업은 3일 교육, 1일 프로젝트`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule)
  console.log(tsSchedule)
})();