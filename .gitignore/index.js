const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    client.user.setActivity("V1.1 Bêta | .help", { type: "STREAMING", url: "https://www.twitch.tv/yannfusionfr" })
    console.log("Bot > ON");
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
