const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");

module.exports.run = async(bot, message, args) => {

    let mentioned = message.mentions.members.first() || message.author
    var options = [

        "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
        "https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif",
        "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
        "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
        "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif", // 5
        "https://media.giphy.com/media/1434tCcpb5B7EI/giphy.gif",
        "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
        "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
        "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
        "https://media.giphy.com/media/XngSZ7e6wBOBG/giphy.gif", // 10
        "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
        "https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif",
        "https://media.giphy.com/media/WynnqxhdFEPYY/giphy.gif",
        "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
        "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif", // 15
        "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif",
        "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
        "https://media.giphy.com/media/ShAchOHe38Aak/giphy.gif",
        "https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif" // 19
    ];

    var response = options[Math.floor(Math.random() * options.length)];
    const kiss = new Discord.MessageEmbed()
        .setDescription(`${mentioned} On dirait que ${message.author} t'a fait un câlin <a:Aila_ScribbleHeart:793220850363007006>`)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
    console.log(`|----> calin utilisé sur le serveur :  ${message.guild.name} `)
}

module.exports.get = {
    name: 'calin'
}