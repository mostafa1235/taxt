const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-"
  

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`pixel Bot- Script By : Hamo-zine-lizer`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Zine-Hamo-lizer ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | ${client.guilds.size} Servers `,"http://twitch.tv/Pixel Bot")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if (message.content === 'دنجوان') {
        message.reply('قلب دنجوان ');
      }
});

client.on('message', message => {
    if (message.content === 'باك') {
        message.reply('ولكم ');
      }
});


client.on('message', message => {
    if (message.content === 'برب') {
        message.reply('في دهيه ');
      }
});



client.login(process.env.BOT_TOKEN); 
