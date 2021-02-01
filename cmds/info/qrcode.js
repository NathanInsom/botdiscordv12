const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {


    let Embed = new Discord.MessageEmbed()
        .setTitle('<a:check:800412981506080838> **Notre QR code **')
        .setImage('https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPmhccs3Lw%252FIXovsFwPYmMSCtPd%252F9qxR2yIG0u4Jrw%252FmFhdAmqmpg7gbNRrytXfsLnIPweQr6JgSO5PgnqFQ2KJdjVbIv2L6E7flpp2GjdLEikg28Vcplm7q29GF14UAHBT5p%252Bw%252BNKUd%252Fxi%252F%252BySmriE4eq1N4neXulfv651A8x9ugF%252F3RVgImwUl2Bif2ryC38CVNgo7UxE7Nx8ydIx4sFGamSTxnNepvJX10QLIcCKVrm17%252FxR1QUmoc%252BY1kXhVWhFhXlwZ8f1cevulEuSpJvQ9Ef5%252BieIph%252BRDC2JuMGXWrrLqueA1VNYTsUrhTDUNy5rPm3aEvD6%252BM10nqhri%252FbYc%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJsqBbx8Gzl5otsIAx3U8Wd%252FDmmkPT3J32JZWzi7290U45A%253D%253D')


    message.channel.send(Embed)

    console.log(`|----> qrcode utilisé sur le serveur :  ${message.guild.name} `)

}
module.exports.get = {
    name: 'qrcode'
}