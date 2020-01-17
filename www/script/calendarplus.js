$(document).ready(function(){
    
    function rand(max){
        var result = Math.floor(Math.random() * max);
        return result;
    }
    
    function beanmaker(){
        var dcell = $(".dcell").length;
        for(i=0;i<dcell;i++){
            var dtext = $(".dcell").eq(i).text();
            dtext = parseInt(dtext);
            if(dtext > 0){
                for(j=0;j<5;j++){
                    $(".dcell").eq(i).append("<div class='greenbean'></div>");
                }
            }
        }
        $(".dcell").each(function(){
            for(i=0;i<rand(5);i++){
                $(this).children(".greenbean").eq(rand(5)).addClass("redbean");
            }
        });
    }
    
    beanmaker();
    $(".cal-prev").click(function(){ beanmaker() });
    $(".cal-next").click(function(){ beanmaker() });
});