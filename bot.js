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
        message.reply('عاده مايتم الرد غير بعد دقائق :hearts: ');
      }
});

client.on('message', message => {
    if (message.content === 'باك') {
        message.reply('ولكم يمز نورت ');
      }
});


client.on('message', message => {
    if (message.content === 'برب') {
        message.reply('لا تطول يقلبي ');
      }
});


client.on('message', message => {
    if (message.content === 'وين دنجوان') {
        message.reply('عندو مشاغل يقلبي شوي وجي ');
      }
});


client.on('message', message => {
    if (message.content === 'متا دنجوان يفتح') {
        message.reply('كل ساعه ازا كان حي انشاء الله');
      }
});


client.on('message', message => {
    if (message.content === 'السلام عليكم') {
        message.reply('وعليكم السلام ورحمة الله وبركاته نورت');
      }
});

client.on('guildCreate', guild => {
client.channels.get("ROOM ID").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("ROOM ID").send(`❎ **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes


client.login(process.env.BOT_TOKEN); 
