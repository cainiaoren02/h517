
$.ajax({
	type: "get",
	url: "json/huiyuanzhongxin.json",
	dataType: "json",
	async: true,
	success: function (data) {
		// console.log(data);
		$(".tiantianhuiyuan").attr("src",data[0].img);
	},
	error: function () {
		console.log("错误！");
	}
})


//鼠标放上显示拿过消失
$('#shhai').mouseenter(function(){
	$('#dizhi').css('display','block');
	$('#shhai').css('background','#fff');
}).mouseleave(function(){
	$('#dizhi').css('display','none');
	$('#shhai').css('background','#ccc');
});
$('#dizhi').mouseenter(function(){
	$('#dizhi').css('display','block');
	$('.dizhi1').css('display','block');
	$('#shhai').css('background','#fff');
}).mouseleave(function() {
	$('#dizhi').css('display','none');
	$('#shhai').css('background','#ccc');
});

//果园公告
$('.guogao').mouseenter(function(){
	$('.guogao').css('background','#fff');
	$('.gong').css('display','block');
}).mouseleave(function() {
	$('.guogao').css('background','#ccc');
	$('.gong').css('display','none');
});

$('.gong').mouseenter(function() {
	$('.gong').css('display','block');
}).mouseleave(function() {
	$('.guogao').css('background','#ccc');
	$('.gong').css('display','none');
});


$('#shg').mouseenter(function() {
	$('#shg').css('background','#fff');
	$('.shouji').css('display','block');

}).mouseleave(function(){
	$('#shg').css('background','#ccc');
	$('.shouji').css('display','none');
});
$('.shouji').mouseenter(function() {
	$('#shg').css('background','#fff');
	$('.shouji').css('display','block');
}).mouseleave(function() {
	$('.shouji').css('display','none');
	$('#shg').css('background','#ccc');
});

// 侧边栏底部回顶部
$(".ce").click(function () {
	$(document).scrollTop(0);
});