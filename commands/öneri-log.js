const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

     if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  let log = message.mentions.channels.first()
  if(!log) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
  
  
  

    message.reply("Öneri Kanalı Başarıyla Ayarlandı!")

  db.set(`log31_${message.guild.id}`, log.id)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "öneri-log"
};