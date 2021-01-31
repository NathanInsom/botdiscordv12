const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    console.log(`|----> blague utilisé sur le serveur :  ${message.guild.name} `)

    var jokes = [
        "J'ai mangé une horloge hier, cela prenait beaucoup de temps.",
        "Si nous ne devons pas manger le soir, pourquoi mettent-ils une lumière dans le frigo?",
        "Keski et jaune et qui attend ? Jonathan ",
        "Que chi un euro ? Ben des maru car Euro chi maru (Orochimaru)"

    ]
    var response = jokes[Math.floor(Math.random() * jokes.length)];
    message.channel.send(response).then().catch(console.error);

    }


    module.exports.config = {
        name: 'blague'
        }