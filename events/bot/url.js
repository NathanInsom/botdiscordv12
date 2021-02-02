module.exports = (bot) => {
    if (message.member.hasPermission("ADMINISTATOR")) {
        return;
    } else {
        message.delete()
        message.reply("<:Y46532449302659082Y4:792716834050277416> ** Votre lien est Malveillant.**")
    }
}