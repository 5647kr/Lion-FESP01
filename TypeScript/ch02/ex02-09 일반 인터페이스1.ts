(()=> {
  console.log("========== 인터페이스에 제네릭 적용1 ==========");

  interface CityDropdown {
    value: string;
    selected: boolean;
  }

  interface zipcodeDropdown {
    value: number;
    selected: boolean;
  }

  function createDropdown1(list: CityDropdown[]):string {
    //*
    // <select>
    //  <option>서울시</option>
    //  <option selected>인천시</option>
    //  <option>광주시</option>
    // </select>
    //  */

    var result = "<select>";
    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${item.value}</option>`
    })

    result += "</select>";
    return result;
  }

  var cityList: CityDropdown[] = [
    {value: "서울시", selected: false},
    {value: "인천시", selected: true},
    {value: "광주시", selected: false},
  ]

  const cityTag = createDropdown1(cityList);
  console.log(cityTag);



  function createDropdown2(list: zipcodeDropdown[]):string {
    //*
    // <select>
    //  <option>서울시</option>
    //  <option selected>인천시</option>
    //  <option>광주시</option>
    // </select>
    //  */

    var result = "<select>";
    list.forEach((item) => {
      result += `<option ${item.selected ? "selected" : ""}>${item.value}</option>`
    })

    result += "</select>";
    return result;
  }

  var zipcodeList: zipcodeDropdown[] = [
    {value: 12345, selected: false},
    {value: 34567, selected: false},
    {value: 56789, selected: true}
  ]

  const zipcodeTag = createDropdown2(zipcodeList);
  console.log(zipcodeTag)
})();
