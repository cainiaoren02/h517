// 背景动起来
var xyd = document.querySelector(".xyd-bg");
setInterval(function () {
	xyd.style.left = xyd.offsetLeft+1+"px";
	if (xyd.offsetLeft >= 0) {
		setTimeout(function () {
			xyd.style.left = -2020+"px";
		},40);
	}
},5);

// 云背景运动
var yun = document.querySelector(".yun-bg");
var t = 50;
var zhf = 2;
var oc = 0;
setInterval(function () {
	if(t <= 50){
		zhf=zhf*-1;
	}else if (t >= 70) {
		zhf=zhf*-1;
	}
	t-=zhf;
	yun.style.left = t+"px";
	yun.style.opacity = oc;
	oc+=0.1;
	if(oc >=1) {
		oc = 0;
	}
},200);


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