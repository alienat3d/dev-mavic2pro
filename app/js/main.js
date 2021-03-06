$(function(){
  // === SLIDER ===
  $(".products__slider").slick({
    prevArrow:
      '<button class="slider-btn slider-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    infinite: false,
  });
  // === / SLIDER ===

  // === ACCORDION ===
  $(".questions__item-title").on("click", function () {
    $(".questions__item").removeClass("questions__item--active");
    $(this).parent().addClass("questions__item--active");
  });
  // === / ACCORDION ==

  // === FULLPAGE.JS ==
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: ".page-section",
    scrollOverflow: true,
    menu: "#headerNav",
    anchors: [
      "hero",
      "products",
      "benefits",
      "specification",
      "questions",
      "contacts",
    ],
  });
  // === / FULLPAGE.JS ==

  // === BURGER MENU ==
  $(".menu__button").on("click", function () {
    $(".menu__button").toggleClass("menu__button--active");
    $(".menu__list").toggleClass("menu__list--active");
    
  });

  $(".menu__list-link").on("click", function () {
    $(".menu__button").removeClass("menu__button--active");
    $(".menu__list").removeClass("menu__list--active");
    
  });
  // === / BURGER MENU ==
});