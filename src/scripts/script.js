$(function() {                           
    $('.add-shout a').click(function(){
        $('.shoutbox-in').addClass('hide');
        $('.add-message').addClass('active');
        return false;
    });    
    
    $('.menu-mobile').click(function(){
        $('.menu ul.main').toggle('');
        return false;
    });
    
    $('.menu ul li').click(function(){
        $(this).children('.menu ul li ul').toggleClass('mobile-active');
    });
    
    var tooltips = $( "[title]" ).tooltip({});

});


$(function(){
    $("input[name=search1]").keyup(function(){
        var minlength = 2;
        var fraza = $(this).val(); 
        //var $wrapper = $('.addons');
        fraza = $.trim(fraza); 
        fraza = encodeURI(fraza);
        
        if (fraza.length >= minlength ) {
            $('.result').load('/search' + '?search1='+fraza+' .search-content').show();
            $('input[name=search1]').addClass('active');
            $('.addons').hide('');
            //$wrapper.detach();
        }
        if ($(this).val() == '') {
            $('input[name=search1]').removeClass('active');
            $('.result').hide();
            $('.addons').show('');
            //$wrapper.insertAfter('.result');
        }
    });
});


eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(s(){i p=k.h.f(\'/g-j/q/\');i n=k.h.f(\'/g-j/r/\');i o=k.h.f(\'/g-j/t/\');l(p[1]){0\'8\':$("#3 .8").4(\'5\');2;0\'7\':$("#3 .7").4(\'5\');2;0\'6\':$("#3 .6").4(\'5\');2;0\'a\':$("#3 .a").4(\'5\');2;0\'9\':$("#3 .9").4(\'5\');2;0\'e\':$("#3 .e").4(\'5\');2;0\'c\':$("#3 .c").4(\'5\');2;0\'d\':$("#3 .d").4(\'5\');2;0\'b\':$("#3 .b").4(\'5\');2}l(n[1]){0\'8\':$("#3 .8").4(\'5\');2;0\'7\':$("#3 .7").4(\'5\');2;0\'6\':$("#3 .6").4(\'5\');2;0\'a\':$("#3 .a").4(\'5\');2;0\'9\':$("#3 .9").4(\'5\');2;0\'e\':$("#3 .e").4(\'5\');2;0\'c\':$("#3 .c").4(\'5\');2;0\'d\':$("#3 .d").4(\'5\');2;0\'b\':$("#3 .b").4(\'5\');2}l(o[1]){0\'m\':$("#3 .m").4(\'5\');2;0\'8\':$("#3 .8").4(\'5\');2;0\'7\':$("#3 .7").4(\'5\');2;0\'6\':$("#3 .6").4(\'5\');2;0\'a\':$("#3 .a").4(\'5\');2;0\'9\':$("#3 .9").4(\'5\');2;0\'e\':$("#3 .e").4(\'5\');2;0\'c\':$("#3 .c").4(\'5\');2;0\'d\':$("#3 .d").4(\'5\');2;0\'b\':$("#3 .b").4(\'5\');2}});',30,30,'case||break|ClassListTop|addClass|active|mage|hunter|druid|priest|paladin|warrior|shaman|warlock|rogue|split|talent|pathname|var|calculators|location|switch|deathknight|pathnameArrCLASSIC|pathnameArrWOTLK|pathnameArrTBC|tbc|classic|function|wotlk'.split('|'),0,{}))