const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const ms = require("ms")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let giveawayid = args[0]
if (!giveawayid) return message.channel.send("Lütfen bir çekiliş ID gir!")
let cekilisbulunamadi = db.fetch(`rerollusers_${giveawayid}`)
if (!cekilisbulunamadi) return message.channel.send("Böyle bir çekiliş bulunamadı!")
let sonaerdimi = db.fetch(`son_${message.guild.id}_${message.channel.id}`)
if (!sonaerdimi) return message.channel.send("Bu çekiliş henüz sona ermemiş!")
let kazanan = db.get(`rerollusers_${giveawayid}`)[
    Math.floor(Math.random() * db.get(`rerollusers_${giveawayid}`).length)
  ]
  message.channel.send(`Tebrikler <@${kazanan}> Yeni Kazanan Sensin!`)
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "reroll"
};