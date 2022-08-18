const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
 let mesaj = args.slice(0).join(" ")
 let log = db.fetch(`log31_${message.guild.id}`)
 if (!log) return message.channel.send("Log kanalı ayarlanmamış!")
if (!mesaj) return message.channel.send("Lütfen önerini yaz!")   
  const embed = new EmbedBuilder()
  .setTitle("Godzilla - Öneri Sistemi!")
  .setDescription(`Öneren: ${message.author}\n\nÖneri: ${mesaj}`)
  .setColor("#007fff")
  client.channels.cache.get(log).send({embeds : [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "öner"
};