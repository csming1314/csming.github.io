/**
 * Created by Administrator on 2017/3/15.
 */

define(['jquery'],function ($) {

    return{
        init:function () {

            $(function () {
                //top手机万表、服务专线鼠标经过color事件
                $('.changeColor').hover(function () {
                    $(this).css({background:'#fff',color:'#333'});
                },function () {
                    $('.top ul li:nth-child(1)>a').css({background:'#333',color:'#CCBEB8'});
                    $('.top ul li:nth-child(3)>a').css({background:'#333 url(img/line.png) no-repeat left center',color:'#CCBEB8'});
                });

                //手机万表鼠标经过事件
                $('.top ul li:nth-child(3)').hover(function () {
                    $('.erweima').show().stop().animate({height:'225px'},200,function () {
                        $(this).children('.new').children('span').show();
                    });
                },function () {
                    $('.erweima').children('.new').children('span').hide().end().end().animate({height:'0'},200,function () {
                        $(this).hide();
                    });
                });

                //手机万表 下拉切换
                $('.erweima span').hover(function () {
                    $('.erweima span').css({background:'#fafafa',color:'#333'});
                    $(this).css({background:'#333',color:'#fff'});
                },function () {
                    $(this).css({background:'#fafafa',color:'#333'});
                });
                $('.new1').mouseover(function () {
                    $('.erweima img').attr('src','img/new_1.jpg');
                })
                $('.new2').mouseover(function () {
                    $('.erweima img').attr('src','img/new_2.png');
                })
                //鼠标离开new 恢复默认样式
                $('.new').mouseout(function () {
                    $('.new1').css({background:'#333',color:'#fff'});
                    $('.erweima img').attr('src','img/new_1.jpg');
                })

                //服务专线 鼠标经过下拉 显示
                $('.top ul li:nth-child(1)').hover(function () {
                    $('.tel').show().stop().animate({height:'170px'},200);
                },function () {
                    $('.tel').stop().animate({height:'0'},200,function () {
                        $('.tel').hide();
                    });
                })



                //choose watch center  hover event
                $('.chooseWatch').css('height','0');
                $('.nav-list .nl:nth-child(1)').hover(function () {
                    $('.chooseWatch').show().stop().animate({height:'365px'},300);
                },function () {
                    $('.chooseWatch').stop().animate({height:'0'},300,function () {
                        $(this).hide();
                    });
                })


                //foot erweima mouseover event
                $('.foot-box3 .span1').each(function () {
                    $(this).mouseover(function () {
                        $(this).css({background:'#666',color:'#fff'}).siblings().css({background:'#ddd',color:'#666'});
                        if($(this).index() === 0){
                            $('.img1').show().next('.img2').hide();
                            $('.p1').show().next('.p2').hide();
                        }else {
                            $('.img2').show().prev('.img1').hide();
                            $('.p2').show().prev('.p1').hide();
                        }
                    })
                })
                $('.foot-box3 .span2').each(function () {
                    $(this).mouseover(function () {
                        $(this).css({background:'#666',color:'#fff'}).siblings().css({background:'#ddd',color:'#666'});
                        if($(this).index() === 0){
                            $('.img3').show().next('.img4').hide();
                            $('.p3').show().next('.p4').hide();
                        }else {
                            $('.img4').show().prev('.img3').hide();
                            $('.p4').show().prev('.p3').hide();
                        }
                    })
                })


                //xuanfu -> return top
                $('.xuanfu li:nth-child(4)').click(function () {
                    $('body,html').animate({scrollTop:'0'},500);
                })
                $('.xuanfu li:nth-child(4)').hover(function () {
                    $('.return').fadeIn(300);
                },function () {
                    $('.return').fadeOut(300);
                })
                //erweima
                $('.xuanfu li:nth-child(3)').hover(function () {
                    $(this).children('img').fadeIn(300);
                },function () {
                    $(this).children('img').fadeOut(300);
                })
                //jianyi
                $('.xuanfu li:nth-child(2)').hover(function () {
                    $('.jianyi').fadeIn(300);
                },function () {
                    $('.jianyi').fadeOut(300);
                })
                //shopcar
                $('.xuanfu li:nth-child(1)').hover(function () {
                    $('.shopcar').fadeIn(300);
                },function () {
                    $('.shopcar').fadeOut(300);
                })







            })

        }
    }
})