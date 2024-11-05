$(function () {
  let total = $(".panel li").length;
  console.log(total);
  let i = 0;

  start();

  function start() {
    timer = setInterval(function () {
      i++;

      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ "margin-left": "-2000px" }, function () {
            $(".panel").css({ "margin-left": 0 });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": -i * 500 });
      }

      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total - 1) {
      // total 1에서 total로 수정
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px" }, function () {
          $(".panel").css({ "margin-left": 0 });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }

    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": -i * 500 });
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      $(".panel").css({ "margin-left": -2000 });
      $(".panel").stop().animate({ "margin-left": -1500 });
      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": -i * 500 });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });
});
