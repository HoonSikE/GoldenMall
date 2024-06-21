/*
## 고객사 나갈 때 지우기 ##
- 골든플래닛 WEB Builder 파일입니다.
- 프로젝트에 알맞게 커스텀하여 사용하시되, 코드 규칙은 준수해 주시기 바랍니다.
- 이벤트 함수의 경우 프로젝트에 맞게 사용하시되, 함수명 꼭 확인 바랍니다.
- 고객사에 코드 나가기 전 GTM 추적 ID 반드시 확인 바랍니다.
*/
let browserInfo = navigator.userAgent;
let isAndroid = browserInfo.indexOf('GA_Android') > -1;
let isIOS = browserInfo.indexOf('GA_iOS_WK') > -1;
let commonData = {};

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

/*
- 하이브리드 함수
- 앱사용자일 경우 데이터를 JSON 형태로 앱으로 전달합니다.
*/
function hybrid(object) {
  let GAData = { ...commonData, ...object };
  isAndroid ? window.gascriptAndroid.GAHybrid(JSON.stringify(GAData)) : webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(GAData));
}

/*
- 페이지뷰 전송 함수
- 앱과 웹 사용자를 구분하며, 화면 데이터를 전송합니다.
*/
function sendGAPage(object) {
  try {
    object = removeEmptyElement(object);
    commonData = { ...object };
    if (isAndroid || isIOS) {
      object.type = 'P';
      hybrid(object);
    } else {
      dataLayer = [object];

      // Google Tag Manager
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WN78NTLT');
      // End Google Tag Manager
    }
  } catch (e) {
    console.log('sendGAPage 함수 ERROR');
    console.log(e.message);
  }
}

/*
- 이벤트 전송 함수 - 객체
- 앱과 웹 사용자를 구분하며, 이벤트 데이터를 전송합니다.
- 해당 함수는 매개변수를 객체로 받아 사용합니다.
*/
function sendGAEvent(object) {
  try {
    let GAData = removeEmptyElement(object);
    if (isAndroid || isIOS) {
      GAData.type = 'E';
      hybrid(GAData);
    } else {
      GAData.event = 'ga_event';
      dataLayer.push(GAData);
      resetDataLayer(GAData);
    }
  } catch (e) {
    console.log('sendGAEvent 함수 ERROR');
    console.log(e.message);
  }
}

/*
- 이벤트 전송 함수 - 속성
- 앱과 웹 사용자를 구분하며, 이벤트 데이터를 전송합니다.
- 해당 함수는 HTML attribute에서 이벤트 매개변수를 추출하여 데이터를 정의합니다.
*/
function sendGAAttrEvent(event) {
  try {
    const ELE = event.currentTarget;
    const ATTR = ELE.getAttributeNames();
    let GAData = {};
    for (var i = 0; i < ATTR.length; i++) {
      if (ATTR[i].includes('ep_')) {
        GAData[ATTR[i]] = ELE.getAttribute(ATTR[i]);
      }
    }
    GAData['event_name'] = ELE.getAttribute('event_name');
    if (isAndroid || isIOS) {
      GAData.type = 'E';
      hybrid(GAData);
    } else {
      GAData.event = 'ga_event';
      dataLayer.push(GAData);
      resetDataLayer(GAData);
    }
  } catch (e) {
    console.log('sendGAAttrEvent 함수 ERROR');
    console.log(e.message);
  }
}

/*
- 전자상거래 전송 함수
- 앱과 웹 사용자를 구분하며, 전자상거래 데이터를 전송합니다.
*/
function sendGAEcommerce(eventData, transaction, items) {
  try {
    eventData = removeEmptyElement(eventData);
    transaction = removeEmptyElement(transaction);
    for (var i in items) items[i] = removeEmptyElement(items[i]);
    if (isAndroid || isIOS) {
      let GAData = {
        ...eventData,
        transaction,
        items,
        type: 'E',
      };
      hybrid(GAData);
    } else {
      let GAData = {
        event: 'ga_ecommerce',
        ...eventData,
        ecommerce: {
          ...transaction,
          items,
        },
      };
      dataLayer.push(GAData);
      resetDataLayer(GAData);
    }
  } catch (e) {
    console.log('sendGAEcommerce 함수 ERROR');
    console.log(e.message);
  }
}

function sendGAVirPage(virObject){
  try {
    let GAData = removeEmptyElement(virObject);
    if (isAndroid || isIOS) {
      GAData.type = 'E';
      hybrid(GAData);
    } else {
      GAData.event = 'ga_virtual';
      dataLayer.push(GAData);
      resetDataLayer(GAData);
    }
  } catch (e) {
    console.log('sendGAVirPage 함수 ERROR');
    console.log(e.message);
  }
}