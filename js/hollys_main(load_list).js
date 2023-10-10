
const ITEM_LIST = [
    // new
    [
        {item_no: 1, src: '1.png', title: '보니밤 크림 라떼(ICED)', en_title: 'Bonui Chestnut Cream Latte',desc: '블랙아리아 원두에 달콤한 연유와 국내산 보늬밤 크림을 더해 고소하고 진한 밤 풍미를 느낄 수 있는 달달한 크림라떼', ml: '625', kacl: '310', sugar: '37', protein: '7', fat: '0.3', natrium: '180', caffeine: '153'}, 
        {item_no: 2, src: '2.png', title: '문경 오미자 사과 스무디(ICED)', en_title: 'Mungyeong Omija Apple Smoothie',desc: '당도 높은 국내산 사과 스무디에 문경 오미자를 더해 달콤하고 상큼하게 즐길 수 있는 스무디', ml: '343', kacl: '287', sugar: '58', protein: '1', fat: '0.3', natrium: '41', caffeine: '-'}, 
        {item_no: 3, src: '3.png', title: '오렌지 자몽 싱싱 주스(ICED)', en_title: 'Orange Grapefruit Juice',desc: '달콤한 오렌지와 상큼한 자몽을 그대로 갈아만든 신선한 주스에 오렌지를 듬뿍 토핑한 생과일 주스', ml: '472', kacl: '190', sugar: '39', protein: '2', fat: '0.1', natrium: '23', caffeine: '-'}, 
        {item_no: 4, src: '4.png', title: '보늬밤 치즈 케이크', en_title: 'Bonui Chestnut Cheese Cake',desc: '달콤하고 은은한 밤 풍미의 치즈케이크에 마스카포네 생크림과 꾸덕한 가나슈가 부드럽게 어우러진 케이크', ml: '134', kacl: '441', sugar: '29', protein: '5', fat: '18.1', natrium: '248', caffeine: '-'}, 
        {item_no: 5, src: '5.png', title: '더 가벼운 텀블러(핑크)', en_title: 'Lighter Tumbler (Pink)',desc: '가볍고 슬림한 미니 사이즈 텀블러 / 165ml / *전자레인지, 식기세척기 사용 불가'}, 
        {item_no: 6, src: '6.png', title: '더 가벼운 텀블러(블루)', en_title: 'Lighter Tumbler (Blue)',desc: '가볍고 슬림한 미니 사이즈 텀블러 / 165ml / *전자레인지, 식기세척기 사용 불가'}, 
        {item_no: 7, src: '7.png', title: '돌체 라떼 10T', en_title: 'Dolce Latte',desc: '달콤한 연유와 고소한 커피가 어우러진 부드러운 풍미의 할리스 돌체라떼'},
        {item_no: 8, src: '8.png', title: '글라스 머그 러브 모먼츠(블루)', en_title: 'GLASS MUG LOVE MOMENTS (BLUE)',desc: '감각적인 레터링 로고가 특징인 더블월 글라스 머그 / 380ml / *전자레인지, 식기세척기 사용 불가'}, 
        {item_no: 9, src: '9.png', title: '글라스 머그 러브 모먼츠(화이트)', en_title: 'GLASS MUG LOVE MOMENTS (WHITE)',desc: '감각적인 레터링 로고가 특징인 더블월 글라스 머그 / 380ml / *전자레인지, 식기세척기 사용 불가'}, 
        {item_no: 10, src: '10.png', title: '글라스 머그 러브 레터링(블루)', en_title: 'GLASS MUG LOVE LETTERING (BLUE)',desc: '감각적인 레터링 로고가 특징인 더블월 글라스 머그 / 380ml / *전자레인지, 식기세척기 사용 불가'}      
    ]
    ,
    // insta
    [
        {item_no: 1, src: '1.jpg', title: '#한손에텀블러<br>#첫눈에 훅 들어온😍 <br>#한 손에 촥 감기는👋🏻', link: 'https://www.instagram.com/p/CxHN-SQSSln/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 2, src: '2.jpg', title: '#보늬밤치즈케이크✨<br> #은은하고 그윽한 밤 풍미<br> #부드러운 치즈 케이크🧀', link: 'https://www.instagram.com/p/Cw7LNsprLDA/?utm_source=ig_web_copy_link'},
        {item_no: 3, src: '3.jpg', title: '#HOLLYS_EVENT<br> #할리스의 가을을 한아름 담아 준비한 이벤트✨', link: 'https://www.instagram.com/p/Cwj1ewqLn8J/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 4, src: '4.jpg', title: '#HOLLYS_NEWS<br> #데이드림드립백<br> #이클립스드립백', link: 'https://www.instagram.com/p/CwRJOWbJ1nl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 5, src: '5.jpg', title: '#HOLLYS_NEW<br> #더가벼운텀블러💕<br> #깜짝 놀랄 만큼 가벼워🙊', link: 'https://www.instagram.com/p/CwERQVwyT5-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 6, src: '6.jpg', title: '#COLORFUL_HOLLYS<br> #청포도스파클링<br> #제주말차할리치노', link: 'https://www.instagram.com/p/CwCHbqHLbv0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 7, src: '7.jpg', title: '#FRESH_HOLLYS<br> #HOLLYS_RECIPE<br> #할리스그릴닭가슴살', link: 'https://www.instagram.com/p/CvvrOsJSL13/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 8, src: '8.jpg', title: '#HOLLYS_DESSERT<br> #아이스크림크로플<br> #허니바게트볼', link: 'https://www.instagram.com/p/CvgyOYwriab/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 9, src: '9.jpg', title: '#HOLLYS_DESSERT<br> #눈꽃팥빙수<br> #여름 빙수 종결자', link: 'https://www.instagram.com/p/Cu8K_SRJDXt/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},
        {item_no: 10, src: '10.jpg', title: '#HOLLYS_DESSERT<br>#애플망고치즈케이크빙수<br>#달콤 상콤 끝판왕💛', link: 'https://www.instagram.com/p/Cu8LGdNpQg3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='},        
    ],
    [],
    [],
    [],
    []
]
// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

const menu_array = ['new', 'insta'];
const title_array = ['NEW','FOLLOW US'];
const img_addr = "img/theComma/main/"; 
 
function get_url_info(key) {
    let url =location.href; // 260.데이터불러오기_연습2.html?cateNo=best&itemNo=2
    url = url.split("?")[1] // cateNo=best&itemNo=2

    if(url.length > 1) {
        url = url.split("&") // [cateNo=best  ,  itemNo=2]
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("="); // 0-> cateNo=best => [cateNo  ,  best]
                                            // 1-> itemNo=2 => [itemNo  ,  2]

            if(tmp_url[0] == key) {
                return tmp_url[1] 
            }
        }
    }
    else {
        console.log("없어")
    }
} 
//new//
function swiper_initt() {
    for(let i=0; i<10; i++) { 
        let cate_no = 0;
        let s_item = `<div class="swiper-slide">
                        <div class="swiper_inner">
                            <div class="swiper_txt">${ITEM_LIST[cate_no][i].title}</div>
                            <div class=swiper_img_box>
                                <img src="../image/main/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt="">
                                </div>   
                            <div class="swiper_text">
                                <div class="swiper_txt1">${ITEM_LIST[cate_no][i].en_title}</div>
                                <div class="swiper_txt2">${ITEM_LIST[cate_no][i].desc}</div>
                            </div>
                        </div>
                    </div>`
        $('.swiper-wrapper').append(s_item)
    }
}
swiper_initt()

//insta
function insta_init() {
    for(let i=0; i<10; i++) { 
        cate_no = 1;
        let insta_item = `<div class="sns">
                            <div class="sns_box">
                                <a href="${ITEM_LIST[cate_no][i].link}">
                                    <div class="sns_img_box">
                                        <img src="../image/main/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt="">
                                    </div>   
                                    <div class="sns_txt_box">
                                        <div class="sns_txt">${ITEM_LIST[cate_no][i].title}</div>
                                    </div>
                                </a>
                            </div>
                        </div>`
        $('.sec4_box').append(insta_item)
    }
}
insta_init()


function comma(num){
    /*  
        / - 정규식의 맨 앞과 끝에 넣음
        \B - 시작과 끝을 말함. EX) 1234 에서 1의 앞 4의 뒤를 의미
             우리는 1234
        (\d{3}) - 숫자 3자리
        +(?!\d) - +는 앞의 표현식이 1회 이상 연속으로 반복
                  x(?!y) - x 뒤에 y가 없는 경우에만 x에 일치
                  여기서 (?!\d) 는 뒤에 더이상 숫자가 없는 경우 라는 뜻
                  (\d{3})+(?!\d) 는 숫자가 3번 나타난다 라는 뜻
        (?=   ) - 앞 뒤 조건 모두 만족 이라는 뜻
                    (\d{3}) 부터 +(?!\d)) 까지 만족할때 라는 뜻
        g - 전역 검색
    */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}
 