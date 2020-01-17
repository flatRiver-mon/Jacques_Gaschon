
// MIT License
// 제작자 : 한지호 (ece125@naver.com)
// 누구나 무료로 이용, 수정, 배포할 수 있습니다.
// 본 코드가 유용했다면 개발자에게 맥주한잔 사주세요.
// ---------------------------------------------------
// How to use
// 1. table태그를 만들고 'cal'이라는 클래스를 준다.
// 2. 끗!



// 기초 데이터
var days = ["일","월","화","수","목","금","토"];
var months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
//var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var holi = [
    [1],        //새해
    [4,5,6],    //설날
    [1],        //3.1절
    [],
    [5,12],     //어린이날,부처님오신날
    [6],        //현충일
    [],
    [15],       //광복절
    [12,13,14], //추석
    [3,9],      //개천절,한글날
    [],
    [25]        //크리스마스
]

// 셀 만들기
$(".cal").append("<thead><tr class='cal-head'><td colspan='7' class='cal-title'><button class='cal-btn cal-prev'>&lsaquo;</button><span class='yyyy'></span> <span class='mm'></span><button class='cal-btn cal-next'>&rsaquo;</button></td></tr><tr class='cal-day'></tr></thead><tbody></tbody>");
for(i=0; i<7; i++){
    $(".cal-day").append("<th>"+days[i]+"</th>");
}
for(i=0; i<6; i++){
    $(".cal").children("tbody").append("<tr class='cal-body'></tr>");
    for(j=0; j<7; j++){
        $(".cal-body:last-of-type").append("<td class='dcell'></td>");
    }
}


function makecal(dir){
    var newtime;
    // 현재 시간 측정하기
    if(dir == undefined)  {
        newtime = new Date();
    }else{
        var preyear = Number.parseInt($(".yyyy").text());
        var premonth = Number.parseInt($(".mm").text());
        newtime = new Date(preyear+","+(premonth)+",1");
        if(dir == 1){
            newtime.setDate(32);
            preyear = newtime.getFullYear();
            premonth = newtime.getMonth();
            newtime = new Date(preyear+","+(premonth+1)+",1");
        }else if(dir == -1){
            newtime.setDate(0);
            preyear = newtime.getFullYear();
            premonth = newtime.getMonth();
            newtime = new Date(preyear+","+(premonth+1)+",1");
        }else{
            alert("makecal 함수의 인수는 오로지 공백 또는 1 또는 -1 값만 사용합니다.");
        }
    }
    var year = newtime.getFullYear();
    var month = newtime.getMonth();
    var date = newtime.getDate();
    var day = newtime.getDay();
    var firstdate = new Date(year+','+(month+1)+',1');
    var firstday = firstdate.getDay(); // 이번달 첫날의 요일
    var lastdate1 = new Date(year+','+(month+1)+',1');
    lastdate1.setDate(32);
    lastdate1.setDate(0);
    var lastdate = lastdate1.getDate(); // 이번달의 마지막날(일(day)의 개수)
    
    $(".cal-title .yyyy").text(year+"년");
    $(".cal-title .mm").text(months[month]);
    $(".dcell").empty();
    $(".dcell").removeAttr("style");
    $(".dcell").html("&nbsp;");
    for(i=0; i<lastdate; i++){
        $(".dcell").eq(firstday+i).text(i+1);
        for(j=0; j<holi[month].length; j++){
            if(holi[month][j] == i+1){
                $(".dcell").eq(firstday+i).css("color","red");
            }
        }
    }
}

$(".cal-prev").click(function(){ makecal(-1) });
$(".cal-next").click(function(){ makecal(1) });

makecal();