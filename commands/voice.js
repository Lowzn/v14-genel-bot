const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {

  let voiceAdminSize = message.guild.members.cache.filter(x => x.voice.channel && x.permissions.has(PermissionsBitField.Flags.Administrator)).size || 0
  let voiceUnAdminSize = message.guild.members.cache.filter(x => x.voice.channel && !x.permissions.has(PermissionsBitField.Flags.Administrator)).size || 0
  let voiceSize =    message.guild.members.cache.filter(x => x.voice.channel).size || 0

  return message.reply({
    embeds: [
      new EmbedBuilder()
      .setColor("#EB459E")
      .setTitle(`${message.guild.name} | Voice Infos`)
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription(`Number of Authorized Users: **${voiceAdminSize}**\nNumber of Unauthorized Users: **${voiceUnAdminSize}**\nTotal Users: **${voiceSize}**`)
      .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
      .setTimestamp()  
    ]
  });
    

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "voice"
};