// read_isam.js
import fs from "fs";

// 인덱스 & 데이터 파일 로드
const index = JSON.parse(fs.readFileSync("isam_index.json", "utf-8"));
const data = JSON.parse(fs.readFileSync("isam_data.json", "utf-8"));

// 검색 키
const key = "P002";

if (index[key] !== undefined) {
  const record = data[index[key]];
  console.log(`[${key}] ${record.name} - ${record.type} / ${record.cargo}`);
} else {
  console.log("레코드를 찾을 수 없습니다.");
}
