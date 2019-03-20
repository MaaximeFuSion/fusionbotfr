const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("FS Team | .help");
    console.log("Bot > ON");
});

bot.login("NTU3OTcyODEzMjk4Nzk0NDk3.D3QEcg.A16Qk71OEz-cYUQf-2Y7gR4LbC8");
