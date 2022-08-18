const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const embed = new EmbedBuilder()
.setTitle("Godzilla - Rol Al Sistemi!")
.setDescription("Kurulumu yapmak için aşağıdaki butona basabilirsin!")
.setColor("#ff0000")
const row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.ButtonBuilder()
.setLabel("Kurulum Yardımcısı!")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kurulum")
)
  message.reply({embeds: [embed], components: [row], ephemeral: true})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "menülü-rol"
};  