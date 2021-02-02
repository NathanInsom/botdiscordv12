const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send('`Vous n\'avez pas la permission d\'utiliser cette commande.`')

    console.log(`|----> Une simulation à été lancé ! `)

    let Embed = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Start ')
        .setDescription(` **Bienvenue ${message.author} , dans la simulation du bot Zetsu** `)
        .setImage('https://media2.giphy.com/media/XyaQAnihoZBU3GmFPl/giphy.gif?cid=ecf05e47qo0qhif055p9o27224f01wqx6unf125za9wn77py&rid=giphy.gif')
    message.channel.send(Embed)

    let Embed2 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Explication ')
        .addField('Informations', 'Notre bot discord est polyvalent et sers à tout serveur qu\'ils soient grands ou petits, nous comptons actuellement 132 heures de travails pour vos yeux baillis et cette simulation en fait partit')
        .addField('Statistiques', `Le Bot contient actuellement ${message.client.guilds.cache.size} serveurs et  ${bot.guilds.cache.reduce((a, g) => a + g.memberCount,0)}  utilisateurs`)
    setTimeout(async() => { message.channel.send(Embed2) }, 5000)

    let Embed3 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Aide Commandes #1 ')
        .addField('**Nos différentes commandes d\'amusements**', '**Nous vous offrons quelques secondes pour les tester correctement** ')
        .addField('`+calin`', 'Fait un calin ')
        .addField('`+dors`', 'Dors tranquillement .. ')
        .addField('`+amongus`', 'régénérer un gif Among US')
        .addField('`+naruto`', 'régénérer un gif Naruto')
        .addField('`+blague`', 'régénérer une blague au hasard')
        .addField('`+fou`', 'devient fou  ')
        .addField('`+furax`', 'devient énerver ')
        .addField('`+kiss`', 'Fait un bisous ')
        .addField('`+fume`', 'Allume une clope et fume  ')
        .addField('`+gay`', 'Calcul ton % de gay  ')
    setTimeout(async() => { message.channel.send(Embed3) }, 31000)

    let Embed4 = new Discord.MessageEmbed()
        .setTitle('<:enveloppe:800390849320976425> Simulation Zetsu - Notificatitions')
        .setDescription('Passons à la suite')
        .setImage('https://cdn.dribbble.com/users/743832/screenshots/3881882/day43-44_psl_tx.gif')
    setTimeout(async() => { message.channel.send(Embed4) }, 86000)

    let Embed5 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Aide Commandes #2 ')
        .setDescription('Nous avons aussi plusieurs commandes pertinentes, qui sont successibles de vous intéresser ! ')
        .addField('`+setregle <channel>`', 'Crée des règles en moins de 5 secondes')
        .addField('`+anime <nom>`', 'Vous aimez les animes ? Affichez donc leurs statistiques')
        .addField('`+suggestion`', 'Vous voulez créer un channel suggestion et le rendre beau ? demandez à vos utilisateurs d\'utiliser cette commande')
        .addField('`+dm`', 'Envoie un message privé sérieusement à un de tes utilisateurs')
        .addField('`+addnote`', 'Crée une note est quand tu veux t\'en souvenirs met +note')
    setTimeout(async() => { message.channel.send(Embed5) }, 91000)

    let Embed6 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Aide Commandes #3')
        .addField('Voici donc nos certaines commandes vous pourrez l\'est retrouver en fessant `+help`', '( Les commandes de modération n\'ont pas était ouvert à tous pour ne pas endommager le serveur de simulation)')
        .setImage('https://64.media.tumblr.com/8eb6935c7349e6667f05e8af43aa174e/ac4e6daf71d6ab6b-73/s1280x1920/1dc8ac1124e3fe7368d2501a8b31924eec91e3cc.gifv')
    setTimeout(async() => { message.channel.send(Embed6) }, 113000)

    let Embed62 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Des Serveurs')
        .addField(`**Comme je vous l'ai dit ${message.client.guilds.cache.size} serveurs nous font confiance**`, `**Et voici ceux qui acceptent d'être au-devant de la scène**`)
        .addField('<:NFR_Victime:775643890047909908> Naruto FR', 'https://discord.gg/N45bhGvUDF')
        .addField('<:767911941078777878:790626467297886239> HabboGame', 'https://discord.gg/e5hZcdu6SA')
        .addField('<:KannaSpook:771441527007346719> Le repaire des Otaku', 'https://discord.gg/fV9bef5KaE')
    setTimeout(async() => { message.channel.send(Embed62) }, 126000)

    let Embed7 = new Discord.MessageEmbed()
        .setTitle('Simulation Zetsu - Satisfait ?')
        .addField('La simulation a eu une durée de 130 secondes', 'Vous avez été satisfait pendant ces 130 secondes ? si c\'est le cas soyez satisfait a vie en l\'ajoutant sur votre serveur discord !')
        .addField('https://discord.com/oauth2/authorize?client_id=710220941019578408&permissions=8&scope=bot', 'Ou effectue la commande `+qrcode`')
        .setImage('https://cdn.dribbble.com/users/1091177/screenshots/3403134/fs.gif')
    setTimeout(async() => { message.channel.send(Embed7) }, 138000)

}
module.exports.get = {
    name: 'simulation'
}