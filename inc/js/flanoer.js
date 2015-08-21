$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#ctop');
    var offset = startchange.offset();
    var vcolor = 1;
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop() + 80;
        if(scroll_start > offset.top) {
            //$('#topnavbar').css('background-color', '#302d2e');
            if (vcolor == 1){
                vcolor = 2;
                $( "#topnavbar" ).animate({
                    backgroundColor: "#302d2e",
                    color: "#fff"
                }, 500 );
                $( "#topnavbar" ).addClass( "white" );
                $( "#logo" ).addClass( "hidden" );
                $( "#logoWhite" ).removeClass( "hidden" );
            }

        } else {
            if (vcolor == 2){
                $( "#topnavbar" ).animate({
                    backgroundColor: 'transparent',
                    color: "#fff"
                }, 500 );
                $( "#topnavbar" ).removeClass( "white" );
                $( "#logo" ).removeClass( "hidden" );
                $( "#logoWhite" ).addClass( "hidden" );
                vcolor = 1;
            }
        }
    });

    var intNumber = Math.floor((Math.random() * 2) + 1);
    $('#td' + intNumber).fadeIn(1000);

    $('.owl-carousel').owlCarousel({
        margin:0,
        loop:true,
        autoWidth:true,
        items:4,
        center: true
    })

    $('.owl-carousel-mobile').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:false,
        items:1,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

    $("#welcome").width($(window).width());

    /*
    //adjust the products to be the same height
    var heights = $(".product").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".product").height(maxHeight);
    */

});

$(function() {
      var blazer = loadMD.fetch('_products/flanr-blazer-jacket-black.md').done(function(data){
          $('#flanr-blazer-jacket-black').html(loadMD.toHTML(data));
      });
});

var loadMD = {
    fetch: function(strUrl){
        return $.ajax({
			url: strUrl,
			type: 'GET'
		});
    },
    
    toHTML: function(str){
        var convert = new Markdown.getSanitizingConverter().makeHtml;
        return convert(str);
    }
};

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#homeContainer").offset().top
    }, 1000);
});

$("#shop").click(function() {
    $('html, body').animate({
        scrollTop: $("#ctop").offset().top
    }, 1000);
});

$("#lookbook").click(function() {
    $('html, body').animate({
        scrollTop: $("#lookbookContainer").offset().top
    }, 1000);
});

$("#omflanoer").click(function() {
    $('html, body').animate({
        scrollTop: $("#omflanoerContainer").offset().top
    }, 1000);
});

$("#kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $("#kontaktContainer").offset().top
    }, 1000);
});

$('#prevImg').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
})

$('#nextImg').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
})
