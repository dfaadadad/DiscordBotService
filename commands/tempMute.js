const discord = require("discord.js");
const ms = require("ms");


module.exports.run = async(bot, message, args) =>{


   // !tempmute gebruiker tijd 1h 20m 20s

   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry, insufficient permissions.")

var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!user) return message.channel.send("Please enter an existing user.");

// if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be muted.");

var muteRole = message.guild.roles.find("name", "Muted"); 

if(!muteRole) return message.channel.send("Role Muted not found.");

var muteTime = args[1]; 

if(!muteTime) return message.channel.send("Ënter an amount of time please.");

 await (user.addRole(muteRole.id));

  message.channel.send(`${user} is now muted for ${muteTime}!`);

  setTimeout(function() {

  user.removeRole(muteRole.id);

  message.channel.send(`${user} is no longer muted!`);

  }, ms(muteTime)); 
  

};





module.exports.help = {
  name: "tempmute"

}