const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
            "Désolé, mais vous n'êtes pas autorisé à couper le son de qui que ce soit"
        );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Je n'ai pas l'autorisation de gérer les rôles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
        return message.channel.send("Veuillez mentionner le membre dont vous souhaitez désactiver le son")
    }

    if (user.id === message.author.id) {
        return message.channel.send("Je ne te couperai pas :(");
    }

    let reason = args.slice(1).join(" ")
    if (!reason) {
        return message.channel.send("Veuillez indiquer la raison pour laquelle le membre est mute")
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muet")
    if (!muterole) {
        return message.channel.send("Ce serveur n'a pas de rôle avec le nom «Muet»")
    }

    if (user.roles.cache.has(muterole)) {
        return message.channel.send("L'utilisateur donné est déjà muet")
    }

    user.roles.add(muterole)
    let embed = new Discord.MessageEmbed()
        .setTitle("<:ltCancel:792502652662448148> Mute")
        .setDescription(`L'utilisateur ${message.mentions.users.first().username} a bien été mute`)
        .setColor("#ff2050")
        .setFooter(`par ${message.author.username}`);

    await message.channel.send(embed)
    let embedmp = new Discord.MessageEmbed()
        .setTitle('<:ltCancel:792502652662448148> Sanction')
        .setDescription(`**Vous avez été muet de ${message.guild.name} **`)
        .addField(`Raison :`, ` ${reason}`)
        .setFooter(`Sanction par ${message.author.username}`);
    user.send(embedmp)

    console.log(`|----> mute utilisé sur le serveur :  ${message.guild.name} `)
}


module.exports.get = {
    name: 'mute'
}