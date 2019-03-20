const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("FS Team | .help");
    console.log("Bot > ON");
});

bot.login(process.env.TOKEN)
