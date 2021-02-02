const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete()

    var channel_info = new Discord.MessageEmbed()
        .setTitle("📌 Informations sur ce channel:")
        .addField("📝 Nom du channel:", "<#" + message.channel.id + ">", true)
        .addField("🔗 ID du channel:", message.channel.id, true)
        .addField("📋 Type de channel :", message.channel.type, true)
        .addField("📅 Date de création du channel :", message.channel.createdAt, true)
        .setColor("#8DFF33")
    message.channel.send(channel_info)
    console.log(`|----> infochannel utilisé sur le serveur :  ${message.guild.name} `)

}

module.exports.get = {
    name: "infochannel"
}