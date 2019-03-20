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
        message.channel.send("Tien ! Petit cadeau :D");
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: '',
                fields: [{
                    name: "Lien d'invitation du serveur",
                    value: "https://discord.gg/YU2yw6e",
                    inline: false
                }],
                footer: {
                    footer: "Partagez ce lien à vos amis !",
            },
        }
        });
        break;
    }
});

bot.login(process.env.TOKEN);
