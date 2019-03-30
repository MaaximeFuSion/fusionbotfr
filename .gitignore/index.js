const Discord = require("discord.js");

const client = new Discord.Client();

const OwnerID = '470594792368242699';

var prefix = "/";

client.on("ready", () => {
    client.user.setActivity("/aide", { type: "STREAMING", url: "https://www.twitch.tv/yannfusionfr" })
    client.user.setStatus("dnd")
})

function isNumber(x) 
{
    return !isNaN(parseFloat(x)) && isFinite(x);
}

//nombre aléatoire
function aleatoire(min, max) 
{ 
    return (Math.floor((max-min)*Math.random())+min); 
}

client.on('message', message =>
{

    if (message.content.startsWith("/staff"))
    {
        
        
            var embed = new Discord.RichEmbed()
            .setTitle("Liste Du Staff")
            .setDescription("Voici la liste du staff :")
            .addField("👑 Propriétaire :", "Yann")
            .addField("👑 Managers :", "Emer16 / MaaximeFS")
            .addField("⚙️  Responsables :", "Aucun")
            .addField("💻  Développeur :", "{.L.O.S.T.} / Yann")
            .addField("⚙️ Administrateurs :", "Coco / Nestor IV")
            .addField("🔨 Modérateurs :", "Aucun")
            .addField("💚 Amis :", "Bregels / Yanis")
            .setFooter("Commande : /staff | Crée par Yann")
            .setAuthor("Commande Staff : Besoin de savoir toutes les commandes ? /aide !")
            .setColor("#a90000")
            .setThumbnail(client.user.avatarURL)
            message.channel.sendEmbed(embed)
        }

        if (message.content.startsWith("/aide"))
        {
            var embed2 = new Discord.RichEmbed()
            .setTitle("Commande D'aide")
            .setDescription("Voici les commandes du bot :")
            .addField("<a:confirmed:532561939587399684> /staff", "Affiche la liste du staff de ce serveur")
            .addField("<a:confirmed:532561939587399684> /info", "Affiche des informations sur le serveur !")
            .addField("<a:confirmed:532561939587399684> /link", "Affiche les liens OFFICIELS de la Fusion !")
            .addField("<a:confirmed:532561939587399684> /invite", "Envoie le lien d'invitation du serveur !")
            .addField("<a:confirmed:532561939587399684> /bot", "Donne des informations sur le bot !")
            .addField("<a:confirmed:532561939587399684> /site", "Cette commande vous permet d'accèder au site de la Fusion !")
            .addField("<a:confirmed:532561939587399684> /stats", "Donne des informations sur vous (DEV)")
            .addField("🔨 /cstaff", "Commandes du staff")
            .setFooter("Commande /aide | Crée par Yann")
            .setColor("#a90000")
            .setThumbnail(client.user.avatarURL)
            .setAuthor("Commande principale du bot")
            message.channel.sendEmbed(embed2)
        }

        if (message.content.startsWith("/link"))
        {
            var embed4 = new Discord.RichEmbed()
            .setTitle("Voici les réseaux sociaux de la Fusion")
            .setDescription("Liste des réseaux sociaux :")
            .addField("<:YouTube:540259969522728990> Youtube Yann :", "https://www.youtube.com/channel/UC9CvWxJMXlg3K7p9mfHnxJQ")
            .addField("<:Twitter:540259969954611200> Twitter Fusion :", "https://twitter.com/TeamFusionOFF")
            .addField("<:Twitter:540259969954611200> Twitter Yann :", "https://twitter.com/YannFusionOff")
            .setFooter("Commande : /link | Crée par Yann")
            .setThumbnail(client.user.avatarURL)
            .setColor("#e30000")
            .setAuthor("Commande Link : Besoin de savoir toutes les commandes ? /aide !")
            message.channel.sendEmbed(embed4)
        }

        if (message.content === '/invite')
{
    message.reply("Regarde tes MP, je vais t'envoyer un message")
    message.member.createDM().then(channel =>
    {
        var embed = new Discord.RichEmbed()
        .setTitle("<a:rnbnitro:529008838817611776> Lien d'invitation du serveur :")
        .setDescription("Lien : https://discord.gg/YMHvkqa")
        .setFooter("Commande /invite | Crée par Yann")
        .setThumbnail(client.user.avatarURL)
        .setAuthor("Commande Invite : Besoin de savoir toutes les commandes ? /aide !")
        channel.sendEmbed(embed)
    })
}

        if (message.content.startsWith("/bot"))
        {
            var embed5 = new Discord.RichEmbed()
            .setTitle("Informations sur le Bot :")
            .setDescription("Voici des informations sur le bot !")
            .addField("Bot : ", "FusionBot")
            .addField("Nombre de serveurs : ", client.guilds.size)
            .addField("Créateurs : ", "Yann & {.L.O.S.T.}")
            .setFooter("Commande /bot | Crée par Yann")
            .setAuthor("Commande Bot : Besoin de savoir toutes les commandes ? /aide !")
            message.channel.sendEmbed(embed5)
        }

        if (message.content.startsWith("/partenaires"))
        {
            var embed7 = new Discord.RichEmbed()
            .setTitle("Liste des partenaires du serveur :")
            .setDescription("Voici la liste de TOUTS les partenaires de la Fusion :")
            .addField("<a:rnbpartner:529008860376334347> BanDgi", "Cornalia : https://discord.gg/59sYTtg")
            .addField("<a:rnbpartner:529008860376334347> Goku", "Zarconia : https://discord.gg/aN44ftD")
            .addField("<a:rnbpartner:529008860376334347> {.L.O.S.T.}", "TBZ'Server : https://discord.gg/2CbSxn8")
            .setFooter("Commande /partenaires | Crée par Yann")
            message.channel.sendEmbed(embed7)
        }

        if (message.content.startsWith("/clear"))
    {
        let splitMessage = message.content.split(" ")
        if (!splitMessage[1])
            return message.reply("You don't indicated number of message you want to delete")
        if (!isNumber(splitMessage[1]))
            return message.reply("You don't indicated number")
        if (!message.guild.member(message.author).hasPermissions("ADMINISTRATOR"))
            return message.reply("You don't have require permission\nPermission require: `ADMINISTRATOR`")
        message.channel.bulkDelete(splitMessage[1])
        message.reply(splitMessage[1] + " messages supprimés")
    }


        if (message.content.startsWith("/cstaff"))
        {
            if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
    return message.reply("Tu n'as pas la perm : **ADMIN**, tu ne peut donc pas effectuer la commande")
    
            var embed6 = new Discord.RichEmbed()
            .setTitle("Commandes du staff")
            .setDescription("Voici les commandes du staff : (les crochets ne doivent pas être mis)")
            .addField("💬 /clear [Nombre de messages]", "Supprime le nombre de message demandé")
            .addField("🔨 /kick [Utilisateur]", "Expulse le membre mentionné")
            .addField("🔨 /ban [Utilisateur]", "Ban l'utilisateur mentionné")
            message.channel.sendEmbed(embed6)
        }

        if (message.content.startsWith(`/kick`))
    {
        mention = message.mentions.users.first();
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
            return message.reply("You don\'t have permission to use this\nPermission require: `KICK_MEMBERS`")
        if (!mention)
            return message.reply('Nobody mentionned')
        let kickmember = message.guild.member(mention)
        if (!kickmember)
            return message.reply("This member don't exist or is impossible to kick")
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
            return message.reply("I don't have permission `KICK_MEMBERS` for make this")
        kickmember.kick().then(member =>
            {
                message.reply(`${member.user.username} à été kick du serveur !`)
                message.channel.send(`**${member.user.username}** à été kické par **` + message.author.username + '**')
            })
    }

    if (message.content.startsWith(`/ban`))
    {
        mention = message.mentions.users.first();
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
            return message.reply("Tu ne possède pas la permission : **BAN**")
        if (!mention)
            return message.reply('Aucune personne mentionnée')
        let banmember = message.guild.member(mention)
        if (!banmember)
            return message.reply("Je ne peut pas bannir cette personne")
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
            return message.reply("Je ne possède pas la permission **BAN**, je ne peut pas effectuer cette commande")
        banmember.ban().then(member =>
            {
                message.reply(`${member.user.username} à été banni`)
                message.channel.send(`**${member.user.username}** à été banni par **` + message.author.username + '**')
            })
    }

        if (message.content.startsWith("/site"))
        {
            var storefs = new Discord.RichEmbed()
            .setTitle("Voici le site de la Fusion")
            .setDescription("Clique sur le lien en dessous pour accèder au site de la Fusion !")
            .addField("Lien : ", "https://fusionofficial-34.webself.net/accueil")
            .setAuthor("Commande /site | Crée par Yann")
            message.channel.sendEmbed(storefs)
        }

        if (message.content.startsWith("/kill"))
        {
            var kill = new Discord.RichEmbed()
            .setTitle("Tu neut peut pas te /kill")
            .setDescription("Tu ne possède pas les permissions nécessaires :/")
            .setFooter("Sale merde, pourquoi veut tu te tuer ? Tu es dépressif a ce point ?!")
            message.channel.sendEmbed(kill)
        }

        if (!message.content.startsWith(prefix)) return;
 
        var args = message.content.substring(prefix.length).split(" ");
     
        switch (args[0].toLowerCase()) {
            case "stats":
     
            var userCreateDate = message.author.createdAt.toString().split(" ");
            var msgauthor = message.author.id;
     
            var stats_embed = new Discord.RichEmbed()
     
            .setColor("#3300FF")
            .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
            .addField(`ID de l'utilisateur :id:` , msgauthor, true)
            .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
            .setThumbnail(message.author.avatarURL)
            message.reply("Tu peux regarder tes messages privés ! Tu viens de recevoir tes statistiques !")
            message.author.send({embed: stats_embed});
            break;
        } 


        if (message.content.startsWith('/info')) {
            const serverembed = new Discord.RichEmbed()
            .setTitle('ServerInfo')
            .setAuthor(message.author.username, '')
            .setColor('#FF0000')
            .setDescription("Voici des informations sur le serveur :")
            .addField('Nombre de membres :',  message.guild.memberCount)
            .addField('Crée le:', message.guild.createdAt)
            .setImage(message.guild.iconURL)
            .setThumbnail(client.user.avatarURL)
            .setTimestamp()
            .setURL('https://www.youtube.com/channel/UC9CvWxJMXlg3K7p9mfHnxJQ')
            .addField('Server name', message.guild.name)
            .addField('Fondateur', message.guild.owner)
            .addField('Region', message.guild.region)
            .addField('Nombre de categorie et de salons' , message.guild.channels.size)
            .addField('Protection du serveur: ', message.guild.verificationLevel + ' :eyes:', true)
            .setFooter("Commande /info | Crée par Yann & Baril ")
            message.channel.sendEmbed(serverembed)
        }

        if (message.content.startsWith(prefix) && message.author.id === OwnerID){
            if (message.content.startsWith('/setgame')) {
                let NewGame = message.content.slice(8);
                client.user.setGame(NewGame);
            }}

            if (message.content.startsWith('/shutdown') && message.author.id === OwnerID){
                message.channel.sendMessage('Allons au bout des choses... :D');
                client.destroy();
            }
    
            if (message.content === '/dice')
        {
            var nb_dice = aleatoire(1, 7);
          message.channel.send(nb_dice)
        }

        if (message.content.startsWith("/annonce"))
        {
            let splitMessage = message.content.split("-")
            let channel = message.mentions.channels.first();
            if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
                return message.reply("Tu ne possède pas la permission requise :/\nPermission requise : `ADMIN / RESPONSABLE`")
            if (!splitMessage[1])
                return message.reply("\nChannel missed\n/annonce -[channel] -[question]")
            if (!channel)
                return message.reply("Ce salon n'existe pas ! Réessaye avec un salon valide")
            if (!splitMessage[2])
                return message.reply("\nQuestion missed\n/annonce -[channel] -[question]")
            client.channels.get(channel.id).send("@everyone")
            var sondage_embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.username)
            .setTitle("Annonce Officielle de la Fusion :")
            .setDescription(splitMessage[2])
            .setTimestamp()
            .setFooter("Commande /sondage | Dev par Yann & {.L.O.S.T.}")
            client.channels.get(channel.id).sendEmbed(sondage_embed).then(message =>
                {
                    message.react("✅")
                })
            return;
        }

//serverlist
if(message.content === '/serverlist')
{
    message.channel.send(client.guilds.map(r => "**" + r.name + `** | **${r.memberCount}** member | **` + r.owner + '**'))
}

    });

bot.login(process.env.TOKEN);
