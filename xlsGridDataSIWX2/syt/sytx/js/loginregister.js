function phoneCheck(){  
	var str=document.getElementById("userid").value;
        	if(str==""){    
        		alert("手机号码不能为空！");
		return false;
        	}  
        	if(str!=""){	    
        		var p1=/^((13[0-9])|(15[0-9])|(18[0-9])|(17[0-9]))[0-9]{8}$/;  
        		var	b=false;	    
        		if(p1.test(str)==b){		        
        			alert("对不起，您输入的手机号码有错误。请输入正确的手机号码。");
        			return false;	    
        		}	    
        	}
	return true;  
}
//检查两次输入密码是否一样
function checkpass(){
	var pass=document.getElementById("password").value;
	var rpass=document.getElementById("repassword").value;
	if(pass==""){
		alert("密码不能为空");
		return false;
	}
	if(rpass==""){
		alert("重复密码不能为空");
		return false;
	}
	if(pass!=""&&rpass!=""&&pass!=rpass){
		alert("两次密码输入不一致，请从新输入！");   
		return false;
	}
	return true;
}
function savesubmit(){
	var phon=phoneCheck();

	if(phon){
		var chk=checkpass();
		if(chk){
			var ckbx=document.getElementById("ckbx").checked;
			if(ckbx==true){
				var f = document.forms[0];
				 f.action = "L.sp?osp=YXIMAGES_loginregister_register";
				 f.submit();
			}
		}
	}
}