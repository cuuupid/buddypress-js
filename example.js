var Client = require('./Client')
var User = require('./User')
var colors = require('colors')

let tags = {
    app: '[APP]'.bgBlue.white+' ',
    bp: '[BP]'.bgGreen.white+' ',
}

let client = new Client()

var connectionInfo = {
    host: 'http://www.fawkesbots.com',
    path: '/index.php?bp_xmlrpc=true'
}

console.info(tags.app + "Attempting to connect to BuddyPress instance on "+connectionInfo.host+connectionInfo.path)

client.connect(connectionInfo.host+connectionInfo.path)

console.info(tags.app+tags.bp+"Connected")

//test
var test_user = new User()
console.warn(tags.app+"Using test user... remove in production.")
test_user.setCredentials("guyfawkes","houstonwehaveaproblem123$")
console.info(tags.app+tags.bp+"Attempting to log in.")
test_user.login(client)
console.log(tags.app+tags.bp+"Logged in successfully.")