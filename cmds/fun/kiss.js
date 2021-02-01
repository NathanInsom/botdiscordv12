const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {

    let mentioned = message.mentions.members.first() || message.author
    var options = [
        "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
        "https://media.giphy.com/media/pcui5ohH3X96M/giphy.gif",
        "https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif", //5
        "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
        "https://media.giphy.com/media/l4FsKa1n9fyStiwZW/giphy.gif", //10
        "https://media.giphy.com/media/1OrOsLiYJcMdG/giphy.gif",
        "https://media.giphy.com/media/l4FsxDD7LwInTgy5O/giphy.gif",
        "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
        "https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif",
        //15
    ];
    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new Discord.MessageEmbed()
        .setDescription(`${mentioned} Tu as été embrasser par ${message.author} <a:Aila_ScribbleHeart:793220850363007006>`)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);

    console.log(`|----> kiss utilisé sur le serveur :  ${message.guild.name} `)
}

module.exports.config = {
    name: 'kiss'
}