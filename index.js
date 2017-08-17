const apn = require("apn");

let tokens = ["429208638836f7e634548c4d64fe48de76d566f9386fb695d4d5e627d92119f0"];

var options = {
  token: {
    key: "tripopt_apn.p8",
    keyId: "7Q494BPKF5",
    teamId: "MWK8U6Z88X"
  },
  production: false
};


let service = new apn.Provider(options);

let note = new apn.Notification({
	alert:  "Breaking News: I just sent my first Push Notification",
});

// The topic is usually the bundle identifier of your application.
note.topic = "com.hannilab.tripoptapp";

console.log(`Sending: ${note.compile()} to ${tokens}`);

service.send(note, tokens).then( result => {
    console.log("sent:", result.sent.length);
    console.log("failed:", result.failed.length);
    console.log(result.failed);
});

service.shutdown();