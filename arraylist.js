// ✅ 바닐라 JS: 배열(Array)로 과일 CRUD
// ───────────────────────────────────────────────────────────────
// [자바/파이썬과 차이 요약]
// - 추가:  push (Java add, Py append)
// - 조회:  arr[index] (Java get, Py [index])
// - 수정:  arr[index] = value (Java set, Py [index]=value)
// - 삭제(인덱스): splice(index, count) (Java remove(int), Py pop(index))
//   * splice는 삭제된 요소 배열을 반환 (비어있을 수도 있음)
// - 삭제(값): indexOf로 위치 찾은 뒤 splice (Py remove(value)처럼 바로는 못 함)
//   * 값이 없으면 아무 일도 안 하도록 분기 (파이썬은 ValueError 예외 발생)
// - 포함: includes(value) (Java contains, Py in)
// - 조건삭제/필터: filter로 새 배열 생성 (Java removeIf, Py list comprehension)
// - 인덱스 범위 초과 읽기: JS는 undefined 반환 (Java/Py는 예외)

const fruits = [];

// ──────── C(Create) : 추가 ────────
// Java: list.add("사과") / Python: list.append("사과") / JS: push
fruits.push("사과");
fruits.push("바나나");
fruits.push("포도");
console.log("추가 후:", fruits); // ["사과","바나나","포도"]

// ──────── R(Read) : 조회 ────────
// Java: get(0) / Python: list[0] / JS: arr[0]
console.log("0번 인덱스:", fruits[0]); // "사과"

// Java: contains / Python: "바나나" in list / JS: includes
console.log("포함 여부(바나나):", fruits.includes("바나나")); // true

// 전체 조회
console.log("전체 과일:", fruits);

// ──────── U(Update) : 수정 ────────
// Java: set(1,"오렌지") / Python: list[1]="오렌지" / JS: arr[1]="오렌지"
fruits[1] = "오렌지";
console.log("수정 후:", fruits); // ["사과","오렌지","포도"]

// ──────── D(Delete) : 삭제 ────────
// (1) 인덱스로 삭제
// Java: remove(0) / Python: pop(0) / JS: splice(0,1)
const removed = fruits.splice(0, 1); // ["사과"]가 반환됨
console.log("삭제된 요소(인덱스 0):", removed[0]); // "사과"
console.log("현재:", fruits); // ["오렌지","포도"]

// (2) 값으로 삭제 (첫 번째 매칭만)
// Python의 remove(value) 같은 내장동작은 JS에 없음 → indexOf로 직접 찾기
const idx = fruits.indexOf("포도");
if (idx !== -1) {
  fruits.splice(idx, 1); // 해당 위치 1개 삭제
}
console.log("값 삭제 후:", fruits); // ["오렌지"]

// (3) 전체 삭제
// Java/Python: clear() / JS: length=0 또는 arr.splice(0)
fruits.length = 0;
console.log("전체 삭제 후 비었나?", fruits.length === 0); // true

// ──────── 조건 삭제/필터링 예시 ────────
// Java: removeIf(x -> x.startsWith("파"))
// Python: [x for x in xs if not x.startswith("파")]
// JS: filter로 새 배열 만들기 (원본 보존)
let moreFruits = ["사과", "포도", "파인애플", "바나나"];
moreFruits = moreFruits.filter(x => !x.startsWith("파"));
console.log("조건 필터링 후:", moreFruits); // ["사과","포도","바나나"]

// ──────── 인덱스 범위 초과 접근 차이 ────────
// Java: IndexOutOfBoundsException / Python: IndexError / JS: undefined 반환
const out = moreFruits[999];
console.log("인덱스 초과 접근 결과(JS):", out); // undefined (예외 아님)
