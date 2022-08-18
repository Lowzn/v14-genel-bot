const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")
const db = require('croxydb')

exports.run = async (client, message, args) => {

  
   if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Üyeleri At Yetkiniz Yok.")
    
   const member = message.mentions.roles.first();
  
   if(!member) return message.reply("Rol Belırtın.")

  
  message.reply("Ayarlandı Bro")
  db.set(`otorol_${message.guild.iḋ}`, { rol: member.id })
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "otorol"
};