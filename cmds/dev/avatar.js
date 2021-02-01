const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    let embed = new Discord.MessageEmbed()
        .setColor(`#4cd8b2`)
        .setDescription(`Avatar de ${user}`)
        .setImage(avatar)
        .setTimestamp();
    await message.channel.send(embed);
}

module.exports.config = {
    name: 'avatar'
}