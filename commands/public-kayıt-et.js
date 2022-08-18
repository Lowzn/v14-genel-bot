const {EmbedBuilder, PermissionsBitField} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

 if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 let users = message.mentions.users.first();
  let kayıtlı = db.fetch(`kayıtlı_${message.guild.id}`)
  if (!kayıtlı) return message.channel.send("Kayıtlı rolü ayarlanmamış!")
   let erkek = db.fetch(`erkek_${message.guild.id}`)
   if (!erkek) return message.channel.send("Erkek rolü ayarlanmamış!")
    let kız = db.fetch(`kız_${message.guild.id}`)
    if (!kız) return message.channel.send("Kız rolü ayarlanmamış!")
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
if (!kayıtsız) return message.channel.send("Kayıtsız rolü ayarlanmamış!")
  let hgbb = db.fetch(`hgbb_${message.guild.id}`)
  if (!hgbb) return message.channel.send("Hoşgeldin kanalı ayarlanmamış!")
    if (!users) return message.channel.send("Lütfen bir kullanıcı etiketle!")
  const row = new Discord.ActionRowBuilder()
  .addComponents(
  new Discord.ButtonBuilder()
    .setLabel("Erkek")
    .setStyle(Discord.ButtonStyle.Success)
    .setCustomId("erkek"),
    new Discord.ButtonBuilder()
    .setLabel("Kız")
    .setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("kız")
  )
  const embed = new EmbedBuilder()
  .setTitle("Godzilla - Public Kayıt Sistemi!")
  .setDescription("Kullanıcıyı nasıl kayıt etmek istiyorsun?")
  message.channel.send({embeds: [embed], components: [row]}).then(mesaj => {
    mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "erkek") {

          let message = interaction.message
          message.delete()
           message.guild.members.cache.get(users.id).roles.add(erkek)
           message.guild.members.cache.get(users.id).roles.add(kayıtlı)
           message.guild.members.cache.get(users.id).roles.remove(kayıtsız)
          }
       if (interaction.customId == "kız") {
    
         
          let message = interaction.message
          message.delete()
           message.guild.members.cache.get(users.id).roles.add(kız)
           message.guild.members.cache.get(users.id).roles.add(kayıtlı)
           message.guild.members.cache.get(users.id).roles.remove(kayıtsız)
          }
          })
        })
          
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kayıt-et"
};  