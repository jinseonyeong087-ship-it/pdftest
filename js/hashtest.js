
    // Set 생성 (문자열 저장)
    const fruits = new Set();

    // 값 추가
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Orange");
    fruits.add("Apple"); // 중복 → 무시됨

    // 크기 출력
    console.log("저장된 과일 개수:", fruits.size);

    // 전체 요소 출력
    console.log("저장된 과일:", fruits);

    // 특정 값 포함 여부 확인
    if (fruits.has("Banana")) {
      console.log("Banana가 있습니다.");
    }

    // 값 삭제
    fruits.delete("Orange");
    console.log("Orange 삭제 후:", fruits);

    // 모든 값 반복 출력
    console.log("=== 반복문으로 출력 ===");
    for (const fruit of fruits) {
      console.log(fruit);
    }

    // 전체 비우기
    fruits.clear();
    console.log("비운 후:", fruits);
 