$( function(){
    $("#btnHamburger").click( function(){
        if($(window).width() > 1280){
            $("#navSide").css("left", "100%").animate({
                "left" : "70%"
            })
        }else{
            $("#navSide").css("left", "100%").animate({
                "left" : "0%"
            })
        }
        
        $("#btnCloseSideMenu").fadeIn();
    })

    $("#btnCloseSideMenu").click( function(){
        if($(window).width() > 1280){
            $("#navSide").css("left", "70%").animate({
                "left" : "100%"
            })
        }else{
            $("#navSide").css("left", "0%").animate({
                "left" : "100%"
            })
        }

        $("#btnCloseSideMenu").fadeOut();
    })

    $("#navMain li").mouseover( function(){
        $("#navSub").slideDown(300);
    })

    $("#navSub").mouseleave( function(){
        $("#navSub").slideUp(300);
    })

    $("#top_btn").click( function(){
        $("#sectionDots li").removeClass("active");
        $("#sectionDots li").eq(0).addClass("active");
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    })
})