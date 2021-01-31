const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ");
    if(!args[0]) return message.channel.send("<:non:532634174407049239> Votre syntaxe est incorrecte. \n```Syntaxe : a!suggest <Description>```")
    var suggest = new Discord.MessageEmbed()
        .setDescription("💡 | Nouvelle suggestion !")
        .addField("💼 __Donné par :__", "<@" + message.author.id + ">", true)
        .addField("📝 __Description :__", thingToEcho, true)
        .setColor("#FFD679")
        bot.channels.cache.get('791787191017799708').send(suggest)
    .then(function (message){
        message.react("✔️")
        message.react("❌")
    }).catch(function(){

    });
    message.delete();
    message.author.send("<:enveloppe:800390849320976425> **Votre suggestion viens d'être envoyé sur le serveur principal.**")
}

module.exports.config = {
    name: "demande"
}