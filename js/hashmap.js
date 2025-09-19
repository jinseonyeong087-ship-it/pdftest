const jsonfile = require("jsonfile");

const file = "data.json";
const obj = { name: "Alice", age: 25 };

// JSON 파일로 저장
jsonfile.writeFile(file, obj, { spaces: 2 })
  .then(() => console.log("파일 저장 완료"))
  .catch((err) => console.error(err));

// JSON 파일 읽기
jsonfile.readFile(file)
  .then((data) => console.log("읽은 데이터:", data));
