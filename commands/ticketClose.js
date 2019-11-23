const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

   const categoryId = "647454181984174110";

   if(message.channel.parentID == categoryId){

    message.channel.delete();



   }else{

    message.channel.send("This command is only available in an Ticket channel!");





   }


   var embedCloseTicket = new discord.RichEmbed()
   .setTitle(" Ticket Of:  " +  message.channel.name)
   .setDescription("This is ticket is now marked as **complete**, well done staff-members!")
   .setFooter("Ticket closed");  
  
   var logChannel = message.guild.channels.find("name", "logs");
   if(!logChannel) return message.channel.send("Channel doesn't exist.")

   

   logChannel.send(embedCloseTicket); 




}

module.exports.help = {
  name: "close"

}