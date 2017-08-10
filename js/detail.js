/**
 * Created by Administrator on 2017/3/20.
 */
require(['config'],function () {

    require(['jquery','Common','magnifier','cookie'],function ($,com,magnifier,cookie) {

        $(function () {
            com.init();
            magnifier.init();


            //click i like
            $('.pro-foot a:nth-child(2)').click(function () {
                alert("喜欢成功!");
                var num = 0;
                num += 1;
                $(this).children('span').html(num);
                num = 1;
            })


            //购买数量+ -
            var z = 1;
            $('.jia').click(function () {
                z += 1;
                $('.num').html(z);
            })
            $('.jian').click(function () {
                //console.log(z);
                z -= 1;
                if(z < 1){
                    z = 1;
                }
                $('.num').html(z);
            })


            //点击商品展示 nav部分 切换
            $('.bnav').each(function () {
                $(this).click(function () {
                    $(this).css({"background":"#fff","border-top":"1px solid #b00000"}).siblings()
                        .css({"background":"#f2f2f2","border-top":"none"});
                    $('.pro-nr').eq($(this).index()).show().siblings().hide();
                })
            })


            //auto detail
            // console.log(location.search);
            // console.log(location.search.split('='))
            var pid = location.search.split('=')[1];
            var purl = 'json/'+pid +'.json';
            $.getJSON(purl,function (res) {
                //console.log(res.title);
                var proRight = $('.pro-right');

                //设置图片在json中的引用位置
                $('.pro-box img').attr("src",res.pic[0]);
                $('.pro-box-big img').attr("src",res.pic[0]);
                $('.pic img:nth-child(1)').attr("src",res.pic[0]);
                $('.pic img:nth-child(2)').attr("src",res.pic[1]);
                $('.pic img:nth-child(3)').attr("src",res.pic[2]);
                $('.pic img:nth-child(4)').attr("src",res.pic[3]);
                $('.pic img:nth-child(5)').attr("src",res.pic[4]);


                //放大镜下左右按钮
                $('.btn-l').click(function () {
                    //获取当前i的值（大图显示的是第几张）
                    var i;
                    var src = $('.pro-box img')[0].src;
                    for(var j =0; j< res.pic.length; j++){
                        if(src == res.pic[j]){
                            i = j;
                        }
                    }
                    i--;
                    if(i<0){
                        i = 4;
                    }
                    $('.pro-box img').attr("src",res.pic[i]);
                })
                $('.btn-r').click(function () {
                    var i;
                    var src = $('.pro-box img')[0].src;
                    for(var j =0; j< res.pic.length; j++){
                        if(src == res.pic[j]){
                            i = j;
                        }
                    }
                    i++;
                    if(i>4){
                        i = 0;
                    }
                    $('.pro-box img').attr("src",res.pic[i]);
                })


                proRight.html('<h1>'+res.title+'</h1>'+
                '<span>型号：'+res.model+'</span>'+
                '<span>编号:'+res.number+'</span>'+
                '<span>品牌:'+res.brand+'</span>'+
                '<p>'+res.ad+'</p>'+
                '<div class="line"></div>'+
                    '<h5>万表价 <span class="price">'+res.price+'</span> <span class="odd-price">'+res.oddprice+'</span> <span>| '+res.discount+'</span></h5>'+
                '<h5>优惠'+
                '<span class="youhui">'+res.youhui+'</span>'+
                '<a href="#" class="click">点击咨询，领取优惠>></a>'+
                '</h5>'+
                '<h5>配送至 <span class="peisong">中国大陆包邮，下单后16：45前支付</span>'+
                '<span class="peisong-time">1-3个工作日到达，支持货到付款</span>'+
                '</h5><br>'+
                '<h5 class="ks">款式'+
                    '</h5>'
                    );

                //var ks = $('.ks');
                for(var i = 0; i < res.style.length; i++){
                    $('<img>').attr("src",res.style[i]).appendTo($('.ks'));
                }



                //换一批自动生成
                $('.endBuy-content1').html(
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[0]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[0]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[0]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[1]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[1]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[1]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[2]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[2]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[2]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[3]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[3]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[3]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[4]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[4]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[4]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[5]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[5]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[5]+'</dd>'+
                    '</dl>'
                );
                $('.endBuy-content2').html(
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[6]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[6]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[6]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[7]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[7]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[7]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[8]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[8]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[8]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[9]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[9]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[9]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[10]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[10]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[10]+'</dd>'+
                    '</dl>'+
                    '<dl>'+
                    '<dt><img src="'+res.endbuypic[11]+'" alt=""></dt>'+
                    '<dd>'+res.endbuytitle[11]+'</dd>'+
                    '<dd class="red">'+res.endbuymonney[11]+'</dd>'+
                    '</dl>'
                );



            })


            //click 换一批
            var huan = -1;
            $('.endBuy p').click(function () {
                huan *= -1;
                if(huan == -1){
                    $('.endBuy-content2').show().prev().hide();
                }else {
                    $('.endBuy-content1').show().next().hide();
                }
            })

    
            //购物车
            $('.buy').click(function () {

                //获取商品信息
                var pic = $('.ks img')[0].src;
                var name = $('.pro-right>h1').html();
                //name = encodeURIComponent(name);
                var oddprice = $('.odd-price').html();
                var price = $('.price').html();
                var num = $('.num').text();

                //创建商品对象
                var proObj = new products(pic,name,oddprice,price,num);

                //判断是否是第一次加入
                var tem = getCookie('product');
                console.log(tem == undefined);
                if(tem == false){
                    var arr = [];
                    arr.push(proObj);
                    var arrstr = JSON.stringify(arr);
                    setCookie('product',arrstr,7);
                }else{
                    var arr1 = JSON.parse(tem);
                    arr1.push(proObj);
                    var arr1str = JSON.stringify(arr1);
                    setCookie('product',arr1str,7);
                }

            });
            function products(pic,name,oddprice,price,num) {
                this.pic = pic;
                this.name = name;
                this.oddprice = oddprice;
                this.price = price;
                this.num = num;
            };



        })

    })

})