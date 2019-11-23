const discord = require("discord.js"); 

module.exports.run = async(bot, message, args) =>{

try{


     var text = "**Discord Bot Service** \n\n **__Default Commands__** \n !botinfo - All the bot information! \n !serverinfo - All the server information! \n !founder - Shows who is the Discord founder! \n !help - Shows this message! \n !ping - See your current ping in ms! \n !cat - A picture of a random cat will be posted! \n !dog - A picture of a random dog will be posted! \n !close - Close your ticket! \n !ticket - Open a ticket! \n !rps <rock, paper, scissors> - Do the rps game! \n !idea - Post an idea, maybe we'll add it! \n !report - Report an user!  \n\n **__Admin Commands__** \n !ban - Ban someone from the server! \n !kick - Kick someone from the server! \n !clear - Clear an selected amount of messages! \n !tempmute - Temporarily mute an member! \n !giveaway - Give an item away! \n !tempban - Temporirarily ban an user! \n !warn - Warn an user! \n !announcement - Do an announcement! ";

    message.author.send(text);

    message.channel.send("Check your DM!"); 






}catch (error){
    message.channel.send("Something went wrong...");



}




} 




module.exports.help = {
    name: "help"
}   