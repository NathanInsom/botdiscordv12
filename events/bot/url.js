module.exports = (bot) => {


    if(message.content.includes("https://instant-hack.to/") || (message.content.includes("https://hackforums.net/") || (message.content.includes("https://selkis.online/")))){
        let channelPub = bot.guilds.cache.get("791647663564914700").channels.cache.get("791787191017799708")
    

        if(message.member.hasPermission("ADMINISTATOR")){
            return
        }else if(channelPub == message.channel){
        }else{
            message.delete()
            message.reply("<:Y46532449302659082Y4:792716834050277416> ** Votre lien est Malveillant.**")
        }
}}