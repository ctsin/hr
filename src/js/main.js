$(() => {
  "use strict";

  //- 主滑动块
  var swiperSchoolRecruit = new Swiper("#SchoolRecruit", {
    nextButton: ".swiper-button-next",
    direction: "vertical",
    // initialSlide: 3,
    onImagesReady: function() {
      $(".boy").addClass("a-fadeinB-boy");
      $(".girl").addClass("a-fadeinB-boy");
      $(".grassland").addClass("a-fadein");
      $(".school").addClass("a-fadeinB-school");
      $(".swiper-button-next .inner").addClass("animate");
    },
    onSlideChangeEnd: function(swiper) {
      if (swiper.activeIndex == "1") {
        //- 集团信息
        $(".floor-base").addClass("a-fadein");
        $(".building1").addClass("a-fadeinB");
        $(".building2").addClass("a-fadeinB");
        $(".rider").addClass("a-driving");

        $(".zichan").addClass("a-ripple");
        $(".touzi").addClass("a-ripple");
        $(".yatai").addClass("a-ripple");
      }
      if (swiper.activeIndex == "2") {
        //- 行业地位
        $(".status-building").addClass("a-float-updown");
        $(".status-technology").addClass("a-enlarge");
        $(".status-culture").addClass("a-enlarge");
        $(".status-manage").addClass("a-enlarge");
      }
      if (swiper.activeIndex == "3") {
        //- 薪酬福利
        $(".human-avater").addClass("a-enlarge");
      }
      if (swiper.activeIndex == "4") {
        //- 招聘岗位
        $(".aircraft").addClass("a-flying");
        $(".person1").addClass("a-fadeinT-person");
        $(".person2").addClass("a-fadeinT-person");
        $(".person3").addClass("a-fadeinT-person");
      }
      if (swiper.activeIndex == "5") {
        //- 联系我们
        $(".clound1").addClass("a-float-updown");
        $(".clound2").addClass("a-float-lr");
        $(".fireworks").addClass("a-enlarge-fireworks");
      }
      if (swiper.activeIndex == "1" || swiper.activeIndex == "3") {
        $(".arrow-indicator").addClass("flash");
      }
    }
  });

  $(".recruit-btn").on("click", function() {
    swiperSchoolRecruit.slideTo(4, 0, false);
  });

  $(".swiper-button-back").on("click", function() {
    swiperSchoolRecruit.slideTo(0, 0, false);
  });

  //- 集团信息滑动块
  new Swiper("#GroupSlide", {
    pagination: ".swiper-pagination-h",
    onSlideChangeEnd: function(swiper) {
      if (swiper.activeIndex == "1") {
        $(".key-node").each(function(index) {
          setTimeout(() => {
            $(this).addClass("in");
          }, 400 * index);
        });
      }
    }
  });

  //- 薪酬福利滑动块
  Swiper("#WelfareSlide", {
    pagination: ".swiper-pagination-h"
  });
});
