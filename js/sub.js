//js/dot.js
$(function () {
  var dot = $("#dot ul li");
  var contents = $(".page_wrap>.page");

  dot.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = contents.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop: offset }, 600);
  });

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // var i=0;
    // if(wScroll>=$(".section").index(i).offset().top){
    //   i++;
    //   dot.css({"background":"rgba(255,255,255,0.1)"});
    //   dot.index(i).addClass("active");
    //   dot.index(i).siblings().removeClass("active");
    //   dot.index(i).find("a").css({"background":"pink"});
    // }  

    if (wScroll >= contents.eq(0).offset().top) {
      dot.css({ "background": "rgba(255,255,255,0.1)" });
      dot.find("a").css({ "background": "rgba(255,255,255,0.5)" });
      dot.removeClass("active");
      dot.eq(0).addClass("active");
      dot.eq(0).find("a").css({ "background": "pink" });
    }
    if (wScroll >= contents.eq(1).offset().top) {
      dot.css({ "background": "rgba(0,0,0,0.7)" });
      dot.find("a").css({ "background": "rgba(255,255,255,0.5)" });
      dot.removeClass("active");
      dot.eq(1).addClass("active");
      dot.eq(1).find("a").css({ "background": "yellow" });
    }
    if (wScroll >= contents.eq(2).offset().top) {
      dot.removeClass("active");
      dot.find("a").css({ "background": "rgba(255,255,255,0.5)" });
      dot.eq(2).addClass("active");
      dot.eq(2).find("a").css({ "background": "purple" });
    }
  });
  return false;
});

//js/side.js
$(function () {
  $('.wrap_af').hide();
});


//js/mousewheel.js
$(function () {
  var win_h = $(window).height();
  $('.page').each(function (index) {
    $(this).attr("data-index", win_h * index);
  });

  $('.page').on("mousewheel", function (e) {
    var pagePos = parseInt($(this).attr("data-index"));
    if (e.originalEvent.wheelDelta >= 0) {
      $("html,body").stop().animate({ scrollTop: pagePos - win_h });
      return false;
    } else if (e.originalEvent.wheelDelta < 0) {
      $("html,body").stop().animate({ scrollTop: pagePos + win_h });
      return false;
    }
  });
});


//next 버튼 css 효과
$(function () {
  $('.btn')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({
        top: relY,
        left: relX
      })
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({
        top: relY,
        left: relX
      })
    });
});


//slide 넘기기
$(function () {
  var totalNum = $(".wrap>div").length;
  var currentNum = 1
  $(".btn").click(function () {
    currentNum++;
    if (currentNum > totalNum) {
      currentNum = 1;
    }
    $(".wrap >div:first").insertAfter(".wrap> div:last");
  });
})



//총 상품 금액
$(function () {
  var price_sum = 6000;

  $(".price_sum").append("<span>총 : " + price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");



  $('.plus').click(function () {
    $(".price_value").val(parseInt($(".price_value").val()) + 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $(".price_sum").html("<span>총 : " + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });

  $('.minus').click(function () {
    if ($(".price_value").val() < 2) {
      alert("1개 이상 구매가 가능합니다.");
      $(".price_value").val(2);
    }
    $(".price_value").val(parseInt($(".price_value").val()) - 1);
    var sum = parseInt($(".price_value").val() * price_sum);
    $(".price_sum").html("<span>총 : " + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });
});

$(function(){
  $(".next").click(function(){
    $(".t2").fadeIn()
    $(".t1").fadeOut();
  })
  $(".prev").click(function(){
    $(".t1").fadeIn();
    $(".t2").fadeOut();
  })
})

//별점
// const drawStar=(target)=>{
//   $('.star span').css({width:'${target.value*10}%'});
// }