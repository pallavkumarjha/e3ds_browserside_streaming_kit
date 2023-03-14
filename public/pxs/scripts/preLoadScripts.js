
var sendToUnreal = undefined
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
}

function onDataChannelOpen() {
	console.log("ob-onDataChannelOpen");
	var event = new CustomEvent("datachannel-event", { detail: "open" });
	window.dispatchEvent(event);
}

function onDataChannelClose() {
	console.log("ob-onDataChannelClose");
	var event = new CustomEvent("datachannel-event", { detail: "close" });
	window.dispatchEvent(event);
}

function onResponseFromUnreal(descriptor) {
	console.log("ob-onResponseFromUnreal");
	console.log("UnrealResponse: " + descriptor);
	var event = new CustomEvent("game-event", { detail: descriptor });
	window.dispatchEvent(event);
}
