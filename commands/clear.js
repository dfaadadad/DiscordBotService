const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

   //!clear 21 

   if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("sorry, insufficient permissions!");

   if (!args[0]) return message.reply("please enter an amount of numbers!");

   if(Number.isInteger(parseInt(args[0]))){

         var amount = parseInt(args[0]) + 1;

         message.channel.bulkDelete(amount).then(() => {


            if(args[0] == 0){

             message.channel.send(`Sorry, I can't delete 0 messages...`).then(msg => msg.delete(3500));


            }  else if (args[0] == 1){
                message.channel.send(`I deleted ${args[0]} message!`).then(msg => msg.delete(3500));

            }else{

                message.channel.send(`I deleted ${args[0]} messages!`).then(msg => msg.delete(3500));

            }


        }); 


   } else {
       return message.reply("please enter an amount of numbers!");
   }


    








}

module.exports.help = {
  name: "clear"

}