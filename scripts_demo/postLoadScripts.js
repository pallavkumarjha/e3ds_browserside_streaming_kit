

function onHtmlBind() {
    console.log("ob-onHtmlBind");
    //changeConfigValue("useVOIP",1)
	
	

let webrtcParamsSubmit2 = document.getElementById('webrtc-params-submit');
	if (webrtcParamsSubmit2 !== null) {
		webrtcParamsSubmit2.onclick = function (event) 
		{
			//console.log("=== Registered switchTo action, Value is: ", val);
		let descriptor = document.getElementById('webrtc-max-fps-text').value;
		/*let descriptor = {
			Teleport: val
		};*/
		//emitUIInteraction(descriptor);
		let descriptor2 = {
		Teleport: document.getElementById('webrtc-max-fps-text').value
	};
		
		
		sendToUnreal(descriptor2)
		};
	}


}
