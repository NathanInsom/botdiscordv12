const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");


module.exports.run = async(bot, message, args) => {

    var options = [
        "https://i.skyrock.net/6966/89896966/pics/3217581155_1_16_CSxIxGy5.gif",
        "https://img.wattpad.com/56e84818b6e523c512f96b8615be70c9dd1fcf44/687474703a2f2f32352e6d656469612e74756d626c722e636f6d2f74756d626c725f6d61666931636335524c31716c703478396f315f3530302e676966?s=fit&h=360&w=720&q=80",
        "https://giffiles.alphacoders.com/166/166260.gif",
        "https://giffiles.alphacoders.com/208/208198.gifs",
        "https://d.wattpad.com/story_parts/387/images/15b84b28256fa8b9593836974388.gif",
        "https://steamuserimages-a.akamaihd.net/ugc/914668728141715714/CDBEA219D0C23E66B62C8BB2276B6E031FEED8B2/",
        "https://i.pinimg.com/originals/ed/36/8c/ed368c0c30727cb54471a6832e0b68f6.gif",

    ];
    var response = options[Math.floor(Math.random() * options.length)];


    const kiss = new Discord.MessageEmbed()
        .setDescription(`** ${message.author} est en mode furax ** `)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
    console.log(`|----> furax utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.get = {
    name: 'furax'
}