function genup(url){
	$('#loadingDiv').css('display','block');  
	    $('#popup').slideDown();
            document.getElementById("loadingafram").src=url; 
	}
function gendown(){
	$('#loadingDiv').css('display','none'); 
	$('#popup').slideUp();
}
function genup1(){

$('#loadingDiv').css('display','block');  
    $('#popup').slideDown();
var data = "<iframe src='"+dizhi+"' width=100% height=100% frameborder=0></iframe>";
document.getElementById('loadingDiv').innerHTML=data;    
}
function gendown(){
$('#loadingDiv').css('display','none'); 
$('#popup').slideUp();
}
var fileURL='file:///android_asset/www/';
function f_deviceready() {
		//window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, gotFS, fail);// ��ѯ��ʱĿ¼,ֻ��Ŀǰ��˵ֻ�� Chrome�������FileSystem API֧�ֵıȽϺã�����ֻ��������Chrome������С�
		
		document.addEventListener('backbutton', function (){
			parent.f_goback();
			return 1;
		}
		
		, false); // ���ؼ� 			

//		console.log(navigator.notification);
//	    	window.alert = navigator.notification.alert;
//		window.confirm = navigator.notification.confirm;
//		window.prompt = navigator.notification.prompt;
}

function gotFS(fileSystem) {
	        fileSystem.root.getFile(audioRecord, {
	            create: true,
	            exclusive: false
	        }, gotFileEntry, fail);
	    }
	
	    function gotFileEntry(fileEntry) {
	        fileURL = fileEntry.toURL();
	        alert(fileURL);
}	

	// �Ŵ���ʾһ��ͼ����
	var _index = 0 ;
	function zoomimg(id)
	{
		document.all('div_img_popup').style.display='';
		document.all('div_img_show').style.display='';
		
		var obj = document.all(id);
		bigImg = obj.getAttribute('src');
		//alert(bigImg);
		//bigImg=$(this).attr("src");//��ȡ���ͼƬ�ĵ�ַ
		//alert(bigImg);
		 document.all("pupupimg").setAttribute("src",bigImg);
		//$(".show img.big").attr("src",bigImg); //������ͼ��ͼƬ��ַ
		resize();
		//_index=$(this).index();//����ͼƬ�����к�
		
	}
	function resize(){
		var obj = document.all("pupupimg");
		var imgw = obj.width;
		var imgh = obj.height;
		var screenw = $(window).width();
		var screenh = $(window).height();
		var imgleft = (screenw - imgw)/2;
		var imgtop = (screenh - imgh)/2;
		// ����
		//if(imgw>$(window).width){
			
		//}
		//else {
			document.all('div_img_show').style.left=""+imgleft+"px";
			document.all('div_img_show').style.top=imgtop+"px";
			document.all('pupupimg').style.left=""+imgleft+"px";
			document.all('pupupimg').style.top=imgtop+"px";



			//$(".show").css("left",""+imgleft+"px");
			//$(".show").css("top",imgtop+"px");
			//$(".left").css("left",""+(screenw/8-imgleft)+"px");
			//$(".left").css("top",(screenh/2-40/2-imgtop)+"px");
			//$(".right").css("left",""+(screenw - screenw/8-40-imgleft)+"px");
			//$(".right").css("top",(screenh/2-40/2-imgtop)+"px");
		//}
		
	}	
	
//	$(".right").click(function(){
//		_index++; //���кż�1 _index+1
//		if(_index>8){_index=0};
//		bigImg=$(".center img").eq(_index).attr("src");
//		$(".show img.big").attr("src",bigImg);
//		resize();
//	});
//	$(".left").click(function(){
//		_index--; //���кż�1 _index+1
//		if(_index<-1){_index=8};
//		bigImg=$(".center img").eq(_index).attr("src");
//		$(".show img.big").attr("src",bigImg);
//		resize();
//	});


    // ���� capture(50,1,0,-1,-1);
    // ��Ӱ capture(50,1,1,-1,-1);
    // ��ͼ��ѡ�� capture(100,0,0,-1,-1)
    // qua ������ 100;
    // src:=0 ͼƬ�� =1 ����ͷ =2 ���  
    // mtype = 0 ����  = 1 ���� =2 ȫ��
    // width height ���Ϊ-1��ʾȡ�����Ĭ�����ش�С
    function capture(qua,src,mtype,width,height) {  
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: qua,  destinationType:1,sourceType:src, targetWidth:width,targetHeight:height,encodingType:0,mediaType:mtype });

    }
    // Called when a photo is successfully retrieved  
    //  
    var G_TITLE = '';
    function onPhotoURISuccess(imageURI) {  		
		//appendMessage("<div ><img src='+imageURI+' width=120 height=120><div id='process_info'></div></div>",G_USRID,G_USRIMG,'right');
		G_TITLE = document.all('myroomname').innerHTML;
		uploadfile(imageURI,"image/jpeg");
    }  
    function onFail(message) {   
         log('Failed because: ' + message);  
    }  
	
    function captureAudio() {  
		document.all('addwnd').style.display='none';
		document.all('recordwnd').style.display='block';
    }  
            // ������¼����������
    	    var mediaRec;        //Ϊ���ڲ�ͬ�ĺ����ж�һ��¼�����ж��ֲ���������һ����������
            //��������������Ϊ�˼�¼�����ť֮����ָһ����ɵı仯
            var date1;
            var date2;
            var G_MP3FILE = '';
            //��ʼ¼��
            function start(){
                //����¼���ļ��������Ƽ�λ�ã�androidĬ�ϱ����ڸ�Ŀ¼��
                G_MP3FILE = fileURL+'/'+G_APP_USRID+'_'+new Date().valueOf()+'.mp3';//Android/data/
                var src = G_MP3FILE;
                //ʵ����¼����
                mediaRec = new Media(src,
                    // ¼��ִ�к���
                    function() {
                        console.log("start():Audio Success");
                    },
                    // ¼��ʧ��ִ�к���
                    function(err) {
                        console.log("start():Audio Error: "+ err.code);
                    }
                );
            }
             
            //Ϊ��ť��  touchstart(���) �¼�
            $("#luyin").on("touchstart",function(){
                //ʵ����¼����
                start();
                //��ʼ¼��
                mediaRec.startRecord();
                date1=new Date(); 
                $("#test").html("��ʼ¼��");
            });
             
            //Ϊ��ť�� touchmove(�����ƶ�) �¼�
            $("#luyin").on("touchmove",function(e){
                //����ܹؼ�����������ƶ���ִ������һ��������¼���ͻ���ֹ�����Դ˴���Ҫ��ֹ�ƶ���Ĭ�ϲ�����
                e.preventDefault();
                 
                //date3 =new Date();
                //$("#test").html("������"+(date3.getTime()-date1.getTime())/1000);
            });
            //Ϊ��ť�� touchend(�����뿪)�¼�
            $("#luyin").on("touchend",function(){
                //����¼��
                mediaRec.stopRecord();
                //�ͷ�ϵͳ�ײ����Ƶ������Դ
                mediaRec.release();
                //��Ҫ���ŵ�¼����·��
                var src = G_MP3FILE;
                //ʵ����¼����
                mediaRec = new Media(src,
                    // �ɹ�����
                    function() {
                        document.all('addwnd').style.display='block';
			document.all('recordwnd').style.display='none';
                    },
                    // ʧ�ܲ���
                    function(err) {
			$("#test").html("start():Audio Error: "+ err.code);
                        console.log("start():Audio Error: "+ err.code);
			document.all('addwnd').style.display='block';
			document.all('recordwnd').style.display='none';
                    }
                );
                //��html����ʾ��ǰ״̬          
                $("#test").html("ֹͣ¼��");
                //��ʼ����¼��
                mediaRec.play();
                //��html����ʾ��ǰ״̬
                $("#test").append("--��ʼ����¼��");
                mediaRec.release();
                uploadfile(G_MP3FILE,'audio/mp3');
            });
            //�ж����Ʋ�����û�б仯
            $("#luyin").on("touchcancel",function(e){
                date2 =new Date();
                $("#test").html("״̬�仯��"+e.type+(date2.getTime()-date1.getTime())/1000);
            });
            
    function uploadfile(fileName,mimeType)
    {
    		alert(fileName);
		var ft = new FileTransfer();
		var options = new FileUploadOptions();
		options.fileKey = "data";//ͼƬ����������
		if(fileName.indexOf('?')==-1){
			options.fileName = fileName;
		}else{
			options.fileName = fileName.substr(0,fileName.indexOf('?'));
		}
		
		 options.mimeType = mimeType;//
		 options.chunkedMode = false;
		 
		 var params = {};
		 params.fileurl = fileName;
		 params.grdid = "APP_IMGUPLOAD";
		 params.sytid = "x";
		 options.params = params;
		 if(mimeType=='audio/mp3')
		 	ft.upload(fileName, G_WEBBASE+"EAFormBlobUpload.sp?usrid="+G_APP_USRID+"&userpwd="+G_APP_USERPWD, onFileUploadAudioSuccess, onFileUploadFail, options);
		 else 
		 	ft.upload(fileName, G_WEBBASE+"EAFormBlobUpload.sp?usrid="+G_APP_USRID+"&userpwd="+G_APP_USERPWD, onFileUploadSuccess, onFileUploadFail, options);
		 ft.onprogress = uploadProcessing;

	}
	function onFileUploadSuccess(result)
	{
		
		if(G_TITLE=='')G_TITLE='&nbsp;';
		document.all('myroomname').innerHTML=G_TITLE ;
		var targeturl="EAFormBlob.sp?guid="+result.response+"&usrid"+G_APP_USRID+"&userpwd="+G_APP_USERPWD;
		//alert("<a href='"+targeturl+"' target=_blank> <img src="+targeturl+" width=120 height=120></a>");
		//appendMessage("<a href='"+targeturl+"' target=_blank> <img src="+targeturl+" width=120 height=120></a>",G_USRID,G_USRIMG,'right');

		var thisguid = G_APP_USRID+"_"+new Date().valueOf();			
		var msg = "<img id='"+thisguid+"' src="+targeturl+" style='width:120px;heigth:auto;' onclick=\"zoomimg('"+thisguid+"');\">";
		appendMessage(msg,G_USRID,G_USRIMG,'right');
		sendMsg(msg );
		//$('#process_info').html('ok'); 
	
	}
	// �����ļ��ϴ��ɹ�
	function onFileUploadAudioSuccess(result)
	{
		if(G_TITLE=='')G_TITLE='&nbsp;';
		document.all('myroomname').innerHTML=G_TITLE ;
		var targeturl="EAFormBlob.sp?guid="+result.response+"&usrid"+G_APP_USRID+"&userpwd="+G_APP_USERPWD;
		var msg = "<div style='font-size:40px;color:#009900;width:100%;' align=center class='glyphicon glyphicon-volume-up' onclick=\"alertaudio ('"+targeturl+"')\" ></div>";
		appendMessage(msg ,G_USRID,G_USRIMG,'right');

		sendMsg(msg );
		//$('#process_info').html('ok'); 
	
	}	
	function onFileUploadFail(error)
	{
		alert('�ļ��ϴ�����'+error.code);
		//sendMsg('onFileUploadFail'+error);
	}
	function uploadProcessing(progressEvent){
		if (progressEvent.lengthComputable) { 
			//�Ѿ��ϴ� 
			var loaded=progressEvent.loaded; 
			//�ļ��ܳ��� 
			var total=progressEvent.total; 
			//����ٷֱȣ�������ʾ������ 
			var 			percent=parseInt((loaded/total)*100); 
			//�����MB 
			loaded=(loaded/1024/1024).toFixed(2); 
			total=(total/1024/1024).toFixed(2); 
			document.all('myroomname').innerHTML='upload '+loaded+'/'+total+'M';
		}
	
	}
    
	function f_showaddwnd()
	{
		if(document.all('addwnd').style.display=='none'){
			document.all('addwnd').style.display='';
			document.all('bottomNav').style.height='120px';
		}
		else {
			document.all('addwnd').style.display='none';
			document.all('bottomNav').style.height='50px';
		}
		_resizeheight();
	}
	function f_hideaddwnd()
	{
		if(document.all('addwnd').style.display=='none'){
			
		}
		else {
			document.all('addwnd').style.display='none';
			document.all('bottomNav').style.height='50px';
			_resizeheight();
		}
		
	}

	var scrollseq=0;
	var type = '"+CHARTYP+"';
	// leftorright = left �Է� =right ����
	function appendMessage(msg,usrnam,usrimg,leftorright) {	// �ҷ�����
				scrollseq  ++;
				var rightorleft = 'right';
				if (leftorright=='right') rightorleft = 'left';
				var d = new Date();
				var tim=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
				var str = "";
				if(leftorright=='right')
					str='<li class="even" id="msg-'+scrollseq  +'">';
				else str='<li class="odd" id="msg-'+scrollseq  +'">';
				
				str=str+"<a class='user' href='#'><img class='img-responsive avatar_' src='http://chis.xmidware.com/xlsgrid/ROOT_CHIS/EAFormBlob.sp?guid="+usrimg+"' width=50 height=50 alt=''><span class='user-name'>"+usrnam+"</span></a>";
				str=str+'<div class="reply-content-box" align=lef style="float:'+leftorright+';margin:2px;">';
				str=str+'<span class="reply-time">'+tim+'</span>';
				str=str+'<div class="reply-content pr" >';
				str=str+'<span class="arrow"></span>';
				str=str+msg;
				str=str+' </div>';
				str=str+'  </div>';
				str=str+'    </li>';
				document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+str;
				document.getElementById("text").value="";
				$('#leftdiv').scrollTop(9999999);
			}
	
		
		
	var vidiovisible = false;
	var leftvisible = false;
	var G_USRID  = G_APP_USRID; var G_USRNAM = G_APP_USRNAM; var G_USRGUID = G_APP_USRGUID ;var G_USRIMG = G_APP_USRIMG; // ���˵��û���Ϣ
	var G_USRID1  = ""; var G_USRNAM1 = ""; var G_USRGUID1 = "" ; var G_USRIMG1 = ""; // �Է����û���Ϣ
	var G_USRROL = "0";//�����ҽ�������Ƿ������ˣ����Խ��ܶԷ�������
	var G_SHOWVIDIO=0;// =0 Ĭ�ϣ��ں�����ͬʱ��ʾ����=1 ֻ��ʾ΢�� =2 ֻ��ʾ��Ƶ

	function f_switchvideo()
	{
//			if(G_SHOWVIDIO==0)  G_SHOWVIDIO =1;
//			else if(G_SHOWVIDIO==1) G_SHOWVIDIO = 2;
//			else if(G_SHOWVIDIO==2){
//				if($(window).height()>$(window).width())//����,ֻ������ѡ��
//					G_SHOWVIDIO = 1;
//				else 
//					G_SHOWVIDIO = 0;
//			}		
//		_resizeheight();
		//$('window').scrollLeft(9999999);
		document.all('videos1').style.display='';
	}

	window.onresize=function()
	{
		_resizeheight();
	}
	function _resizeheight()
	{
		var zoneheight = ($(window).height()-110);
		document.all('mainpage').height=''+zoneheight +'px';
		document.all('mainzone').height=''+zoneheight +'px';
//
		var videohei = 0;
		if(SHOWVIDEO=='1'){ 
			document.getElementById('other1').style.height = 'auto';
			document.getElementById('other1').style.width = '50%';		
			document.getElementById('you1').style.height = 'auto';
			document.getElementById('you1').style.width = '50%';	
			
			if(document.getElementById('other1').offsetHeight>zoneheight /2){
				document.getElementById('other1').style.height = zoneheight /2+'px';
				document.getElementById('other1').style.width = 'auto';
			}
			if(document.getElementById('you1').offsetHeight>zoneheight /2){
				document.getElementById('you1').style.height = zoneheight /2+'px';
				document.getElementById('you1').style.width = 'auto';
			}			
			videohei  = document.getElementById('videos1').offsetHeight; 
			
		}
//		//if(""+RIGHTFRAMEURL+""==""){
//		//	videohei= 0 ;
//		//}
		document.all('leftdiv').style.height=''+($(window).height()-110-videohei)+'px';
		if(RIGHTFRAMEURL!="")
			document.all('leftdiv').style.width=''+($(window).width()/2)+'px';
		else document.all('leftdiv').style.width=''+$(window).width()+'px';

		//document.all('rightdiv').style.height=''+($(window).height()-110)+'px';
		document.all('lefttd').height=''+($(window).height()-110)+'px';
		//document.all('righttd').height=''+($(window).height()-110)+'px';
//		if($(window).height()*4/3>$(window).width()){//
//			document.all('leftdiv').style.width=''+($(window).width()-10)+'px';
//			document.all('rightdiv').style.width=''+($(window).width()-10)+'px';
//			document.all('lefttd').width=''+($(window).width()-10)+'px';
//			document.all('rightdiv').style.width = ''+($(window).width()-10)+'px';
//			document.all('righttd').width=''+($(window).width()-10)+'px';
//		}
//		else {
//			document.all('leftdiv').style.width=''+($(window).width()/2-6)+'px';
//			document.all('rightdiv').style.width=''+($(window).width()/2-6)+'px';
//			document.all('lefttd').width=''+($(window).width()/2-6)+'px';
//			document.all('righttd').width=''+($(window).width()/2-6)+'px';	
//			document.all('righttd').width=''+($(window).width()/2-6)+'px';
//
//		}
		//document.all('you1').style.position='absolute';
		//document.all('you1').style.width='25%';


/*
		if(G_SHOWVIDIO==0 ) {
			if($(window).height()>$(window).width()){//����
				document.all('leftdiv').style.width=''+($(window).width())+'px';
				document.all('rightdiv').style.width=''+($(window).width())+'px';
				document.all('lefttd').width=''+($(window).width())+'px';
				document.all('righttd').width=''+($(window).width())+'px';
			}
			else {
				document.all('leftdiv').style.width=''+($(window).width()/2)+'px';
				document.all('rightdiv').style.width=''+($(window).width()/2)+'px';
				document.all('lefttd').width=''+($(window).width()/2)+'px';
				document.all('righttd').width=''+($(window).width()/2)+'px';
			}
		}
		else if(G_SHOWVIDIO==1){//ֻ��ʾ΢��
			document.all('leftdiv').style.width=''+($(window).width())+'px';
			document.all('rightdiv').style.width='0px';
			document.all('lefttd').width=''+($(window).width())+'px';
			document.all('righttd').width='0px';
		}
		else {
			document.all('leftdiv').style.width='0px';
			document.all('rightdiv').style.width=''+($(window).width())+'px';
			document.all('lefttd').width='0px';
			document.all('righttd').width=''+($(window).width())+'px';

		}

		if($(window).height()>$(window).width()){//����.��Ƶ��Ϊ����
			document.all('you1').style.position='relative';
			document.all('you1').style.width='100%';
		}
		else {
			document.all('you1').style.position='absolute';
			document.all('you1').style.width='25%';

		}
*/
	}
	window.onbeforeunload  = function(event){
			if(confirm('���뿪'+TITLE+',�Ƿ����?')==1 ){
				socket.send(JSON.stringify({
						'EVENT': 'LOGIN',
						'GUID': G_USRGUID,
						'NAME': G_USRNAM,
						'ROOM': rooms,
						'ID'  : G_USRID,
						'IMG' : G_USRIMG,
						'ACTION' : 'CLOSE'
					}));
			}
		};
		
		
		var zxroom = '';
		var chartype = '"+CHARTYP+"';
		var zxrguid = GetLocationParam('ZXUSERID');
		var zxdoc = GetLocationParam('zxdoc');
		
		var rooms = GetLocationParam('room');
		var hzrguid = GetLocationParam('HZUSERID');
		var mora = GetLocationParam('mora');
		var hzdoc =GetLocationParam('hzdoc');
		
		var currentUid = G_APP_USRGUID;
		var currentId = G_APP_USRID;
		var currentuser = null;
		var order = GetLocationParam('orderid');
		
		var seq = 1;
		
		var callguid = '';
		$(document).ready(function() {
			_resizeheight();
			try{parent.hidebottommenu();}catch(e){}
			try{parent.hidetopmenu();}catch(e){}

			
			// �������usrid��userpwd�û���ִ��һ�ε�½
			
				var myusrid = GetLocationParam('usrid');
				var myuserpwd = GetLocationParam('userpwd');
				if(myusrid !=null&& myusrid !=''&&myuserpwd !=null&& myuserpwd !=''  ){
					$.get("rlogin.jsp?sytid=x&accid=0&usrid="+myusrid+"&userpwd="+myuserpwd, function(result){	
		     	        		result = result.trim(); 
		        			if(result.indexOf('��������,���¼������Ϣ,��ϵ�����̡�')>0){
		        				var pos1 = result.indexOf('<pre>');
		        				var pos2 = result.indexOf('</pre>');
		        			}
		        			else if(result.substring(0,5)=='<?xml'){
		        				var pos1 = result.indexOf('<TOPIC>');
		        				var pos2 = result.indexOf('</TOPIC>');
		        			}
		        			else {	// ��login�ķ�����Ϣ��  �ɹ���־~��ʾ��Ϣ~�û����~�û�����~�û�GUID~�û�IMGGUID~��ת��ҳ��
		        				// 0~��¼�ɹ�~xlsgrid~0~����Ա~BE34D90B76D2450AA67B6B66D6953FF2~16BE57BE7AC806DEE050007F01005DFF~
		        				var ss = result.split('~');
		        				if(ss.length>6){
		        					if(ss[0]=='0') {
		        						try{
		        							window.localStorage.setItem('XMIDWARE_APP_USRID',myusrid);
										window.localStorage.setItem('XMIDWARE_APP_USERPWD',myuserpwd);
										window.localStorage.setItem('XMIDWARE_APP_USRNAM',ss[4]);
										window.localStorage.setItem('XMIDWARE_APP_USRGUID',ss[5]);
										window.localStorage.setItem('XMIDWARE_APP_USRIMG',ss[6]);
										G_APP_USRID = myusrid;
										G_APP_USERPWD = myuserpwd;
										G_APP_USRIMG = ss[6];
										G_APP_USRGUID = ss[5];
										G_APP_USRNAM = ss[4];
										
									}catch(e){}
		        					}
		        				}
		        			}
					});
				}
			
			
			if(typeof WebSocket === 'undefined') {
				alert("��ǰ�������֧��websocket");
				return;
			}
			
			
			
			socket = new WebSocket("ws://114.80.114.43:8000/");
			
			
			socket.onopen = function(event) {
				if(rooms == '') {
					// ҽ���ˣ����co�ǿ�ֵ����ô����һ��room
					rooms = Math.round(Math.random()*100000000000);
					zxroom = rooms;
					
					appendMessage('����'+TITLE,G_APP_USRNAM,G_APP_USRIMG,'right');
//					var thisguid = G_APP_USRID+"_"+new Date().valueOf();
//					var targeturl = G_WEBBASE+"EAFormBlob.sp?guid=1B851C8017CB092CE050007F01001B0F";
//					var msg = "<img id='"+thisguid+"' src="+targeturl+" style='width:120px;heigth:auto;' onclick=\"zoomimg('"+thisguid+"');\">";
//					alert(msg );
//					appendMessage(msg,G_USRID,G_USRIMG,'right');
										
					if(chartype == '2') {
						G_USRID1 = zxrguid; 
						var url = '';
						if(zxdoc == 1) {
							
							url =G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=selChart&myguid="+currentUid+"&patguid="+zxrguid+"&org=CHIS&flg=2&typ=2&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
						} else {
							url =G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=selChart&myguid="+currentUid+"&docguid="+zxrguid+"&org=CHIS&flg=2&typ=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+""; 
						}
						$.get(url, function(result){
							result = result.replace(/\n/g,'');
							result = result.trim();
							var str = result.split('~')[0];
							var pagee = result.split('~')[1];
							if(pagee == undefined) pagee = '';
							
							console.log('��ѯ�Ự��'+str);
							if(str == 'no') {
								socket.send(JSON.stringify({
									'EVENT': 'ZAIXIAN',
									'MGUID': currentUid,
									'ROOM': rooms,
									'OGUID'  : zxrguid
								}));
								
								var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+rooms+"&myguid="+currentUid+"&docguid="+zxrguid+"&isdoc=&org=CHIS&flg=2&typ=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";

								$.get(url, function(result){
									console.log('��¼�Ự�ɹ�');
								});
								
							} else {
							
								document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+pagee;
								$('#leftdiv').scrollTop(9999999);
								zxroom = str;
								socket.send(JSON.stringify({
									'EVENT': 'ZAIXIAN',
									'MGUID': currentUid,
									'ROOM': str,
									'OGUID'  : zxrguid
								}));
							}
						});
						
					} else {
						var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=initRoom&room="+rooms+"&myguid="+currentUid+"&flg=1&org=CHIS&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
						$.get(url, function(result){
							result = result.replace(/\n/g,'');
							rooms = result.trim();
							console.log('���Ҵ����ɹ��������Ϊ'+result);
							socket.send(JSON.stringify({
								'EVENT': 'LOGIN',
								'GUID': currentUid,
								'NAME':G_USRNAM,
								'ROOM': result,
								'ACTION' : 'REQUEST',		 
								'PERTYP': 'DOC'
							}));
						});
					}
					// �޸ı���
					document.all('myroomname').innerHTML = G_APP_USRNAM+'��'+TITLE;
					G_USRROL = '1';
				} else {
					socket.send(JSON.stringify({
						'EVENT': 'LOGIN',
						'GUID': G_APP_USRGUID,
						'NAME': G_USRNAM,
						'ROOM': rooms,
						'ACTION' : 'REQUEST',
						'ID'  : G_USRID,
						'IMG' : G_USRIMG
					}));
					document.all('myroomname').innerHTML = G_USRNAM+'���ڵȴ�ҽ��ȷ��';
				}
			};
			
			socket.onmessage = function(event) {
				var mData = JSON.parse(event.data);
				if(mData && mData.event) {
					switch(mData.event) {
						case 'LOGIN':
						mData.uid = mData.uid.replace(/\n/g,'');
						mData.uid = mData.uid.trim();
						if(mData.uid == G_USRGUID){//�ų�����
						}
						else {
							var room = mData.room;
							room = room.replace(/\n/g,'');
							room = room.trim();
							
							rooms = rooms.replace(/\n/g,'');
							rooms = rooms.trim();
							if(room == rooms){
								if( mData.ACTION =='REQUEST'){
									if(G_USRROL=='1' && confirm(G_USRNAM+'����'+mData.NAME+'��������,�Ƿ�ȷ��')==1 ){
										G_USRNAM1 = mData.NAME;
										G_USRIMG1 = mData.IMG;
										G_USRGUID1 = mData.uid;
										
										// ����ȷ����Ϣ���߽��뷿����ˣ�����Խ����ˣ��Է����ȡҽ��������
										socket.send(JSON.stringify({
											'EVENT': 'LOGIN',
											'GUID': G_USRGUID,
											'NAME': G_USRNAM,
											'ROOM': rooms,
											'ID'  : G_USRID,
											'IMG' : G_USRIMG,
											'ACTION' : 'COMFIRM'
										}));
										
										var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=selChart&myguid="+currentUid+"&org=CHIS&flg=1&patguid="+mData.uid+"&typ=2&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
										G_USRID1 = mData.uid;
										$.get(url, function(result){
											result = result.replace(/\n/g,'');
											result = result.trim();
											
											var str = result.split('~')[0];
											var pagee = result.split('~')[1];
											if(pagee == undefined) pagee = '';
											
											console.log('��ѯ�Ự��'+str);
											if(str == 'no') {
												var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+rooms+"&myguid="+currentUid+"&org=CHIS&flg=1&patguid="+mData.uid+"&typ=1&isdoc=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
												$.get(url, function(result){
													console.log('��¼�Ự�ɹ�');
												});
											} else {
												document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+pagee;
												$('#leftdiv').scrollTop(9999999);
											}
										});
										
										appendMessage(G_USRNAM1+',����'+TITLE,G_USRNAM1,G_USRIMG1,'left');
										document.all('myroomname').innerHTML = G_USRNAM+TITLE+'-'+G_USRNAM1;	
										
										var frames=document.all('RIGHTFRAMEBL'); 
										var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_BL&funcid=preNo&sickguid="+G_USRGUID1+"&sickname="+G_USRNAM1+"&docname="+G_USRNAM+"&docguid="+G_USRGUID+"&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"&order="+order+"";
										$.get(url,function(result) {
											result = result.replace(/\n/g,'');
											result = result.trim();
											if(result!=""){
												var urlguid ="L.sp?grdid=CHIS_BL&guid="+result;
												frames.src=urlguid;
											}else{
											//����ǿվ��ڱ�ͷ�������ص�guid
											//frames.contentWindow.initSickBasc(G_USRGUID1);
											}
										});
 
									}
								}
								else if( mData.ACTION =='COMFIRM'){// �յ���½������ظ��ˣ���ȡҽ��������

									if( mData.ID !=  G_USRID) { 
										
										G_USRNAM1 = mData.NAME;
										G_USRIMG1 = mData.IMG;
										G_USRGUID1 = mData.GUID;
										
										var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=selChart&myguid="+currentUid+"&org=CHIS&flg=1&docguid="+mData.uid+"&typ=1&flg=1&isdoc=&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
										G_USRID1 = mData.uid;
										$.get(url, function(result){
											result = result.replace(/\n/g,'');
											result =result.trim();
											var str = result.split('~')[0];
											var pagee = result.split('~')[1];
											if(pagee == undefined) pagee = '';
											
											console.log('��ѯ�Ự��'+str);
											if(str == 'no') {
												alert('�����ұ�����');
												return;
											} else {
												document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+pagee;
												$('#leftdiv').scrollTop(9999999);
											}
										});
										
										document.all('myroomname').innerHTML = G_USRNAM1+'��'+TITLE+'-'+G_USRNAM;
									}
								}
								else if( mData.ACTION =='CLOSE'){// �յ���½������ظ��ˣ���ȡҽ��������

									appendMessage(G_USRNAM1+'�뿪'+TITLE,G_USRNAM1,G_USRIMG1,'left');

								}

							} else{
								return;
							}
							
						}
						break;
						
						case 'SPEAK':
						var content = mData.values;
						var newUser = mData.user;
						var uid = newUser.MGUID;
						var oid = newUser.OGUID;
						var zxsureroom = mData.room;
						var hzsureroom = mData.room;
						var isdoc = mData.ISDOC;
						zxsureroom= zxsureroom.replace(/\n/g,'');
						zxsureroom=zxsureroom.trim();
						hzsureroom = hzsureroom.replace(/\n/g,'');
						hzsureroom =hzsureroom.trim();
						
						if(zxsureroom == zxroom && chartype == '2') {
							if(uid != G_USRGUID) {
								appendMessage(content,newUser.NAME,newUser.IMG,'left');
							} else {
								if(isdoc == '1') {
									var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+zxsureroom+"&myguid="+uid+"&patguid="+oid+"&val="+content+"&isdoc=1&org=CHIS&flg=2&typ=2&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
								} else {
									var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+zxsureroom+"&myguid="+uid+"&docguid="+oid+"&val="+content+"&isdoc=&org=CHIS&flg=2&typ=2&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
								}
								$.get(url, function(result){
									console.log('��¼�Ự���ݳɹ�');
								});
							}
						}
						 
						if(hzsureroom == rooms && chartype != '2') {
							if(uid != G_USRGUID) {
								appendMessage(content,newUser.NAME,newUser.IMG,'left');
							} else {
								if(isdoc == '1') {
									
									var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+hzsureroom+"&docguid="+oid+"&myguid="+uid+"&org=CHIS&flg=1&typ=2&val="+content+"&isdoc=&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"&order="+order+"";
									
								} else {
									
									var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+hzsureroom+"&patguid="+oid+"&myguid="+uid+"&org=CHIS&flg=1&typ=2&val="+content+"&isdoc=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"&order="+order+"";
								}
								$.get(url, function(result){
									console.log('��¼�Ự���ݳɹ�');
								});
							}
						}
						break;
					}
				}
			};
		
		 
			
		function sendMsg(msg) {
			if(msg) {
				var currentuser = null;
				if(chartype == '2') {
					currentuser = {
						'MGUID': G_APP_USRGUID,
						'OGUID': zxrguid,
						'IMG': G_APP_USRIMG,
						'NAME':G_APP_USRNAM,
						'ACTION' : 'ZX'
					}
					
					socket.send(JSON.stringify({
						'EVENT': 'SPEAK',
						'USER': currentuser,
						'VALUES':msg,
						'ROOM': zxroom,
						'ISDOC': zxdoc
					}));
					
				} else {
					if(hzdoc == '1') {
						currentuser = {
							'MGUID': G_APP_USRGUID,
							'OGUID': hzrguid,
							'IMG':G_APP_USRIMG,
							'NAME':G_APP_USRNAM,
							'ACTION' : ''
						}
					} else {
						currentuser = {
							'MGUID': G_APP_USRGUID,
							'OGUID': callguid,
							'IMG':G_APP_USRIMG,
							'NAME':G_APP_USRNAM,
							'ACTION' : ''
						}
					}
					
					socket.send(JSON.stringify({
						'EVENT': 'SPEAK',
						'USER': currentuser,
						'VALUES':msg,
						'ROOM': rooms,
						'ISDOC':hzdoc
					}));
				}
				
			}
		};
		
		$("#send").click(function(event) {
			var value = $.trim($("#text").val());
			if(value!=''){
				sendMsg(value);
				appendMessage(value,G_APP_USRNAM,G_APP_USRIMG,'right');
			}
		});
		$("#text").keydown(function(event) {
			if(event.keyCode==13) {
				var value = $.trim($("#text").val());
				if(value!=''){
					sendMsg(value);
					appendMessage(value,G_USRNAM,G_USRIMG,'right');
				}
			}
		});
	});	
	
	
	function callNext(id,str) {
		if(callguid != '') {
			if(callguid != id) {
				alert('���Ƚ�����ǰ���߻���');
				return;
			}
		}
		document.all('myroomname').innerHTML = '���ں��л���......';
		$('#tt').attr('class', 'disabled');
		
		callguid = id;
		order = str;
		console.log('����:'+rooms);
		console.log('���У�'+id);
		rooms = rooms.replace(/\n/g,'');
		rooms = rooms.trim();
		socket.send(JSON.stringify({
			'EVENT': 'CALL',
			'MGUID': currentUid,
			'NAME': G_USRNAM,
			'OGUID': callguid,
			'ROOM': rooms,
			'ORDER':order
		}));
	}
	
	
	
	function getOver() {
		if(callguid != '') {
			var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=callNext&patguid="+callguid+"&myid="+G_APP_USRID+"&org=CHIS&mora="+mora+"&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
			$.get(url, function(result){
				console.log(callguid+'���߽���');
			});
			var node = document.getElementById(callguid);
			node.parentNode.removeChild(node);
			
			socket.send(JSON.stringify({
				'EVENT': 'ROOMOVER',
				'GUID': callguid
			}));
		}
		document.getElementById("list").innerHTML='';
	}		