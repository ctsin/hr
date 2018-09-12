"use strict";

$(function () {
  "use strict";

  //- 主滑动块

  var swiperSchoolRecruit = new Swiper("#SchoolRecruit", {
    nextButton: ".swiper-button-next",
    direction: "vertical",
    // initialSlide: 1,
    onImagesReady: function onImagesReady() {
      $(".boy").addClass("a-fadeinB-boy");
      $(".girl").addClass("a-fadeinB-boy");
      $(".grassland").addClass("a-fadein");
      $(".school").addClass("a-fadeinB-school");
      $(".swiper-button-next .inner").addClass("animate");
    },
    onSlideChangeStart: function onSlideChangeStart(swiper) {
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
    }
  });

  $(".recruit-btn").on("click", function () {
    swiperSchoolRecruit.slideTo(4, 0, false);
  });

  $(".swiper-button-back").on("click", function () {
    swiperSchoolRecruit.slideTo(0, 0, false);
  });

  //- 集团信息滑动块
  var GroupSlide = new Swiper("#GroupSlide", {
    onInit: function onInit(swiper) {
      var nav = $(".arrow-indicator", swiper.container);

      nav.addClass("beginning");
    },
    onSlideChangeStart: function onSlideChangeStart(swiper) {
      if (swiper.activeIndex == "1") {
        $(".key-node").each(function (index) {
          var _this = this;

          setTimeout(function () {
            $(_this).addClass("in");
          }, 400 * index);
        });
      }

      var nav = $(".arrow-indicator", swiper.container);
      nav.toggleClass("end", swiper.isEnd);
      nav.toggleClass("beginning", swiper.isBeginning);
    }
  });

  //- 薪酬福利滑动块
  var WelfareSlide = new Swiper("#WelfareSlide", {
    onInit: function onInit(swiper) {
      var nav = $(".arrow-indicator", swiper.container);

      nav.addClass("beginning");
    },
    onSlideChangeStart: function onSlideChangeStart(swiper) {
      var nav = $(".arrow-indicator", swiper.container);

      nav.toggleClass("end", swiper.isEnd);
      nav.toggleClass("beginning", swiper.isBeginning);
    }
  });

  $("#GroupSlide").on("click", ".left", function () {
    GroupSlide.slidePrev();
  }).on("click", ".right", function () {
    GroupSlide.slideNext();
  });

  $("#WelfareSlide").on("click", ".left", function () {
    WelfareSlide.slidePrev();
  }).on("click", ".right", function () {
    WelfareSlide.slideNext();
  });
});