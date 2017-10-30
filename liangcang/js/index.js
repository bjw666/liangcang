
		var oShopping = document.getElementById("shopping");
		var oShopping1 = document.getElementById("shoppingTwo");
		oShopping.onmouseover=function(){
			oShopping1.style.display = "block";
		}
		oShopping.onmouseout=function(){
			oShopping1.style.display = "none";
		}
		
		
		
		var w = $("#m_unit ul li").innerWidth();

		$("#rightBtn").click(function() {
			move();
		});

		setInterval(move, 2000);
		var i = 0;
		function move() {
			if ($("#m_unit").is(":animated")) {
				return ; 
			}
			i++;
			$("#m_unit").animate({"left": -i*w}, 1000, function() {
				console.log(i)
				if (i >= 8) {
					i = 0; 
					$("#m_unit").css({"left": 0});
				}
				$(".circles ol li").removeClass("current");
				$(".circles ol li").eq(i).addClass("current");
			});
		}
