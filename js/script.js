$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else{
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    setInterval(function(){
        if(innerWidth > 980){
            $('.menu-toggler').removeClass("active");
            $(".navbar-menu").removeClass("active");
            $(".page-blocker").removeClass("active");
        }
    }, 100);

    $(".goTop").click(function(){scroll(0,0)})

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $(".page-blocker").toggleClass("active");
    });

    $('.navbar-menu a').click(function(){
        $('.menu-toggler').toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $(".page-blocker").removeClass("active");
    })

    $(".page-blocker").click(function(){
        $(this).removeClass("active");
        $('.menu-toggler').removeClass("active");
        $(".navbar-menu").removeClass("active");
    })

    $(".works").magnificPopup({
        delegate: "a",
        type: "image",
        gallery:{enabled:true}
    });
});