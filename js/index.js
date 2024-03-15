$( function(){
    $(".dp").eq(0).slick();
    $(".dp").hide();
    $(".dp").eq(0).show();

    var origIdx = $("#section03 .serviceList li.active").index();
    var thisIdx = 0;

    $("#section03 .dp3").eq(0).show();

    $("#section03 .serviceList li").mouseover( function(){
        thisIdx = $(this).index();
        $("#section03 .serviceList li").removeClass("active");
        $("#section03 .serviceList li").removeClass("hover");
        $(this).addClass("hover");
    })

    $("#section03 .serviceList li").mouseleave( function(){
        $(this).removeClass("hover");
        $(".origin").addClass("active");
    })

    $("#section03 .serviceList li").click( function(){
        $("#section03 .serviceList li").removeClass("active");
        $(this).addClass("active");
        $("#section03 .serviceList li").removeClass("origin");
        $(this).addClass("origin");
        origIdx = $(this).index();

        $("#section03 .dp3").hide();
        $("#section03 .dp3").eq(origIdx).fadeIn();
    })





    $("#section04 .left .history li").click( function(){
        var curr = $("#section04 .left .history li.active").index();
        $("#section04 .left .history li").removeClass("active");
        $(this).addClass("active");
        let idx = $(this).index();
        
        $("#section04 .right .dp").hide();
        $("#section04 .right .dp").eq(idx).fadeIn();

        $("#section04 .right .dp").eq(idx).find(".sub").eq(0).show();

        $(".dp").hide();
        $(".dp").eq(idx).show();
        $(".dp").eq(curr).slick("unslick");
        $(".dp").eq(idx).slick();
        $(".dp").removeClass("show2");
        $(".dp").eq(idx).addClass("show2");
    });




    $("#section06 .row .col").mouseenter( function(){
        $(this).addClass("active");
        $(this).css({
            "background-color": "#1664e1",
            "color" : "#ffffff",
            "transition" : "0.3s",
            "height" : "300px"
        }, 300);

        $(this).find("h5").css({
            "color" : "#3190E6"
        });

        $(this).find("span.date").hide();
        $(this).find("span.more").show();
    })

    $("#section06 .row .col").mouseleave( function(){
        $(this).removeClass("active");
        $(this).css({
            "background-color": "#f7f7f7",
            "color" : "#333",
            "transition" : "0.3s",
            "height" : "240px"
        }, 300);

        $(this).find("h5").css({
            "color" : "#1664e1"
        });

        $(this).find("span.date").show();
        $(this).find("span.more").hide();
    })



    $("section").on("mousewheel", function(e, d){
        let h = $(window).height();
        
        if(d > 0){
            prev = $(this).prev().offset();
            if(prev != undefined){
                let sectionNumber = Math.floor(prev.top/h);
                $("#sectionDots ul li").removeClass("active");
                $("#sectionDots ul li").eq(sectionNumber).addClass("active");
                $("html, body").stop().animate({scrollTop:prev.top}, {
                    duration: 700, complete: function () {
                        if(sectionNumber == 1){
                            countPlay();
                        }
                    }
                });
            }

        }else if(d < 0){
            next = $(this).next().offset();
            if(next != undefined){
                let sectionNumber = Math.floor(next.top/h);
                $("#sectionDots ul li").removeClass("active");
                $("#sectionDots ul li").eq(sectionNumber).addClass("active");
                $("html, body").stop().animate({scrollTop:next.top}, {
                    duration: 700, complete: function () {
                        if(sectionNumber == 1){
                            countPlay();
                        }
                    }
                });
            }
        }
    })

    countPlay();

    function countPlay(){
        $('.cntUp').each(function(){
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()}, {
                duration: 1000,
                easing: 'swing',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    

    var curr;
    $("#historySelect").focus( function(){
        curr = $(".historySelect option:selected").index();
    }).change( function(){
        $(this).blur();

        var idx = $(".historySelect option:selected").index();
        // $("#section04 .left .history li").removeClass("active");
        // $(this).addClass("active");
        
        $("#section04 .right .dp").hide();
        $("#section04 .right .dp").eq(idx).fadeIn();

        $("#section04 .right .dp").eq(idx).find(".sub").eq(0).show();

        $(".dp").hide();
        $(".dp").eq(idx).show();
        $(".dp").eq(curr).slick("unslick");
        $(".dp").removeClass("show2");
        $(".dp").eq(idx).slick();
        $(".dp").eq(idx).addClass("show2");
        $(".dp").eq(curr).find(".sub").removeClass("active2");
        $(".dp").eq(idx).find(".sub").addClass("active2");

        console.log("idx : "+idx);
        console.log("prev : "+curr);
    })
})