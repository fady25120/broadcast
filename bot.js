const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("536389978129956876")
setInterval(function() {
channel.send(`هنا كلام ال سبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);NTM1NTY4MDkwNDE1NDk3MjIz.DyWC9g.DRKe0cnF8QLkIMtEmxDVFMNK4vk
