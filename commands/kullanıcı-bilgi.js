const Discord = require('discord.js');
const db = require('croxydb')
const moment = require("moment");
const limit = new Map();
moment.locale("tr");

exports.run = (client, message, args) => {
 var member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
  const embed = new Discord.EmbedBuilder() 
  .setDescription(`**➥ Kullanıcı Bilgileri**
        
• Kullanıcı: (<@${member.id}> - \`${member.id}\`) (${message.member.roles.highest})
• Hesap Kurulum Tarihi: \`${moment(message.member.createdAt).format('D MMMM YYYY')}\`
• Sunucuya Katılma Tarihi: \`${moment(message.member.joinedAt).format('D MMMM YYYY')}\`
`)
  message.reply({ embeds: [embed]})
  

  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı-bilgi'
};