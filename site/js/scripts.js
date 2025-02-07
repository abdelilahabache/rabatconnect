include("js/jquery.color.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/uScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/forms.js");
include("js/MathUtils.js");
include("js/gallery.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, content, h;

function addAllListeners() {
    $('.soc_icons>li>a').hover(
        function(){
        	$('img', this).stop().animate({'marginTop':'-8px'},300,'easeOutExpo');  
        },
        function(){
            $('img', this).stop().animate({'marginTop':0},600,'easeOutCubic');  
        }
    ); 
    $('.list2>li>a').hover(
        function(){
        	$('span',this).stop().animate({'width':'100%'},300,'easeOutExpo');  
        },
        function(){
            $('span',this).stop().animate({'width':'0'},600,'easeOutCubic');  
        }
    ); 
	$('.list1>li>figure>a, .list3>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    var val1 = $('.readMore').css('color')
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#7fc4d9'},400,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},700,'easeOutCubic');  
        }
    ); 
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    /*SUPERFISH MENU*/
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    $("#galleryHolder").gallerySplash({
        autoPlayState:'false'
    }); 
    
    $('.scroll')
	.uScroll({			
		mousewheel:true,
        step: 100
	});
    
	$('.list1>li>figure>a').attr('rel','appendix')
	$('.list3>li>a').attr('rel','appendix2')
    $('.list1>li>figure>a, .list3>li>a')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    .fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });

    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'display':'none'});		
        },
        actFu:function(_){            
            if(_.curr){                
                h = parseInt( _.curr.outerHeight(true));
                $(window).trigger('resize');
                
                _.curr
                    .css({'left':'-2000px','display':'block'}).stop(true).delay(200).show().animate({'left':'0px'},{duration:1000,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'display':'none'});
                            }
                        }
		              });
            }            
  		}
    });
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_home',
        hoverIn:function(li){
            $('>a>strong',li).stop().animate({'height':'100%','top':'0'},500,'easeOutExpo');
            $('>a>span',li).stop().animate({'height':'0'},300,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>strong',li).stop().animate({'height':'0','top':'100%'},600,'easeOutCubic');
                $('>a>span',li).stop().animate({'height':'100%'},700,'easeOutCubic');
            }
        }
    })
    .navs(function(n,_){
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
    
    setTimeout(function(){
        $('body').css({'overflow':'visible'});
        $(window).trigger('resize');    
    },300); 
    
    addAllListeners();
}

$(window).resize(function (){
    if (content) {
        content.stop().animate({'top':(windowH()-h)*.5-150},500,'easeOutCubic')
    }
});
content=$('#content')