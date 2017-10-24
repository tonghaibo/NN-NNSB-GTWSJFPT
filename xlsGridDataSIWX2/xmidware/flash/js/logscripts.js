
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
		
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});

function phoneCheck(str){  
	        	if(str==""){    
	        		alert("手机号码不能为空！");
	        	}  
	        	if(str!=""){	    
	        		var p1=/^(13[0-9]\d{8}|15[0-35-9]\d{8}|18[0-9]\{8}|14[57]\d{8})$/;  
	        		var	b=false;	    
	        		if(p1.test(str)==b){		        
	        			alert("对不起，您输入的手机号码有错误。请输入正确的手机号码。");		        
	        			return false;	    
	        		}	    
	        		return true;  
	        	}
	        }
	        //检查两次输入密码是否一样
			function checkpass(){
				var pass=$("password").value;
				var rpass=$("repassword").value;

				if(pass==rpass&&pass!=""&&rpass!=""){
					alert("密码输入正确！");   
				}else if(pass==""&&rpass==""){
					alert("密码不能为空");
					
				}else{
					alert("两次密码输入不一致，请从新输入！");
					$("repassword").value="";
				}
				
			}