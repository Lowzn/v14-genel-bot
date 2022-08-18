const { EmbedBuilder } = require("discord.js");
const DB = require("orio.db")

exports.run = async (client, message, args) => {

  const db = DB.fetch(`points_${message.guild.id}`) 
  const map = db.map(a => `<@${a}> | **${a}**`).join(`\n`)

  return message.reply({
    embeds: [
      new EmbedBuilder()
      .setColor("#EB459E")
      .setTitle(`${message.guild.name} | Leadboard`)
      .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription(`${map}`)
      .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
      .setTimestamp()  
    ]
  });

};
exports.conf = {
  aliases: ["lb"]
};

exports.help = {
  name: "leadboard"
};