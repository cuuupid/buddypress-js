class User {
    constructor() {
        this.username = null
        this.password = null
    }
    setCredentials(username, password) {
        this.username = username
        this.password = password
        return this
    }
    login(client) {
        client.verifyConnection(this)
    }
}

module.exports = User