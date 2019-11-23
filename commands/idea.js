const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

   var idee = args.join(' '); 
   if(!idee) return message.channel.send("Please enter an idea!");

   var ideeEmbed = new discord.RichEmbed()
   .setTitle("New Idea:")
   .setColor("#44ffa8")
   .addField("Idea:", idee)
   .addField("Submitted by:", message.author);

   var ideeChannel = message.guild.channels.find("name", "ideas");
   if(!ideeChannel) return message.channel.send("Sorry, could not find the idea channel!");

   ideeChannel.send(ideeEmbed).then(embedMessage => {
   embedMessage.react('👍'); 
   embedMessage.react('👎'); 
   embedMessage.react('🤷'); 





   });
  




}

module.exports.help = {
  name: "idea"

}