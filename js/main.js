$(document).ready(function() {
    
    // 인디케이터 만들기
    let bn_count = $('.banner').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator').append(`<div class="indi"></div>`)
    }
    $('.indi').eq(0).addClass('indi_active')
    
    let curr_idx=0;
    let timer = 1000;
    $('#btn_slide_R').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '-100%', (curr_idx+1) % bn_count, '100%',timer);
        curr_idx += 1;
    });

    $('#btn_slide_L').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '100%', (curr_idx-1) % bn_count, '-100%',timer);
        curr_idx -= 1;
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.banner').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.banner').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)

        $('.indi').eq(o_idx).removeClass('indi_active');
        $('.indi').eq(c_idx).addClass('indi_active');
    }

/* 오토슬라이드 & 버튼 클릭 막기*/
    function 버튼막기() {
        // 버튼 막기
        $('.btn_slide').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('#btn_slide_R').trigger('click')
        }, timer+2000)
    }
    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide()
    })

    $('.indi').click(function(){
        let colored = $('.indi_active').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            버튼막기()  
            slide(colored, '-100%', clicked, '100%', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            버튼막기() 
            slide(colored, '100%', clicked, '-100%',timer);
            curr_idx = clicked ;
        }
    })

// 섹션1 슬라이드_new arrval
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2, // 칸 수
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },        
        autoplay: {
            delay: 1000, // 몇초마다 슬라이드 이동
            disacleOnInteraction: false
        },
        speed: 500, // 몇초만에 left 0 으로 도착
        loop: true,
        direction: 'horizontal',
        effect: 'slide',

        breakpoints: {
            1000: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 15,
            }            
        }
    });

    $('#new_arr').hover(function(){
        swiper.autoplay.stop();
    }, function(){
        swiper.autoplay.start()
    })

    /*스크롤이 sec1 절반 내려오면 sec2 밖에서 안으로 그림& 텍스트 샤샥 + 제목도 아래에서 위로 움찔*/
let sec2_o_top = $('.sec2').offset().top;
let h_bot_h = $('.h_bot').height();
let ham_h = $('.header2').height();
let ttimer = 100
$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if((sec2_o_top - 700) <= s_top + h_bot_h || (sec2_o_top - 500) <= s_top + ham_h) {
        $('.sec2').css({
            opacity: 1,
            transform: 'translateY(0)'
        })
        setTimeout(function(){
            $('.sec2_img_box, .sec2_txt_box').css({
                transform: 'translateX(0)',
                opacity: 1
            })
        }, ttimer);
        // 글씨 다르게 올라오기
        setTimeout(function(){
            $('.sec2_p1').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer * 3);
        setTimeout(function(){
            $('.sec2_p2').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer * 4);
        setTimeout(function(){
            $('.sec2_p3').css({
                opacity: 1,
                transform: 'translateY(0)'
            })
        }, ttimer * 5);
    }
    else {
        $('.sec2').css({
            opacity: 0,
            transform: 'translateY(50px)'
        })
        setTimeout(function(){
            $('.sec2_img_box').css({
                transform: 'translateX(-100%)',
                opacity: 0
            })
            $('.sec2_txt_box').css({
                transform: 'translateX(100%)',
                opacity: 0
            })
        }, 0);
        
        setTimeout(function(){
            $('.sec2_p1, .sec2_p2, .sec2_p3').css({
                opacity: 0,
                transform:' translateY(30px)'
            })
        }, 0);
    }
});
/*스크롤이 sec2 절반 내려오면 sec3가 50px 위로 스윽 올라오기*/
let sec3_o_top = $('.sec3').offset().top;
$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    if((sec3_o_top- 500) <= s_top + h_bot_h  || (sec3_o_top - 500) <= s_top + ham_h) {
        $('.sec3').css({
            opacity: 1,
            transform: 'translateY(0)'
        })
        setTimeout(function(){
            $('.news1').css({
                opacity: 1
            })
        }, ttimer);
        setTimeout(function(){
            $('.news2').css({
                opacity: 1
            })
        }, ttimer * 2);
        setTimeout(function(){
            $('.news3').css({
                opacity: 1
            })
        }, ttimer * 3);
    }
    else {
        $('.sec3').css({
            opacity: 0,
            transform: 'translateY(50px)'
        })
        setTimeout(function(){
            $('.news1, .news2, .news3').css({
                opacity: 0
            })
        });
    }
});

/*스크롤이 sec3 절반 내려오면 sec4가 50px 위로 스윽 올라오기*/
let sec4_o_top = $('.sec4').offset().top;
$(window).scroll(function(){
    
    let s_top = $(window).scrollTop();
    if((sec4_o_top - 500) <= s_top + h_bot_h  || (sec4_o_top - 500) <= s_top + ham_h) {
        $('.sec4').css({
            opacity: 1,
            transform: 'translateY(0)'
        })
    }
    else {
        $('.sec4').css({
            opacity: 0,
            transform: 'translateY(50px)'
        })
    }
});



})

    