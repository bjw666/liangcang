$("button").click(function(){
		var url = "http://h6.duchengjiu.top/shop/api_user.php";
		var data = {
			status: "login",
			username: $("#number").val(),
			password: $("#yanZheng").val()
		}
		$.post(url, data, function(obj) {
			console.log(obj);
			if (obj.code == 0) {
				alert("登陆成功!")
				localStorage.username=$("#number").val();
				console.log($("#number").val())
				window.location.href="index.html"
			}else{
				alert("用户名或密码输入错误!")
			}
		})
	})