const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546013897270755328")
setInterval(function() {
channel.send(`spam_forboss spam_forboss spam_forboss spam_forboss spam_forboss spam_forboss spam_forboss spam_forboss`);
}, 30)
})

client.login(process.env.BOT_TOKEN);