const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {
console.log(`|----> Commandes personnalisé utilisé sur le serveur :  ${message.guild.name} `)


    let Embed = new Discord.MessageEmbed()
    .setTitle('<:NFR_Rinnesharingan:760580209036230669>** DRISSS LE  THUG**')
    .setImage('https://media1.giphy.com/media/rLqFjZsMt9PYzOiY36/giphy.gif')


   message.channel.send(Embed)

}


   module.exports.config = {
    name: 'driss'
}