
var sendToUnreal=undefined
var e3ds_data = 
				{
					
				  //"domain": "connector.eagle3dstreaming.com",//"put your CP url if you have a special one "
				  "userName": "demo",//"put your user name "
					"appName": "E3DSFeaturesTemplate", //"put your app name"
					"configurationName": "E3DS-Iframe-Demo",//"put your config name"
					"configuration": {
									"useVOIP": 0,
										"showPsControl": "1",
										"isAdminDebugging": 1,
									}
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



	  

function onResponseFromUnreal(descriptor) 
{
    console.log("ob-onResponseFromUnreal");
    console.log("UnrealResponse: "+descriptor);
	
	document.getElementById('LatencyStats').innerHTML=descriptor;
  
}























