function updateAppConfig() {
    var obj = {
        "useVOIP": 0
    }

    return obj
}

function afterGettingAppConfig() {
    console.log("ob-afterGettingAppConfig");
    //changeConfigValue("useVOIP",1)
}
function afterGettingUnrealResponse(descriptor) {
    console.log("ob-afterGettingUnrealResponse");
    console.log("UnrealResponse: "+descriptor);
    //changeConfigValue("useVOIP",1)
}

var appconfigPassed2Ejs = {}

console.log("HTML-->appconfigPassed2Ejs: " + JSON.stringify(appconfigPassed2Ejs));



//config path
let isGuestMode = false
let MeetingId = "" //"21d666ba-a0d8-4db9-9643-e74525bafe1b"

let fullDomain = "connector.eagle3dstreaming.com"


/////////////////
var owner = "demo" //"put your user name "
let app = "E3DSFeaturesTemplate" //"put your app name"
let configurationName = "E3DS-Iframe-Demo"//"put your config name"
///////////////////////////////////////////////

var part1 = "https://" + fullDomain
var part2 = "/v5/" + owner + "/" + app + "/" + configurationName

////////////////////////////




let search = ""

if ((MeetingId == "") || (MeetingId == undefined)) {

} else if ((MeetingId != "") || (MeetingId != undefined)) {
    if (!isGuestMode)
        search = "?hostMeetingId=" + MeetingId
    else //type="text/css" rel="stylesheet" href="assets/css/voip.css"/>
    {
        part2 = "/v5/" + owner + "/" + configurationName

        if ((MeetingId != "") || (MeetingId != undefined))
            search = "?GuestMeetingId=" + MeetingId
    }

}



console.log("search: " + search)

			
let urlParams = new URLSearchParams(search)
console.log("urlParams: ")

for (const [key, value] of urlParams) {
    console.log(key, value);
}



let pathname = part2
console.log("pathname: " + pathname)

let href_emulated =part1 + part2


href_emulated = href_emulated + search
console.log("href_emulated1: " + href_emulated)
console.log("pathname1: " + pathname)

