$.ajax({
	url: "goods.json",
	success: function(res) {
		var local = window.localStorage;
		var arr = []
		for (attr in local) {
			//从所有本地存储中,过滤出购物车数据
			if (attr.indexOf("cart") != -1) {
				var info = JSON.parse(local.getItem(attr));
				var id = info.id;
				var obj = res.find(function(item) {
					return item.id == id;
				})
				obj.count = info.num;
				arr.push(obj) //{id,name,price,url,count}

			}
		}
		//根据购物车商品列表数据,显示购物车页面
		var str = ``
		arr.map(function(item) {
			str +=
				`
					<tr>
						<td>${item.id}</td>
						<td><img src=${item.url}></td>
						<td>${item.name}</td>
						<td>
							<button class="btn">-</button>
							<span class="sum">${item.count}</span>
							<button class="btn">+</button>
						</td>
						<td>${item.price}</td>
						<td><button goodsid=${item.id} class="del">删除</button></td>
					</tr>
				`
		})
		$("tbody").html(str);

		// 找到数量
		var sum = document.getElementsByClassName('sum');
		for (var i = 0; i < sum.length; i++) {
				seven(sum[i]);
		};
		function seven(sum){
			// +号
			var one=sum.nextElementSibling;
			// -号
			var two=sum.previousElementSibling;
			// 获得数量并且转成数字
			var three=parseInt(sum.innerText);
			// +号绑定事件
			one.onclick=function(){
				three++;
				sum.innerText=three;
			};
			// -号绑定事件
			two.onclick=function(){
				three--;
				if(three<=0){
					three=1;
				};
				sum.innerText=three;
			};
		};
		
		// 找到删除按钮
		var shanchu=document.getElementsByClassName('del');
		
		// 删除按钮绑定单击事件
		for(var i=0; i<shanchu.length; i++){
			shanchu[i].onclick=function(){
				var t=this.parentNode.parentNode //获取父级元素的父级元素
				var n=parseInt(t.firstElementChild.innerText) //获取t的第一个子级元素 id==序号 并且转化文本为数字
				var m="cart"+n //本地缓存的key
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				window.localStorage.removeItem(m);
			};
		};
	}
});
