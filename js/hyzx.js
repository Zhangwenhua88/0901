window.onload=function(){
	//获取存放用户名的标签
	var name=document.getElementsByClassName('nm')[0];
	//获取cookie
	var cookie=document.cookie;
	//可能有多个cookie，需要把cookie转为数组对象，方便遍历
	var cookieArr = cookie.split("; ");
	//声明一个变量用来存储获取到的用户名的值
	var myNameVul='';
	//遍历cookie数组
	for (var i=0;i<cookieArr.length;i++) {
		//把cookie数组里的键和值分开
		var arr=cookieArr[i].split("=");
		//判断当键等于myName时，获取myName的值
		if (arr[0]=='myName') {
			myNameVul=decodeURI(arr[1]);
		}
		if (arr[1]=='') {
			for (var i=0;i<7;i++) {
				var num=Math.floor(Math.random()*100000000);
				
			}
			myNameVul='用户'+num;
		}
	}
	//将获取到的值，给用户名标签
	name.innerText=myNameVul;
//end	
}
