const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!kickUser) return message.channel.send("Sorry, user not found!");

        var reason = args.slice(1).join(' ');

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, insufficient permissions.");

        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, this user can't be kicked")
      
        var kick = new discord.RichEmbed()
         .setTitle("Kick")
         .setColor("#44ffa8")
         .addField("Kicked user:", kickUser)
         .addField("Kicked by:", message.author)
         .addField("Reason:", reason);

         var kickChannel = message.guild.channels.find(`name`, "smites");
         if(!kickChannel) return message.guild.send("Sorry, can't find the channel.")
        
         
         message.guild.member(kickUser).kick(reason);
         
         kickChannel.send(kick);




        
     return; 





}

module.exports.help = {
  name: "kick"

}