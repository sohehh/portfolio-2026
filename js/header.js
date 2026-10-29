const $header = $(".site-header");
const $toggle = $(".site-header__toggle");
const $nav = $(".site-nav");

// 햄버거 메뉴 열기 / 닫기
$toggle.on("click", function () {
  const isOpen = $(this).attr("aria-expanded") === "true";

  $header.toggleClass("is-menu-open", !isOpen);

  $(this).attr({
    "aria-expanded": String(!isOpen),
    "aria-label": isOpen ? "메뉴 열기" : "메뉴 닫기",
  });
});

// 메뉴 링크 클릭 시 닫기
$nav.find("a").on("click", function () {
  closeMenu();
});

// ESC 키를 누르면 메뉴 닫기
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenu();
    $toggle.trigger("focus");
  }
});

// 메뉴 닫기 함수
function closeMenu() {
  $header.removeClass("is-menu-open");

  $toggle.attr({
    "aria-expanded": "false",
    "aria-label": "메뉴 열기",
  });
}

// 모바일에서 PC 화면으로 전환 시 메뉴 초기화
$(window).on("resize", function () {
  if (window.matchMedia("(min-width: 601px)").matches) {
    closeMenu();
  }
});
