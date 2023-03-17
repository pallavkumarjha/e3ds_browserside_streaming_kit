
var e3ds_controller = 
				{
					"core": 
											  {
												//"domain": "connector.eagle3dstreaming.com",//"put your CP url if you have a special one "
												"userName": "demo",//"put your user name "
												"appName": "E3DSFeaturesTemplate", //"put your app name"
												"configurationName": "E3DS-Iframe-Demo",//"put your config name"
												
											  },
				  
					"configurationToOverride": 
											  {
												"useVOIP": 0,
												"showPsControl": "0",
												
											  }
				}




function sendToUnreal(descriptor)
{
	emitUIInteraction(descriptor)
}


function onConfigAcquire() {
    console.log("ob-onConfigAcquire");
    //changeConfigValue("useVOIP",1)
}


// NOTE: Probably this is more suitable for postLoadScript??? really ??? lets talk about it . give me a call
function onDataChannelOpen() 
{
    console.log("ob-onDataChannelOpen");
     
}

function onDataChannelClose() 
{
    console.log("ob-onDataChannelClose");
   
}



	  

function onSessionExpired() 
{
	self.location = "assets/pages/session-expired.htm";
}

function onResponseFromUnreal(descriptor) 
{
    console.log("ob-onResponseFromUnreal");
    console.log("UnrealResponse: "+descriptor);
	
	document.getElementById('LatencyStats').innerHTML=descriptor;
  
}






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
		let descriptor2 = 
						{
							Teleport: document.getElementById('webrtc-max-fps-text').value
						};
		
		
		e3ds_controller.sendToUnreal(descriptor2)
		};
	}


}



















