$(document).ready(function() {
    let border = $('<div class=menu_item_border></div>').appendTo('.menu_item')

    // 메뉴 호버하면 판 스르륵    
    $('.menu_item, .pan, .pan_item').hover(function(){
        $('.pan').addClass('pan_active')
        $('.pan_item').eq($(this).index()).addClass('back_red')  //판 메뉴당 빨강
        $('.menu_item').eq($(this).index()).addClass('back_red') //탭메뉴 빨강
        // menu_item_border 추가 후 menu_item_active 추가
        $(border).eq($(this).index()).addClass('menu_item_active') 
        
        //pan 호버 안풀리게 하기
        if($(this).hasClass('menu_item')) {
            // $('.pan_item').removeClass('pan_active')
            $('.pan_item').eq($(this).index()).addClass('pan_active')
        }
        //back_red&border 호버 안풀리게 하기
        if($(this).hasClass('pan')) {
            $('.menu_item').eq($(this).index()).addClass('back_red')
            $(border).eq($(this).index()).addClass('menu_item_active')
        }
    }, function(){
        $('.pan').removeClass('pan_active')

        $('.menu_item').removeClass('back_red')
        $('.pan_item').removeClass('back_red')
        $(border).removeClass('menu_item_active') 
    })

    /*스크롤이 h_bot보다 내려가면 화면 맨 위에 끌고 다니기 (fixed)*/
    let h_bot_o_top = $('.h_bot').offset().top;
        
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();

            if(s_top >= h_bot_o_top) {
                $('.h_bot').addClass('nav_active');
                $('.container').addClass('main_active');
            }
            else {
                $('.h_bot').removeClass('nav_active');
                $('.container').removeClass('main_active');
            }
    });    


    //햄버거
    let chk = true;

        $('.hamberg').click(function(){
            $('.menu_pan').toggleClass('menu_pan_active')
            if(chk) { 
                $('#ham_line_top').css({
                    transform: 'translateY(10px)',
                })
                setTimeout(function(){
                    $('#ham_line_top').css({
                        transform: 'translateY(10px) rotate(45deg)',
                    })
                }, 500)

                setTimeout(function(){
                    $('#ham_line_mid').css({
                        transform: 'scale(0)'
                    })
                }, 500)

                $('#ham_line_bot').css({
                    transform: 'translateY(-10px)',
                })
                setTimeout(function(){
                    $('#ham_line_bot').css({
                        transform: 'translateY(-10px) rotate(-45deg)',
                    })
                }, 500)
            }
            else { 
                $('#ham_line_top').css({
                    transform: 'translateY(10px) rotate(0)',
                })
                setTimeout(function(){
                    $('#ham_line_top').css({
                        transform: 'translateY(0)',
                    })
                }, 500)

                setTimeout(function(){
                    $('#ham_line_mid').css({
                        transform: 'scale(1)'
                    })
                }, 500)

                $('#ham_line_bot').css({
                    transform: 'translateY(-10px) rotate(0)',
                })
                setTimeout(function(){
                    $('#ham_line_bot').css({
                        transform: 'translateY(0)',
                    })
                }, 500)
            }
            chk = !chk;
        })


    $(document).on('click', '.ham_menu', function(){
        $(this).find('.ham_pan_inner').toggleClass('ham_height_auto')
    })
})
