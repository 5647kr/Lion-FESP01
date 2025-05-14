(() => {
  console.log("========== mapped type2 ==========");

  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  type ArrUser = {
    // [Prop in "id" | "name"]: string[]
    [Prop in keyof User]: string[];
  };

  const kim: User = {
    id: "1",
    name: "김철수",
    address: "서울시",
    phone: "01012345678",
  };

  const lee: ArrUser = {
    id: ["1"],
    name: ["이수정"],
    address: ["서울시"],
    phone: ["01098765432"],
  };

  console.log("kim:", kim);
  console.log("lee:", lee);
})();
