const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("Discord Bot Info:")
        .setURL("https://discord.gg/BxyUQm")
        .setAuthor("elit3 Dave#6926")
        .setThumbnail(botIcon)
        .setColor("#44ffa8")
        .addField("Default name:", bot.user.username)
        .addField("Publish date:", bot.user.createdAt);

    return message.channel.send(botEmbed);







}

module.exports.help = {
  name: "botinfo"

}
