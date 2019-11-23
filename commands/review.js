const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    
    const aantalSterren = args[0]; 

    if(!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Please enter an amount of stars between 1 and 5");

   const bericht = args.splice(1, args.length).join(' ') || 'No message sent!';


   var reviewChannel = message.guild.channels.find("name", "reviews");
   if(!reviewChannel) return message.channel.send("Could not find review channel!");

   var sterren = "";

   for(var i =0; i < aantalSterren; i++) {
      sterren += ":star: "; 





   }

   message.delete(); 


   const review = new discord.RichEmbed()
   .setTitle(`${message.author.username} has left an review! :tada:`)
   .setColor("#44ffa8")
   .setThumbnail("https://pasteboard.co/II0kj9N.png")
   .addField("Stars:", `${sterren}`)
   .addField("Review:", `${bericht}`);

   message.channel.send(":white_check_mark: Your review is now succesfully posted!")
   return reviewChannel.send(review); 

}

module.exports.help = {
  name: "review"

}