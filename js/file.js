import fs from "fs";

try {
  const data = fs.readFileSync("C:/jsy.java/pdftest/resource/test.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error("파일 읽기 오류:", err.message);
}
