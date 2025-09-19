// generate-onepage.js
import PDFDocument from 'pdfkit'
import fs from 'fs'

function createPdf(filename) {
  // 자동 첫 페이지 생성 비활성화
  const doc = new PDFDocument({ autoFirstPage: false })

  const stream = fs.createWriteStream(filename)
  doc.pipe(stream)

  // (선택) 한글 폰트 등록
  // Windows 예시: 경로 확인 필수!
  doc.registerFont('malgun', 'C:/Windows/Fonts/malgun.ttf')

  // 우리가 직접 "딱 한 장"만 추가
  doc.addPage({ size: 'A4', margin: 50 })

  // 텍스트 한 번만 출력
  doc.font('malgun').fontSize(20).text('안녕하세요, PDF!', 100, 150)

  doc.end()
  stream.on('finish', () => console.log(`PDF 생성 완료: ${filename}`))
}

createPdf('hello.pdf')
