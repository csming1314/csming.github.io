/**
 * Created by Administrator on 2017/3/20.
 */

require(['config'],function () {

    require(['jquery','Common','cookie','ramdomyz'],function ($,com,cookie,ramdomyz) {

        $(function () {
            com.init();

            //点击注册button
            $('.login').click(function () {
                $('.name-prompt,.yz-prompt,.pwd1-prompt,.pwd2-prompt').html("");
                var name = $('.username').val();
                var yanzheng = $('.yanzheng').val();
                var pwd1 = $('.password1').val();
                var pwd2 = $('.password2').val();
                //判断是否有未输入的条件
                if(!name){
                    $('.name-prompt').html("*用户名不能为空！");
                    return;
                }else if(!yanzheng){
                    $('.yz-prompt').html("*验证码不能为空！");
                    return;
                }else if(!pwd1){
                    $('.pwd1-prompt').html("*密码不能为空！");
                    return;
                }else if(!pwd2){
                    $('.pwd2-prompt').html("*确认密码不能为空！");
                    return;
                }
                //判断验证码输入是否正确
                var yzNum = $('.yz-num').html().toLocaleLowerCase();
                var yz = $('.yanzheng').val().toLocaleLowerCase();
                if(yzNum !== yz){
                    $('.yz-prompt').html("验证码错误！请重新输入！");
                    return;
                }
                //判断2次密码是否一致
                if(pwd1 !== pwd2){
                    $('.pwd1-prompt,.pwd2-prompt').html("*二次输入的密码不一致！请重新输入！");
                    return;
                }
                //判断用户名和密码不能相等
                if(name == pwd1){
                    $('.name-prompt,.pwd1-prompt,.pwd2-prompt').html("用户名和密码不能一样！");
                    return;
                }
                //判断用户名密码，不能少于6位数
                if(name.length < 6){
                    $('.name-prompt').html("用户名长度不能小于6位！");
                    return;
                }else if(pwd1.length < 6 || pwd2.length < 6){
                    $('.pwd1-prompt,.pwd2-prompt').html("密码长度不能小于6位!");
                    return;
                }

                //取出之前注册过的用户名
                var usersStr = getCookie("registerUsers");
                //判断是否注册过
                usersStr = usersStr ? usersStr : "{}";
                //转化为对象循环遍历
                var usersObj = JSON.parse(usersStr);
                //判断是否存在
                if(name in usersObj){
                    $('.name-prompt').html("此用户名太受欢迎了！请重新输入！")
                }else {
                    usersObj[name] = pwd1;
                    usersStr = JSON.stringify(usersObj);
                    //保存在cookie中
                    setCookie("registerUsers",usersStr,7);
                    alert("注册成功!");
                    location.href = "http://localhost:63342/wbiao/login.html";
                }
            })

            //验证码随机
            ramdomyz.init();
            $('.yz-num').click(function () {
                ramdomyz.init();
            })
            

        })

    })

})