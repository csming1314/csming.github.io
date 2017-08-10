/**
 * Created by Administrator on 2017/3/15.
 */
require(['config'],function () {

    require(['jquery','Common','indexLunbo','mouseEnterImgChange','cookie'],function ($,com,indexLunbo,enterImg,cookie) {
        $(function () {
            com.init();
            indexLunbo.init();
            enterImg.init();


            //注册登录
            var usn = getCookie("loginedUser");
            if(usn){
                $('.nologin,.register').hide();
                $('.haslogin').show();
                $('.username').html("欢迎回来！"+usn);
            }else {
                $('.nologin,.register').show();
                $('.haslogin').hide();
                $('.username').html("");
            }
            //点击注销，移除登录cookie
            $('.logout').click(function () {
                removeCookie("loginedUser");
                location.href = "login.html";
            })



            //hot sale 轮播
            var i = -1;
            Lunbo();
            function Lunbo(){
                i++;
                if(i > 3){
                    i = 0;
                }
                $('.connet-main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                //nav跟着移动
                $('.connet-lunbo ul li').removeClass('li-style').eq(i).addClass('li-style');
            };

            var timer = setInterval(Lunbo,4000);
            //鼠标进入box。左右按钮显示，轮播暂停，移出轮播开始
            $('.connet-lunbo').hover(function(){
                $('.btn-l,.btn-r').show();
                clearInterval(timer);
            },function(){
                $('.btn-l,.btn-r').hide();
                timer = setInterval(Lunbo,4000);
            });

            //点击右btn
            $('.btn-r').click(function(){
                i++;
                $('.connet-main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                $('.connet-lunbo ul li').removeClass('li-style').eq(i).addClass('li-style');
                if(i > 3){
                    i = 0;
                    $('.connet-main a').eq(0).fadeIn(500).siblings().fadeOut(500);
                    $('.connet-lunbo ul li').removeClass('li-style').eq(0).addClass('li-style');
                }
            });

            //点击左btn
            $('.btn-l').click(function(){
                i--;
                $('.connet-main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                $('.connet-lunbo ul li').removeClass('li-style').eq(i).addClass('li-style');
                if(i < 0){
                    i = 3;
                }
            });

            //移动到点上切换图片
            $('.connet-lunbo ul li').mouseover(function () {
                var i = $(this).index();
                $('.connet-main a').eq(i).fadeIn(500).siblings().fadeOut(500);
                $('.connet-lunbo ul li').removeClass('li-style').eq(i).addClass('li-style');
            });



            //hot sale first produce style
            $('.first-product>img').hover(function () {
               $(this).animate({width:'250px',height:'250px'},500);
            },function () {
                $(this).animate({width:'240px',height:'240px'},500);
            });

            //hot sale produce style
            $('.product').hover(function () {
                $(this).children('img').stop().animate({top:'3px'},500);
            },function () {
                $(this).children('img').stop().animate({top:'20px'},500);
            })

            //hot sale footer produce style
            $('.connet-footer div').hover(function () {
                $(this).css({background:'#fff',border:'1px solid #B22424'}).children('span').show().siblings().hide();
            },function () {
                $(this).css({background:'none',border:'1px solid #fff'}).children('span').hide().siblings().show();
            })








        })
    })

})