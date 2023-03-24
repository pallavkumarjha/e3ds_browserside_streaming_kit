
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

function onSessionExpired() {
	//self.location = "assets/pages/session-expired.htm";
}

function onResponseFromUnreal(descriptor) {
	console.log("ob-onResponseFromUnreal");
	console.log("UnrealResponse: " + descriptor);
	var event = new CustomEvent("game-event", { detail: descriptor });
	window.dispatchEvent(event);
}

function onHtmlBind() {
	console.log("ob-onHtmlBind");
}
