const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
var imposterDetector = [true, false]

module.exports.run = async(bot, message, args) => {

    
    exports.run = async (client, message, args) => {
        await message.delete();
        if(args[0]){
            const username = args[0]
            var blames = await usernameResolver(message, username)
        }
        const impostor = Math.floor(Math.random() * imposterDetector.length)
            const embed = new MessageEmbed()
            .setAuthor(
                `${message.author.tag}`, 
                `${message.author.displayAvatarURL({dynamic: true})}`
            )
            .setTitle("Among us - Galaxy")
            .setColor("#8800FF")
            .setDescription(`
                    .      　。　　　　•　    　ﾟ　　。
            　　.　　　.　　　  　　.　　　　　。　　   。　.
             　.　　      。　        ඞ   。　    .    •
             .      ${blames ? blames : message.author} est ${impostor ? "" : "pas"} l'imposteur　 。　.
            　 　　。　　　　　　ﾟ　　　.　　　　　.
            ,　　　　.　 .　　       .
            `)
            .setTimestamp();
            message.channel.send(embed)
            }};

module.exports.config = {
    name: 'imposteur'
}