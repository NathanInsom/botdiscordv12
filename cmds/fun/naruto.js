const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {

    var options = [

        "https://media1.tenor.com/images/a8b70e6d4459ee9d37ac151380178423/tenor.gif?itemid=4934544",
        "https://media1.tenor.com/images/c8660cb3e0e72a3b70731a2f6116ffc1/tenor.gif?itemid=8467078",
        "https://media1.tenor.com/images/5917526c0ef2100e56c139b6e4d36e40/tenor.gif?itemid=5677612",
        "https://media1.tenor.com/images/6dcf3a15e0b17ea5742892e4ae220b4a/tenor.gif?itemid=7551863",
        "https://media1.tenor.com/images/82f2162194d00be42937bea67d675c43/tenor.gif?itemid=13307183",
        "https://media1.tenor.com/images/8d8356c866266cef31ed2f2e119ffe58/tenor.gif?itemid=5552832",
        "https://media1.tenor.com/images/753603e0a74bf078fb89736ae5b75fb0/tenor.gif?itemid=17585816",
        "https://media1.tenor.com/images/1ac375ffe6f2e99ac36eb1b42a7b9707/tenor.gif?itemid=13593873",
        "https://media1.tenor.com/images/b52f739af6333c55db0d34491d123a81/tenor.gif?itemid=13279406",

    ];

    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new Discord.MessageEmbed()
        .setDescription(` ${message.author} À régénérer un gif Naruto `)
        .setColor(purple_medium)
        .setImage(`${response}`)
        .setFooter('Serveur naruto : discord.gg/8MBWcgTk88')

    message.channel.send(kiss);
    console.log(`|----> naruto utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.config = {
    name: 'naruto'
}