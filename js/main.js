//navi 햄버거 메뉴
$(document).ready(function () {
    $('i').click(function () {
        $('.main_list').toggleClass("toggle");
    });

    if (window.matchMedia("(max-width: 600px)").matches) {
        $(".logo").remove()
    }
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



//main m2 slide event
function call() {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', "-360px");
            $('.slide').stop().animate({ marginLeft: 0 }, 1000);
        });
        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: "-360px" }, 1000, function () {
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
            $('.slide').stop().animate({ marginLeft: 0 }, 1000);
        });
        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -w }, 1000, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            })
        })
    }
}
   
$(function(){
    call();
})

$(window).resize(function () {
    call();
});





//scroll animation
$(function () {
    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        let a = $("#section_a").offset().top;//963
        let b = $("#section_b").offset().top;//2013
        let c = $("#section_c").offset().top;//2863
        let d = $("#section_d").offset().top;//3863

        if (ws < 50) {
            $('.s1').css("transform", "translateY(100px)").css("opacity", "0");
            $('.seca>p,.seca>h6').css("transform", "translateY(50px)").css("opacity", "0");

        }
        //500   963
        if (ws >= a - 463) {
            $('.s1').css("transform", "translateY(0px)").css("opacity", "1");
            $('.seca>p,.seca>h6').css("transform", "translateY(0px)").css("opacity", "1");
            $('.slidewrap>h2,.slidewrap>h5').css("transform", "translateY(100px)").css("opacity", "0");
        }

        if (ws >= 1700) {
            $('.s1').css("transform", "translateY(100px)").css("opacity", "0");
            $('.seca>p,.seca>h6').css("transform", "translateY(50px)").css("opacity", "0");
        }
        //1200  2013
        if (ws >= b - 813) {
            $('.slidewrap> h2,.slidewrap>h5').css("transform", "translateY(0px)").css("opacity", "1");
            // $('.secc_text>h2,.secc_text>p,.secc_text>h6,.secc_text>button').css("transform", "translateY(-100px)").css("opacity", "0");

        }
        //2300   2863
        if (ws >= c - 563) {
            $('.slidewrap> h2,.slidewrap>h5').css("transform", "translateY(100px)").css("opacity", "0");
            // $('.secc_text>h2,.secc_text>p,.secc_text>h6,.secc_text>button').css("transform", "translateY(0px)").css("opacity", "1");
            $('#section_d>h2,#section_d>p,#section_d>button').css("transform", "translateY(100px)").css("opacity", "0");
        }
        //3100  3863
        if (ws >= d - 763) {
            // $('.secc_text>h2,.secc_text>p,.secc_text>h6,.secc_text>button').css("transform", "translateY(-100px)").css("opacity", "0");
            $('#section_d>h2,#section_d>p,#section_d>button').css("transform", "translateY(0px)").css("opacity", "1");
        }
    })
})