const discord = require("discord.js"); 

module.exports.run = async(bot, message, args) =>{

try{


     var text = "**Discord Bot Service** \n\n **__Default Commands__** \n !botinfo - All the bot information! \n !serverinfo - All the server information! \n !founder - Shows who is the Discord founder! \n !help - Shows this message! \n !ping - See your current ping in ms! \n\n **__Admin Commands__** \n !ban - Ban someone from the server! \n !kick - Kick someone from the server! \n !clear ^ - Clear an selected amount of messages! \n !tempmute - Temporarily mute an member!";

    message.author.send(text);

    message.channel.send("Check your DM!"); 






}catch (error){
    message.channel.send("Something went wrong...");



}




} 




module.exports.help = {
    name: "help"
}   