const Discord = require("discord.js");

var bot = new Discord.Client();

client.on("ready", () => {
    client.user.setActivity(".aide | V1.1", { type: "STREAMING", url: "https://www.twitch.tv/yannfusionfr" })
    client.user.setStatus("dnd")
})

bot.login(process.env.TOKEN);

client.on('message', message =>
{

//serverlist
if(message.content === '.serverlist')
{
    message.channel.send(client.guilds.map(r => "**" + r.name + `** | **${r.memberCount}** member | **` + r.owner + '**'))
}

});
