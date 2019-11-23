const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) =>{

// {prefix}report speler reden

var prefix = botConfig.prefix; 

if(!args[0]) return message.channel.send(`Please use the command like this: ${prefix}report username reason`);

   
var user = message.guild.member(message.mentions.users.first()); 

if(!user) return message.channel.send(`Incorrect user / enter an user s.v.p`);

var reason =  args.join(" ").slice(22); 

if(!reason) return message.channel.send(`Please enter an reason.`);

var reportEmbed = new discord.RichEmbed()
.setDescription("Reports:")
.setColor("#44ffa8")
.addField("Reported user:", `${user} with the userid ${user.id}`)
.addField("Reported by:", `${message.author} with the userid ${message.author.id}`) 
.addField("Reason:",reason)
.setFooter(message.createdAt); 

var reportChannel = message.guild.channels.find("name", "reports");
if(!reportChannel) return message.channel.send(`Channel not found!`); 

message.delete(); 

return reportChannel.send(reportEmbed); 




}

module.exports.help = {
  name: "report"

}