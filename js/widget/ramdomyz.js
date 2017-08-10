/**
 * Created by Administrator on 2017/3/21.
 */

define(['jquery'],function ($) {

    return{
        init:function () {

            $(function () {

                var dd = "";
                for(var i = 0; i < 4; i++){
                    var res = Math.random()*75 + 48;
                    if((res>=48 && res<=57) || (res>=65 && res<=90) || (res>=97 && res<=122)){
                        var result = String.fromCharCode(res);
                        dd += result;
                    }else{
                        i = i - 1;
                    }
                }
                $('.yz-num').html(dd);

            })

        }
    }

})