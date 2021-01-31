const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    console.log(`|----> Commandes personnalisé utilisé sur le serveur :  ${message.guild.name} `)


    let Embed = new Discord.MessageEmbed()
        .setTitle('<a:NFR_Madara:776369033166454784>** MADARA EN SUEURR**')
        .setImage('https://media0.giphy.com/media/0rymUzwiVOgdgZlCvi/giphy.gif')


    message.channel.send(Embed)

}

module.exports.config = {
    name: 'kimitshi'
}