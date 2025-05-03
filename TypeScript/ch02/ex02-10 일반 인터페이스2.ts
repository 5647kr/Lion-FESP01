(()=>{
  console.log("========== 인터페이스에 제네릭 적용 ==========");

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }

  function createDropdown<T>(list: Dropdown<T>[]):string {
    var result = "<select>";
    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${item.value}</option>`
    })

    result += "</select>";
    return result;
  }

  var cityList: Dropdown<string>[] = [
    {value: "서울시", selected: false},
    {value: "인천시", selected: true},
    {value: "광주시", selected: false},
  ]

  const cityTag = createDropdown<string>(cityList);
  console.log(cityTag);


  var zipcodeList: Dropdown<number>[] = [
    {value: 12345, selected: false},
    {value: 34567, selected: false},
    {value: 56789, selected: true}
  ]

  const zipcodeTag = createDropdown<number>(zipcodeList);
  console.log(zipcodeTag)
})();
