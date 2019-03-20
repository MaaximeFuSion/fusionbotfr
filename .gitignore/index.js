const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("V1.1 | .help");
    client.user.setStatus("dnd");
});

bot.login(process.env.TOKEN);

client.on('message', message =>
{

//serverlist
if(message.content === '.serverlist')
{
    message.channel.send(client.guilds.map(r => "**" + r.name + `** | **${r.memberCount}** member | **` + r.owner + '**'))
}

});
