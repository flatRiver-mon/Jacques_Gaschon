$(document).ready(function(){
    
    $(".main").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".main").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });
    
    $("header").after("<div class='dummy'></div>");

    $(".mmain>a:not(.trip)").click(function(e){
        e.preventDefault();
    });
    
    $(".mmain").click(function(){
        $(".mmain").removeClass("mactive");
        if($(this).children(".msub").is(":visible")){
            $(this).children(".msub").stop().slideUp(300);
        }else {
            $(this).children(".msub").stop().slideDown(300);
        }
        $(this).addClass("mactive");
        $(this).siblings(".mmain").children(".msub").stop().delay(300).slideUp(300);
    });

    $("#ham").click(function(){
        $("#backpan").fadeIn();
        $("#mnav").animate({
            right:0
        });
    });
    
    $("#backpan").click(function(){
        $(this).fadeOut();
        $("#mnav").animate({
            right: -200+"px"
        });
    });
    
    $(".tabbtn").click(function(){
        $(".tabbtn").removeClass("tactive");
        $(this).addClass("tactive");
        var nth = $(this).index();
        $(".tabcont").hide();
        $(".tabcont").eq(nth).show();
    });
    
    function dummyFit(){
        var headerH = $("header").height();
        $(".dummy").height(headerH);
    }
    
    function tabW(){
        var tablen = $(".tabbtn").length;
        $(".tabbtn").width("calc(100% / "+tablen+")");
    }
    
    function coverfit(){
        var imgH = $("#imgtitle>img").height();
        $("#imgtitle>div").height(imgH);
    }
    
    function menueater(){
        var winW = $(window).outerWidth();
        if(winW >= 1025){
            $("#backpan").css({
                display: "none"
            });
            $("#mnav").css({
                right: -200+"px"
            });
        }
    }
    
    function calboxfit(){
        var winW = $(window).outerWidth();
        if(winW >= 810){
            var calH = $("#calbox").height();
            $("#upperbox>div").height(calH);
        }else {
            var calH = $("#calbox").height();
            $("#calbox").height("auto");
            $("#upperbox>div:last-of-type").height(calH);
        }
    }
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
//    $("#landimg_box>div>div>img").click(function(){
//        var src = $(this).attr("src");
//        $("#modal>img").attr("src",src);
//        $("#modal").fadeIn();
//        $("#modalback").fadeIn();
//    });
//    
//    $("#modal>button, #modalback").click(function(){
//        $("#modal").fadeOut();
//        $("#modalback").fadeOut();
//    });
    
    var tarday;
    var tarmonth;
    var dth;
    $(".cal-btn").click(function(){
        $(".dcell").removeClass("bald");
    });
    
    $(".dcell").click(function(){
        $(".dcell").removeClass("bald");
        $(this).addClass("bald");
        dth = $(this).index();
        tarday = $(this).text();
        tarmonth = $(".mm").text();
        var taryear = $(".yyyy").text();
        $("#indate").text(taryear+" "+tarmonth+" "+tarday+"일");
        tarmonth = parseInt(tarmonth);
        tarday = parseInt(tarday);
        var colornum;
        $(".can").removeClass("cannot");
        $(".can").text("예약가능");
        for(i=0;i<5;i++){
            if($(this).children(".greenbean").eq(i).hasClass("redbean")){
                colornum = $(this).children(".greenbean").eq(i).index();
                $(".can").eq(colornum).addClass("cannot");
                $(".can").eq(colornum).text("예약완료");
            }
        }
        $(".roombox").find("select").removeAttr("disabled");
        $(".cannot").parent().parent(".roominfo").parent(".roomleft").next(".roomright").find("select").attr("disabled","true");
    });
    
    //greenbean 중에서 redbean이라는 클래스를 가진녀석을 찾아내서
    //그 녀석이 greenbean중에서 몇번째인지를 알아내고
    //can중에서 그 번째에게 cannot을 준다.
    
    $(".roombox").click(function(){
        if(tarday){
            if($(this).find(".can").hasClass("cannot")){
                alert("예약이 완료된 객실입니다.");
            }else{
                $(".roombox").find(".lastval").text("");
                $(".roombox").removeClass("bactive");
                $(this).addClass("bactive");
                var roomindex =  $(this).index();
                var term = $(this).find(".term").val();
                term = parseInt(term);
                var pnum = $(this).find(".peoplenum").val();
                pnum = parseInt(pnum);
                var lastval;
                if(term == 2){
                    var nth = $(".bald").index(".dcell");
                    $(".dcell").eq(nth+1).addClass("bald");
                }else if(term == 1){
                    var nth = $(".bald").index(".dcell");
                    $(".dcell").eq(nth+1).removeClass("bald");
                    $(".dcell").eq(nth).addClass("bald");
                }
                if(roomindex == 0 || roomindex == 1){
                    if((tarmonth == 7 && tarday > 20) || (tarmonth == 8 && tarday < 12) || ((tarmonth == 2 && tarday >= 4)&&(tarmonth == 2 && tarday <= 6)) || ((tarmonth == 9 && tarday >= 12)&&(tarmonth == 9 && tarday <= 14))){
                        lastval = term * pnum * 150000;
                    }else if(dth == 6 || dth == 0){
                        lastval = term * pnum * 100000;
                    }else {
                        lastval = term * pnum * 80000;
                    }
                }else if(roomindex == 2 || roomindex == 3){
                    if((tarmonth == 7 && tarday > 20) || (tarmonth == 8 && tarday < 12) || ((tarmonth == 2 && tarday >= 4)&&(tarmonth == 2 && tarday <= 6)) || ((tarmonth == 9 && tarday >= 12)&&(tarmonth == 9 && tarday <= 14))){
                        lastval = term * pnum * 200000;
                    }else if(dth == 6 || dth == 0){
                        lastval = term * pnum * 120000;
                    }else {
                        lastval = term * pnum * 100000;
                    }
                }else if(roomindex == 4){
                    if((tarmonth == 7 && tarday > 20) || (tarmonth == 8 && tarday < 12) || ((tarmonth == 2 && tarday >= 4)&&(tarmonth == 2 && tarday <= 6)) || ((tarmonth == 9 && tarday >= 12)&&(tarmonth == 9 && tarday <= 14))){
                        lastval = term * pnum * 350000;
                    }else if(dth == 6 || dth == 0){
                        lastval = term * pnum * 250000;
                    }else {
                        lastval = term * pnum * 200000;
                    }
                }
                lastval = numberWithCommas(lastval);
                $(this).find(".lastval").text(lastval+"원");
            }
        }else{
            alert("날짜를 선택해주세요.");
        }
    });
    
    
    // 시작시 실행하는 함수들
    tabW();
    dummyFit();
    coverfit();
    calboxfit();
    /////////////////////////
        
    $(window).resize(function(){
        coverfit();
        menueater();
        dummyFit();
        tabW();
        calboxfit();
    });
    
    var url = window.location.href;
    var query = url.split("?");
    if(query.length == 2){
        query = query[1]; // tab=1
        query = query.split("="); // tab, 1
        var tabnum = query[1];
        $(".tabbtn").eq(tabnum).trigger("click");
    }
    
});




























