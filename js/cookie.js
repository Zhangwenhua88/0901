	/**
			 * key:键
			 * val:值
			 * t:过期时间
			 * bol:是否全局，默认只在当前目录下起作用
			 */
			function setCookie(key,val,t,bol=false){
				// console.log(key,val,t,bol)
				// document.cookie="pwd=123;expires=14;path=/"
				var date = new Date();
				date.setDate(date.getDate()+t);//设置日期为t天后的事件
				if(bol){
					document.cookie=key+"="+encodeURI(val)+";expires="+date+";path=/"
				}else{
					document.cookie=key+"="+encodeURI(val)+";expires="+date
				}
			}
			/**
			 * @param {Object} key 键
			 * 通过键找值
			 */
			function getCookie(key){
				//1.获取cookie
				var cookie = document.cookie
				//console.log(cookie)
				var cookieArr = cookie.split("; ");//注意这里有空格
				//console.log(cookieArr)
				for(var i = 0; i<cookieArr.length; i++){
					//console.log(cookieArr[i])
					var arr = cookieArr[i].split("=");
					if(arr[0]==key){
						return decodeURI(arr[1]);
					}
				}
			}
			// setCookie("a",10,7)
			// setCookie("b",20,14)
			
			function delCookie(key){
				setCookie(key,"",-1);
			}