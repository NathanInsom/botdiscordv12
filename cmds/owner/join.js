module.exports.run = async(bot, message, args) => {

    message.delete();

    if (message.author.id !== "651202869743190016")
        return message.channel.send(`Vous n'avez pas la permission.`);
    if (!message.member.voice.channel)
        return message.channel.send(":x: Vous n'ètes pas connectez à un Vocal !");
    message.member.voice.channel.join();
    message.channel.send(":white_check_mark: Connecté au Vocal !")
}

module.exports.config = {
    name: 'join',
}