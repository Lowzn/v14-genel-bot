const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let animEmotes = [], staticEmotes = [];
message.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}:${x.id}>`);
})
const msg = new Discord.EmbedBuilder()
.setTimestamp()
.setColor('#a400ff')
.setTitle(`${message.guild.name}, Sunucusunun emojileri. \n\n `)
.setDescription(`${animEmotes}, ${staticEmotes}`)
message.reply({embeds : [msg]})

    };
exports.conf = {
  aliases: ['emojiler']
};

exports.help = {
  name: "emojiler"
};