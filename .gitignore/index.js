const Discord = require("discord.js");

var bot = new Discord.Client();

const client = new Discord.Client();

var PREFIX = ".";

bot.on("ready", function() {
    bot.user.setGame("V1.1 | .help");
    bot.user.setStatus("dnd");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("Test");
        break;
    }
});

bot.login("NTU3OTcyODEzMjk4Nzk0NDk3.D3QEcg.A16Qk71OEz-cYUQf-2Y7gR4LbC8");
