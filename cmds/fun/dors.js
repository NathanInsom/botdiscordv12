const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {

    var options = [
        "https://acegif.com/wp-content/gif/anime-sleep-25.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-47.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-1.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-31.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-81.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-89.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-51.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-2.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-55.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-80.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-4.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-113.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-39.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-54.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-10.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-14.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-15.gif",
        "https://acegif.com/wp-content/gif/anime-sleep-53.gif",
    ];
    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new Discord.MessageEmbed()
        .setDescription(` ${message.author} dors paissiblement `)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
    console.log(`|----> dors utilisé sur le serveur :  ${message.guild.name} `)
}

module.exports.get = {
    name: 'dors'
}