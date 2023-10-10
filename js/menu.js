$(document).ready(function(){

    let cate_no = get_url_info("cate_no");

    // 각 메뉴마다 제목 바꿔주기

    // 1) .menu_head에 제목들(title_array[cate_no]을 text 로 넣어주기
    $('.menu_head').text(title_array[cate_no])
    // 2) .sec id 바꿀때마다 제목도 같이 바꿔주기
    let sec_id = menu_array[cate_no];
    $('.sec').prop('id',sec_id);

    // 좋게말할때 먼저 나와있어
    load_items(cate_no, 8)

    
    // 무한스크롤
    /* 1) 섹션 끝 높이 구하기 = 윈도우스크롤탑+윈도우높이
       2) 문서 최상단에서 푸터 높이
       3) 1)이 2)보다 크거나 같으면 아이템 로드
    */
    $(window).scroll(function(){
        let sec_bot = $(window).scrollTop() + $(window).height();
        let f_off_top = $('.footer').offset().top; 

        if(sec_bot >= f_off_top) {
            load_items(cate_no, 8)
        }
        // console.log("sec_bot =" + sec_bot , "f_off_top ="+ f_off_top);
    })

    // .sec_item click 하면 .sec_item_click opacity 1 다시 클릭하면 없어지기
    let item_length = $('.sec_item').length;
    // for(let i=0; i<item_length; i++) {
    //     $('.sec_item').eq(i).click(function(){
    //         $('.sec_item_click').eq(i).toggleClass('sec_item_active')
    //         console.log($(this).index())
    //     })
    // }
    // $('.sec_item').click(function(){
    $(document).on('click', '.sec_item', function(){
        $(this).children('.sec_item_click').toggleClass('sec_item_active')
        console.log($(this).index())
    })
    
})


