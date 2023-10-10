$(document).ready(function(){
//  sec1 움직이게 하기
/* 
1. scrollTop 100px 내려오면 .sec1 나오게 하기
2. .red_pan 나왔다가 사라지게하기 .red_avtive css 사용
3. 판 사라지는 동시에 글자 나오게 하기
4. 글자 나온 후 line.active 추가
5. line.active 나온후 .circle_active 추가 
*/
$('.red_pan').addClass('red_active');
        setTimeout(function(){
            $('.red_pan').css({
                width: 0
            });
        },500)
        setTimeout(function(){
            $('.title_txt').addClass('title_txt_active')
        },500)
        setTimeout(function(){
            $('.about_line').addClass('line_active')
        },500)
        setTimeout(function(){
            $('.about_circle').addClass('circle_active')
        },500)  
// let sec1_o_top = $('.about_sec1').offset().top;
let h_bot_h = $('.h_bot').height();
let ttimer = 100
// sec2~
/* 스크롤 내리면 섹션 제목&빨간줄 나오게 하기
    사진 빠밤
*/

let a_sec2_o_top = $('.about_sec2').offset().top;
$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if((a_sec2_o_top - 300) <= s_top + h_bot_h) {
        $('.about_sec2').css({
            transform: 'translateY(0)',
            opacity: 1
        })
        setTimeout(function(){
            $('.red_line').css({
                left: '0'
            })
        }, ttimer);

        // 글씨 다르게 올라오기
        setTimeout(function(){
            $('.about_dsc').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer);
        setTimeout(function(){
            $('.about_txt_box').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer * 2);
    }
    else {
        $('.about_sec2').css({
            opacity: 0,
            transform: 'translateY(100px)'
        })
        $('.red_line').css({
            left: '-100%'
        })
        $('.about_dsc').css({
            opacity: 1,
            transform: 'translateY(50px)'
        })
    }
});

let a_sec3_o_top = $('.about_sec3').offset().top;
$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if((a_sec3_o_top - 300) <= s_top + h_bot_h) {
        $('.about_sec3').css({
            transform: 'translateY(0)',
            opacity: 1
        })
        setTimeout(function(){
            $('.about_dsc').css({
                left: '0'
            })
        }, ttimer);

        // 글씨 다르게 올라오기
        setTimeout(function(){
            $('.about_dsc').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer);
        setTimeout(function(){
            $('.about_txt_box').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer * 2);
    }
    else {
        $('.about_sec3').css({
            opacity: 0,
            transform: 'translateY(100px)'
        })
        $('.red_line').css({
            left: '-100%'
        })
        $('.about_dsc').css({
            opacity: 1,
            transform: 'translateY(50px)'
        })
    }
});

    // 휠 내렸을때 다음 섹션 바로 나오게 하기
    let chk = true;
    let timer = 500;
    let h_h = $('.header').height()
    $('.about_sec').on('mousewheel DOMMouseScroll', function() {
        console.log($(this).next().length)
        event.preventDefault();
        if(chk) {
            chk = false;
            setTimeout(function() {
                chk = true;
            }, timer)
            if(event.wheelDelta<0 && $(this).next().length > 0 ) {
                s_move($(this).next().offset().top - h_h)
            }
            else if(event.wheelDelta>0 && $(this).prev().length > 0 ) {
                s_move($(this).prev().offset().top - h_h)
            } 
            else if(event.wheelDelta<0 && $(this).next().length == 0) {
                s_move($('footer').offset().top)
            }
        }
    })

    function s_move(sec_pos) {
        $('html, body').stop().animate({
            scrollTop: sec_pos
        }, timer, 'linear')
    }

})