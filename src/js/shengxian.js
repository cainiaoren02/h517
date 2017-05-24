// shengxian.js

$.ajax({
			tyoe:"get",
			url:"json/shengxian.json",
			async:true,
			dataType:'json',
			success:function(data) { 
				// console.log(data);
				
				for (var i in data) {
					// var lis = document.createElement('li');
					// $('<lis/>').html( "<img src="+data[i].img+"/><li>" +data[i].title+"</li>").appendTo($('#uls'));
					$('<li/>').html('<p>' + data[i].title +'</p><img src="' + data[i].img + '"/><span>' + data[i].jia +'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>' + data[i].gs +'</span>').appendTo($('#uls'));
					// console.log(data[0].img)
				}
			},
			error:function(err) {
				console.log('失败');
			}
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
	 		// $('.guogao').css('background','#fff');
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