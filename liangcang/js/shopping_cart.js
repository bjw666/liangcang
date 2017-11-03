	var url = "http://h6.duchengjiu.top/shop/api_goods.php?page=5&pagesize=21"
		$.get(url,function(response){
			var data = response.data;
			var html="";
				for(var i=0;i<data.length;i++){
				html+="<li class='la'><div class ='buttom_pic'><img class='photo' src="
				+data[i].goods_thumb+
				"></div><a href = 'onething.html'><div class ='box'><span class='s_name' style = 'color:white' >"
				+data[i].goods_id+
				"</span><p class ='charge'>价格￥"
				+data[i].price+"</p><p class ='c_name'>"
				+data[i].goods_desc+
				"</p><p class='description'>"
				+data[i].goods_name+
				"</p></div></a></li>";
				$(".things").html(html);
			}							
		});