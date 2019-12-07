const discord = require("discord.js");
const botConfig = require("./botconfig.json");



const fs = require("fs");
 
const bot = new discord.Client();
bot.commands = new discord.Collection(); 

fs.readdir("./commands/", (err, files) => {

 if(err) console.log(err); 


 var jsFiles = files.filter(f => f.split(".").pop() === "js"); 

  if (jsFiles.length <= 0) {
     console.log("Cannot find files");
     return; 



  }


   jsFiles.forEach((f,i) => {

    var fileGet = require(`./commands/${f}`);
    console.log(`The file ${f} has loaded `);

    bot.commands.set(fileGet.help.name, fileGet); 




   })




});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is now online!`)

    bot.user.setActivity("!help", { type: "PLAYING" });

});


bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "§ Member");

    if (!role) return;


    member.addRole(role); 

    const channel = member.guild.channels.find("name", "hi-and-bye");

    if (!channel) return;

    channel.send(`Welcome in our server ${member}! \n **Type !help for more information!**`);





});


var swearWords = ["fuck", "shit", "omg", "nigger", "nigga", "nibba", "cancer", "dick", "pussy", "dumbass", "fy", "ligma", "gay"];


bot.on("message", async message => {

    //Als dit stuurt, stuur dan dat

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments); 

    var msg = message.content.toLowerCase(); 

    for(var i = 0; i < swearWords.length; i++) {

    if(msg.includes(swearWords[i])) {

     message.delete();

     return message.channel.send("Please do not swear!").then(msg => msg.delete(3000)); 




    }




}





  



   

    


 





});


bot.login(process.env.token);
