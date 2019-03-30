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
                    name: "Voici les commandes disponibles :",
                    value: "**.invite**\nEnvoie le lien d'invitation du serveur.\n **.dev**\n Vous affichera qui à crée le bot.",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "dev":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'Dev V1.1.2 :',
                description: 'Développeur FusionMOD / FusionHELP',
                fields: [{
                    name: "YannFusion (*Fondateur*) & Friandise (*Partenaire & Dev*)",
                    value: "*Powered By* **FusionOFF**",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "mod":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'mod',
                description: 'Commande non disponible',
                fields: [{
                    name: "Accès refusé",
                    value: "Accès requis : **MOD**",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "modhelp":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'modhelp',
                description: 'Commande non disponible',
                fields: [{
                    name: "Accès refusé",
                    value: "Accès requis : **MOD**",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: 'Invitation du discord  :',
                description: ' ',
                fields: [{
                    name: "https://discord.gg/dPw4rd9",
                    value: "*Propulsé par FusionOFF, Dev by Friandise*",
                    inline: false
                }]
        }
        });
        break;
    }
});

bot.on('message', function (message){

  if (message.content === prefixs + "discinv"){
    var disc_embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setTitle("En développement !")
     .setImage(" https://cdn.discordapp.com/attachments/502459000315707393/509313341655613441/rainbow.gif ")
      message.channel.send(disc_embed).then(msg => msg.delete (10000)) 
    }
})

bot.login(process.env.TOKEN);
