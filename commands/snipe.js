
const db = require("croxydb");
const {EmbedBuilder,  ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

exports.run = async (client, message, args) => {
 
 const as = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!as) {
    const embed2 = new EmbedBuilder()
  .setDescription(`Mesaj bulunamadı!`)

    message.channel.send({embeds: [embed2]});
          } else {
  let kullanıcı = client.users.cache.get(as);
  const ds = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new EmbedBuilder()
  .setDescription(`Silen: ${kullanıcı}\nSilinen mesaj: ` + ds)
  message.channel.send({embeds: [embed]}) 
}
  
}

exports.conf = {
  aliases: []
};

exports.help = {
  name: "snipe"
};
