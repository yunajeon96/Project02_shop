
$(document).ready(function () {
    $('i').click(function () {
        $('.main_list').toggleClass("toggle");
    });
});

// let imgs=["img/sec21.png","img/sec22.png","img/sec23.png","img/sec24.png","img/sec25.png"]
// let hover=["img/sec21_1.png","img/sec21_2.png","img/sec21_3.png","img/sec21_4.png","img/sec21_5.png"];

// $(".slide img").hover(function(){
//     let i=$(this).parent().index();
//     console.log(i);
//     $(this).attr("src",hover[i])
// },function(){
//     let i=$(this).parent().index();
//     $(this).attr("src",imgs[i])
// });

function call() {
    if (window.matchMedia("(min-width: 1440px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', "-360px");
            $('.slide').stop().animate({ marginLeft: 0 }, 500);
        });
        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: "-360px" }, 500, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            })
        })

    } else {
        let w = $('.slide li:first').outerWidth(true)
        console.log(w)
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 500);
        });
        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -w }, 500, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            })
        })

    }

    if (window.matchMedia("(max-width: 600px)").matches) {
        $(".logo").remove()
    }
}

call();
$(window).resize(function () {
    call();
});

$(function () {
    $("#section_a>h1").fadeIn(5000);
});


$(function () {

    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        let a = $("#section_a").offset().top;
        let b=$("#section_b").offset().top;
        let c=$("#section_c").offset().top;
        console.log(c);
        let d=$("#section_d").offset().top;
        console.log(d);
          
        if (ws >= a - 700) {
            $('.s1').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws >= a -700) {
            $('.seca p').css("transform", "translateY(0px)").css("opacity", "1");

            $('.seca h6').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (ws >= b - 1000) {
            $('.slidewrap h2,h5').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if (ws >= c - 2000) {
            $('.secc_text').css("transform", "translateX(0px)").css("opacity", "1");
        }

        if (ws >= d - 3700) {
            $('#section_d h2').css("transform", "translateY(0px)").css("opacity", "1");
        }
    })
})