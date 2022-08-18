const {ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
const db = require("croxydb")
const config = require("../config.js")
const prefix = config.prefix
exports.run = async (client, message, args) => {
	let tit = message.content.slice(prefix.length + 'ticket-oluştur'.length);
	if(!tit.includes("+")) return message.reply("!ticket-oluştur Buton Yazısı + Embed Yazısı")
        let tit2 = tit.split('+');
 
	
  let hm = await db.get("destek"+ message.guild.id)
  if(!hm) return message.channel.send('Destek Rolü Ayarlamadan Menüyü Göremezsin.')
  let hm2 = await db.get(`log_${message.guild.id}`)
  if (!hm2) return message.channel.send("Ticket logu ayarlamadan menüyü göremezsin.")
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
				.setLabel(`${tit2[0]}`)
				.setStyle(ButtonStyle.Primary)
				.setCustomId("ticket")
			)
			const embed = new EmbedBuilder()
			.setTitle("Godzilla - Destek Sistemi!")
			.setDescription(`${tit2[1]}`)
			.setColor(0x0099ff)
		
        message.channel.send({embeds: [embed], components: [row]})
    }
	exports.conf = {
	  aliases: []
	};
	
	exports.help = {
	  name: "ticket-oluştur"
	};