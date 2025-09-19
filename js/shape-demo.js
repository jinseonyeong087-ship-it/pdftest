// generate-docx.js
// Node.js로 DOCX 생성 (dolanmiu/docx 사용)

import fs from 'fs'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ShadingType,
} from 'docx'

// inch → twip (1 inch = 1440 twips)
const inch = (n) => Math.round(n * 1440)

async function createShapeDocx(filename) {
  // 페이지 여백 0.7인치로 설정
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: inch(0.7),
              right: inch(0.7),
              bottom: inch(0.7),
              left: inch(0.7),
            },
          },
        },
        children: [
          // 1x1 테이블(회색 박스)
          new Table({
            width: { size: inch(6.5), type: WidthType.DXA }, // 가로폭 6.5인치
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: inch(6.5), type: WidthType.DXA },
                    // 배경색 (D3D3D3), 테두리(555555, 2pt = size 16)
                    shading: {
                      type: ShadingType.CLEAR,
                      color: 'auto',
                      fill: 'D3D3D3',
                    },
                    borders: {
                      top: { style: BorderStyle.SINGLE, size: 16, color: '555555' },
                      bottom: { style: BorderStyle.SINGLE, size: 16, color: '555555' },
                      left: { style: BorderStyle.SINGLE, size: 16, color: '555555' },
                      right: { style: BorderStyle.SINGLE, size: 16, color: '555555' },
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: '이 사각형 안에 들어있는 텍스트입니다.',
                            // docx 폰트 크기는 half-points 단위 → 18pt = 36
                            size: 36,
                            font: 'Malgun Gothic', // 윈도우: 맑은 고딕
                          }),
                        ],
                      }),
                      // 아래쪽 여백용 빈 문단(옵션)
                      new Paragraph(''),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  })

  const buffer = await Packer.toBuffer(doc)
  fs.writeFileSync(filename, buffer)
  console.log(`${filename} 생성 완료!`)
}

createShapeDocx('shape-demo.docx')
