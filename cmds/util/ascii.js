const figlet = require('figlet');

module.exports.run = async(bot, message, args) => {

    if (!args[0])
        return message.channel.send('Veuillez saisir quelque chose');

    msg = args.join(" ");

    figlet.text(msg, function(err, data) {
        if (err) {
            message.channel.send(' Une erreur s`\'est produite lors de l\'exécution de cette commande');
            message.channel.send(err);
        }
        if (data.length > 2000)
            return message.channel.send('Veuillez saisir quelque chose de moins de 2000 caractères!')

        message.channel.send('```' + data + '```')
    })
}


module.exports.config = {
    name: 'ascii'
}