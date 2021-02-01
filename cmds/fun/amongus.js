const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");
module.exports.run = async(bot, message, args) => {

    var options = [

        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-28.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-71.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-43.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-94.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-95.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-23.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-9.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-93.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-59.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-34.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-32.gif", // 10
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-38.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-76.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-4.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-49.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-60.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-50.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-1.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-53.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-6.gif",
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-8.gif", // 20
        "https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-16.gif",
    ];

    var response = options[Math.floor(Math.random() * options.length)];
    const kiss = new Discord.MessageEmbed()
        .setDescription(` ${message.author} À régénérer un gif Among US `)
        .setColor(purple_medium)
        .setImage(`${response}`)
    message.channel.send(kiss);
    console.log(`|----> amongus utilisé sur le serveur :  ${message.guild.name} `)
}

module.exports.get = {
    name: 'amongus'
}