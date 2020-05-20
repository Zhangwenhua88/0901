// remstyle.js;
$(function(){
	 function setRem(){
        var clientWidth=$(window).width();//实时获取当前的窗口宽度
		//获取屏幕缩放的比例,找到现有的根部大小 
		//420是手机端设备的常用宽度
        var nowRem=(clientWidth*10/420);
        $("html,body").css("font-size",parseInt(nowRem)+"px");
    };
    setRem();

    var timer;
    $(window).bind("resize",function(){
        clearTimeout(timer)
        timer=setTimeout(function(){
            setRem();
        }, 100)
    })
});

