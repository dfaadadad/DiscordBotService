

module.exports.run = async (bot, message, args) => {


   message.channel.send("🏓: " + message.createdTimestamp - (Date.now()) + "ms");





}

module.exports.help = {
  name: "ping"

}