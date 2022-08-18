const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const database = require("croxydb")
exports.run = async (client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonerol = await database.fetch(`abone.${message.guild.id}`)
let users = message.mentions.users.first();

 
  if(!abonerol) return message.channel.send("abone rol ayarlamamışın")
  
  
  if(!aboneyetkilisi) return message.channel.send("abone yetkilisi ayarlamamisin")
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send("abone yetkilisi rolün yok")
  if(!message.mentions.users.first()) return message.channel.send("birini etiketle ")
  
 
  const buton = new Discord.ActionRowBuilder()
  .addComponents(
    new Discord.ButtonBuilder()
  .setLabel("Abone Rolü Ver")
  .setEmoji("<:YouTube:998280961714298900> ")
  .setCustomId("abone")
.setStyle(Discord.ButtonStyle.Secondary),
 new Discord.ButtonBuilder()
  .setLabel("Abone Rolünü Al")
  .setEmoji("<:YouTube:998280961714298900> ")
  .setCustomId("aboneal")
 .setStyle(Discord.ButtonStyle.Secondary),
 new Discord.ButtonBuilder()
  .setLabel("Geri Dön")
  .setEmoji("<a:hayir:962617545796501534>")
  .setCustomId("iptal")
  .setStyle(Discord.ButtonStyle.Danger),
  )
  const em = new EmbedBuilder()
  .setTitle("Godzilla - Abone Rol Sistemi!")
  .setDescription(`Abone Rolü Ver belirtilen kullanıcıya abone rolü verirsiniz.
  İşlemi İptal Etmek İçinde Geri Dön Butonuna Basın.
  
  Evet, şimdi ${user} kullanıcısında uygulamak istediğiniz işlem için butonlar ile etkileşime geçiniz.
  
 `)
 .setColor("#f74d4d")
 message.channel.send({embeds: [em], components: [buton]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "abone") {
    
          const embedd = new EmbedBuilder()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("#f74d4d")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
  const embed = new EmbedBuilder()
  .setTitle(`Godzilla - Abone Rol Sistemi!`)
.setDescription(`${user} Kullanıcısına Abone Rolü Başarıyla Verildi!`)
   .setColor(`#f74d4d`)


 msg.edit({embeds: [embed], components: []})

 message.guild.members.cache.get(users.id).roles.add(abonerol)
        }
        
        if (interaction.customId.includes(`aboneal`)) {
          
          const embedd = new Discord.EmbedBuilder()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
      .setColor(`#f74d4d`)
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            const embed = new EmbedBuilder()
.setTitle("Godzilla - Abone Rol Sistemi!")
.setDescription(`${user} Kullanıcısından Abone Rolü Başarıyla Alındı!`)
 .setColor(`#f74d4d`)
msg.edit({embeds: [embed], components: []})
message.guild.members.cache.get(users.id).roles.remove(abonerol)
        }
    
        if (interaction.customId.includes(`iptal`)) {
         
          const embedd = new Discord.EmbedBuilder()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
         .setColor(`#f74d4d`)
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
          const embed = new EmbedBuilder()
            .setTitle("Godzilla - Abone Rol Sistemi!")
            .setDescription(`İşlem Başarıyla İptal Edildi`)
           .setColor(`#f74d4d`)
            msg.edit({embeds: [embed], components: []})
        }
})
   })
 
}
  
   

exports.conf = {
  aliases: []
};

exports.help = {
  name: "a"
};