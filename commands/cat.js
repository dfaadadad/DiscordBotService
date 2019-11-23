const discord = require("discord.js");
const superAgent = require("superagent"); 


module.exports.run = async(bot, message, args) =>{

    var cat; 

    cat = await superAgent 
    .get("http://aws.random.cat/meow");


    while(cat.body.file.endsWith(".mp4") || cat.body.file.endsWith(".webm")){

     
        cat = await superAgent 
        .get("http://aws.random.cat/meow");
    


    }


    var embed = new discord.RichEmbed() 
    .setTitle("Cat :cat:")
    .setColor("#44ffa8")
    .setImage(cat.body.file); 

    message.channel.send(embed); 
   







}

module.exports.help = {
  name: "cat"

}