const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {

    let mentioned = message.mentions.members.first() || message.author
    var options = [

        "https://media.giphy.com/media/cvyz3Hw4d7EIw/giphy.gif",
        "https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif",
        "https://media.giphy.com/media/f0yOYF0EtwSVa/giphy.gif",
        "https://media.giphy.com/media/ySdSWIAwD5QRi/giphy.gif",
        "https://media.giphy.com/media/l0Iy33dWjmywkCnNS/giphy.gif", // 5
        "https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
        "https://media.giphy.com/media/3XwdIurpTkRnk5punB/giphy.gif",
        "https://media.giphy.com/media/JXibbAa7ysN9K/giphy.gif",
        "https://media.giphy.com/media/d0JPBhiwCm6Kk/giphy.gif",
        "https://media.giphy.com/media/3oKIP7J7Uee7tgTc9W/giphy.gif" // 10

    ];

    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new Discord.MessageEmbed()
        .setDescription(` ${message.author} devient fou <a:dekuhype:793236174919303189> `)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
    console.log(`|----> fou utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.get = {
    name: 'fou'
}