/*Auto close the navbar if butten have been pressed*/ 
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse;
});
/**/

/*Random image sortear*/
var image = new Array ();
  
image[0] = "billeder/html24-1.jpg";
image[1] = "billeder/html24-2.jpg";
image[2] = "billeder/html24-3.jpg";
image[3] = "billeder/html24-4.jpg";
image[4] = "billeder/html24-5.jpg";
image[5] = "billeder/html24-6.jpg";

var arry = image.length
var a = Math.floor(arry*Math.random());

$('#random').attr('src',image[a]);
document.getElementsByClassName("next").onclick = function(){next()};
document.getElementsByClassName("pre").onclick = function(){pre()};
console.log(a);

function next(a){
    a = Math.floor(arry*Math.random());
    $('#random').attr('src',image[a]);
    console.log(a);
}
function pre(a){
    a = Math.floor(arry*Math.random());
    $('#random').attr('src',image[a]);
    console.log(a);
}
/**/

$(function() {

    $(".text_search").each(function() {

        var textModal = $('.text_' + this.id),html = textModal.html();

        $(this).on("keyup", function() {

            var reg = new RegExp($(this).val() || "&fakeEntity;", 'gi');
            var x;
            textModal.html(html.replace(reg, function(str, index) {

                 x = html.slice(0, index+1),
                    lastLt = x.lastIndexOf("<"),
                    lastGt = x.lastIndexOf(">"),
                    lastAmp = x.lastIndexOf("&"),
                    lastSemi = x.lastIndexOf(";");

                if(lastLt > lastGt) return str;
                if(lastAmp > lastSemi) return str;
                return "<span class='highlight'>" + str + "</span>";
                

            }));
            $(function(){
                var CLS = document.getElementsByClassName("highlight");
                var Cnt = 0;
                for(i = 0; i< CLS.length; i++){
                    if(CLS[i].className =='highlight'){
                        Cnt++;
                        if(Cnt > 0){
                            $('#words').html("<p id='Show_words' class='Show_word_count'>"+Cnt+"</p>");
                        }
                    }
                }
                if(Cnt == 0){
                    $('#Show_words').removeClass('Show_word_count');
                    $('#Show_words').addClass('hide_word_count');
                }
                console.log(Cnt);
                $('p.collapse').each(function(){
                    var show = 0;
                    var Artc1 = 0;
                    var Artc2 = 0;
                    var Artc3 = 0;
                    if($('#collapseText1').find(".highlight").length > 0){
                        $('#Art_div1').addClass('hightlight_text');
                        $('#articel_div1').addClass('highlight_nav');
                        $('#Show_searched_word').addClass("highlight_nav_icon");
                        Artc1++;
                        show++;
                    }
                    if($('#collapseText2').find(".highlight").length > 0){
                        $('#Art_div2').addClass('hightlight_text');
                        $('#articel_div2').addClass('highlight_nav');
                        $('#Show_searched_word').addClass("highlight_nav_icon");
                        Artc2++;
                        show++;
                    }
                    if($('#collapseText3').find(".highlight").length > 0){
                        $('#Art_div3').addClass('hightlight_text');
                        $('#articel_div3').addClass('highlight_nav');
                        $('#Show_searched_word').addClass("highlight_nav_icon");
                        Artc3++;
                        show++;
                    }
                    if(show == 0){
                        $('#Show_searched_word').removeClass("highlight_nav_icon");
                    }
                    if(Artc1 == 0){
                        $('#articel_div1').removeClass('highlight_nav');
                    }
                    if(Artc2 == 0){
                        $('#articel_div2').removeClass('highlight_nav');
                    }
                    if(Artc3 == 0){
                        $('#articel_div3').removeClass('highlight_nav');
                    }
                });
            });
        });
    }); 
});