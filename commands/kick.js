const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")

exports.run = async (client, message, args) => {

  
   if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Üyeleri At Yetkiniz Yok.")
    
   const member = message.mentions.members.first();
  
   if(!member) return message.reply("Lütfen Atılacak   Kişiyi Belirtiniz.")

  
   member.kick();
  
  message.reply(" Atıldı! ")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kick"
};
