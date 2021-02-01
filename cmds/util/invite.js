const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    console.log(`|----> invite utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();


    let time;
    let timeInfo;
    let MAX;

    if (args[0] == 'permanent' || args[0] == 'perm') {

        time = 0
        timeInfo = 'est permanent !'
        MAX = 0
    } else {
        time = 86400
        timeInfo = ' est a usage unique et expire dans 24 heures !'
        MAX = 1
    }

    message.channel.createInvite({
            unique: true,
            maxAge: time,
            maxUses: MAX
        })
        .then(invite => {
            const Embed = new Discord.MessageEmbed()
                .setTitle('Lien généré')
                .setDescription('Bonjour à tous !\nVoici votre lien : https://discord.gg/' + invite.code)
                .setFooter(`Ce lien ${timeInfo}`)
                .setColor("#8DFF33")

            message.channel.send(Embed)
        })
        .catch(console.error)
}

module.exports.get = {
    name: 'invite'
}