function phoneCheck(){  
	var str=document.getElementById("userid").value;
        	if(str==""){    
        		alert("�ֻ����벻��Ϊ�գ�");
		return false;
        	}  
        	if(str!=""){	    
        		var p1=/^((13[0-9])|(15[0-9])|(18[0-9])|(17[0-9]))[0-9]{8}$/;  
        		var	b=false;	    
        		if(p1.test(str)==b){		        
        			alert("�Բ�����������ֻ������д�����������ȷ���ֻ����롣");
        			return false;	    
        		}	    
        	}
	return true;  
}
//����������������Ƿ�һ��
function checkpass(){
	var pass=document.getElementById("password").value;
	var rpass=document.getElementById("repassword").value;
	if(pass==""){
		alert("���벻��Ϊ��");
		return false;
	}
	if(rpass==""){
		alert("�ظ����벻��Ϊ��");
		return false;
	}
	if(pass!=""&&rpass!=""&&pass!=rpass){
		alert("�����������벻һ�£���������룡");   
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