const projectSwiper = new Swiper(".js-project-swiper", {
  slidesPerView: 1,
  grid: {
    rows: 2,
    // fill: 'row',
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".content--project .swiper-button-group .swiper-button-next",
    prevEl: ".content--project .swiper-button-group .swiper-button-prev",
  },
  breakpoints: {
    // 브라우저가 768보다 클 때
    768: {
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    // 브라우저가 1024보다 클 때
    1024: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
  },
});
window.addEventListener("load", () => {
  projectSwiper.update();
  projectSwiper.navigation.update();
});
const projectSwiperRow = new Swiper(".js-project-swiper--row", {
  slidesPerView: 1,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".content--project--row .swiper-button-group .swiper-button-next",
    prevEl: ".content--project--row .swiper-button-group .swiper-button-prev",
  },
  breakpoints: {
    // 브라우저가 768보다 클 때
    768: {
      slidesPerView: 2,
      grid: { rows: 2, fill: "row" },
    },
    // 브라우저가 1024보다 클 때
    1024: {
      slidesPerView: 3,
      grid: { rows: 2, fill: "row" },
    },
  },
});

const projectAppSwiper = new Swiper(".js-projectApp-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: ".content--projectApp .swiper-button-group .swiper-button-next",
    prevEl: ".content--projectApp .swiper-button-group .swiper-button-prev",
  },
});

const projectWebSwiper = new Swiper(".js-projectWeb-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: ".content--projectWeb .swiper-button-group .swiper-button-next",
    prevEl: ".content--projectWeb .swiper-button-group .swiper-button-prev",
  },
});

const projectBannerSwiper = new Swiper(".js-projectBanner-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: ".content--projectBanner .swiper-button-group .swiper-button-next",
    prevEl: ".content--projectBanner .swiper-button-group .swiper-button-prev",
  },
});

const projectScreenSwiper = new Swiper(".js-projectScreen-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  navigation: {
    nextEl: ".content--projectScreen .swiper-button-group .swiper-button-next",
    prevEl: ".content--projectScreen .swiper-button-group .swiper-button-prev",
  },
});
// DOM이 다 그려진 후 강제로 update : 모바일에서 마지막요소 잘림 해결
// window.addEventListener('load', () => {
//     tabs.update();
// });
