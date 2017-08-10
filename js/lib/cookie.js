function removeCookie(name){
	setCookie(name, "", -1);
}

function setCookie(name, value, expiresdays){
	var exp = new Date(); // 创建一个以现在时间为准的如期对象
	// 将此如期设置为n天后的一个日期
	exp.setDate(exp.getDate() + expiresdays);
	// 获取该如期的gmt格式字符串
	var gmtStr = exp.toGMTString();
	// 设置cookie
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr;
}

function getCookie(name){
	// 访问document.cookie字符串获取本站点下所有cookie的信息
	var myCookie = document.cookie;
	// "test1=1234; test2=abcd; test3=qwer"
	var cookies = myCookie.split("; ");
	for(var i = 0; i < cookies.length; i++){
		var data = cookies[i].split('=');// ["test1", "1234"]
		if(data[0] === name){
			return decodeURIComponent(data[1]);
		}
	}
	
	// 如果查询不到对应name的cookie,那么返回一个空字符串
	return "";
}