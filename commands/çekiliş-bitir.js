const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const ms = require("ms")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let giveawayid = args[0]
let kanalid = args[1]
let cekilisbulunamadi = db.get(`cekilis.${message.guild.id}_${giveawayid}`)
let data = db.get(`cekilis.${message.guild.id}_${kanalid}`);
let sonlanmadı =  db.get(`sonlanmadı_${message.guild.id}_${giveawayid}`)
if (!giveawayid) return message.reply("Lütfen bir çekiliş ID gir!")
if (!kanalid) return message.reply("Lütfen çekilişin olduğu kanal ID gir!")
if (!cekilisbulunamadi) return message.reply("Böyle bir çekiliş bulunamadı!")
let win = client.channels.cache.get(kanalid)
if(win){
  win = await win.messages.fetch(giveawayid).then(a => a.reactions.cache.get("🎉").users.fetch())
} 
if(win){
let toplam = data.toplam
             
let won = []
let winner = []
for(let i = 0; i < toplam; i += 1){
    await client.channels.cache.get(kanalid).messages.fetch(giveawayid).then(a => a.reactions.cache.get("🎉").users.fetch()).then(a => a.map(u => {
      if (!u.bot) {
      won.push("<@"+ u.id + ">");
      db.push(`kullanıcı_${giveawayid}`, u.id);
      }}))

     let kazanan = won[Math.floor(Math.random() * won.length)]

      if(!winner.map(cs => cs).includes(kazanan))
      winner.push(kazanan)
      }
      const row = new Discord.ActionRowBuilder()
      .addComponents(
      new Discord.ButtonBuilder()
        .setLabel("Reroll")
        .setStyle(Discord.ButtonStyle.Success)
        .setCustomId("rerolls")
      )
const embed = new EmbedBuilder()
.setTitle(data.odul)
.setColor("#5865f2")
.setTimestamp()
.setDescription(`
Sona Erdi: <t:${Math.floor(Date.now() /1000)}:R> (<t:${Math.floor(Date.now() /1000)}:f>)
Düzenleyen: <@${data.hosted}>
Kazanan: ${winner.join(", ")}`)
let kanal = message.guild.channels.cache.get(data.kanalid);
kanal.messages.fetch(data.mesajid).then(async mesaj => {
mesaj.edit({embeds: [embed], components: [row]})
kanal.send(`Tebrikler ${winner} **${data.odul}** Kazandın!`)
db.delete(`cekilis.${message.guild.id}_${message.channel.id}`);
})

} else {
    db.delete(`cekilis.${message.guild.id}_${message.channel.id}`);
    message.reply("bir hata oluştu!")
}
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "bitir"
};