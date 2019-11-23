const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    // sps steen papier schaar

    if(!args[0]) return message.channel.send("Please use this command like this: !rps <rock, paper, scissors>");

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)]; 

       
    

    
  if(args[0] == "rock"){

    if(result == "paper"){

         message.channel.send(`I got ${result} :notepad_spiral:, I win!`);

    }else if(result == "scissors"){
     
        message.channel.send(`I got ${result} :scissors:, you win!`);
    }else if(result == "rock"){
        message.channel.send(`I got ${result} :moyai:, it's a draw!`);
     

          
    

 }
 
    
} 
else if(args[0] == "paper"){

    if(result == "rock"){

         message.channel.send(`I got ${result} :moyai:, you win!`);

    }else if(result == "scissors"){
     
        message.channel.send(`I got ${result} :scissors:, I win!`);
    }else if(result == "paper"){
        message.channel.send(`I got ${result} :notepad_spiral:, it's a draw!`);
     

          
    

 }
 
    
} 
else if(args[0] == "scissors"){

    if(result == "paper"){

         message.channel.send(`I got ${result} :notepad_spiral:, you win!`);

    }else if(result == "scissors"){
     
        message.channel.send(`I got ${result} :scissors:, it's a draw!`);
    }else if(result == "rock"){
        message.channel.send(`I got ${result} :moyai:, I win!`);
     

          
    

 }
 
    
} 




}

module.exports.help = {
  name: "rps"

}