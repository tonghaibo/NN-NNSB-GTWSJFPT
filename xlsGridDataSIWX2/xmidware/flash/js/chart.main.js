// PeerJS server location
var SERVER_IP = 'db.xmidware.com';
var SERVER_PORT = 9001;

// DOM elements manipulated as user interacts with the app
var remoteVideo = null;
var localVideo = null;

// the ID set for this client
var callerId = null;

// PeerJS object, instantiated when this client connects with its
// caller ID
var peer = null;

// the local video stream captured with getUserMedia()
var localStream = null;

// get the local video and audio stream and show preview in the
// "LOCAL" video element
// successCb: has the signature successCb(stream); receives
// the local video stream as an argument
var getLocalStream = function (successCb) {
	if (localStream && successCb) {
		successCb(localStream);
	}
	else {
		navigator.webkitGetUserMedia(
			{
				audio: true,
				video: true
			},
			function (stream) {
				localStream = stream;
				localVideo.src = window.URL.createObjectURL(stream);
			  if (successCb) {
				successCb(stream);
			  }
			},
			function (err) {
				
			}
		);
	}
};

var iceserver = {"iceServers": [{"url":"stun:stun.l.google.com:19302"},{"url":"turn:u1@101.251.225.38","credential":"0"}]};

// set caller ID and connect to the PeerJS server
var connect = function (id) {
	try {
		// create connection to the ID server
		peer = new Peer(callerId, {host: SERVER_IP, port: SERVER_PORT,config:iceserver});
		peer.socket._socket.onclose = function () {
		peer = null;
	};

	peer.socket._socket.onopen = function () {
		getLocalStream();
	};
	
	peer.on('call', answer);
}
	catch (e) {
		peer = null;
	}
};

// set the "REMOTE" video element source
var showRemoteStream = function (stream) {
	remoteVideo.src = window.URL.createObjectURL(stream);
};

var dial = function (id) {
    getLocalStream(function (stream) {
      var call = peer.call(recipientId, stream);
      call.on('stream', showRemoteStream);
    });
};

var answer = function (call) {
	call.on('stream', showRemoteStream);
	call.answer(localStream);
};
  
function init(str,tmp,flag){
	remoteVideo = document.querySelector('#other1');
	localVideo = document.querySelector('#you1');
	document.getElementById('videos1').style.display='block';
	callerId = str;
	recipientId = tmp;
	if(flag == '1'){
		connect();
		dial();
	} else {
		connect();
	}
	
	
}

  

