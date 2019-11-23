const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("Server Information:")
            .setColor("#44ffa8")
            .addField("You joined at:", message.member.joinedAt)
            .addField("Members in total:", message.guild.memberCount)
            .setThumbnail(icon);

        return message.channel.send(serverEmbed);

    





}

module.exports.help = {
  name: "serverinfo"

}