/**
 * Created by Administrator on 2017/3/17.
 */

define(['jquery'],function ($) {

    return{

        init:function () {

            $(function () {

                $('.icon').hover(function () {
                    console.log(1111);
                    $(this).children('img').stop().animate({width:'317px',height:'160px'},1000);
                },function () {
                    $(this).children('img').stop().animate({width:'297px',height:'150px'},1000);
                })

            })

        }

    }

})