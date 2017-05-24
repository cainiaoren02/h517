
var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP');
ajax.open('GET', 'json/imgUrlJpg.json', true);
ajax.send(null);
ajax.onreadystatechange = function () {
	if (ajax.readyState == 4) {
		if ((ajax.status >= 200 && ajax.status <= 206) || ajax.status == 304) {
			var data = JSON.parse(ajax.responseText);

			// 轮播
			for (var i = 6; i<12; i++) {
				$("<p/>").html('<a href="###"><img src="' + data[i].urlJpg + '"></a>').appendTo($('.juan'));
			}
			for (var j = 0; j<$(".juan p").length; j++) {
				$(".juan p").eq(j).css({marginLeft: j * $(".juan")/6 + "px"});
			}
			// 另加图
			$("<p/>").html('<a href="###"><img src="' + data[6].urlJpg + '"></a>').appendTo($('.juan'));
			setTimeout(function () {
				$(".lunbo").css("height", $(".juan p").height() + "px");
			},100);

			// 轮播下的精选图
			for (var i = 12; i<16; i++) {
				$("<li/>").html('<a href="###"><img src="' + data[i].urlJpg + '"></a>').appendTo($('.wrapJing ul'));
			}

			// 中部排版01
			for (var i = 16; i<24; i++) {
				$("<dl/>").html('<dt><img src="' + data[i].urlJpg + '"></dt><dd><p><span>海南金黄芒果</span><br/><span id="lihejia">￥565.08/22个</span></p><p><img src="images/gouwu.png" /></p></dd>').appendTo($('.wrap01Right'));
			}
			// 鼠标划过缩放img
			$('.wrap01 .wrap01Right dl dt').bind('mouseenter', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.2)','transition':'0.4s all'});
			}).bind('mouseleave', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.0)','transition':'0.4s all'});
			})

			// 中部排版02
			for (var i=25; i<35; i++) {
				$('<dl/>').html('<dt><img src="' + data[i].urlJpg + '"><p>新品</p></dt><dd><p><span>自然熟红心火龙果</span><br/><span id="lihejia">￥138/2斤</span></p><p><img src="images/gouwu.png" /></p></dd>').appendTo($('.wrap02'));
			}
			// 鼠标划过缩放img
			$('.wrap02 dl dt').bind('mouseenter', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.2)','transition':'0.4s all'});
			}).bind('mouseleave', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.0)','transition':'0.4s all'});
			})

			// 底部排版03
			for (var i=36; i<51; i++) {
				$("<dl/>").html('<dt><img src="' + data[i].urlJpg + '"><p>第二件9.9</p></dt><dd><p><span>新西兰牛脊骨</span><br/><span id="lihejia">￥39.90/500g</span></p><p><img src="images/gouwu.png" /></p></dd>').appendTo($(".wrap03"));
			}
			// 鼠标划过缩放img
			$('.wrap03 dl dt').bind('mouseenter', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.2)','transition':'0.4s all'});
			}).bind('mouseleave', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.0)','transition':'0.4s all'});
			})

			// 底部排版04
			for (var i=52; i<67; i++) {
				$("<dl/>").html('<dt><img src="' + data[i].urlJpg + '"></dt><dd><p><span>粽情一夏礼盒B</span><br/><span id="lihejia">￥137.53/礼盒</span></p><p><img src="images/gouwu.png" /></p></dd>').appendTo($(".wrap04"));
			}
			// 鼠标划过缩放img
			$('.wrap04 dl dt').bind('mouseenter', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.2)','transition':'0.4s all'});
			}).bind('mouseleave', 'img', function () {
				$(this).find('img').css({'transform':'scale(1.0)','transition':'0.4s all'});
			})

			// 底部微信图
			$(".zhong img").eq(0).attr("src", data[2].urlJpg);
			$(".zhong img").eq(1).attr("src", data[3].urlJpg);

			// 111111
			// for (var key in data) {
			// 	$('<ul/>').html('<li style="float:left"><img src="' + data[key].urlJpg + '"></li>').appendTo($('body'));
			// }
		}
	}
}


// 网购图标获取
$.ajax({
	url: 'json/imgUrlPng.json',
	type: 'get',
	dataType: 'json',
	success: function (data) {
		// console.log(data);
		// 电话图标和底部网购图标
		$('.dianhua img').attr('src', data[5].ImgPng);
		$('.wanggou img').attr('src', data[6].ImgPng);
		
		// 上部区域图标
		$('.h301 img').attr("src", data[11].ImgPng);

		// 中上部区域图标
		$('.h302 img').attr('src', data[12].ImgPng);

		// 中部区域图标
		$('.h303 img').attr('src', data[13].ImgPng);

		// 中下区域头部图标
		$('.h304 img').attr('src', data[14].ImgPng);

		// 脚部 png 组图
		$('.xiaoshou img').attr('src', data[7].ImgPng);
		for (var i in $('.xiaoshou')) {
			$('.xiaoshou img').eq(i).css('margin-top', -i*60 + 'px')
		}
		
		// 222222
		// for (var key in data) {
		// 	$('<img/>').attr("src", data[key].ImgPng).appendTo($('body'));
		// }
	},
	error: function (data) {
		console.log(data);
	}
});

// logo和工商图标获取
$.ajax({
	url: 'json/imgUrlGif_svg.json',
	type: 'get',
	dataType: 'json',
	success: function (data) {
		
		// logo图标
		// $('.logo img').attr('src', data[0].urlSvg);
		
		// 底部logo图标和工商图标
		$('.logo02 img').attr('src', data[0].urlSvg)
		$('.gongshang img').attr('src', data[1].urlGif);
	},
	error: function (data) {
		console.log(data);
	}
});

// 轮播计时器
var t = 0;
var time;
function autoPlay() {
	time = setInterval(function () {
		var a = $(".lunbo").width();
		$(".juan").css("left", -t*a+"px").css("transition","1s");
		t++;
		if (t>6) {
			t = 0;
			setTimeout(function () {
				$(".juan").css("left", -t*a+"px").css("transition","0s");
				t++;
			},1000);
		}
		$(".lunbo").css("height", $(".juan p").height() + "px");
	},3000);
}
autoPlay();

// 鼠标划上暂停和启动
$(".lunbo").mouseenter(function () {
	clearInterval(time);
}).mouseleave(function () {
	autoPlay();
});

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