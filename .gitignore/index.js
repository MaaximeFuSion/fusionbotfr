const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("FS Team | .help");
    console.log("Bot > ON");
});

bot.login(process.env.TOKEN)

//serverlist
if(message.content === '.serverlist')
{
    message.channel.send(client.guilds.map(r => "**" + r.name + `** | **${r.memberCount}** member | **` + r.owner + '**'))
}

    });
