/**
 * Created by Administrator on 2017/3/20.
 */

define(['jquery'],function ($) {

    return{
        init:function () {

            $(function () {

                //mouseover pic-nav  -> pro-box(img).src change
                $('.pic img').each(function () {
                    $(this).mouseover(function () {
                        console.log($(this)[0].src);
                        $('.pro-box img,.pro-box-big img').attr("src",$(this)[0].src);
                    })
                })

                //mouseover pro-box -> pro-box-big show
                $('.pro-box,.pro-box-big').hover(function () {
                    $('.pro-box-big').show();
                },function () {
                    $('.pro-box-big').hide();
                })
                $('.pro-box-big').mousemove(function (event) {
                    var x = event.clientX;
                    var y = event.clientY;
                    //console.log(x,y);
                    $(this).children('img').css({left:-x+'px',top:-y+'px'});
                })


            })

        }
    }

})


/*
$(function () {

    //mouseover pic-nav  -> pro-box(img).src change
    $('.pic img').each(function () {
        $(this).mouseover(function () {
            var num = $(this).index() + 1;
            $('.pro-box img,.pro-box-big img').attr("src","img/pro-"+num+".jpg");
        })
    })

    //click btn-l,btn-r
    $('.btn-l').click(function () {
        var src = $('.pro-box img')[0].src;
        var srcs = src.split("-")[1];
        var srcss = srcs.split("")[0] - 1;
        //console.log(srcss);
        if(srcss == 0){
            srcss = 5;
        }
        $('.pro-box img').attr("src","img/pro-"+srcss+".jpg");
    })
    $('.btn-r').click(function () {
        var src = $('.pro-box img')[0].src;
        var srcs = src.split("-")[1];
        var srcss = parseInt(srcs.split("")[0]) + 1;
        console.log(srcss);
        if(srcss == 6){
            srcss = 1;
        }
        $('.pro-box img').attr("src","img/pro-"+srcss+".jpg");
    })

    //mouseover pro-box -> pro-box-big show
    $('.pro-box,.pro-box-big').hover(function () {
        $('.pro-box-big').show();
    },function () {
        $('.pro-box-big').hide();
    })
    $('.pro-box-big').mousemove(function (event) {
        var x = event.clientX;
        var y = event.clientY;
        console.log(x,y);
        $(this).children('img').css({left:-x+'px',top:-y+'px'});
    })


})*/
