(() => {
  console.log("========== mapped type1 ==========");

  type Userfields = "id" | "name" | "address" | "phone";

  type User = {
    [field in Userfields]: string;
  };

  const kim: User = {
    id: "1",
    name: "김철수",
    address: "서울시",
    phone: "01012345678",
  };

  console.log(kim);
})();
