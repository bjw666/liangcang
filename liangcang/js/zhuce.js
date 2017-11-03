	//手机用户名输入
	$("#number").change( function() { 
		var reg = /^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$/;
		var str = $("#number").val();
		if ( reg.test(str) == true ) {
			alert("输入成功！")
		} 
		else {
			alert("您输入了错误的手机号码！")
		}
   })
    //验证码输入
	
	$.idcode.setCode();
	$("#Txtidcode").change(function() {
		var r = $.idcode.validateCode();
		if (r == true) {
			alert("验证成功！")
		} else {
			alert("验证失败！")
		}
	})
	//密码和确认密码的判断
	$("#queRenMiMa").change(function(){
		if(  $("#chuangJianMiMa").val() != $("#queRenMiMa").val()  ){
			$("#chuangJianMiMa").val("") && $("#queRenMiMa").val("")
			alert("两次密码输入不一致，请重新输入！")
		}
	})
	//立即注册
	$("button").click(function(){
		if($.idcode.validateCode()==true){
			var url = "http://h6.duchengjiu.top/shop/api_user.php";
			var data = {
				status: "register",
				username: $("#number").val(),
				password: $("#queRenMiMa").val()
			}
			$.post(url, data, function(obj) {
				alert(obj.message);
			})
		}else{
			$("#Txtidcode").val("")
			alert("验证码输入错误，请重新输入！")
		}
	})