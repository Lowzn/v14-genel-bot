
const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
        
      
  message.channel.send(`${Math.round(client.ws.ping)} ms`)
    }
   
  


exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};
