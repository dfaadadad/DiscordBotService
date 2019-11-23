const discord = require("discord.js");
const fs = require("fs"); 

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async(bot, message, args) =>{

//warn gebruiker tekst 

if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry, insufficient permissions.")

var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!user) return message.channel.send("Please enter an existing user.");

if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be warned.");

var reason = args.join(" ").slice(22);

if(!reason) return message.channel.send("Please enter a reason.");

if(!warns[user.id]) warns[user.id] = {
   warns: 0 


};

warns[user.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
   if (err) console.log(err); 

});

var warnEmbed = new discord.RichEmbed()
     .setTitle("Warn")
     .setColor("#44ffa8")
     .addField("Warned user:", user)
     .addField("Warned by:", message.author)
     .addField("All warns:", warns[user.id].warns)
     .addField("Reason:", reason);

     var warnChannel = message.guild.channels.find(`name`, "smites");
     if(!warnChannel) return message.guild.send("Sorry, can't find the channel.")


     
     warnChannel.send(warnEmbed);

     if(warns[user.id].warns == 3) {
      var warnbericht = new discord.RichEmbed()
      .setTitle("BE AWARE:" + user)
      .setColor("#ee0000")
      .addField("Warned user:", user)
      .addField("Be aware:", "One more warn and you will get a ban!");

      message.channel.send(warnbericht);





     } else if (warns[user.id].warns == 4) {

      message.guild.member(user).ban(reason);
      message.channel.send(`${user} is banned from the server!!`);





     }






}

module.exports.help = {
  
    name: "warn"

}