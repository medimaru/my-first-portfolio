// $(function (){
//        i=0;
//        $('.img').mouseenter(function(){
//               alert();
//                $('.msg').css('opacity','0').css('transform','scale(0)');i++;
//               $('#prsnT'+i).css('opacity','1').css('transform','scale(1)');
//                $('#prsnT'+i).css({'opacity': '0','transition': 'all 0.2s cubic-bezier(0, 0.53, 0.34, 1.5)','transform':' scale(0)','transform-origin': 'bottom left'});
//        });
// });
function prnsTS1(){
              $("#prsnT1").css('opacity','1');
              $("#prsnT1").css('transform','scale(1)');
              $("#prsnT3").css({'opacity': '0','transition': 'all 0.2s cubic-bezier(0, 0.53, 0.34, 1.5)','transform':' scale(0)','transform-origin': 'bottom left'});
}
function prnsTH1(){
              $("#prsnT1").css('opacity','0');
              $("#prsnT1").css('transform','scale(0)');
}
function prnsTS2(){
              $("#prsnT2").css('opacity','1');
              $("#prsnT2").css('transform','scale(1)');
              $("#prsnT3").css({'opacity': '0','transition': 'all 0.2s cubic-bezier(0, 0.53, 0.34, 1.5)','transform':' scale(0)','transform-origin': 'bottom left'});
}
function prnsTH2(){
              $("#prsnT2").css('opacity','0');
              $("#prsnT2").css('transform','scale(0)');
}
function prnsTS3(){
              $("#prsnT3").css('opacity','1');
              $("#prsnT3").css('transform','scale(1)');
}
function prnsTH3(){
              $("#prsnT3").css('opacity','0');
              $("#prsnT3").css('transform','scale(0)');
}
function prnsTS4(){
              $("#prsnT4").css('opacity','1');
              $("#prsnT4").css('transform','scale(1)');
              $("#prsnT3").css({'opacity': '0','transition': 'all 0.2s cubic-bezier(0, 0.53, 0.34, 1.5)','transform':' scale(0)','transform-origin': 'bottom left'});
}
function prnsTH4(){
              $("#prsnT4").css('opacity','0');
              $("#prsnT4").css('transform','scale(0)');
}
function prnsTS5(){
              $("#prsnT5").css('opacity','1');
              $("#prsnT5").css('transform','scale(1)');
              $("#prsnT3").css({'opacity': '0','transition': 'all 0.2s cubic-bezier(0, 0.53, 0.34, 1.5)','transform':' scale(0)','transform-origin': 'bottom left'});
}
function prnsTH5(){
              $("#prsnT5").css('opacity','0');
              $("#prsnT5").css('transform','scale(0)');
}

//for scrolling

$(window).scroll(function(){
       projectScroll();
});
function projectScroll(){
       var x=$(window).scrollTop();
       $('#imagesB').css('background-position','center -'+x+'px');
}
function forumH1(){
       $('.forum h1').text('FORUM');
       $('.forum h1').css({
              'background-color': 'white',
              'color':'black' ,
              'font-size': '90px',
              'font-family': 'Courier',
              'font-weight': 'bolder',
              'border-radius': '10px',
              'position': 'absolute',
              'right': '37%',
              'top': '-50px',
              'box-shadow': '0px 0px 5px #888888',
              'text-shadow': '0px 0px 1px #888888',
              'padding': '0 10px',
              'margin': '0px'
       });
}
function forumH1H(){
       $('.forum h1').text('F');
       $('.forum h1').css({
              'background-color': 'white',
              'color':'black' ,
              'font-size': '110px',
              'font-family': 'Courier',
              'font-weight': 'bolder',
              'border-radius': '10px',
              'position': 'absolute',
              'right': '45%',
              'top': '-67px',
              'border-radius': '50%',
              'box-shadow': '0px 0px 5px #888888',
              'text-shadow': '0px 0px 1px #888888',
              'padding': '10px 40px 10px 40px',
              'margin':' 0px',
       });
}
