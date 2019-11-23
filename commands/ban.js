const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("Sorry, user not found!");

    var reason = args.slice(1).join(' ');

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, insufficient permissions.");

    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, this user can't be banned")
  
    var ban = new discord.RichEmbed()
     .setTitle("Ban")
     .setColor("#44ffa8")
     .addField("Banned user:", banUser)
     .addField("Banned by:", message.author)
     .addField("Reason:", reason);

     var banChannel = message.guild.channels.find(`name`, "smites");
     if(!banChannel) return message.guild.send("Sorry, can't find the channel.")
    
     
     message.guild.member(banUser).ban(reason);
     
     banChannel.send(ban);




    return;

}









module.exports.help = {
  name: "ban"

}