const ms = require("ms"); 

module.exports.run = async(bot, message, args) =>{

 // !tempban gebruiker tijd reden

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, insufficient permissions!");

 var user = message.guild.member(message.mentions.users.first());

 if(!user) return message.channel.send("Incorrect command, please do: !tempban user time reason");

 if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user can't be tempbanned");

 var tempBanTime = args[1]; 

 var reason = args.join(" ").slice(22); 

 if(!reason) return message.channel.send("Please enter an correct timestamp.");
  
 if(ms(tempBanTime)){


     await message.guild.member(user).ban(reason); 

     message.channel.send(`${user} is now tempbanned for ${reason}`);

    setTimeout(function() {

        message.guild.unban(user.id); 

        message.channel.send(`${user} is no longer banned!`);




    }, ms(tempBanTime)); 

 }else{
     return message.channel.send("Please enter an correct reason.");
 }






}

module.exports.help = {
  name: "tempban"

}