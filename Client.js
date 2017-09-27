var xmlrpc = require('xmlrpc-lite')
var colors = require('colors')

let tags = {
    client: '[CLIENT]'.bgBlack.white + ' ',
    method: '[METHOD]'.bgCyan.black.inverse + ' ',
    error: '[ERROR]'.bgRed.white + ' '
}

let err_log = (e) => {
    console.error(tags.client + tags.error + ' {')
    console.error(e)
    console.error('}')
}

class Client {
    constructor() {
        this.client = null
        this.__bp_methods = {
            verify_connection: 'bp.verifyConnection',
            get_messages: 'bp.getMessages',
            get_notifications: 'bp.getNotifications',
            get_groups: 'bp.getGroups',
            get_friends: 'bp.getMyFriends',
            update_post_status: 'bp.updateExternalBlogPostStatus',
            delete_post_status: 'bp.deleteExternalBlogPostStatus',
            delete_member: 'bp.deleteMember',
            get_member: 'bp.getMemberInfo',
            get_activity: 'bp.getActivity',
            delete_user_status: 'bp.deleteProfileStatus',
            update_user_status: 'bp.updateProfileStatus',
            post_comment: 'bp.postComment',
            get_api_key: 'bp.requestApiKey'
        }
    }

    connect(url) { this.client = new xmlrpc(url) }
    async __xmlrpc_call(method, params) {
        let fin = false
        let result = null
        console.info(tags.client + tags.method + method)
        console.info(params)
        this.client.call(method, params, (e, v) => {
            result = (e) ? e : v
            if (e) err_log(e)
            else console.log(tags.client+tags.method+'Successfully completed method.')
            fin = true
        })
        while (!fin);
        return result
    }
    async getApiKey(user) {
        console.info(tags.client+"Attempting to fetch API key with "+user.username)
        return await this.__xmlrpc_call(this.__bp_methods.get_api_key, [user.username, "BuddyPress JS API"])
    }
    async verifyConnection(user) {
        console.info(tags.client+"Attempting login with "+user.username+":"+user.password)
        return await this.__xmlrpc_call(this.__bp_methods.verify_connection, [user.username, user.password])
    }
    async getMessages() { }
}

module.exports = Client