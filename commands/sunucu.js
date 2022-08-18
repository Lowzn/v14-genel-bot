const { EmbedBuilder } = require("discord.js")
const config = require("../config.js")
const request = require('request');
exports.run = async (client, message, args) => {

 let ip = args[0]
 if (!ip) return message.reply("Lütfen bir minecraft sunucu ip gir!")
request(`https://api.mcsrvstat.us/2/${ip}`, function (error, response, body) {
  const json_body = JSON.parse(body);
  const onlinePlayers = json_body.players.online;
       const embed = new EmbedBuilder()
       .setTitle("Minecraft - Godzilla")
       .setDescription(`${ip} Sunucusunda ${onlinePlayers} Aktif!`)
       .setColor("#ff0000")
  message.channel.send({embeds: [embed]})
})

}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "sunucu"
}