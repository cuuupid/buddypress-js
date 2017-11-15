var buddypress = require("buddypress");
var client = buddypress.createClient({
	url: "vivliolearning.com",
	username: "admin",
	password: "1892Dragon"
});

/* client.verifyConnection(function (e, result) {
	if (e) console.log(e)
	else if (result.confirmation) console.log("Success")
	free=true
})
 */
client.getProfile( function (e,r) {
	if(e) console.log(e)
	else console.log(r)
})