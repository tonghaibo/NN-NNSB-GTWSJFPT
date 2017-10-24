// JavaScript Document
var top_zIndex=100;
var _top=30;//顶部偏移部分
var _bottom=30;//底部偏移部分
var taskWindow=null;//任务管理窗口
function getDocument(){
	return document.body;
}

$(document).ready(function(e) {
	//$("body").scroll(function(e) {
//		$("body").scrollTop(0)
//	});
});

function onResize(event){
	var w_height=$(window).height();
	var w_width=$(window).width();
	$("#taskIframe").css({top:w_height-30});
	$("#mydock").css("height",w_height);
	$("#windowframe").css("height",w_height-_top-_bottom);
	windowMask.css({height:w_height,width:$(window).width()});
	$("#webmsgboxdiv").css({top:w_height-_bottom-340,left:w_width-250});
}

//打开一个guid
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
		//没能在dock中插入图标
		}
}

//as 接口 将屏幕转移到哪个屏幕上
function f_swichScreen(index){
	if(getDockId()!=null){getDockId().f_toScreenId(index)}
}

//as 接口 设置背景图像
function f_changeBkimg(imgurl){
	if(getDockId()!=null){getDockId().f_changeBkimg(imgurl)}
}

//as 接口 载入一个SWF文件
function f_openFlash(x,y,w,h,url,screenid){
	if(getDockId()!=null){getDockId().f_openFlash(x,y,w,h,url,screenid)}
}

//as 接口 载入一个Table表格
function f_openTable(x,y,w,h,url,caption,screenid){
	if(getDockId()!=null){getDockId().f_openTable(x,y,w,h,url,caption,screenid)}
}


//AS已经装载了回调函数
function JScomplete(){
	//f_openFlash(10,220,0,0,"image/swf/flash.swf",1)
	//f_openTable(100,200,400,200,"table.xml","表格测试",2);
	//f_openWindow(50,50,600,450,'http://qinghailake.kepu.cn/camera/single.jsp?cid=2','resource://icon_tools',''+Math.random(),'Flash测试');
}

//JSURL转向
function f_toUrl(url){
	document.location=url;
}
function j_closeMsgBox(){
	$("#webmsgboxdiv").css("display","none");
}

function j_showMsgFrame(){
	$("#webmsgboxdiv").css({zIndex:1000000,display:($("#webmsgboxdiv").css("display")=="none"?"block":"none")});
}

//Flash中调用打开一个窗口
function j_openWindow(x,y,w,h,url,guid,caption){
	var _w=x+w>$(window).width()?$(window).width()-x:w;
	var _h=y+h>$(window).height()-90?$(window).height()-y-90:h;
	var webWindow=new newWindow(x,y,_w,_h,url,guid,caption);
	webWindowArray.push(webWindow);
	if(taskWindow){
		taskWindow.addNode(caption,{guid:guid});
		}else{
		alert("未初始化");
	}
}

//访问一个网址
function visitURL(url,data,guid){
	$.ajax({url:url,async:false,cache:false,type:"GET",data:data});
}

function runjs(value){
	eval(value)
}

//JS事件通知接口 常用屏幕添加了一个图标
function addOffenIcon(guid){
	//当添加一个图标到常用功能屏幕时所调用的函数
	//把你们的 网址写在url变量里面,会传过来一个参数guid,访问你们的网址,你们就可以记录一个图标添加到常用屏幕了
	var url="";
	if(url.length>0){visitURL(url,"guid="+guid,guid)}
	}

//JS事件通知接口  常用屏幕删除了一个图标
function deleteOffenIcon(guid){
	//当删除一个常用功能图标时所调用的函数
	//把你们的 网址写在url变量里面,会传过来一个参数guid,访问你们的网址,你们就可以记录一个图标从常用屏幕删除了
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

var flashObject=null;//Flash控件ID
function getDockId(){
	if(flashObject!=null && flashObject!=undefined){return flashObject}
	if($.browser.msie){
		flashObject=window["mydock"];
		}else{
		flashObject=document["mydock"];
	}
	return flashObject;
}

function getObject(guid){
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("web")==null ){
				webWindowArray[i]=null;
				webWindowArray.splice(i,1)
			}else if(obj.attr("guid")==guid){
				return webWindowArray[i];
		}
	}
	return null;
}

//JS 接口 还原一个窗口
function openIcon(guid){
	for(var i=webWindowArray.length-1;i>=0;i--){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("guid")==null || obj.attr("web")==null ){
				webWindowArray[i]=null;
				webWindowArray.splice(i,1)
			}else if(obj.attr("guid")==guid){
				top_zIndex++;
				obj.attr("web").css("z-index",top_zIndex).slideDown(100);
				return true;//成功还原了一个窗口
		}
	}
	return false;
}

//JS 接口 关闭一个窗口
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
	if(taskWindow){
		//删除任务栏上一个图标
		taskWindow.f_removeNode(guid)
	}
}

function webGoBack(iframe){
	try{
		if(iframe.contentWindow.history.length>0){
			iframe.contentWindow.history.back();
		}
	}catch(e){
		alert("无法完成后退操作！")	
	}
}

//获得web窗口数量
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

//最小化所有web窗口
function setAllWindowMin(){
	var webWindowCount=getWebWindowCount();
	var cnum=0;
	for(var i=0;i<webWindowArray.length;i++){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("web")==null){webWindowArray[i]=null;webWindowArray.splice(i,1)}else{
			var web=obj.attr("web");
			web.hide(200);
		}
	}
}

//还原所有web窗口
function setAllWindowShow(){
	var webWindowCount=getWebWindowCount();
	var cnum=0;
	for(var i=0;i<webWindowArray.length;i++){
		var obj=$(webWindowArray[i]);
		if(obj==null || obj.attr("web")==null){webWindowArray[i]=null;webWindowArray.splice(i,1)}else{
			var web=obj.attr("web");
			web.show(200);
		}
	}
}

var jishuqi=0
var windowMask=$("<div/>")
$(function(){
	//top_zIndex++;
	windowMask.css({width:"100%",height:"100%",position:"absolute",opacity:0,left:0,top:0,zIndex:10}).hide().appendTo("body");//[0].appendChild(document.body[0]);
})
//windowMask.hide();

//var skin="skin/blue/";
//var skin="skin/gray/";
var skin="skin/black/";

function newWindow(_x,_y,_w,_h,_url,_webguid,_caption){
	if(_y<30){_y=30}
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
	
	var url=_url;
	var ismaxWindow=false;
	
	this.showWinMask=function(value){
			var index=parseInt(urlIframe.css("zIndex"))-1;
			windowMask.css({zIndex:index}).show();
	}
	this.hideWinMask=function(value){
		windowMask.hide();
	}
	
	function setIsmaxWindow(value){ismaxWindow=value}
	function getIsmaxWindow(){return ismaxWindow}
	
	this.setIsmaxWindow=function(value){ismaxWindow=value}
	this.getIsmaxWindow=function(){return ismaxWindow}
	this.IsmaxWindow=function(){return ismaxWindow}
	this.hide=function (event){web.hide(200)}

	var position="absolute";//($.browser.msie?"absolute":"fixed");
	
	var urlIframe=$("<iframe/>").attr({id:"webWindow_"+this.guid,marginHeight:0,marginWidth:0,frameBorder:0,width:this.width,height:this.height});
	urlIframe.css({position:position,zIndex:top_zIndex,left:this.x,top:this.y});
	this.web=urlIframe;
	
	this.hide=function(time){
		urlIframe.hide(time)
	}
	
	urlIframe[0].src="newwindow.html?guid="+this.guid+"&url="+this.url;
	urlIframe[0].onload = urlIframe[0].onreadystatechange = function() {  
			 if (this.readyState && this.readyState != 'complete'){
				 return;
			 }else{
				urlIframe.css({opacity:1});
				//debug("载入完------------->>");
			 }
	}
	document.getElementById("webmsgboxdiv").parentNode.insertBefore(urlIframe[0],document.getElementById("webmsgboxdiv"))
	function resizeEvent(event){
		var window_w=$(window).width();
		var window_h=$(window).height();
		urlIframe.stop(true,true).css({left:0,top:_top,width:window_w,height:window_h-_top-_bottom})
	}
	this.toMaxIndex=function(){
		top_zIndex+=2;
		urlIframe.css({zIndex:top_zIndex});
	}
	
	this.setMaxWindow=function(){//最大化
		x=urlIframe.css("left")
		y=urlIframe.css("top")
		w=urlIframe.css("width")
		h=urlIframe.css("height")
		setIsmaxWindow(true);
		urlIframe.stop(true,true).animate({top:_top+"px",left:"0px",width:$(window).width(),height:$(window).height()-_top-_bottom},100)
		$(window).bind("resize",resizeEvent);
	}
	this.setNormalWindow=function(){
		setIsmaxWindow(false);
		$(window).unbind("resize",resizeEvent);
		urlIframe.stop(true,true).animate({left:x,top:y,width:w,height:h},100);
	}
}

function resetwindow(obj,top,left,width,height){
	$(obj).css({top:top,left:left,width:width,height:height})
}

$(function (){
	var debugDiv=$("<div/>").attr("id","debugDiv").css({width:"100%",height:30,lineHeight:"30px",position:"absolute",left:0,zIndex:10000,background:"#000",color:"#fff",display:"none",top:30}).appendTo("body");
})
function debug(value){
	$("#debugDiv").stop(true,true).css({top:30}).show(200).text(value)
}