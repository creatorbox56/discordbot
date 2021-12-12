const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODY4MDg2MDg4OTg2NjgxMzc1.YPqiKw.EOR-sAjqksLnqVnJ_Q7i3ZTXoks');
client.on('ready', readyDiscord);
const intents = ["GUILDS", "GUILD_MEMBERS"];
const bot = new Discord.Client({intents: intents, ws:{intents: intents}});

function readyDiscord(){

    console.log("BeepBob");


}



client.on('message', gotMessage);

function gotMessage(msg){

    if(msg.channel.id=='868135624903917578' && msg.content==='!Hey'){
        msg.channel.send(':eyes:');
        //console.log(msg);
    }

    //   if(msg.channel.id=='868135624903917578'){
    //     console.log(`${msg.author.tag} in #${msg.channel.name} sent: ${msg.content}`);
    //     const userReactions = msg.reactions;
    //    // msg.channel.send(':eyes:');
    //     console.log(userReactions);
    // }
}

client.on('guildMemberAdd', (member)  => { 
    console.log("BeepBob2");
    let channelId = '868135624903917578'; 
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to artgate')
    .setDescription(`${member.user.tag} enjoy your time here`)
    client.channels.cache.get(channelId).send(embed)
  })
// client.on('guildMemberAdd', member => {
//     member.send("Welcome!");
// });
// bot.on("guildMemberAdd", (member) => {
//     let channelId = '868135624903917578'; 
//     let welcomembed = new Discord.MessageEmbed()
//         .setAuthor(`${member.user.tag} just joined!`, member.user.avatarURL())
//         .setDescription("Welcome to artgate Server!")
//         .setColor("FF0000");
//     member.guild.channels.cache.get("channelid").send(welcomembed)

//         .catch((err) => console.log(err));
// });