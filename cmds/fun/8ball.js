const Discord = require("discord.js")
const { purple_medium } = require("../../colors.json");
module.exports.run = async(bot, message, args) => {
    var options = [
        "Oui",
        "Non",
        "Pas du tout",
        "Peut être",
        "Je ne sais pas"
    ];

    var response = options[Math.floor(Math.random() * options.length)];
    const ball = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(purple_medium)
        .setDescription(`${args.join(" ")} \n \`\`\`\n${response}\n\`\`\``)
        .setThumbnail("https://media.discordapp.net/attachments/719478885015617587/804045360283648020/5a4613eed099a2ad03f9c996.png")

    message.channel.send(ball);

    console.log(`|----> 8ball utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.config = {
    name: '8ball'
}