const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {



    let embedsupport = new Discord.MessageEmbed()
.setTitle("Un soucis ?")
.addField("Tu peux rejoindre le support du bot a l'invitation : https://discord.gg/myFUHVvVxv "," ou bien nous contacter a l'adresse email suivant : contact@sai-bot.fr ")
.setImage("https://media.giphy.com/media/Cs7S2Pl1LvKhAhocFI/giphy.gif")
.setColor(0xBBA2F7) 
.setFooter('Développer par ! Insom#0009')


message.channel.send(embedsupport)

console.log(`|----> support utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.config = {
    name: 'support'
   }