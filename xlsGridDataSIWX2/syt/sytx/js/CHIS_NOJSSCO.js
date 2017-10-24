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
		//window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, gotFS, fail);// 查询临时目录,只是目前来说只有 Chrome浏览器对FileSystem API支持的比较好，所以只能运行在Chrome浏览器中。
		
		document.addEventListener('backbutton', function (){
			parent.f_goback();
			return 1;
		}
		
		, false); // 返回键 			

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

	// 放大显示一个图拍呢
	var _index = 0 ;
	function zoomimg(id)
	{
		document.all('div_img_popup').style.display='';
		document.all('div_img_show').style.display='';
		
		var obj = document.all(id);
		bigImg = obj.getAttribute('src');
		//alert(bigImg);
		//bigImg=$(this).attr("src");//获取点击图片的地址
		//alert(bigImg);
		 document.all("pupupimg").setAttribute("src",bigImg);
		//$(".show img.big").attr("src",bigImg); //更换大图的图片地址
		resize();
		//_index=$(this).index();//保存图片的序列号
		
	}
	function resize(){
		var obj = document.all("pupupimg");
		var imgw = obj.width;
		var imgh = obj.height;
		var screenw = $(window).width();
		var screenh = $(window).height();
		var imgleft = (screenw - imgw)/2;
		var imgtop = (screenh - imgh)/2;
		// 居中
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
//		_index++; //序列号加1 _index+1
//		if(_index>8){_index=0};
//		bigImg=$(".center img").eq(_index).attr("src");
//		$(".show img.big").attr("src",bigImg);
//		resize();
//	});
//	$(".left").click(function(){
//		_index--; //序列号加1 _index+1
//		if(_index<-1){_index=8};
//		bigImg=$(".center img").eq(_index).attr("src");
//		$(".show img.big").attr("src",bigImg);
//		resize();
//	});


    // 拍照 capture(50,1,0,-1,-1);
    // 摄影 capture(50,1,1,-1,-1);
    // 从图库选择 capture(100,0,0,-1,-1)
    // qua 清晰度 100;
    // src:=0 图片库 =1 摄像头 =2 相册  
    // mtype = 0 照相  = 1 摄像 =2 全部
    // width height 如果为-1表示取照相机默认像素大小
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
            // 以下是录制语音程序
    	    var mediaRec;        //为了在不同的函数中对一次录音进行多种操作，定义一个公共变量
            //下面两个变量是为了记录点击按钮之后手指一动造成的变化
            var date1;
            var date2;
            var G_MP3FILE = '';
            //开始录音
            function start(){
                //定义录音文件保存名称及位置（android默认保存在根目录）
                G_MP3FILE = fileURL+'/'+G_APP_USRID+'_'+new Date().valueOf()+'.mp3';//Android/data/
                var src = G_MP3FILE;
                //实例化录音类
                mediaRec = new Media(src,
                    // 录音执行函数
                    function() {
                        console.log("start():Audio Success");
                    },
                    // 录音失败执行函数
                    function(err) {
                        console.log("start():Audio Error: "+ err.code);
                    }
                );
            }
             
            //为按钮绑定  touchstart(点击) 事件
            $("#luyin").on("touchstart",function(){
                //实例化录音类
                start();
                //开始录音
                mediaRec.startRecord();
                date1=new Date(); 
                $("#test").html("开始录音");
            });
             
            //为按钮绑定 touchmove(手势移动) 事件
            $("#luyin").on("touchmove",function(e){
                //这里很关键，如果手势移动会执行另外一个操作，录音就会终止，所以此处需要禁止移动的默认操作。
                e.preventDefault();
                 
                //date3 =new Date();
                //$("#test").html("滑动了"+(date3.getTime()-date1.getTime())/1000);
            });
            //为按钮绑定 touchend(手势离开)事件
            $("#luyin").on("touchend",function(){
                //结束录音
                mediaRec.stopRecord();
                //释放系统底层的音频播放资源
                mediaRec.release();
                //需要播放的录音的路径
                var src = G_MP3FILE;
                //实例化录音类
                mediaRec = new Media(src,
                    // 成功操作
                    function() {
                        document.all('addwnd').style.display='block';
			document.all('recordwnd').style.display='none';
                    },
                    // 失败操作
                    function(err) {
			$("#test").html("start():Audio Error: "+ err.code);
                        console.log("start():Audio Error: "+ err.code);
			document.all('addwnd').style.display='block';
			document.all('recordwnd').style.display='none';
                    }
                );
                //在html中显示当前状态          
                $("#test").html("停止录音");
                //开始播放录音
                mediaRec.play();
                //在html中显示当前状态
                $("#test").append("--开始播放录音");
                mediaRec.release();
                uploadfile(G_MP3FILE,'audio/mp3');
            });
            //判断手势操作有没有变化
            $("#luyin").on("touchcancel",function(e){
                date2 =new Date();
                $("#test").html("状态变化了"+e.type+(date2.getTime()-date1.getTime())/1000);
            });
            
    function uploadfile(fileName,mimeType)
    {
    		alert(fileName);
		var ft = new FileTransfer();
		var options = new FileUploadOptions();
		options.fileKey = "data";//图片域名！！！
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
	// 声音文件上传成功
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
		alert('文件上传出错'+error.code);
		//sendMsg('onFileUploadFail'+error);
	}
	function uploadProcessing(progressEvent){
		if (progressEvent.lengthComputable) { 
			//已经上传 
			var loaded=progressEvent.loaded; 
			//文件总长度 
			var total=progressEvent.total; 
			//计算百分比，用于显示进度条 
			var 			percent=parseInt((loaded/total)*100); 
			//换算成MB 
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
	// leftorright = left 对方 =right 本人
	function appendMessage(msg,usrnam,usrimg,leftorright) {	// 我发出的
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
	var G_USRID  = G_APP_USRID; var G_USRNAM = G_APP_USRNAM; var G_USRGUID = G_APP_USRGUID ;var G_USRIMG = G_APP_USRIMG; // 本人的用户信息
	var G_USRID1  = ""; var G_USRNAM1 = ""; var G_USRGUID1 = "" ; var G_USRIMG1 = ""; // 对方的用户信息
	var G_USRROL = "0";//如果是医生，就是房间主人，可以接受对方的请求
	var G_SHOWVIDIO=0;// =0 默认（在横屏上同时显示），=1 只显示微信 =2 只显示视频

	function f_switchvideo()
	{
//			if(G_SHOWVIDIO==0)  G_SHOWVIDIO =1;
//			else if(G_SHOWVIDIO==1) G_SHOWVIDIO = 2;
//			else if(G_SHOWVIDIO==2){
//				if($(window).height()>$(window).width())//竖屏,只有两种选择
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
			if($(window).height()>$(window).width()){//竖屏
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
		else if(G_SHOWVIDIO==1){//只显示微信
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

		if($(window).height()>$(window).width()){//竖屏.视频分为两个
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
			if(confirm('你离开'+TITLE+',是否继续?')==1 ){
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

			
			// 如果存在usrid和userpwd用户，执行一次登陆
			
				var myusrid = GetLocationParam('usrid');
				var myuserpwd = GetLocationParam('userpwd');
				if(myusrid !=null&& myusrid !=''&&myuserpwd !=null&& myuserpwd !=''  ){
					$.get("rlogin.jsp?sytid=x&accid=0&usrid="+myusrid+"&userpwd="+myuserpwd, function(result){	
		     	        		result = result.trim(); 
		        			if(result.indexOf('如有问题,请记录以上信息,联系开发商。')>0){
		        				var pos1 = result.indexOf('<pre>');
		        				var pos2 = result.indexOf('</pre>');
		        			}
		        			else if(result.substring(0,5)=='<?xml'){
		        				var pos1 = result.indexOf('<TOPIC>');
		        				var pos2 = result.indexOf('</TOPIC>');
		        			}
		        			else {	// 让login的返回信息，  成功标志~提示信息~用户编号~用户名称~用户GUID~用户IMGGUID~跳转的页面
		        				// 0~登录成功~xlsgrid~0~管理员~BE34D90B76D2450AA67B6B66D6953FF2~16BE57BE7AC806DEE050007F01005DFF~
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
				alert("当前浏览器不支持websocket");
				return;
			}
			
			
			
			socket = new WebSocket("ws://114.80.114.43:8000/");
			
			
			socket.onopen = function(event) {
				if(rooms == '') {
					// 医生端，如果co是空值，那么创建一个room
					rooms = Math.round(Math.random()*100000000000);
					zxroom = rooms;
					
					appendMessage('创建'+TITLE,G_APP_USRNAM,G_APP_USRIMG,'right');
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
							
							console.log('查询会话号'+str);
							if(str == 'no') {
								socket.send(JSON.stringify({
									'EVENT': 'ZAIXIAN',
									'MGUID': currentUid,
									'ROOM': rooms,
									'OGUID'  : zxrguid
								}));
								
								var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+rooms+"&myguid="+currentUid+"&docguid="+zxrguid+"&isdoc=&org=CHIS&flg=2&typ=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";

								$.get(url, function(result){
									console.log('记录会话成功');
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
							console.log('诊室创建成功！房间号为'+result);
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
					// 修改标题
					document.all('myroomname').innerHTML = G_APP_USRNAM+'的'+TITLE;
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
					document.all('myroomname').innerHTML = G_USRNAM+'正在等待医生确认';
				}
			};
			
			socket.onmessage = function(event) {
				var mData = JSON.parse(event.data);
				if(mData && mData.event) {
					switch(mData.event) {
						case 'LOGIN':
						mData.uid = mData.uid.replace(/\n/g,'');
						mData.uid = mData.uid.trim();
						if(mData.uid == G_USRGUID){//排除本人
						}
						else {
							var room = mData.room;
							room = room.replace(/\n/g,'');
							room = room.trim();
							
							rooms = rooms.replace(/\n/g,'');
							rooms = rooms.trim();
							if(room == rooms){
								if( mData.ACTION =='REQUEST'){
									if(G_USRROL=='1' && confirm(G_USRNAM+'病人'+mData.NAME+'进入诊室,是否确认')==1 ){
										G_USRNAM1 = mData.NAME;
										G_USRIMG1 = mData.IMG;
										G_USRGUID1 = mData.uid;
										
										// 发送确认消息告诉进入房间的人，你可以进来了，对方会获取医生的资料
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
											
											console.log('查询会话号'+str);
											if(str == 'no') {
												var url = G_WEBBASE+"rcall.jsp?sytid=CHIS&mwid=CHIS_CHARTOS&funcid=inertChart&room="+rooms+"&myguid="+currentUid+"&org=CHIS&flg=1&patguid="+mData.uid+"&typ=1&isdoc=1&userpwd="+G_APP_USERPWD+"&usrid="+G_APP_USRID+"";
												$.get(url, function(result){
													console.log('记录会话成功');
												});
											} else {
												document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+pagee;
												$('#leftdiv').scrollTop(9999999);
											}
										});
										
										appendMessage(G_USRNAM1+',进入'+TITLE,G_USRNAM1,G_USRIMG1,'left');
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
											//如果是空就在表头设置隐藏的guid
											//frames.contentWindow.initSickBasc(G_USRGUID1);
											}
										});
 
									}
								}
								else if( mData.ACTION =='COMFIRM'){// 收到登陆的请求回复了，获取医生的资料

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
											
											console.log('查询会话号'+str);
											if(str == 'no') {
												alert('聊天室崩溃了');
												return;
											} else {
												document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+pagee;
												$('#leftdiv').scrollTop(9999999);
											}
										});
										
										document.all('myroomname').innerHTML = G_USRNAM1+'的'+TITLE+'-'+G_USRNAM;
									}
								}
								else if( mData.ACTION =='CLOSE'){// 收到登陆的请求回复了，获取医生的资料

									appendMessage(G_USRNAM1+'离开'+TITLE,G_USRNAM1,G_USRIMG1,'left');

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
									console.log('记录会话数据成功');
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
									console.log('记录会话数据成功');
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
				alert('请先结束当前患者会诊');
				return;
			}
		}
		document.all('myroomname').innerHTML = '正在呼叫患者......';
		$('#tt').attr('class', 'disabled');
		
		callguid = id;
		order = str;
		console.log('房间:'+rooms);
		console.log('呼叫：'+id);
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
				console.log(callguid+'患者结束');
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