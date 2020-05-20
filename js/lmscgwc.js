// 选项图片切换
$('.img1').click(function() {
	if ($(this).attr('src') == 'img/check1.png') {
		$(this).attr('src', 'img/check2.png')
	} else {
		$(this).attr('src', 'img/check1.png')
	}
});
