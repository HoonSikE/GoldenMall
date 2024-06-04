window.dataLayer = window.dataLayer || [];

var gaPage = {
    // 방문 페이지 제목
    title: '페이지 제목',

    // 이벤트 매개변수
    ep_visit_login_yn: 'Y',
    ep_visit_channel_option: 'PCWeb',

    // 사용자 속성
    up_gender: 'M',
    up_age: '29'
}
sendGAPage(gaPage);
console.log(window.dataLayer);

// window.dataLayer.
// Object(객체)의 배열
// Object(키와 값을 가지는 데이터 구조)

// var dataLayer = [{
//     title: 'undefined',

//     ep_visit_login_yn: 'undefined',
//     ep_visit_channel_option: 'undefined',

//     up_gender: 'undefined',
//     up_age: 'undefined'
// }]


/*
- 매개변수 제거 함수
- 매개변수 값이 "" / null / undefined일 시 해당 필드를 객체에서 제거합니다.
*/
function removeEmptyElement(removeValue) {
    let returnValue = {};
    for (key in removeValue) {
        if (removeValue[key] === '' || removeValue[key] === null || removeValue[key] === undefined) {
        delete removeValue[key];
        }
    }
    returnValue = removeValue;

    return returnValue;
}

/*
- dataLayer 초기화 함수
- 해당 함수는 dataLayer를 초기화하여 이전 데이터의 중복 전송을 방지합니다.
*/
function resetDataLayer(targetObject) {
    let setGTM = {};
    for (key in targetObject) {
        setGTM[key] = undefined;
    }

    return dataLayer.push(setGTM);
}

function sendGAPage(object) {
    try {
        object = removeEmptyElement(object);
        commonData = { ...object };

        dataLayer = [object];

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WPC9HDZQ');

        console.log('sendGAPage 함수 Sucess');
    } catch (e) {
        console.log('sendGAPage 함수 ERROR');
        console.log(e.message);
    }
}
function pageView(){
    var gaPage = {
        // 방문 페이지 제목
        title: '페이지 제목',
    
        // 이벤트 매개변수
        ep_visit_login_yn: 'Y',
        ep_visit_channel_option: 'PCWeb',
    
        // 사용자 속성
        up_gender: 'M',
        up_age: '29'
    }
    dataLayer.push(gaPage);
    console.log(window.dataLayer);
    console.log("pageView");
}
function getDataLayer(){
    console.log(window.dataLayer);
}
function setDataLayer(){
    window.dataLayer.push({
        // 방문 페이지 제목
        title: '페이지 제목',
    
        // 이벤트 매개변수
        ep_visit_login_yn: 'Y',
        ep_visit_channel_option: 'PCWeb',
    
        // 사용자 속성
        up_gender: 'M',
        up_age: '29'
    })
    console.log(window.dataLayer);
}
function clickTest(){
    let object = {
        event: 'ga_event',
        event_name: 'click_event',

        ep_button_name: '배너명',
        ep_button_area: '메인 배너',
        ep_button_category: '쇼핑>홈'
    };

    dataLayer.push(object);

    // try {
    //     let GAData = removeEmptyElement(object);
    //     GAData.event = 'ga_event';
    //     dataLayer.push(GAData);
    //     resetDataLayer(GAData);
    //   } catch (e) {
    //     console.log('sendGAEvent 함수 ERROR');
    //     console.log(e.message);
    //   }

    console.log('clickTest');
}
function clickTest2(){
    let object = {
        event: undefined,
        event_name: undefined,

        ep_button_name: undefined,
        ep_button_area: undefined,
        ep_button_category: undefined
    };

    dataLayer.push(object);

    // try {
    //     let GAData = removeEmptyElement(object);
    //     GAData.event = 'ga_event';
    //     dataLayer.push(GAData);
    //     resetDataLayer(GAData);
    //   } catch (e) {
    //     console.log('sendGAEvent 함수 ERROR');
    //     console.log(e.message);
    //   }

    console.log('clickTest');
}
function pageMoveTest(){
    console.log('페이지 이동 테스트');
}
function SelectItem(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'select_item',    // 전자상거래 단계 설정

        ecommerce: {
            item_list_id: "related_products",
            item_list_name: "Related Products",

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }
    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);
    console.log('SelectItem');
}
function ViewItem(){
    window.dataLayer.push({
        event:'ga_ecommerce',
        event_name:'view_item',

        ecommerce: {
            currency: "USD",
            value: 7.77,

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    })

    // window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('ViewItem');
}
function AddToWishlist(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'add_to_wishlist',

        ecommerce: {
            currency: "USD",
            value: 7.77,

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('AddToWishlist');
}
function AddToCart(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'add_to_cart',

        ecommerce: {
            currency: "USD",
            value: 7.77,

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('AddToCart');
}
function BeginCheckout(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'begin_checkout',

        ecommerce: {
            currency: "USD",
            value: 7.77,
            coupon: "SUMMER_FUN",

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('BeginCheckout');
}
function ViewCart(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'view_cart',

        ecommerce: {
            currency: "USD",
            value: 7.77,

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    console.log('ViewCart');
}
function RemoveFromCart(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'remove_from_cart',

        ecommerce: {
            currency: "USD",
            value: 7.77,

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('RemoveFromCart');
}
function AddPaymentInfo(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'add_payment_info',

        ecommerce: {
            currency: "USD",
            value: 7.77,
            coupon: "SUMMER_FUN",
            payment_type: "Credit Card",

            items: [{
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('AddPaymentInfo');
}
function Purchase(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'purchase',

        // 거래 정보 (결제ㅐID, 결제 금액 등 결제 관련 정보 설정)
        ecommerce: {
            transaction_id: 'T-12345',
            affiliation: 'online store',
            vlaue: 15.25,
            tax: 4.9,
            shipping: 5.9,
            currency: 'EUR',
            coupon: 'sale',

            // 결제ID, 결제 금액 등 결제와 관련된 정보 설정
            items: [
            {
                item_id: 'SKU_12345',
                item_name: 'Stan and Friends Tee',
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: 'Google',
                item_category: 'Apparel',
                item_category2: 'Mens',
                item_category3: 'Shirts',
                item_category4: 'Tshirts',
                item_category5: 'Short sleeve',
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: 'Gray',
                location_id: "ASDLKMASLDKMASLDK",
                price:9.99,
                quantity: 1,
            },
            {
                item_id: 'SKU_98754',
                item_name: 'Triblend T-Shirt',
                affiliation: "Naver Store",
                coupon: 'woman_sale',
                discount: 3.54,
                index: 1,
                item_brand: 'Naver',
                item_category: 'Beee',
                item_category2: 'Womens',
                item_category3: 'pants',
                item_category4: 'jean',
                item_category5: 'Long Ldodo',
                item_list_id: "proucttttttt",
                item_list_name: "Productttasdfas",
                item_variant: 'Blue',
                location_id: "tyityjghjtyityityi",
                price:16.80,
                quantity: 2,
            }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('Purchase');
}
function Refund(){
    let GAData = {
        event:'ga_ecommerce',
        event_name:'refund',

        // 거래 정보 (결제ㅐID, 결제 금액 등 결제 관련 정보 설정)
        ecommerce: {
            transaction_id: 'T-12345',
            vlaue: 15.25,
            tax: 4.9,
            shipping: 5.9,
            currency: 'KOR',
            coupon: 'sale',

            // 결제ID, 결제 금액 등 결제와 관련된 정보 설정
            items: [
                {
                    item_id: 'SKU_12345',
                    item_name: 'Stan and Friends Tee',
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    discount: 2.22,
                    index: 0,
                    item_brand: 'Google',
                    item_category: 'Apparel',
                    item_category2: 'Mens',
                    item_category3: 'Shirts',
                    item_category4: 'Tshirts',
                    item_category5: 'Short sleeve',
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: 'Gray',
                    location_id: "ASDLKMASLDKMASLDK",
                    price:9.99,
                    quantity: 1,
                },
                {
                    item_id: 'SKU_98754',
                    item_name: 'Triblend T-Shirt',
                    affiliation: "Naver Store",
                    coupon: 'woman_sale',
                    discount: 3.54,
                    index: 1,
                    item_brand: 'Naver',
                    item_category: 'Beee',
                    item_category2: 'Womens',
                    item_category3: 'pants',
                    item_category4: 'jean',
                    item_category5: 'Long Ldodo',
                    item_list_id: "proucttttttt",
                    item_list_name: "Productttasdfas",
                    item_variant: 'Blue',
                    location_id: "tyityjghjtyityityi",
                    price:16.80,
                    quantity: 2,
                }]
        },
    }

    window.dataLayer.push(GAData);
    // resetDataLayer(GAData);

    console.log('Refund');
}