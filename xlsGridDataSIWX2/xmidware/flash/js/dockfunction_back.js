// JavaScript Document
function onResize(event){
	$("#mydock").css("height",$(window).height());
}

//��һ��guid
function f_openWindow(x,y,w,h,url,icon,guid,caption){
	if(openIcon(guid))return;
	var opensucceed=false;
	if(getDockId()!=null){
		opensucceed=getDockId().f_openWindow(x,y,w,h,url,icon,guid,caption);
		}
	if(opensucceed){
		var webWindow=new newWindow(x,y,w,h,url,guid,caption);
		webWindowArray.push(webWindow);
	}else{
		//û����dock�в���ͼ��
		}
	
}

//as �ӿ� ����Ļת�Ƶ��ĸ���Ļ��
function f_swichScreen(index){
	if(getDockId()!=null){getDockId().f_toScreenId(index)}
}

//as �ӿ� ����һ��SWF�ļ�
function f_openFlash(x,y,w,h,url,screenid){
	if(getDockId()!=null){getDockId().f_openFlash(x,y,w,h,url,screenid)}
}

//as �ӿ� ����һ��Table���
function f_openTable(x,y,w,h,url,caption,screenid){
	if(getDockId()!=null){getDockId().f_openTable(x,y,w,h,url,caption,screenid)}
}


//AS�Ѿ�װ���˻ص�����
function JScomplete(){
	f_openFlash(10,220,0,0,"image/swf/flash.swf",1)
	f_openTable(100,200,400,200,"table.xml","������",2);
	f_openWindow(50,50,600,450,'http://g.cn','resource://icon_tools',''+Math.random(),'Flash����');
}

//JSURLת��
function f_toUrl(url){
	document.location=url;
}

//Flash�е��ô�һ������
function j_openWindow(x,y,w,h,url,guid,caption){
	var webWindow=new newWindow(x,y,w,h,url,guid,caption);
	webWindowArray.push(webWindow);
}

//����һ����ַ
function visitURL(url,data,guid){
	$.ajax({url:"url",async:false,cache:false,type:"GET",data:data});
}

function runjs(value){
	eval(value)
}

//JS�¼�֪ͨ�ӿ� ������Ļ�����һ��ͼ��
function addOffenIcon(guid){
	//�����һ��ͼ�굽���ù�����Ļʱ�����õĺ���
	//�����ǵ� ��ַд��url��������,�ᴫ����һ������guid,�������ǵ���ַ,���ǾͿ��Լ�¼һ��ͼ����ӵ�������Ļ��
	var url="";
	if(url.length>0){visitURL(url,"guid="+guid,guid)}
	}

//JS�¼�֪ͨ�ӿ�  ������Ļɾ����һ��ͼ��
function deleteOffenIcon(guid){
	//��ɾ��һ�����ù���ͼ��ʱ�����õĺ���
	//�����ǵ� ��ַд��url��������,�ᴫ����һ������guid,�������ǵ���ַ,���ǾͿ��Լ�¼һ��ͼ��ӳ�����Ļɾ����
	var url="";
	if(url.length>0){visitURL(url,"guid="+guid,guid)}
}

function getDomainName(url){
	if(url==null){return ""}
	var _url=new String(url);
	var $url=new String(_url.toLowerCase());
	if($url.substr(0,7)=="http://"){
		$url=_url.substr(7)
	}else if($url.substr(0,8)=="https://"){
		$url=_url.substr(8)
	}else{return ""}
	if($url.indexOf("/")>0){
		$url=$url.substr(0,$url.indexOf("/"))
	}
	return $url
}

var flashObject=null;//Flash�ؼ�ID
function getDockId(){
	if(flashObject!=null && flashObject!=undefined){return flashObject}
	if($.browser.msie){
		flashObject=window["mydock"];
		}else{
		flashObject=document["mydock"];
	}
	return flashObject;
}

//JS ������ʹ���ƶ�����ƽ��
function moveAndMask(isshow){
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("mask")==null ){
				webWindowArray[i]=null;
				webWindowArray.splice(i,1)
			}else{
				if(isshow){obj.attr("mask").show()}else{obj.attr("mask").hide()}
		}
	}
}

//JS �ӿ� ��ԭһ������
function openIcon(guid){
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("web")==null ){
				webWindowArray[i]=null;
				webWindowArray.splice(i,1)
			}else if(obj.attr("guid")==guid){
				top_zIndex++;
				obj.attr("web").css("z-index",top_zIndex).slideDown(100);
				return true;//�ɹ���ԭ��һ������
		}
	}
	return false;
}

//JS �ӿ� �ر�һ������
function closeIcon(guid){
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("web")==null){
			webWindowArray[i]=null;
			webWindowArray.splice(i,1)
		}else if(obj.attr("guid")==guid){
			obj.attr("web").hide(200,function (event){
				if(getDockId()!=null){getDockId().f_closeWindow(guid)}
				$("#webWindow_"+guid).remove();
			})
			webWindowArray.splice(i,1);
		}
	}
}

function webGoBack(iframe){
	try{
		if(iframe.contentWindow.history.length>0){
			iframe.contentWindow.history.back();
		}
	}catch(e){
		alert("�޷���ɺ��˲�����")	
	}
}

//���web��������
function getWebWindowCount(){
	var webCount=0;
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("web")==null){webWindowArray[i]=null;webWindowArray.splice(i,1)}else{
			webCount++
		}
	}
	return webCount;
}

//web��������
function setWebWindow(){
	//�ų���󻯴���
	var webWindowCount=getWebWindowCount();
	var margin=$(window).height()/webWindowCount;
	if(margin<40){margin=40}
	var cnum=0;
	for(var i=0;i<webWindowArray.length;i++){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("web")==null){webWindowArray[i]=null;webWindowArray.splice(i,1)}else{
			var web=obj.attr("web");
			var func=obj.attr("IsmaxWindow");
			if(!func()){
				top_zIndex++;
				web.css({zIndex:top_zIndex}).animate({left:10,top:40+cnum*margin},200);
				//��󻯴��ڲ���������
				cnum++;
			}
		}
	}
}

function newWindow(_x,_y,_w,_h,_url,_webguid,_caption){
	var skin="skin/blue/";
	//var skin="skin/gray/";
	if(_y<0){_y=0}
	var x=_x,y=_y,w=_w+16,h=_h+37;
	this.x=_x;
	this.y=_y;
	this.width=_w+16;
	this.height=_h+37;
	this.url=_url;
	this.caption=_caption;
	this.guid=_webguid;
	var guid=_webguid;
	top_zIndex++;
	
	this.hide=function (event){web.hide(200)}
	var position=($.browser.msie?"absolute":"fixed");
	
	var web=$("<div/>").attr({id:"webWindow_"+this.guid}).css({position:position,zIndex:top_zIndex,left:this.x,top:this.y,width:this.width,height:this.height,overFlow:"hidden"});
	var headiframe=$("<iframe/>").attr({marginHeight:0,marginWidth:0,frameBorder:0,allowtransparency:"false",src:""}).css({width:this.width,height:29,position:"absolute",top:"0px",left:"0px",background:"#000",cursor:"move"}).bind("click",function(event){alert("dianjile")})
	var urlIframe=$("<iframe/>").attr({marginHeight:0,marginWidth:0,frameBorder:0}).css({width:this.width,height:this.height})
	urlIframe.attr({allowtransparency:"true"})//.css({opacity:0});
	
	var ismaxWindow=false;
	function setIsmaxWindow(value){ismaxWindow=value}
	function getIsmaxWindow(){return ismaxWindow}
	
	this.IsmaxWindow=function(){return ismaxWindow}
	
	function resizeEvent(event){
		var window_w=$(window).width();
		var window_h=$(window).height();
		web.css({left:0,top:0,width:window_w,height:window_h});
		urlIframe.stop(true,true).animate({width:window_w},100)
		mask.stop(true,true).animate({width:window_w-8-8,height:window_h-29-8},100,"linear",function(event){$(this).hide()})
	}
	
	function setMaxWindow(){//���
		x=web.css("left")
		y=web.css("top")
		//bottomrightdiv.css({cursor:"default"});//�ı����ָ�����״
		setIsmaxWindow(true);
		$(window).bind("resize",resizeEvent)
		resizeEvent(null);
		moveAndMask(false);
	}
	function setNormalWindow(){
		setIsmaxWindow(false);
		$(window).unbind("resize",resizeEvent);
		web.stop(true,true).animate({left:x,top:y,width:w,height:h},100)
		
		urlIframe.stop(true,true).animate({width:w-8-8},100)
		mask.stop(true,true).animate({width:w-8-8,height:h-29-8},100,"linear",function(event){$(this).hide()})
		
		//bottomrightdiv.css("cursor","se-resize");//�ı����ָ�����״
		moveAndMask(false);
	}
	var mask=$("<div/>").css({width:this.width-8-8,height:this.height-29-8,position:"absolute",left:8,top:29,zIndex:11,background:"#000",opacity:0.5,display:"none"})
	
	//var bottomrightdiv=$("<SPAN/>").css({width:"8px",height:"8px",float:"right",background:"url(image/window/"+skin+"bottomrightbg.png) no-repeat",cursor:"se-resize"});
	
	var marginX=0;
	var marginY=0;
	
	this.onReSizeWebWindow=function(event){
		if(getIsmaxWindow()){return};//���״̬�Ͳ��϶���
		top_zIndex++;
		web.css({zIndex:top_zIndex});
		$(window).unbind("resize",resizeEvent);
		//var offset = $(this).offset();//DIV��ҳ���λ��
        marginX = event.pageX ;//������ָ����DIVԪ����߽�ľ���   
        marginY = event.pageY ;//������ָ����DIVԪ���ϱ߽�ľ���
		w=web.width();
		h=web.height();
		$(document).bind("selectstart",function(){return false});
		moveAndMask(true)
		$(document).bind("mousemove",function(event){
			web.stop(true,true);//�������ֹͣ����
		 	var $w = w-(marginX-event.pageX);//������ֵ   
         	var $h = h-(marginY-event.pageY);//����߶�ֵ
			if($w<400)$w=400;
			if($h<200)$h=200;
         	web.animate({width:$w+"px",height:$h+"px"},10);
			
			var window_w=$w;
			var window_h=$h;
			
			urlIframe.stop(true,true).animate({width:window_w-8-8},100)
			mask.stop(true,true).animate({width:window_w-8-8,height:window_h-29-8},100)
		})
		$(document).bind("mouseup",function(event){
			moveAndMask(false)
			w=web.width();
			h=web.height();
			//captionframediv.css("cursor","default");//�ı����ָ�����״
			$(document).unbind("mousemove");
		 	$(document).unbind("mouseup");
			$(document).unbind("selectstart");
		})
		
	}
	
	this.onMouseDown=function (event){
		debug("down")
		if(getIsmaxWindow()){return};//���״̬�Ͳ��϶���
		if($(event.target).attr("tagName")=="SPAN"){return}
		top_zIndex++;
		web.css({zIndex:top_zIndex});
		head.css({cursor:"move"});//�ı����ָ�����״
		var offset = $(this).offset();//DIV��ҳ���λ��
        marginX = event.pageX - offset.left;//������ָ����DIVԪ����߽�ľ���   
        marginY = event.pageY - offset.top;//������ָ����DIVԪ���ϱ߽�ľ���
		//mask.show();
		$(document).bind("selectstart",function(){return false});
		moveAndMask(true)
		$(document).bind("mousemove",function(event){
			web.stop(true,true);//�������ֹͣ����
		 	var $x = event.pageX - marginX;//���X�᷽���ƶ���ֵ   
         	var $y = event.pageY - marginY;//���Y�᷽���ƶ���ֵ
			$y=$y<0?0:$y;
         	web.animate({left:$x+"px",top:$y+"px"},10);
		})
		$(document).bind("mouseup",function(event){
			//mask.hide();
			moveAndMask(false)
			//captionframediv.css({cursor:"default"});//�ı����ָ�����״
			$(document).unbind("mousemove");
		 	$(document).unbind("mouseup");
			$(document).unbind("selectstart");
		})
	}
	//bottomrightdiv.bind("mousedown",this.onReSizeWebWindow);
	//web.bind("click",function(event){if($(event.target).attr("tagName")=="SPAN"){return};top_zIndex++,$(this).css("z-index",top_zIndex)})
	//captionframediv.bind("mousedown",this.onMouseDown);
	
	this.web=web;
	this.mask=mask;
	this.iframe=urlIframe;
	headiframe.bind("mousedown",this.onMouseDown);
	urlIframe[0].src="newwindow.html?url="+this.url;
	//reBack.css("display",((document.location.hostname).toLowerCase()==getDomainName(urlIframe[0].src).toLowerCase() || getDomainName(urlIframe[0].src)=="")?"block":"none")
	web[0].appendChild(urlIframe[0])
	web[0].appendChild(headiframe[0])
	
	web.appendTo("body")
	web.show(100);
}

$(function (){
	var debugDiv=$("<div/>").attr("id","debugDiv").css({width:"100%",height:30,lineHeight:"30px",position:"fixed",left:0,top:30,zIndex:10000,background:"#000",color:"#fff",display:"none"}).appendTo("body");
})
function debug(value){
	$("#debugDiv").stop(true,true).show(200).text(value).delay(10000).fadeOut(200);;
}