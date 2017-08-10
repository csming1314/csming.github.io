/**
 * Created by Administrator on 2017/3/15.
 */

define(['jquery'],function ($) {

    return {
        init:function () {
            
            $(function () {

                var i = -1;
                Lunbo();
                function Lunbo(){
                    i++;
                    if(i > 7){
                        i = 0;
                    }
                    $('.main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                    //nav跟着移动
                    $('.lunbo-box ul li').removeClass('li-bg').eq(i).addClass('li-bg');
                };

                var timer = setInterval(Lunbo,4000);

                //鼠标进入box。左右按钮显示，轮播暂停，移出轮播开始
                $('.lunbo-box').hover(function(){
                    $('.btnleft,.btnright').show();
                    clearInterval(timer);
                },function(){
                    $('.btnleft,.btnright').hide();
                    timer = setInterval(Lunbo,4000);
                });

                //点击右btn
                $('.btnright').click(function(){
                    i++;
                    $('.main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                    $('.lunbo-box ul li').removeClass('li-bg').eq(i).addClass('li-bg');
                    if(i > 7){
                        i = 0;
                        $('.main a').eq(0).fadeIn(500).siblings().fadeOut(500);
                        $('.lunbo-box ul li').removeClass('li-bg').eq(0).addClass('li-bg');
                    }
                });

                //点击左btn
                $('.btnleft').click(function(){
                    i--;
                    $('.main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                    $('.lunbo-box ul li').removeClass('li-bg').eq(i).addClass('li-bg');
                    if(i < 0){
                        i = 7;
                    }
                });

                //移动到点上切换图片
                $('.lunbo-box ul li').mouseover(function () {
                    var i = $(this).index();
                    $('.main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                    $('.lunbo-box ul li').removeClass('li-bg').eq(i).addClass('li-bg');
                });




                //big-nav  ajax请求JSON数据
                $.getJSON("json/big-nav.json",function (res) {
                    console.log(res);
                    for(var i = 0; i < res.title.length; i++){
                        var tex = res.title[i];

                        //创建title
                        var bigNav = $('.big-nav');
                        var title = $('<div>').addClass('title').appendTo(bigNav);
                        $('<h3>').html(tex.tt).appendTo(title);

                        for(var j = 0; j < tex.brand.length; j++){
                            var tes = tex.brand[j];
                            var a = $('<a href="javascript:;"></a>');
                            a.html('<span>'+tes+'</span>').attr({'href':tex.hf[j],'target':'_blank'}).appendTo(title);
                        }
                    }

                    //二级菜单
                    for(var i = 0; i < res.xl.length;i++){

                        var pic = res.xl[i];

                        //创建xl-box
                        var bigNav = $('.big-nav');
                        var xlBox = $('<div>').addClass('xl-box');
                        xlBox.appendTo(bigNav);
                        //创建list-1,list-2,list-3  插入xl-box中
                        var list1 = $('<div>').addClass('list-1').appendTo(xlBox);
                        var list2 = $('<div>').addClass('list-2').appendTo(xlBox);
                        var list3 = $('<div>').addClass('list-3').appendTo(xlBox);
                        //list-1中创建 h4
                        var h4 = $('<h4>').html('顶级品牌>').appendTo(list1);
                        //list-2中创建 h4
                        var h4 = $('<h4>').html('精选推荐>').appendTo(list2);
                        //list-3中创建 h4
                        var h4 = $('<h4>').html('促销精选>').appendTo(list3);

                        //创建list-1-r,list-2-r,list-3-r
                        var list1r = $('<div>').addClass('list-1-r');
                        list1r.appendTo(list1);
                        var list2r = $('<div>').addClass('list-2-r');
                        list2r.appendTo(list2);
                        var list3r = $('<div>').addClass('list-3-r');
                        list3r.appendTo(list3);
                        //创建dl
                        for(var l = 0; l < pic.img.length; l++){
                            var dl = $('<dl>')
                            dl.appendTo(list1r);
                            var dt = $('<dt>');
                            dt.appendTo(dl);
                            var dd = $('<dd>');
                            dd.appendTo(dl);
                            //dt中的图
                            dt.html(pic.img[l]);
                            //dd中的字
                            dd.html(pic.name[l]);
                            //dl加链接
                            dl.wrap("<a href='"+pic.href[l]+"' target:_blank>");
                        };

                        //经过dl时候字体变色
                        $('.list-1-r dl').hover(function () {
                            $(this).children('dd').css('color','#000');
                        },function () {
                            $(this).children('dd').css('color','#666');
                        });

                        //list-2-r子模块a
                        for(var t = 0; t < pic.jx.length; t++){
                            //console.log(pic.jx[t]);
                            $('<a>').html(pic.jx[t]).appendTo(list2r);
                        };

                        //list-3-r子模块a
                        for(var y = 0; y < pic.cx.length; y++){
                            $('<a>').html(pic.cx[y]).appendTo(list3r);
                        };


                    }


                    //经过title显示xl-box
                    $('.title').each(function(){
                        $(this).mouseover(function () {
                            //console.log($(this).index());
                            $('.xl-box').hide().eq($(this).index()).show();
                        })
                    });
                    //离开title或xl-box  时 xl-box消失
                    $('.big-nav').mouseleave(function () {
                        $('.xl-box').hide();
                    });

                })















            })

        }
    }
    
})