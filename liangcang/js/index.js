
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
		var timer = setInterval(rightBtn, 500);
		$banners.mouseenter(function() {
			clearInterval(timer);
		});
		$banners.mouseleave(function() {
			timer = setInterval(rightBtn, 500)
		});

		$(".rightBtn").click(rightBtn);

		function rightBtn() {
			if ($tuP.is(":animated")) return;
			idx++;
			$tuP.animate({
				"left": -1000 * idx
			}, 2000, function() {
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
			}, 2000);
			changeCircle();
		});
		
		//设置圆的样式
		$circles.click(function() {
			idx = $(this).index();
			$tuP.animate({
				"left": -1000 * idx
			}, 2000);
			changeCircle();
		});

		function changeCircle() {
			var n = idx <= 7 ? idx : 0;
			$circles.eq(n).addClass("cur").siblings().removeClass("cur");
		}


		if(localStorage.username){
	  		var html=""
			$("#zhuxiao").css("display","block")
			$(".login1").css("color","white")
                          
			$(".login1").html('<a href="index0.html">'+localStorage.username+'</a>')

			console.log($(".login1"))
			}
	  	
			$.ajax({
				"url":" http://h6.duchengjiu.top/shop/api_goods.php?page=1&pagesize=21",
				type:"get",
				success:function(str){
					 console.log(str);
					 console.log(event.target)
					 for(var i = 0 ; i<str.data.length ; i++){
					 	$(".gooder").append(
					 		
					 		'<div class="item1"><div class="item_eye"><a href="#"><img src="'
				  					+str.data[i].goods_thumb+
							'" title= "岁月修护眼霜15ml | 浮肿黑眼圈皱纹松弛 一瓶到位" alt="岁月修护眼霜15ml | 浮肿黑眼圈皱纹松弛 一瓶到位"></a></div><a class="des" href="#='+str.data[i].goods_id+'"><p class="money">'
			  					+str.data[i].price+
			  					'</p><p class=  "sy">'
			  					
			  					+str.data[i].goods_desc+
			  					'</p><p class="desc">'
			  					+str.data[i].goods_name+
			  					'</p></a><div class="bar"><a class="who" href=""><img src="img/928.jpg" title="岁月修护眼霜15ml | 浮肿黑眼圈皱纹松弛 一瓶到位" alt="岁月修护眼霜15ml | 浮肿黑眼圈皱纹松弛 一瓶到位"/>Grown Alchemist</a><a href="" class="praise">706</a></div></div>'
					 		
					 	)
					 }
				}
			})
			

		var oDiv=document.getElementById("zhuxiao");
		oDiv.onclick=function(){
			localStorage.clear()
		}