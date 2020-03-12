const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "I Z")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
  console.log(`Start : ${client.user.tag}!`);
client.user.setGame(`حالة البوت`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login("Njg1ODQzMTQ2ODU2MjAyMjU1.Xmog9w.rhrtftIIS0GCvLJVB9R5OHjOoEQ");
