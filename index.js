var buddypress = require( "buddypress" );
var client = buddypress.createClient({
	url: "fawkesbots.com",
	username: "guyfawkes",
	password: "houstonwehaveaproblem$"
});

client.verifyConnection(function( error, posts ) {
	console.log( "Found " + posts + " posts!" );
});