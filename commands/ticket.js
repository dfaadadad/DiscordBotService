const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

   const categoryId = "647454181984174110";

    var userName = message.author.username; 
    var userDiscriminator = message.author.discriminator; 

      var bool = false;

     message.guild.channels.forEach((channel) => {

       if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){

          message.channel.send("You already created an ticket!");



    



       bool = true; 
         




       }







     });
    
  if (bool == true) return; 

  var embedCreateTicket = new discord.RichEmbed()
   .setTitle("Hello, " + message.author.username)
   .setFooter("Support channel is created...");  

   message.channel.send(embedCreateTicket); 



   message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 
   

        createdChan.setParent(categoryId).then((settedParent) => {
         
           
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), {"READ_MESSAGES": false});




            settedParent.overwritePermissions(message.author, {


               "READ_MESSAGES": true, "SEND_MESSAGES":true,
                "ÄTTACH_FILES": true, "CONNECT": true, 
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true














            });


            var embedParent = new discord.RichEmbed()
            .setTitle("Hello, " + message.author.username.toString())
            .setDescription("Enter your question/message here.");
            
            settedParent.send(embedParent);






          



        }).catch(err => {
         message.channel.send("Error");


        }); 
   
   
   
    }).catch(err => {
        message.channel.send("Error");
    });



}

module.exports.help = {
  name: "ticket"

}