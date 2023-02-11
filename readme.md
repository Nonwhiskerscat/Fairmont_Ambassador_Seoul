# 페어몬트 앰배서더 호텔 서울 리뉴얼!
<div align="center">

![fairmont_intro](https://user-images.githubusercontent.com/114633489/217508084-f8582a5e-d588-4120-a8a9-ba638bcd24b3.png)

</div>

<div style="background-color:#555">
안녕하십니까, 페어몬트 앰배서더 호텔 서울 리뉴얼 프로젝트의 조장을 맡은 <a href="https://github.com/Nonwhiskerscat">수염 없냥</a>입니다. 이번 프로젝트를 통해 페어몬트 앰배서더 호텔 사이트를 새롭게 리뉴얼 할 수 있었고, 중간 중간 사소한 실수로 시행착오가 있었지만 첫 번째 조별 프로젝트이자, 전체 페이지 리뉴얼 프로젝트를 무사히 끝마치게(?) 되었습니다. 지금부터 이 프로젝트를 제작하는 데에 있어 어떠한 과정을 거쳤는지에 대해 보여드리겠습니다. 
</div>

## Contents
- [기본 정보](#기본-정보)
- [조원 소개](#조원-소개)
- [프로젝트 계기](#프로젝트-계기)
- [디자인](#디자인)
  - [톤앤 매너](#톤앤-매너)
  - [폰트 패밀리](#폰트-패밀리)
  - [반응형](#반응형)
- [코딩](#코딩)
  - [풀페이지 플러그인](#풀페이지-플러그인)
  - [텍스트 타이핑 효과](#텍스트-타이핑-효과)
  - [이미지 슬라이드](#이미지-슬라이드)
  - [스크롤 바에 따른 뷰포트 이벤트](#스크롤-바에-따른-뷰포트-이벤트)
  - [유효성 검사](#유효성-검사)
- [최종 결과물](#최종-결과물)
  - [로고](#로고)
  - [메인 페이지](#메인-페이지)
  - [페어몬트 룸 페이지](#페어몬트-룸-페이지)
  - [웨딩 페이지](#웨딩-페이지)
  - [신 페이지](#신설-페이지)
- [시연 영상](#시연-영상)
- [프로젝트 후기](#프로젝트-후기)
- [그 외](#그-외)

## 기본 정보

### 개요

> <h3>목표&nbsp&nbsp:clipboard:</h3>
> <p>디자인 혹은 인터페이스적으로 개선이 필요해 보이는 기존 페어몬트 앰배서더 호텔 사이트 (<a href="https://fairmont-seoul.com/">링크</a>)를 새로운 페이지로 리뉴얼하기!!</p>
<br>

> <h3>뒷 이야기&nbsp&nbsp:crystal_ball:</h3>
> <p align="justify">3일차 까지만 해도 대구 그랜드 호텔(<a href="http://www.daegugrand.co.kr/grand/main/index.php">링크</a>) 사이트를 대상으로 리뉴얼 프로젝트를 진행하려 했으나, 인터넷에 떠도는 소스 및 사진 자료가 한강에서 바늘 찾기를 할 정도로 없었다. 그렇다고 소스를 구하기 위해 프로젝트 기간 중간 중간에 대구에 있는 호텔까지 내려가면서 모든 룸 타입의 방을 예약하고 답사까지 할 수 없다. 그래서 페어몬트 앰배서더 호텔로 바꾸었다고 한다. <s>그런데 이 쪽도 자료가 없었다는 것은 안 비밀</s> </p>
<br>

> <h3>제작 비용&nbsp&nbsp:moneybag:</h3>
> <p>인건비 + 점심값 + 전기세 + 학원까지 왔다갔다 하는 교통비 + 인터넷 이용료를 제외한 개인적인 비용은 들지 않았습니다. </p>

<br><br>

### 사용 TOOL

<div display="flex" align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"><br>
  <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white">
  <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=white">
  <img src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white">
</div>
<br><br>

### 제작 기간

<div align="center">
<h3>:date:&nbsp&nbsp2022년 10월 13일 ~ 2022년 11월 17일 (총 35일)</h3>
</div><br>

> <h3>1주차(10.13 ~ 10.19)&nbsp&nbsp:egg:</h3>
> <p>조원 모집, 리뉴얼 대상 사이트 모색, 계획표 작성, 사이트맵 제작, 와이어프레임 설계, 메인페이지 레이아웃 작업</p>
<br>

> <h3>2주차(10.20 ~ 10.26)&nbsp&nbsp:hatching_chick:</h3>
> <p>서브페이지 레이아웃 작업, 메인페이지 시안 디자인, 서브페이지 시안 디자인, html 코딩 시작</p>
<br>

> <h3>3주차(10.27 ~ 11.02)&nbsp&nbsp:hatched_chick:</h3>
> <p>디자인 피드백, html 코딩, css 코딩</p>
<br>

> <h3>4~5주차(11.03 ~ 11.13)&nbsp&nbsp:rooster:</h3>
> <p>css 코딩 마무리, jQuery 코딩, Javascript 코딩, 1차 피드백, 코딩 마무리</p>
<br>

> <h3>5~6주차(11.14 ~ 10.17)&nbsp&nbsp:crown:</h3>
> <p>기획서 제작, 종합 디자인 가이드 제작, 웹 호스팅, 프로젝트 마무리</p>

<br>



## 조원 소개
<div align="center">
  <table>
    <tr>
      <td>Git ID</td>
      <th width="23%"><a href="https://github.com/Nonwhiskerscat">Nonwhiskerscat</a></th>
      <th width="23%"><a href="https://github.com/a0im">a0im</a></th>
      <th width="23%"><a href="https://github.com/GONGHYEONMUN">GONGHYEONMUN</a></th>
      <th width="23%"><a href="https://github.com/chaerrin">chaerrin</a></th>
     </tr>
    <tr>
      <td>Profile</td>
      <td align="center"><a href="https://github.com/Nonwhiskerscat"><img src="https://user-images.githubusercontent.com/114633489/217513739-b6baf543-abcb-4565-a30c-91c5e7f4f1b2.png"></a></td>
      <td align="center"><a href="https://github.com/a0im"><img src="https://user-images.githubusercontent.com/114633489/217512932-7a78e630-82ed-4147-b833-002fa0f4c785.png"></a></td>
      <td align="center"><a href="https://github.com/GONGHYEONMUN"><img src="https://user-images.githubusercontent.com/114633489/217512975-6d5fe093-0768-4357-8549-14b4b5f5aafa.png"></a></td>
      <td align="center"><a href="https://github.com/chaerrin"><img src="https://user-images.githubusercontent.com/114633489/217512973-0c403a4b-801c-4c7e-bce4-a10dcdc79717.png"></a></td>
     </tr>    
    <tr>
      <td>지위</td>
      <td align="center">리더</td>
      <td align="center">멤버</td>
      <td align="center">멤버</td>
      <td align="center">멤버</td>
     </tr>
    <tr>
      <td>역할</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/index.html">메인</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/1_Room/guestroom/fairmont_room/fairmont_room.html">호텔 룸 전체</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/8_Reservation/8_Reservation.html">예약</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/My_Page/My_page.html">그</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Login/Login.html">외</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Sign_Up/Sign_up.html">페이지</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/My_Page/My_page.html">제작</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/Wedding/Wedding.html">웨딩</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/Party/Party.html">연회</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/First_Birthday/First_Birthday.html">돌잔치</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/5_Dining.html">다이닝</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/3_Cafe/AtriumLounge/AtriumLounge.html">카페</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/1_Bar/M29/M29.html">바</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/3_Facilities/3_Facilities.html">시설</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/6_About/6_About.html">호텔 정보</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/4_SpecialOffer/4_SpecialOffer.html">스페셜 오퍼</a></td>
     </tr>
  </table>
</div>

## 프로젝트 계기

<p align="justify">웹에 널린 사이트의 종류는 수도 없이 많습니다. 단순히 캐릭터를 소개하는 사이트부터, 빅 데이터를 다루는 날씨 웹까지, 다양한 웹 사이트가 있죠. 그 중에서 저희는 반려동물 웹 플랫폼, 국립 혹은 사립 공원 사이트, 연예인 엔터테인먼트 사이트, 호텔 혹은 리조트 사이트 중의 후보군들 중에서 <b>활용할 수 있는 소스 및 사진이 가장 많은 호텔 사이트</b>를 선정하였고, 그 가운데에서도 대한민국 호텔에서 다섯 손가락에 드는 <b>페어몬트 앰배서더 호텔 서울</b> 공식 사이트를 채택하게 되었습니다.<br> 
  
<div>
  <table>
    <tr valign="top">
      <td>
          <img src="https://user-images.githubusercontent.com/114633489/217738373-75de2336-1e31-4a09-bd8e-e5bb783c1427.png">
      </td>
      <td>
          <img src="https://user-images.githubusercontent.com/114633489/217738382-78d6f98d-3dfe-45e1-aabb-8167998081a3.png">
      </td>
    </tr>
    <tr>
      <td>
        <div align="center"><b>이미지 1.1</b> 메인 페이지</div>
      </td>
      <td>
        <div align="center"><b>이미지 1.2</b> Wedding 페이지</div>
      </td>
    </tr>
    <tr valign="top">
      <td>
        <img src="https://user-images.githubusercontent.com/114633489/217738358-3c8525af-d23b-4cb1-8ea4-34e77183ee7d.png">
      </td>
      <td>
        <img src="https://user-images.githubusercontent.com/114633489/217738378-5a71689e-fe59-49e5-aa0e-0e70ca7cac4e.png">
      </td>
    </tr>
    <tr>
      <td>
        <div align="center"><b>이미지 1.3</b> Fairmont Fit 페이지</div>
      </td>
      <td>
        <div align="center"><b>이미지 1.4</b> Meeting & Event 페이지</div>
      </td>
    </tr>
  </table>
</div>

하지만 다섯 손가락에 들어가는 호텔 치고 페이지의 <b>디자인 혹은 인터페이스가 다른 호텔에 비해 약간 뒤쳐지는 느낌이 있었습니다.</b> 그리고 서비스를 퍼스트로 하고 강점으로 내세우는 호텔 사이트의 명색에 맞지 않게 고객들의 고충을 들어주는 페이지 하나 없었고, 고객의 예약 혹은 마일리지 여부를 확인할 수 없는 로그인 페이지 하나 조차 구비되지 않았습니다. 게다가 호텔 정보를 대거 표현해야 하는 메인페이지에는 간단한 객실 정보 외에는 어떠한 정보도 노출되지 않았고, 그 마저도 Room 페이지와 중복되는 아이러니한 모습을 보였습니다. 그리고 웹 페이지에 전체적으로 애니메이트가 구현되지 않아 인터페이스에 있어 원시적인 모습을 보이고 있습니다.<br>
  
이러한 모습은 서브 페이지에서도 어렵지 않게 발견할 수 있었고, 룸 페이지와 같은 경우, 호텔이 어떤 어메니티를 제공하고 룸 타입마다 어떤 서비스를 제공하는 지에 대해 전혀 드러나지 않았으며 많은 정보를 요하는 이벤트, 부대 시설과 관련된 정보 또한 다른 호텔 사이트에 비해 미비한 모습을 보였습니다.<b>그래서 저희는 이 호텔 사이트를 생기있고 현대적인 사이트로 리뉴얼하고자</b> 이 프로젝트를 진행하게 되었습니다.</p>
<div>
</div>

## 디자인
### 톤앤 매너
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/217790685-213a83c5-8820-420b-a29b-f273d8a1434a.png">
</div>

<p align="justify">
주조색은 베이지색 계열의 밝은 톤의 색을 채택하여 과거와 달리 저채도의 차분한 색이 고급스러움을 상징하는 현대의 트렌드에 맞춰 주조색을 베이지색으로 설정했으며, 기본 베이지색에 명도를 조절하여 현대 도시에 우러나오는 고급스러움을 가미하였다. 그에 반해 강조색은 19~20 세기 고급 호텔의 아이덴티티였던 브라운 계열의 색을 기반으로 명도와 채도를 적절히 조절하여 고져스, 엘레강스한 느낌을 부여하였으며 과거 호텔의 전통을 이어가겠다는 의미를 담고 있습니다. 저희는 주조색과 강조색의 대비를 활용하여 <b>과거 호텔의 전통을 이어가는 세련된 현대의 호텔이 되겠다</b>는 의미를 부여하고자 했습니다. 그리고 보조색은 삼원색에 채도와 명도를 럭셔리하게 변형시켰고, 고급스러운 느낌을 가미시키기 위해 녹색 계열의 색을 황색 계열의 색으로 변경하였습니다.
</p>

<hr>

### 폰트 패밀리
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/217789826-4f64297f-d461-432f-ab55-24ba03a38dd8.png">
</div>

<p align="justify">
외형적으로 호텔이 지니고 있는 우아함, 고풍스러운 느낌을 그대로 담은 듯한 <b>LEMON MILK</b>를 메인 폰트로 사용하여 디자인 하였고, 본문 혹은 설명 부분을 담당하는 폰트는 최소한 깔끔하고 가독성이 뛰어난 <b>에스코어 드림</b>를 채택했습니다. Lemon Milk와 같은 경우 상업적으로 이용이 자유로운 에스코어 드림과 달리 <b>상업적으로 사용할 수 있는 폰트가 아니기 때문에</b> 상업적인 목적으로 사용 시 재수가 없으면 경찰 삐뽀삐뽀 :oncoming_police_car: 할 수 있으니 이 점 주의 부탁드립니다. 
</p>

<hr>

### 반응형

<div align="center">
  <table>
    <tr align="center">
      <td width="20%">명칭</td>
      <th width="30%">모바일</th>
      <th width="50%">데스크탑</th>
    </tr>
    <tr align="center">
      <td>디바이스</td>
      <td><img width="70%" src="https://user-images.githubusercontent.com/114633489/218056328-94c6d8e5-7dd6-467b-9ab8-34e000515577.png"></td>
      <td><img src="https://user-images.githubusercontent.com/114633489/218055603-5aa06397-7706-4c15-a717-6148ba7e7fc9.png"></td>
    </tr>
    <tr align="center">
      <td>약칭</td>
      <td>mobile-screen</td>
      <td>pc-screen</td>
    </tr>
    <tr align="center">
      <td>지원 최소 크기</td>
      <td>390px</td>
      <td>1400px</td>
    </tr>
    <tr align="center">
      <td>비고</td>
      <td colspan="2">띄어쓰기 전용 중단점 800px 추가</td>
    </tr>
  </table>
</div>


<p align="justify">
다양한 디바이스에서 이용 및 열람이 가능하도록 반응형 웹으로 구현을 하였고, 1400px 기준으로 디자인을 달리 하였습니다. <s>처음에 중단점 4개 잡다 프로젝트가 엎어진 적이 있었고 처음부터 디자인을 다시하여 중단점을 1개로 수정했다는 것은 안 비밀... 그룹 프로젝트 역대급 흑역사...</s></p>

<hr>

## 코딩
### 풀페이지 플러그인
``` JavaScript
$(function() {

  $('#fullpage').fullpage({
  autoScrolling:true,
  scrollHorizontally: true,
      navigation: true,
      navigationPosition: 'right',
      afterLoad: function(anchorLink, index) {

      if(index==2) {
        fadein();
        fadeup();
        rollingNumber();
      }
      
      if(index==3) {
        $('#fp-nav ul li a span').css({
          'background': '#333',
          'transition': 'all 0.5s'
        });				
      }
      
      else {
        $('#fp-nav ul li a span').css('background', '#fff');
      }
      
    }
  });
});
```
<div align="center"><b>코드블럭 1.1</b> 메인페이지의 풀페이지 플러그인</div><br>
 
<p align="justify">메인 페이지에서는 풀페이지 플러그인 2.9.7 버전을 활용하여 디바이스 혹은 화면의 크기에 상관 없이 한 페이지의 사이즈를 디바이스의 스크린 크기와 일치시키도록 하였고, 스크롤을 할 때마다 페이지가 넘어가도록 구현하였습니다. 그리고 afterLoad를 사용하여 유저가 해당 페이지에 도달했을 때, 함수가 발생하도록 하는 인터페이스를 추가하였습니다.</p>
 
<hr>


### 텍스트 타이핑 효과
``` JavaScript
window.addEventListener('load', function(){
    var typeText = document.querySelector("h2#type");
    var textToBeTypedArr = 
    [
    "호텔의 품격", 
    "DIGNITY OF HOTEL", 
    "ホテルの品格", 
    "飯店的品格", 
    "qualité hôtelière", 
    "calidad hotelera", 
    "deversorium qualis",
    "qualità alberghiera",
    "Hotelqualität",
    "chất lượng khách sạn",
    "คุณภาพโรงแรม",
    "جودة الفندق"
    ];
    var index = 0, isAdding = true, textToBeTypedIndex = 0;
    
    function goType() {
    setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            isAdding = false
            setTimeout(function () {
            goType();
            }, 2000)
            return
        } else {
            index++;
        }
        } else {
            if (index === 0) {
            isAdding = true
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
            } else {
            index--;
            }
        }
        goType();
        }, isAdding ? 120 : 60)
    }
    goType();
```
<div align="center"><b>코드블럭 1.2</b> 메인페이지의 타이핑 효과 구현</div><br>
 
<p align="justify">제이쿼리를 남발한 프로젝트이지만 이 부분 만큼은 바닐라 자바스크립트를 활용하였습니다. 호텔의 품격을 17가지 언어로 표현하였고 이를 배열에 저장한 이후 일정 시간이 지나면 차례대로 타이핑 되고 지워지는 효과를 부여하였습니다. <s>글자가 추가되는 시간 0.12초, 지워지는 시간 0.06초, 타이핑이 끝나 머무는 시간 2초</s> </p>
 
<hr>

### 이미지 슬라이드
``` JavaScript
$('.ins li:eq(1)').addClass('s2-act')//add default class
let clone = $(".ins").clone(true).appendTo('.hidden-box')
let multi = 1;
let classIdx = 2;
slideInter = setInterval(slide, 3000)

function slide() {
  $('.hidden-box li').removeClass('s2-act')
  let itemWidth = $('.ins li').outerWidth(true)
  let itemLength = $(".ins:first li").length;


  if (classIdx >= itemLength) classIdx = 0;
  if (multi > itemLength) {
    multi = 1;
    $('.ins').css('left', 0)
  }

  $('.ins').animate({ 'left': `-${itemWidth * multi++}px` }, 500)
  $(`.ins li:eq(${classIdx++})`).addClass('s2-act')
  $(clone).children().eq(classIdx - 1).addClass('s2-act')
}
```
<div align="center"><b>코드블럭 1.3</b> 돌잔치 페이지의 슬라이더 효과 구현</div><br>
 
<p align="justify"><b>해당 페이지 담당자 曰</b> 이미지들을 감싸고 있는 .ins 요소를 복제해 원본 .ins요소 뒤쪽에 붙여 주는 형식으로 이미지의 너비만큼 슬라이드를 반복하며 원본의 마지막 이미지 요소를 지나 복제한 첫 이미지 요소에 슬라이드가 도달하면 원본 요소를 복제한 요소 위치로 변경해 주는 방법으로 슬라이드를 구현하였습니다.</p>
 
<hr>

### 스크롤 바에 따른 뷰포트 이벤트
``` JavaScript
$('.ins li:eq(1)').addClass('s2-act')//add default class
let clone = $(".ins").clone(true).appendTo('.hidden-box')
let multi = 1;
let classIdx = 2;
slideInter = setInterval(slide, 3000)

function slide() {
  $('.hidden-box li').removeClass('s2-act')
  let itemWidth = $('.ins li').outerWidth(true)
  let itemLength = $(".ins:first li").length;


  if (classIdx >= itemLength) classIdx = 0;
  if (multi > itemLength) {
    multi = 1;
    $('.ins').css('left', 0)
  }

  $('.ins').animate({ 'left': `-${itemWidth * multi++}px` }, 500)
  $(`.ins li:eq(${classIdx++})`).addClass('s2-act')
  $(clone).children().eq(classIdx - 1).addClass('s2-act')
}
```
<div align="center"><b>코드블럭 1.4</b> 웨딩 페이지의 뷰포트 이벤트 구현</div><br>
 
<p align="justify"><b>해당 페이지 담당자 曰</b> 스크롤 이벤트 도중 이벤트로 지정한 요소가 뷰포트 내에 도달하면 true를 반환하고 뷰포트 내에 요소에만 스타일을 변경하여 이벤트가 발생하도록 구현하였습니다. 일반적인 1회성 스크롤 이벤트에 비해 뷰포트에 도달하게 되면 애니메이션이 재구현된다는 것이 어찌 보면 또 하나의 매력인 것 같습니다.</p>

<hr>

### 유효성 검사

``` JavaScript
let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;
let pCheck=/^(?=.*[0-9]).{10,25}$/;
let nCheck=/^(?=.*[0-9]).{6,6}$/;
let ePass = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


let idCheck=false;
let phCheck=false;

$('.id_id .aconf_btn').on('click', function() {

    if($('input#aid').val().length<1) alert('아이디를 입력해 주세요!');
    else if(!idPass.test($('input#aid').val())) alert('아이디는 영문 숫자 조합 7자 이상으로 입력해 주세요!');
    else if($('input#aid').val().match('nonwhiskerscat')) alert('이미 존재하는 아이디입니다!');
    else {
        alert('멋진 아이디네요!');
        idCheck=true;
    }

});

$('.phone_phone .aconf_btn').on('click', function() {

    if($('input#aphone1').val().length<1) alert('휴대폰 번호를 입력해 주세요!');
    else if(!pCheck.test($('input#aphone1').val())) alert('휴대폰 번호를 똑바로 입력해 주세요!');
    else {
        alert('인증번호가 전송 되었습니다!');
        phCheck=true;
    }

});
```
<div align="center"><b>코드블럭 1.5</b> 회원가입 페이지의 유효성 검사를 위한 제이쿼리 코딩 일부</div><br>
 
<p align="justify">회원가입 페이지와 같은 경우 일반적인 웹 페이지와 유사하게 작동하도록, 각 요소들에 조건을 붙여 유효성 검사를 진행하도록 하였습니다. 예를 들어, 아이디와 같은 경우 영문, 숫자 조합으로 7자를 입력하도록 <b>/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/</b>와 같은 조건을 걸었습니다. 그 외에 패스워드, 휴대폰 번호, 이메일 등 유효성 검사에 걸맞는 조건을 갖추지 않을 경우 가입이 되지 않도록 구현하였습니다.</p>

<hr>

## 최종 결과물
### 로고
### 메인 페이지
<div align="center">
  <table width="100%">
    <tr>
      <th width="10%">구분</th>
      <th width="45%">기존</th>
      <th width="45%">변경안</th>     
    </tr>
    <tr>
      <th>페이지</th>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258943-06d37f49-79c0-4c84-9cf6-60296aba7bb7.gif"></td>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258946-9a188bd8-6e88-4190-ad3f-65c4a4aee877.gif"></td>      
    </tr>
    <tr> 
      <th>링크</th>
      <td><a href="">바로가기</a></td>
      <td><a href="">바로가기</a></td>      
    </tr>
  </table>
</div>

### 페어몬트 룸 페이지
### 웨딩 페이지
### 마리포사 페이지
### 신설 페이지

## 시연 영상

## 프로젝트 후기

## 그 외
### 기획서
### 디자인 노트
