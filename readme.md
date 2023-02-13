# 페어몬트 앰배서더 호텔 서울 리뉴얼!
<div align="center">

![fairmont_intro](https://user-images.githubusercontent.com/114633489/217508084-f8582a5e-d588-4120-a8a9-ba638bcd24b3.png)

</div>

<div align="justify">
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
  - [신설 페이지](#신설-페이지)
- [프로젝트 후기](#프로젝트-후기)
  - [Nonwhiskerscat](#nonwhiskerscat)
  - [a0im](#a0im)
  - [GONGHYEONMUN](#gonghyeonmun)
  - [chaerrin](#chaerrin)
- [디자인 가이드](#디자인-가이드)
- [마무리 인사](#마무리-)

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
      <th>Git ID</th>
      <th width="23%"><a href="https://github.com/Nonwhiskerscat">Nonwhiskerscat</a></th>
      <th width="23%"><a href="https://github.com/a0im">a0im</a></th>
      <th width="23%"><a href="https://github.com/GONGHYEONMUN">GONGHYEONMUN</a></th>
      <th width="23%"><a href="https://github.com/chaerrin">chaerrin</a></th>
     </tr>
    <tr>
      <th>Profile</th>
      <td align="center"><a href="https://github.com/Nonwhiskerscat"><img src="https://user-images.githubusercontent.com/114633489/217513739-b6baf543-abcb-4565-a30c-91c5e7f4f1b2.png"></a></td>
      <td align="center"><a href="https://github.com/a0im"><img src="https://user-images.githubusercontent.com/114633489/217512932-7a78e630-82ed-4147-b833-002fa0f4c785.png"></a></td>
      <td align="center"><a href="https://github.com/GONGHYEONMUN"><img src="https://user-images.githubusercontent.com/114633489/217512975-6d5fe093-0768-4357-8549-14b4b5f5aafa.png"></a></td>
      <td align="center"><a href="https://github.com/chaerrin"><img src="https://user-images.githubusercontent.com/114633489/217512973-0c403a4b-801c-4c7e-bce4-a10dcdc79717.png"></a></td>
     </tr>    
    <tr>
      <th>지위</th>
      <td align="center">리더</td>
      <td align="center">멤버</td>
      <td align="center">멤버</td>
      <td align="center">멤버</td>
     </tr>
    <tr>
      <th>역할</th>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/index.html">메인</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/1_Room/guestroom/fairmont_room/fairmont_room.html">호텔 룸 전체</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/8_Reservation/8_Reservation.html">예약</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/My_Page/My_page.html">그</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Login/Login.html">외</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Sign_Up/Sign_up.html">페이지</a> <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/My_Page/My_page.html">제작</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/Wedding/Wedding.html">웨딩</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/Party/Party.html">연회</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/First_Birthday/First_Birthday.html">돌잔치</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/5_Dining.html">다이닝</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/3_Cafe/AtriumLounge/AtriumLounge.html">카페</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/1_Bar/M29/M29.html">바</a>, <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/3_Facilities/3_Facilities.html">시설</a> </td>
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
<div align="center"><b>코드블럭 1</b> 메인페이지의 풀페이지 플러그인</div><br>
 
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
<div align="center"><b>코드블럭 2</b> 메인페이지의 타이핑 효과 구현</div><br>
 
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
<div align="center"><b>코드블럭 3</b> 돌잔치 페이지의 슬라이더 효과 구현</div><br>
 
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
<div align="center"><b>코드블럭 4</b> 웨딩 페이지의 뷰포트 이벤트 구현</div><br>
 
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
<div align="center"><b>코드블럭 5</b> 회원가입 페이지의 유효성 검사를 위한 제이쿼리 코딩 일부</div><br>
 
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
      <td><a href="https://fairmont-seoul.com/">바로가기</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/index.html">바로가기</a></td>      
    </tr>
  </table>
</div>

<p align="justify">호텔 그 자체의 강점을 보여주지 못하고 Room 정보만 주먹구구식으로 넣은 기존의 홈페이지를, 풀페이지 플러그인을 활용하여 역동적으로 구현하였고 각 섹션마다 호텔의 다양한 개성을 스토리형식으로 구성하였고 여느 호텔에 견줄 만한 인터페이스를 추가하여 리뉴얼했습니다.</p>

<hr>

### 페어몬트 룸 페이지
<div align="center">
  <table width="100%">
    <tr>
      <th width="10%">구분</th>
      <th width="45%">기존</th>
      <th width="45%">변경안</th>     
    </tr>
    <tr>
      <th>페이지</th>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258938-5c5cbe42-6736-451c-976c-cac29d5ec724.gif"></td>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258937-86ad0c45-01a9-4955-b5ac-0447c0e50220.gif"></td>      
    </tr>
    <tr> 
      <th>링크</th>
      <td><a href="https://fairmont-seoul.com/room/fairmont-room/">바로가기</a></td>
      <td><a href="https://fairmont-seoul.com/room/fairmont-room/">바로가기</a></td>      
    </tr>
  </table>
</div>

<p align="justify">리뉴얼 된 페이지는 각종 웹 사이트에 게재된 리뷰, 블로그 글을 수집 및 분석하여 더 많은 정보를 제공하고 있으며, 애니메이트 혹은 사진 슬라이드를 활용하여 동적 인터페이스를 부여하였습니다. 특히 자세해진 어메니티, 기존 홈페이지에 기재되지 않았던 환불 및 에티켓 안내문, 객실의 위치까지 추가된 것이 이 페이지의 매력이라 할 수 있습니다.</p>

<hr>

### 웨딩 페이지
<div align="center">
  <table width="100%">
    <tr>
      <th width="10%">구분</th>
      <th width="45%">기존</th>
      <th width="45%">변경안</th>     
    </tr>
    <tr>
      <th>페이지</th>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258940-94d33116-2b4b-40f8-adab-f5c4628dd5d0.gif"></td>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258941-7ccc08ea-9a80-4998-a257-129aaf88a441.gif"></td>      
    </tr>
    <tr> 
      <th>링크</th>
      <td><a href="https://fairmont-seoul.com/meeting-events/weddings/">바로가기</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/2_Events/Wedding/Wedding.html">바로가기</a></td>
    </tr>
  </table>
</div>

<p align="justify"><b>해당 페이지 담당자 曰</b> 기존 홈페이지과 차별된 디자인과 인터페이스를 사용하여 보는 이의 이목을 끌게 하였고 호텔이 지니고 있는 고급미를 돋보이도록 하였습니다. 그리고 소비자가 두 줄의 짧은 텍스트만 보고 예약이 이루어지게 될 때까지의 담겨있는 정보가 부족하다 생각했습니다. 그래서 웨딩 페이지에 부합한 레이아웃과 색상 구성, 그리 고 이미지 정보와 동적인 요소를 추가하여 웹을 리뉴얼 했습니다.</p>

<hr>

### 마리포사 페이지
<div align="center">
  <table width="100%">
    <tr>
      <th width="10%">구분</th>
      <th width="45%">기존</th>
      <th width="45%">변경안</th>     
    </tr>
    <tr>
      <th>페이지</th>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258935-cde9c124-e0ee-4ce5-8ba7-7db4883a2a47.gif"></td>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258936-9ad997af-9f5d-41d1-b865-f7a11b2843ed.gif"></td>      
    </tr>
    <tr> 
      <th>링크</th>
      <td><a href="https://fairmont-seoul.com/dining/mariposa/">바로가기</a></td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/5_Dining/2_Restaurant/Mariposa/Mariposa.html">바로가기</a></td>
    </tr>
  </table>
</div>

<p align="justify"><b>해당 페이지 담당자 曰</b> 기존 사이트의 장황한 텍스트가 가독성을 떨어뜨린다고 생각해 텍스트를 최대한 없애고 이미지를 크게 배치하여 눈에 잘 들어오게 했습니다. 강조되어야 할 텍스트는 기존 폰트 사이즈 보다 더 크게 설정하여 눈에 띄도록 설정하였습니다. 그리고 마우스를 올렸을 때 이미지에 대한 정보가 나오게 함으로써 전체적으로 깔끔하게 디자인하였습니다.</p>

<hr>

### 신설 페이지

<div align="center">
  <table>
    <tr>
      <td rowspan="3" width="40%"><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258933-879baa98-8813-4c51-9280-5d76114cfd1a.gif">
</td>
      <th width="10%">페이지 명</td>
      <td>About</td>
    </tr>
    <tr>
      <th>상세 설명</td>
      <td align="justify"><b>해당 페이지 담당자 曰</b> 기존에 없었던 About Me 페이지를 새롭게 개설하였고, 페어몬트 엠배서더 호텔의 다양한 정보를 파트 별로 배치하여 전 연령층의 사용자가 호텔에 대한 정보를 한 눈에 확인할 수 있도록 하였습니다. 또한, 호텔까지 오시는 길을 아코디언 방식으로 배치하여 깔끔하게 볼 수 있도록 하였습니다.</td>
    </tr>
    <tr>
      <th>링크</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/6_About/6_About.html">바로가기</a></td>
    </tr>
  </table>
  
  <br>
  
</div>

  <table>
    <tr>
      <td rowspan="3" width="40%"><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258922-ef394f80-ca93-455c-a48c-e0e962db1523.gif">
</td>
      <th width="10%">페이지 명</td>
      <td>로그인, 회원가입</td>
    </tr>
    <tr>
      <th>상세 설명</td>
      <td align="justify">기존에 없었던 로그인 페이지와 회원가입 페이지를 추가하였습니다. 아이디를 입력하지 않았을 때 혹은 비밀번호를 입력하지 않았을 때 아이디 및 비밀번호가 누락되었다는 오류 메시지를, 형식에 맞지 않는 아이디(영문 숫자 조합 7자 이상), 패스워드(영문 숫자 특수 문자 조합 9자 이상)을 입력했을 때 존재하지 않는 회원이라 오류 메시지가 발생하도록 하였습니다. 그리고 형식에 맞는 아이디 및 패스워드를 입력했을 때 로그인에 성공하고 메인 화면으로 돌아가는 인터페이스를 추가하였습니다.</td>
    </tr>
    <tr>
      <th>링크</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Login/Login.html">로그인</a>&nbsp|&nbsp<a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Sign_Up/Sign_up.html">회원가입</a></td>
    </tr>
  </table>
  
  <br>
  
  <table>
    <tr>
      <td rowspan="3" width="40%"><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258927-aff2fe5b-c3fe-4437-8f39-d9d939d2bcd8.gif">
</td>
      <th width="10%">페이지 명</td>
      <td>호텔룸 예약</td>
    </tr>
    <tr>
      <th>상세 설명</td>
      <td align="justify">기존에 외부 플랫폼을 활용하였던 예약 페이지를 자체적으로 제작했습니다. 회원가입, 마이페이지, 정보수정, 고객센터 페이지를 포함한 해당 페이지에는 이 홈페이지의 퍼스널 컬러인 <b>#fefdf0</b>을 적절히 활용하였습니다. 특히 여느 호텔 홈페이지와 달리 아이콘을 사용하여 접근성 부분에서도 다른 홈페이지와 차별점을 두었습니다.</td>
    </tr>
    <tr>
      <th>링크</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/8_Reservation/8_Reservation.html">바로가기</a></td>
    </tr>
  </table>
  
  <br>
  
  <table>
    <tr>
      <td rowspan="3" width="40%"><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258931-542c9db0-4cce-4ba2-8d51-0eea4b128178.gif">
</td>
      <th width="10%">페이지 명</td>
      <td>고객센터</td>
    </tr>
    <tr>
      <th>상세 설명</td>
      <td align="justify">서비스를 중시하는 호텔 사이트에 고객센터 페이지가 없는 것이 어색하다 생각해 해당 페이지를 새롭게 제작했습니다. 본래 홈페이지에 기재된 자료가 미비하였기 때문에 Agoda 혹은 호텔스 컴바인 등을 방문하여 고객의 리뷰 및 평가를 분석하였고 이를 바탕으로 FaQ를 구성하였습니다. 물론 사실을 기반으로 작성되지 않았고 고객을 중점으로 제작되었기 때문에 <b>신빙성은 다소 떨어질 수 있습니다.</b></td>
    </tr>
    <tr>
      <th>링크</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/Cust_Center/Cust_Center.html">바로가기</a></td>
    </tr>
  </table>
  
  <br>
  
  <table>
    <tr>
      <td rowspan="3" width="40%"><img width="100%" src="https://user-images.githubusercontent.com/114633489/218258945-e5ecb0eb-6c3f-4d98-8e56-28c42f50124a.gif">
</td>
      <th width="10%">페이지 명</td>
      <td>마이페이지, 정보수정</td>
    </tr>
    <tr>
      <th>상세 설명</td>
      <td align="justify">유저의 프로필 혹은, 개인 정보를 관리할 수 있도록 마이페이지&정보수정 페이지도 새롭게 제작하였습니다. 유저들은 마이페이지 섹션에서 프로필 수정, 비밀번호 수정, 회원 탈퇴, 예약 내역 관리 등과 같은 기능을 수행할 수 있고, 정보수정 페이지에서는 유저의 휴대폰 번호와 이메일 주소를 수정할 수 있습니다.</td>
    </tr>
    <tr>
      <th>링크</td>
      <td><a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/7_Customer/My_Page/My_page.html">마이페이지</a>&nbsp|&nbsp<a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/9_Etc/Info_Modify/Info_Modify.html">정보수정</a></td>
    </tr>
  </table>
  
</div>

## 프로젝트 후기
### Nonwhiskerscat

<div align="center">
  <table>
    <tr>
      <td rowspan="3" width="30%">
        <a href="https://github.com/Nonwhiskerscat"><img src="https://user-images.githubusercontent.com/114633489/217513739-b6baf543-abcb-4565-a30c-91c5e7f4f1b2.png"></a>
      </td>
      <th width="10%">한 마디</th>
      <td colspan="3">철도 기관사가 비행기 조종간을 잡은 상황!</td>
    </tr>
    <tr>
      <th>소감</th>
      <td align="justify" colspan="3">3개월 전만 해도 Jquery가 세상에 존재한 줄 몰랐던 제가 이 중요한 프로젝트의 조장을 맡았을 때 많은 부담감과 걱정이 저에게 쓰나미처럼 몰아쳤습니다. 이를 극복하고 옳은 방향으로 조원들을 리드하자는 다짐을 했지만 저의 결정적인 실수로 조원 분들이 피해를 봤던 적이 있었습니다. 그 이후로 무능한 조장 아래서 고생하는 조원 분들을 생각하며 <b>매일 15시간씩 프로젝트에 전념</b>하였고, <b>조원 분들이 난관에 봉착 했을 경우에도 시간을 내서 문제를 해결</b>해 주었는데, 그 의지가 <b>프로젝트를 완성하는 데에 결정적으로 도움을 줬던 것</b> 같습니다. 그리고 저를 적극적으로 따라준 <b>조원 여러분들에게도 감사 인사</b>를 드립니다.</td>
    </tr>
    <tr>
      <th>개선된 점</th>
      <td>
        <ul>
          <li>무엇이든 해낼 수 있다는 자신감이 생겼다.</li>
          <li>적극적인 의사 표현 능력이 향상되었다.</li>
          <li>웹 디자인 및 코딩 역량이 대폭개선되었다.</li>
        </ul>
      </td>
      <th width="10%">반성할 점</th>
      <td>
        <ul>
          <li>시간 압박으로 바닐라 자바스크립트를 쓰지 못했다.</li>
          <li>책임을 다 하지 못했던 것이 아쉽다.</li>
          <li>사전 정보 없이 돌진하다 조원들에 피해를 줬다.</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<br>

### a0im

<div align="center">
  <table>
    <tr>
      <td rowspan="3" width="30%">
        <a href="https://github.com/a0im"><img src="https://user-images.githubusercontent.com/114633489/217512932-7a78e630-82ed-4147-b833-002fa0f4c785.png"></a>
      </td>
      <th width="10%">한 마디</th>
      <td colspan="3">머릿속으로 큰 그림을 그리자!</td>
    </tr>
    <tr>
      <th>소감</th>
      <td align="justify" colspan="3">조별 프로젝트 도중에 시안 작업 단계에서 모바일과 데스크탑의 통일성을 고려하지 못해 시안 대부분을 수정해야 하는 일이 있었습니다. 당장 시간적 여유가 부족한 상황이라 문제점을 고치지 않은 체 스크립트 를 작성하게 될 상황이었지만. 부족한 시간을 핑계로 조원들에게 민폐를 끼치고 싶지 않았습니다. 이후에 <b>좋은 결과를 만들고 싶다는 목표 하나로 잠을 줄이며 프로젝트에 몰두했고 그 목표가 첫 조별 프로젝트를 완성하는 데에 도움을 주었던 것</b> 같습니다. 그리고 <b>프로젝트 중간중간 부족한 모습에도 다그치지 않고 묵묵히 기다려주신 조원 여러분들께 감사</b>드립니다.</td>
    </tr>
    <tr>
      <th>개선된 점</th>
      <td>
        <ul>
          <li>무엇이든 해낼 수 있다는 자신감이 생겼다.</li>
          <li>프로젝트 경험을 쌓을 수 있었다.</li>
          <li>웹 디자인 및 코딩 역량이 대폭개선되었다.</li>
        </ul>
      </td>
      <th width="10%">반성할 점</th>
      <td>
        <ul>
          <li>의욕만 앞섰고 주어진 시간을 충분히 고려하지 못했다.</li>
          <li>프로젝트 중간중간 컨디션 관리에 소홀했다.</li>
          <li>코드의 양을 줄이기에만 급급해 코드 가독성이 나빠졌다.</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<br>

### GONGHYEONMUN

<div align="center">
  <table>
    <tr>
      <td rowspan="3" width="30%">
       <a href="https://github.com/GONGHYEONMUN"><img src="https://user-images.githubusercontent.com/114633489/217512975-6d5fe093-0768-4357-8549-14b4b5f5aafa.png"></a>
      </td>
      <th width="10%">한 마디</th>
      <td colspan="3">매일매일이 긴장과 발전의 연속이었다!</td>
    </tr>
    <tr>
      <th>소감</th>
      <td align="justify" colspan="3">모든 것을 처음 배운 저에겐 조별 프로젝트는 막막했고 걱정이 앞섰습니다. 조원들에게 피해를 끼치면 안 되는데 나의 능력이 그만큼 안된다고 생각했고 과연 내가 잘 끝낼 수 있을까라는 생각을 했습니다. 역할을 분담하고 일정에 맞춰 해나가는데 <b>저는 더욱 더 많은 시간을 할애하며 따라가고자 노력</b>했습니다. 모르는 것은 조원들에게 물어보기도 하고 공부했던 것을 다시 보며 차근차근 해나가면서 <b>저의 실력도 점차 발전 해 나간다는 것</b>을 느꼈습니다. 어렵고 힘든 점도 있었지만 조에 피해를 끼치지 않고 제가 맡은 역할을 무사히 끝내게 되었습니다. 완성작을 보면서 뿌듯했고 한편으로는 더 잘 해내지 못해 스스로에게 아쉬움이 남는 조별 프로젝트였습니다. <b>많은 도움을 주신 조장님, 그리고 조원들 모두 수고</b>하셨습니다. 감사합니다!</td>
    </tr>
    <tr>
      <th>개선된 점</th>
      <td>
        <ul>
          <li>html, sass, css 능력이 향상되었다.</li>
          <li>의사소통 능력이 향상되었다.</li>
          <li>나도 할 수 있구나 라는 자신감이 생겼다.</li>
        </ul>
      </td>
      <th width="10%">반성할 점</th>
      <td>
        <ul>
          <li>jquery를 사용하지 못했다.</li>
          <li>git을 능숙하게 다루지 못했다.</li>
          <li>계획했던 것에서 수정을 많이 했다.</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<br>

### chaerrin

<div align="center">
  <table>
    <tr>
      <td rowspan="3" width="30%">
        <a href="https://github.com/chaerrin"><img src="https://user-images.githubusercontent.com/114633489/217512973-0c403a4b-801c-4c7e-bce4-a10dcdc79717.png"></a>
      </td>
      <th width="10%">한 마디</th>
      <td colspan="3">시간을 쪼개 잘 활용하자!</td>
    </tr>
    <tr>
      <th>소감</th>
      <td align="justify" colspan="3">학교 수업과 학원 수업을 병행하면서 생활을 하여 시간적인 여유가 부족하던 저는 프로젝트를 시작하였을 때 걱정이 많았습니다. 시간적인 여유가 부족함에도 불구하고, 욕심만 많았던 저는 무리하게 할 일을 많이 만들어 조원분들이 열심히 작업을 하실 때 제가 여러 번 빠지게 된 적이 있었습니다. 아무래도 이 프로젝트에 시간 투자를 많이 못 한다고 생각했습니다. 제 욕심 때문에 다른 조원들에게 피해를 끼칠 수 없다고 생각이 들었습니다. 그 이후부터 <b>잉여시간까지 모두 쪼개어 프로젝트에 전념하기 시작</b>했습니다. <b>바쁜 저를 다그치지 않고 기다려주셔서 조원 여러분들께 감사 인사</b>드립니다.</td>
    </tr>
    <tr>
      <th>개선된 점</th>
      <td>
        <ul>
          <li>시간을 효율적으로 분배하는 법을 터득하였다.</li>
          <li>디자인 및 코딩 역량이 강화되었다.</li>
          <li>의사 표현 능력이 향상 되었다.</li>
        </ul>
      </td>
      <th width="10%">반성할 점</th>
      <td>
        <ul>
          <li>시간 부족으로 프로젝트에 집중하지 못했다.</li>
          <li>욕심을 부리다가 할 일을 늘렸다.</li>
          <li>디자인 기술이 미흡하여 조원분께 도움을 받았다.</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<br>

## 디자인 가이드

<details>
  <summary><h3>열람을 원하시면 이곳을 클릭하세요</h3></summary>
   <div align="center">
    <img width=100% src="https://user-images.githubusercontent.com/114633489/218456039-a6031665-c697-4809-a45b-f6bf3ec265a2.png">
  </div>
</details>


<br>

## 마무리 인사
  
<div align="center">
  <img width=100% src="https://user-images.githubusercontent.com/114633489/217474872-f4aa3e25-f0b1-46d5-be9b-4ad4dd4b2706.png">
</div>

<p align="justify">여기 게재된 것들 외에 <b>실제 홈페이지에서는 구경할 수 있는 디자인과 인터페이스들이 많습니다</b>. 시간적인 여유가 있다면 <a href="http://kidcatnyantopia.net/works/pages/fairmontHotel/index.html">웹 페이지</a>를 직접 방문하여 저희 프로젝트를 구경하셔도 좋습니다. 물론 <b>웹 개발자로서 다들 처음 해보는 프로젝트라 예상치 못한 오류도 많이 직면</b>하게 될 것입니다... 이 점 양해 부탁드립니다. 지금까지 페어몬트 앰배서더 호텔 프로젝트의 조장을 맡은 <a href="https://github.com/Nonwhiskerscat">Nonwhiskerscat</a>이었습니다. 여기 까지 읽어 주셔서 대단히 감사드립니다.</p>



