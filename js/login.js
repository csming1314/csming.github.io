/**
 * Created by Administrator on 2017/3/20.
 */
require(['config'],function () {

    require(['jquery','Common','cookie'],function ($,com,cookie) {

        $(function () {
            com.init();


            //点击 登录
            $('.denglu').click(function () {
                //获取用户名，密码
                var name = $('.username').val();
                var pwd = $('.password').val();
                //判断如果没有输入 则提醒
                if(!name && !pwd){
                    $('.name-prompt').html("亲！您还没有输入用户名……");
                    $('.pwd-prompt').html("亲！您还没有输入密码……")
                }else if(!name){
                    $('.name-prompt').html("亲！您还没有输入用户名……");
                }else if(!pwd){
                    $('.pwd-prompt').html("亲！您还没有输入密码……");
                }
                if(name && pwd){
                    $('.name-prompt').html("");
                    $('.pwd-prompt').html("")
                }else if(name){
                    $('.name-prompt').html("");
                }else if(pwd){
                    $('.pwd-prompt').html("");
                }

                //取出所有用户名密码信息
                var usersStr = getCookie("registerUsers");
                usersStr = usersStr ? usersStr : "{}";
                var usersObj = JSON.parse(usersStr);
                if(usersObj[name] === pwd){
                    // 如果登录成功，将用户名保存在cookie中
                    setCookie("loginedUser", name, 7);
                    location.href = "index.html";
                } else {
                    // 登录失败
                    $('.name-prompt,.pwd-prompt').html("用户名或密码错误！");
                }


            })


            //监听 name，pwd 有值输入 -> 删除提醒
            $('.username').keyup(function () {
                if($(this).val()){
                    $('.name-prompt').html("");
                }else {
                    $('.name-prompt').html("亲！您还没有输入用户名……");
                }
            })
            $('.password').keyup(function () {
                if($(this).val()){
                    $('.pwd-prompt').html("");
                }else {
                    $('.pwd-prompt').html("亲！您还没有输入密码……");
                }
            })



        })

    })

})