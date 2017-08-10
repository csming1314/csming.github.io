/**
 * Created by Administrator on 2017/3/23.
 */
require(['config'],function () {

    require(['jquery', 'Common','cookie'], function ($, com,cookie) {

        $(function () {

            com.init();


            //取出cookie数据
            var jsonstr = getCookie('product');
            //console.log(jsonstr);
            var ul = $('<ul>');
            var shopInformation = $('.shop-information');

            //将之转化为JSON对象
            var arr = JSON.parse(jsonstr);
            //console.log(arr);

            for(var i = 0; i<arr.length; i++){
                var product = arr[i];
                console.log(product);
            }
            ul.html(
                '<li>'+
                    '<img src="'+product.pic+'" alt="">'+
                    '<p>'+product.name+'</p>'+
                '</li>'+
                '<li>'+product.oddprice+'</li>'+
                '<li>'+product.price+'</li>'+
                '<li>'+product.num+'</li>'+
                '<li><a href="javascript:;">删除</a></li>'
            );
            ul.appendTo(shopInformation);

        })

    })

})