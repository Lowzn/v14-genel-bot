const Discord  = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, msg, args) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let boost = msg.guild.premiumSubscriptionCount;
        let aktif = msg.guild.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
        const owner = msg.guild.members.cache.get(msg.guild.ownerId);
let sunucu = new Discord.EmbedBuilder()
.setDescription(`Sunucu İsmi: ${guild.name}\nSunucu ID: ${msg.guild.id} \nSunucu Sahibi: ${owner.user.tag} \nKuruluş Tarihi: ${checkDays(msg.guild.createdAt)}`)

return msg.channel.send({embeds : [sunucu]});

};   

exports.conf = {
    aliases: ['sunucu-bilgi','server-info'],
  };
  
  exports.help = {
    name: 'sunucu-bilgi',
  
  };