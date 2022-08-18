const {EmbedBuilder, PermissionsBitField} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {

 if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let hgbb = message.mentions.channels.first()
  if(!hgbb) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
  
  

    
    message.reply("ayarlandı")

  db.set(`hgbb_${message.guild.id}`, hgbb.id)
  


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "public-hg-bb"
};