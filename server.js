// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/download/hello", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=hello.pdf");
  res.sendFile(path.join(__dirname, "public", "hello.pdf"));
});

app.get("/download/shape", (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader("Content-Disposition", "attachment; filename=shape-demo.docx");
  res.sendFile(path.join(__dirname, "public", "shape-demo.docx"));
});

app.listen(3000, () => console.log("서버 실행: http://localhost:3000"));
