// search-button
$(".search-button").click(function () {
  $(".h-wrap-1, .search-box-2-wrap").addClass('active');
});
$(".btn-close-search").click(function () {
  $(".h-wrap-1, .search-box-2-wrap").removeClass('active');
});

// ------------------------------------------------------------

// all-menu 누르면 menu-wrap이 나오게 하기
$(".all-menu").click(function () {
  $(".menu-wrap").addClass('active');
});

// ------------------------------------------------------------

// menuitem-depth1을 누르면 menuitem-depth2-wrap이 열리게 구현
$(".menuitem").click(function (e) {
  e.preventDefault();// a링크 기본기능 막기
  $(this).addClass('active').siblings().removeClass('active');
});

// ------------------------------------------------------------

// btn2
$(".btn2").click(function () {
  $(".menu-wrap").removeClass('active');
});

// ------------------------------------------------------------

// accordion-menu
// 아코디언 메뉴 만드는 js 기능 1
// $("아코디언탭").unbind("click").click(function (e) {
//   $(this).next().stop(true).slideToggle(300);
//   $("아코디언탭").not(this).next().slideUp(300);
// });
$(".tab-box-content-wrap").hide(); // 모든 아코디언 컨텐트 닫고시작
$(".accordion-menu-content h3").unbind("click").click(function (e) {
  // 해당 아코디언 구성인 li를 찾아가 클래스 active 토글
  $(this).parent('li').addClass('active').siblings('li').removeClass('active');
  $(this).next().stop(true).slideDown(300);
  $(".accordion-menu-content h3").not(this).next().slideUp(300);
});

// 아코디언 메뉴 만드는 js 기능 2(인덱스번호를 통한 탭구조)
// $("탭li").click(function () {
//   var index = $(this).index();
//   // 탭버튼 인덱스 값을 받아와서 변수에 대입
//   $(this).addClass('active').siblings().removeClass('active');
//   // 탭디자인 바뀌는부분에 active클래스 추가, 상관없는애 active제거
//   $(탭섹션).eq(index).addClass('active').siblings().removeClass('active');
//   //내가 누른 탭li인덱스번호랑 같은 번호인 탭섹션을 찾아서 active클래스 추가, 상관없는애 active제거
// });

// ------------------------------------------------------------

// utilization-pro-list-tab
$(".utilization-pro-list-tab ul li").click(function () {
  var index = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $(".utilization-sec-wrap section").eq(index).addClass('active').siblings().removeClass('active');
});

// ------------------------------------------------------------

// f-1이 786px 일 때 아코디언 메뉴
$(".productline-tit").unbind("click").click(function (e) {
  // 타이틀 클릭시
  if ($(this).parent().hasClass('productline1')) {
    // 타이틀의 부모(li)가 productline1라는 클래스명을 가진다면
    $('.productline1 ul, .productline2 ul').stop(true).slideToggle(300);
    // productline1,2의 ul들을 슬라이드 토글해라
  }
  else {
    // 별다른게 없으면(li 3~8)
    $(this).next().stop(true).slideToggle(300);
    // 타이틀 다음요소 ul 슬라이드토글
    $(".productline-tit").not(this).next().slideUp(300);
    // 상관없는 ul은 다 접기
  }
});

// ------------------------------------------------------------

// // (반응형 만들고 다시 만들기!)clause-links 클릭하면 안 보이는 부분이 보이게 만들기
// $(".droplist").click(function () {
//   var index = $(this).index();
//   $(this).addClass('active').siblings().removeClass('active');
//   $(".droplist").eq(index).addClass('active').siblings().removeClass('active');
// });

// clause-links-box-1 droplist-button
// jQuery 토글 버튼
$(document).ready(function () {
  $(".clause-links-box-1 .droplist-button").click(function () {
    $(".clause-links-box-1 .droplist").toggle();
  });
});

// clause-links-box-2 droplist-button
$(document).ready(function () {
  $(".clause-links-box-2 .droplist-button").click(function () {
    $(".clause-links-box-2 .droplist").toggle();
  });
});