//1.记住用户名的勾选
var bol = 1; //1选中 0不选中
$(".tup").click(function() {
	if (bol == 0) { //默认不选中,点击就会选中
		$(".img1").css("display", "none"); //不选中显示
		$(".img2").css("display", "block"); //选中显示
		bol = 1; //更改为选中状态
	} else { //默认选中,点击就会不选中
		$(".img1").css("display", "block")
		$(".img2").css("display", "none")
		bol = 0; //更改为不选中状态
	}
	setCookie("bol", bol); //点击勾选或不勾选,都需要cookie写入bol来记录勾选状态
})

//2.点击登录时,用户名和密码都写入cookie,因为需要在我的页面中获取用户名和密码
$(".dl").click(function() {
	var usermame = $("#btn").val();
	var pwd = $("#btn1").val();
	setCookie("myName", usermame)
	setCookie("pwd", pwd)
})

//3.再次进来时,判断上一次登录是否勾选了记住密码-cookie
//setCookie("bol",1)
//setCookie("bol",0)
//如果上一次勾选了,img2显示,用户名和密码显示 getCookie("bol")==1
//如果上一次没有勾选,img1显示,用户名和密码为空 getCookie("bol")==0
if (getCookie("bol") == 1) { //上次勾选了
	$("#btn").val(getCookie("myName"));
	$("#btn1").val(getCookie("pwd"));
	$(".img1").css("display", "none"); //不选中不显示
	$(".img2").css("display", "block"); //选中显示
	bol = 1; //更改为选中状态	
} else { //上次没有勾选,还会指bol不存在时的情况(首次进入时，没有选中)
	$("#btn").val("");
	$("#btn1").val("");
	$(".img1").css("display", "block"); //不选中显示
	$(".img2").css("display", "none"); //选中不显示
	bol = 0; //更改为不选中状态
}
