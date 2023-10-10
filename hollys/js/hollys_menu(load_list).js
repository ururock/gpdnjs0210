
const ITEM_LIST = [
    // coffee
    [   
        {item_no: 1, src: '1.png', title: '보니밤 크림 라떼(ICED)', en_title: 'Bonui Chestnut Cream Latte',desc: '블랙아리아 원두에 달콤한 연유와 국내산 보늬밤 크림을 더해 고소하고 진한 밤 풍미를 느낄 수 있는 달달한 크림라떼', ml: '625', kacl: '310', sugar: '37', protein: '7', fat: '0.3', natrium: '180', caffeine: '153'},
        {item_no: 2, src: '2.png', title: '블랙아리아 아메리카노(ICED)', en_title: 'Black Aria Americano',desc: '스페셜티 블렌드를 사용하여 과일과 베리향의 고급스러운 커피 풍미가 특징인 아메리카노', ml: '354', kacl: '9', sugar: '0', protein: '0', fat: '0.1', natrium: '153', caffeine: '153', hot_item: 0},
        {item_no: 3, src: '3.png', title: '블랙아리아 딥라떼(ICED)', en_title: 'Black Aria Deep Latte',desc: '스페셜티 블렌드를 사용하여 과일과 베리향의 고급스러운 커피 풍미가 특징인 부드러운 라떼', ml: '354', kacl: '96', sugar: '7', protein: '5', fat: '3.4', natrium: '73', caffeine: '153', hot_item: 0}, 
        {item_no: 4, src: '4.png', title: '디카페인 아메리카노(ICED)', en_title: 'Americano (Decaf blend)',desc: '듀얼브루 원액으로 만든 부드러운 풍미와 균형잡힌 바디감의 디카페인 아메리카노', ml: '354', kacl: '12', sugar: '0', protein: '1', fat: '0.0', natrium: '6', caffeine: '3', hot_item: 0},  
        {item_no: 5, src: '5.png', title: '디카페인 카페라떼(ICED)', en_title: 'Caffe Latte (Decaf blend)',desc: '듀얼브루 원액으로 만든 부드러운 풍미와 균형 잡힌 바디감의 디카페인 카페 라떼', ml: '354', kacl: '114', sugar: '8', protein: '6', fat: '3.9', natrium: '91', caffeine: '3', hot_item: 0}, 
        {item_no: 6, src: '6.png', title: '디카페인 바닐라 딜라이트(ICED)', en_title: 'Vanilla Delight (Decaf blend)',desc: '듀얼브루 원액으로 만들어 더욱 부드럽고 편안해진 바닐라 딜라이트)', ml: '354', kacl: '192', sugar: '24', protein: '5', fat: '4.8', natrium: '147', caffeine: '25', hot_item: 0}, 
        {item_no: 7, src: '7.png', title: '콜드브루 딜라이트(ICED)', en_title: 'Cold Brew Delight',desc: '실키한 연유베이스에 콜드브루를 넣어 부담없이 즐기는 라떼', ml: '354', kacl: '198', sugar: '23', protein: '7', fat: '4.8', natrium: '106', caffeine: '195', hot_item: 0},     
        {item_no: 8, src: '8.png', title: '콜드브루 라떼(ICED)', en_title: 'Cold Brew Latte',desc: '콜드브루 커피의 풍부한 풍미와 우유의 고소함이 더해진 라떼', ml: '354', kacl: '114', sugar: '8', protein: '6', fat: '3.9', natrium: '88', caffeine: '195', hot_item: 0},     
        {item_no: 9, src: '9.png', title: '콜드브루(ICED)', en_title: 'Cold Brew',desc: '콜드브루 전용 블렌드를 상온의 물로 오랜시간 추출해 달콤한 산미와 부드러운 바디감이 살아있는 커피', ml: '354', kacl: '12', sugar: '0', protein: '1', fat: '0.0', natrium: '3', caffeine: '195', hot_item: 0},      
        {item_no: 10, src: '10.png', title: '바닐라 딜라이트(ICED)', en_title: 'Vanilla Delight',desc: '카페라떼에 바닐라빈으로 만든 바닐라 파우더를 더해 더욱 풍부하고 감미로운 할리스만의 바닐라라떼', ml: '354', kacl: '199', sugar: '25', protein: '6', fat: '4.9', natrium: '155', caffeine: '83', hot_item: 999},       
        {item_no: 11, src: '11.png', title: '리스트레또 딜라이트(ICED)', en_title: 'Ristretto Delight',desc: '달콤한 연유와 고소한 할리스 원두, 크리미한 바디가 절묘하게 어우러진 시즌 스페셜 메뉴', ml: '354', kacl: '154', sugar: '16', protein: '6', fat: '3.9', natrium: '93', caffeine: '93', hot_item: 0},   
        {item_no: 12, src: '12.png', title: '카라멜 마키아또(ICED)', en_title: 'Caramel Macchiato',desc: '진한 에스프레소에 바닐라 시럽과 카라멜소스가 더해진 카라멜 커피음료의 대표', ml: '354', kacl: '161', sugar: '18', protein: '5', fat: '3.6', natrium: '80', caffeine: '127', hot_item: 0},   
        {item_no: 13, src: '13.png', title: '카페모카(ICED)', en_title: 'Caffe Mocha',desc: '진한 에스프레소와 우유, 달콤 쌉싸름한 초콜릿이 어우러진 커피', ml: '354', kacl: '175', sugar: '22', protein: '5', fat: '3.4', natrium: '92', caffeine: '132', hot_item: 0},    
        {item_no: 14, src: '14.png', title: '카푸치노(ICED)', en_title: 'Cappuccino',desc: '에스프레소에 실키하고 폭신폭신한 우유 거품이 풍부하게 더해진 커피', ml: '354', kacl: '149', sugar: '10', protein: '8', fat: '5.3', natrium: '115', caffeine: '127', hot_item: 0},       
        {item_no: 15, src: '15.png', title: '카페라떼(ICED)', en_title: 'Caffe Latte',desc: '진한 에스프레소에 우유를 넣어 풍부한 커피향을 부드럽게 즐길 수 있는 커피', ml: '354', kacl: '96', sugar: '6', protein: '5', fat: '3.3', natrium: '72', caffeine: '127', hot_item: 999},       
        {item_no: 16, src: '16.png', title: '아메리카노(ICED)', en_title: 'Caffe Americano',desc: '진한 에스프레소의 맛과 향을 부드럽게 즐길 수 있는 아메리칸 스타일의 커피', ml: '354', kacl: '12', sugar: '0', protein: '1', fat: '0.1', natrium: '5', caffeine: '114', hot_item: 999},       
        {item_no: 17, src: '17.png', title: '아포카토(ICED)', en_title: 'Affogato',desc: '바닐라 아이스크림과 리스트레또 더블샷이 어우러져 부드럽고 진한 맛의 아포가토', ml: '150', kacl: '207', sugar: '15', protein: '4', fat: '7.4', natrium: '36', caffeine: '93', hot_item: 0},       
        {item_no: 18, src: '18.png', title: '에스프레소(ICED)', en_title: 'Espresso',desc: '강렬한 첫 맛, 풍부한 바디감, 깔끔한 뒷 맛이 특징인 커피의 심장', ml: '25', kacl: '5', sugar: '0', protein: '0', fat: '0.0', natrium: '0', caffeine: '61', hot_item: 0},                
    ]
    ,
    // tea
    [ 
        {item_no: 1, src: '1.png', title: '핑크 파인 캐모마일티(ICED)', en_title: 'Pink Pineapple Chamomile Tea',desc: '달콤한 파인애플 과육과 상큼한 시트러스청이 향긋한 캐모마일과 어우러진 핑크빛 티 베리에이션 음료', ml: '354', kacl: '183', sugar: '40', protein: '0', fat: '0.0', natrium: '15', caffeine: '-', hot_item: 0},  
        {item_no: 2, src: '2.png', title: '제주 말차 라떼(ICED)', en_title: 'Jeju Matcha Latte',desc: '제주산 말차 파우더로 만들어 깊고 진한 말차 본연의 풍미를 살린 라떼', ml: '354', kacl: '251', sugar: '36', protein: '6', fat: '3.6', natrium: '79', caffeine: '129', hot_item: 0},   
        {item_no: 3, src: '3.png', title: '민트초코(ICED)', en_title: 'Mint Chocolate',desc: '진한 민트 맛이 특징인 상쾌하면서 부드러운 맛의 민트 초코 라떼', ml: '354', kacl: '309', sugar: '46', protein: '5', fat: '7.0', natrium: '145', caffeine: '1', hot_item: 0},   
        {item_no: 4, src: '4.png', title: '밀크티라떼(ICED)', en_title: 'Milk Tea Latte',desc: '향긋한 홍차에 우유의 고소함과 부드러움을 더한 티라떼', ml: '354', kacl: '188', sugar: '27', protein: '6', fat: '4.2', natrium: '96', caffeine: '72', hot_item: 999},   
        {item_no: 5, src: '5.png', title: '아이스초코(ICED)', en_title: 'Chocolate ICED',desc: '진한 초콜렛과 우유가 어우러져 달콤한 초콜릿 음료', ml: '354', kacl: '243', sugar: '33', protein: '6', fat: '5.0', natrium: '126', caffeine: '8', hot_item: 0},      
        {item_no: 6, src: '6.png', title: '화이트초코(ICED)', en_title: 'White Chocolate',desc: '화이트 초콜릿에 따뜻한 우유가 더해진 달콤한 음료', ml: '354', kacl: '249', sugar: '34', protein: '6', fat: '5.7', natrium: '89', caffeine: '23', hot_item: 0}, 
        {item_no: 7, src: '7.png', title: '유자 캐모마일(ICED)', en_title: 'Yuzu Chamomile',desc: '은은한 향의 캐모마일과 유자차를 같이 느낄 수 있는 티베리에이션 음료', ml: '354', kacl: '157', sugar: '34', protein: '0', fat: '0.0', natrium: '16', caffeine: '-', hot_item: 0},     
        {item_no: 8, src: '8.png', title: '복숭아 얼그레이(ICED)', en_title: 'Peach Earl Grey',desc: '달콤한 복숭아와 얼그레이의 베르가못 향의 조화, 깔끔하면서도 달콤한 티베리에이션 음료', ml: '354', kacl: '109', sugar: '26', protein: '0', fat: '0.0', natrium: '4', caffeine: '33', hot_item: 999}, 
        {item_no: 9, src: '9.png', title: '홍차몽차(ICED)', en_title: 'Red Grapefruit Tea',desc: '자몽과일 특유의 달콤 쌉싸름한 맛을 즐길 수 있는 과일차', ml: '354', kacl: '163', sugar: '32', protein: '1', fat: '0.0', natrium: '8', caffeine: '-', hot_item: 0}, 
        {item_no: 10, src: '10.png', title: '제주 한라봉 감귤차(ICED)', en_title: 'jeju Hanrabong tangerine tea',desc: '향긋한 한라봉과 감귤이 어우러져 상큼하면서도 달콤한 과일차', ml: '354', kacl: '199', sugar: '48', protein: '1', fat: '0.0', natrium: '6', caffeine: '-', hot_item: 0}, 
        {item_no: 11, src: '11.png', title: '고흥 유자차(ICED)', en_title: 'Goheung Yuzu Tea',desc: '고흥 유자의 풍미를 살린 할리스 유자차', ml: '354', kacl: '252', sugar: '50', protein: '0', fat: '0.0', natrium: '23', caffeine: '-', hot_item: 0}, 
        {item_no: 12, src: '12.png', title: '해남 녹차(ICED)', en_title: 'Green Tea',desc: '고소한 감칠맛과 부드러운 목넘김이 좋은 땅끝 마음 해남에서 재배한 녹차(유기농 녹차잎 사용)', ml: '354', kacl: '4', sugar: '0', protein: '0', fat: '0.0', natrium: '5', caffeine: '25', hot_item: 0}, 
        {item_no: 13, src: '13.png', title: '페퍼민트(ICED)', en_title: 'Peppermint',desc: '입안 가득 깔끔한 청량감으로 기분까지 상쾌한 허브차', ml: '354', kacl: '5', sugar: '0', protein: '0', fat: '0.1', natrium: '6', caffeine: '-', hot_item: 0}, 
        {item_no: 14, src: '14.png', title: '캐모마일(ICED)', en_title: 'Chamomile',desc: '캐모마일 꽃잎을 그대로 말려 노란색의 향긋한 꽃향이 그대로 살아 있는 허브차', ml: '354', kacl: '5', sugar: '0', protein: '0', fat: '0.1', natrium: '4', caffeine: '-', hot_item: 0}, 
        {item_no: 15, src: '15.png', title: '얼그레이(ICED)', en_title: 'Earl Grey',desc: '스리랑카 캔디 지방에서 재배된 홍차에 시칠리아의 감귤,베르가못향이 조화된 감미로운 홍차', ml: '354', kacl: '5', sugar: '0', protein: '0', fat: '0.0', natrium: '4', caffeine: '17', hot_item: 0}, 
    ],
    [],
    [],
    []
]
// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

const menu_array = ['coffee', 'tea', 'hollys', 'smoothie', 'sparkling','food','MD'];
const title_array = ['COFFEE','TEA','할리치노','스무디','스파클링','푸드','MD상품'];
const img_addr = "img/theComma/menu/"; 

function get_url_info(key) {
    let url =location.href; // hollys_menu.html?cateNo=coffee&itemNo=1
    url = url.split("?")[1] // cateNo=coffee&itemNo=1

    console.log("url.length는" +url)

    if(url.length > 1) {
        url = url.split("&") // [cateNo=coffee  ,  itemNo=1]
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("="); // 0-> cateNo=best => [cateNo  ,  coffee]
            if(tmp_url[0] == key) {
                return tmp_url[1] 
            }
        }
    }
    else {
        console.log("없어")
    }
} 

function load_items(cate_no, qty) {  
    let item_length = $('.sec_item_box > .sec_item').length;

    
    /*내가 계산한(24번꺼) 개수가 db에 있는거보다 크면 그냥 db의 끝방까지만 불러오고
    작으면 내가 계산한 번째까지 불러와라*/
    let qty_limit = (item_length+qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty)

    for(let i=item_length; i<qty_limit; i++) {
        let item = ITEM_LIST[cate_no][i];

        let list = `<li class="sec_item ${menu_array[cate_no]}_item">
                        <div class="img_box">
                            <img src="../image/menu/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt="">
                        </div>
                        <div class="item_txt">${ITEM_LIST[cate_no][i].title}</div>
                        <div class="sec_item_click">
                            <div class="click_top">
                                <p class="click_title">${ITEM_LIST[cate_no][i].title}</p>
                                <p class="click_title_en">${ITEM_LIST[cate_no][i].en_title}</p>
                                <div class="under_bar"></div>
                                <p class="click_dsc">${ITEM_LIST[cate_no][i].desc}</p>
                            </div>
                            <div class="click_bot">
                                <p class="click_ml">※ 1회 제공량 기준 ${ITEM_LIST[cate_no][i].ml} ml</p>
                                <ul>
                                    <li>
                                        <div>카페인(mg)</div>
                                        <div>${ITEM_LIST[cate_no][i].caffeine}</div>
                                    </li>
                                    <li>
                                        <div>칼로리(kacl)</div>
                                        <div>${ITEM_LIST[cate_no][i].kacl}</div>
                                    </li>
                                    <li>
                                        <div>나트륨(mg)</div>
                                        <div>${ITEM_LIST[cate_no][i].natrium}</div>
                                    </li>
                                    <li>
                                        <div>당류(g)</div>
                                        <div>${ITEM_LIST[cate_no][i].sugar}</div>
                                    </li>
                                    <li>
                                        <div>포화지방(g)</div>
                                        <div>${ITEM_LIST[cate_no][i].fat}</div>
                                    </li>
                                    <li>
                                        <div>단백질(g)</div>
                                        <div>${ITEM_LIST[cate_no][i].protein}</div>
                                    </li>
                                </ul>
                                <p>매장 상황에 따라 판매하지 않을 수 있습니다.</p>
                            </div>
                        </div>
                    </li>`
        $(`#${menu_array[cate_no]} .sec_item_box`).append(list)

    // id=hot이면 ITEM_LIST[cate_no][i].hot_item = 0 인것들만 로드시키기
    
}

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
}