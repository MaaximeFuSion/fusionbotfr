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
                title: 'Dev  :',
                description: 'Développeur FusionMOD / FusionHELP',
                fields: [{
                    name: "Voici le développeur de... **moi**",
                    value: "YannFusion#7804",
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

bot.on('message', function (message){
  if (message.content === prefixs + "discinv"){
      var help_embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle("Lien d'invitation du discord")
     .addField('Nom du serveur','[Cliquez ici ](https://discord.gg/dPw4rd9)%27)
     .setFooter("Invitation du discord - MAJ le 25/03/19")
      message.channel.send(help_embed)
      console.log("LOG : L'invitation du discord à été envoyer dans " + message.guild.name + "' par " + message.author.username + "");
    }
  })

bot.login(process.env.TOKEN);
