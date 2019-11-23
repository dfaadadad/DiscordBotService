const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


   // !announcement Titel // bericht // kleur // kanaal

   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry, insufficient permissions");

   var splitser = "//"

   if(args[0] == null){


      var useMessage = new discord.RichEmbed()
      .setTitle("Usage:")
      .setColor("#44ffa8")
      .setDescription(`To create an announcement, please add: \n !announcement Title ${splitser} Message ${splitser} Color ${splitser} Channel.`);

      return message.channel.send(useMessage); 







   }

   args = args.join(" ").split(splitser);

   if(args[2] == undefined) args[2] = "#eeeeee";
   if(args[3] == undefined) args[3] = "announcements";


   var options = {

      title: args[0] || "Message",
      message: args[1] || "No content given",
      color: args[2].trim(), 
      channel: args[3].trim()





   }



   var announcer = message.author;

   var announcementEmbed = new discord.RichEmbed() 
   .setTitle("Announcement:")
   .setColor(options.color)
   .setDescription(`Announcement author: ${announcer} \n\n ${options.title} \n`)
   .setTimestamp();


   var announcementChannel = message.guild.channels.find(`name`, options.channel);
   if(!announcementChannel) return message.channel.send("Sorry, can't find the channel.")

   announcementChannel.send(announcementEmbed);




}

module.exports.help = {
  name: "announcement"

}