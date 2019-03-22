const Discord = require("discord.js");

var bot = new Discord.Client();

const client = new Discord.Client();

var PREFIX = ".";

bot.on("ready", function() {
    bot.user.setGame("V1.1, .help");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "help":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'Commandes :',
                description: 'Commandes disponibles avec ce bot :',
                fields: [{
                    name: ".invite",
                    value: "Envoie le lien d'invitation du serveur.",
                    inline: false
                }],
                
                [{
                    name: "test",
                    value: "Test",
                    inline: false
                }],
                [{
                    name: ".dev",
                    value: "Vous dit qui à crée ce bot !",
                    inline: false
                }],
        }
        });
        break;
    }
});

bot.login(process.env.TOKEN);
