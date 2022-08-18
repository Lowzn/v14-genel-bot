
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.bot) return;
 

    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
    
let user = await client.users.fetch(userid);

    
  let embed = new Discord.EmbedBuilder()

.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
 
  

 message.channel.send({embeds: [embed]})
    
}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "avatar"
};