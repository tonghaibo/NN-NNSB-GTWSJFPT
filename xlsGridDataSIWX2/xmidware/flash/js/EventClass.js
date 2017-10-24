// JavaScript Document

function EventClass(){
	this._listener=[];//监听事件集合
	//绑定一个事件
	this.addEvent=function(type,fn){
		 if (typeof type === "string" && typeof fn === "function") {
            if (typeof this._listener[type] === "undefined") {
               this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);    
            }
        }
        return this;
	}
	//绑定一个事件数组
	this.addEvents=function(obj) {
        obj = typeof obj === "object"? obj : {};
        var type;
        for (type in obj) {
            if ( type && typeof obj[type] === "function") {
                this.addEvent(type, obj[type]);    
            }
        }
        return this;
    }
	//触发一个事件
	this.fireEvent=function(type) {
		var arg=Array.prototype.slice.call(arguments)
        if (type && this._listener[type]) {
			var events;//事件参数
			if(arg && arg.length>1){events=arg[1]}else{events = {type:type,target:this,currentTarget:this}}
            for (var length = this._listener[type].length, start=0; start<length; start+=1) {
                this._listener[type][start].call(this, events);
            }
        }
        return this;
    }
	//触发一个事件组
    this.fireEvents=function(array) {
        if (array instanceof Array) {
            for (var i=0, length = array.length; i<length; i+=1) {
                this.fireEvent(array[i]);
            }
        }
        return this;
    }
	//删除一个事件
	//obj.removeEvent("evtname")
	//obj.removeEvent("evtname",fn)
	//obj.removeEvent("evtname",[fn,fn,fn])
	this.removeEvent=function(type, key) {
        var listeners = this._listener[type];
        if (listeners instanceof Array) {
            if (typeof key === "function") {
                for (var i=0, length=listeners.length; i<length; i+=1){
                    if (listeners[i] === listener){
                        listeners.splice(i, 1);
                        break;
                    }
                }
            } else if (key instanceof Array) {
                for (var lis=0, lenkey = key.length; lis<lenkey; lis+=1) {
                    this.removeEvent(type, key[lenkey]);
                }
            } else {
                if(this._listener[type])delete this._listener[type];
            }
        }
        return this;
    }
	//删除多个事件
	//obj.removeEvents({"evtname":fn,"evtname":fn})
	//obj.removeEvents(["evtname","evtname"])
    this.removeEvents=function(params) {
        if (params instanceof Array) {
            for (var i=0, length = params.length; i<length; i+=1) {
                this.removeEvent(params[i]);
            }    
        } else if (typeof params === "object") {
            for (var type in params) {
                this.removeEvent(type, params[type]);    
            }
        }
        return this;    
    }
	
}