module.exports = async(client) =>  {
    
    client.user.setPresence({
        activity: {
            name: "darckvador"
        }
    })
};