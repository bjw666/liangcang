
		var oShopping = document.getElementById("shopping");
		var oShopping1 = document.getElementById("shoppingTwo");
		oShopping.onmouseover=function(){
			oShopping1.style.display = "block";
		}
		oShopping.onmouseout=function(){
			oShopping1.style.display = "none";
		}
//		轮播图
		var $banners = $(".banners");
		var $tuP = $(".tuP");
		var $img = $(".tuP li");
		var $circles = $(".circles ol li");
		$(".tuP ul").append($img.eq(0).clone()); //复制第一张图片
		var idx = 0;
		var timer = setInterval(rightBtn, 1000);
		$banners.mouseenter(function() {
			clearInterval(timer);
		});
		$banners.mouseleave(function() {
			timer = setInterval(rightBtn, 1000)
		});

		$(".rightBtn").click(rightBtn);

		function rightBtn() {
			if ($tuP.is(":animated")) return;
			idx++;
			$tuP.animate({
				"left": -1000 * idx
			}, 300, function() {
				if (idx > 7) {
					idx = 0;
					$tuP.css("left", 0);
				}
			});
			changeCircle()
		}
		
		$(".leftBtn").click(function() {

			if ($tuP.is(":animated"))
			return;
			idx--;
			if (idx < 0) {
				idx = 7;
				$tuP.css("left", 7 * 1000);
			}
			$tuP.animate({
				"left": -1000 * idx
			}, 300);
			changeCircle();
		});
		
		//设置圆的样式
		$circles.click(function() {
			idx = $(this).index();
			$tuP.animate({
				"left": -1000 * idx
			}, 300);
			changeCircle();
		});

		function changeCircle() {
			var n = idx <= 7 ? idx : 0;
			$circles.eq(n).addClass("cur").siblings().removeClass("cur");
		}
