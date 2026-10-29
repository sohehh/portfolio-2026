// 로딩 초기화
document.documentElement.classList.add("hidden");

window.addEventListener("load", function () {
  const loading = document.querySelector("#loading");

  // 로딩 UI 제거
  loading.classList.add("hidden");
  document.documentElement.classList.remove("hidden");
});
//  [브라우저]
//       1. HTML 파싱 시작
//       2. defer 스크립트 다운로드 (병렬)
//       3. HTML 파싱 완료(DOM 생성 완료)
//       4. defer 스크립트 실행
//           ├─ loadingInit() 실행 → html.hidden 추가
//           ├─ window.load 핸들러 등록
//           └─ loadingRemove(), loadingInit 함수 정의
//       5. 이미지·영상 등 리소스 로드
//       6. window.load 발생
//       7. loadingRemove() 실행 → 로딩 화면 제거
