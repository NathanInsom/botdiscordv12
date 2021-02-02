const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var desc = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send("<:enveloppe:800390849320976425> ** Vous devez écrire ce que vous préférer (Film/Séries/Anime/Plats/Marque)**")
    if (!db.get("preferer").find({ auteur: author }).value()) {
        db.get("preferer").push({ auteur: author, preferer: desc }).write()
    } else {
        db.get("preferer").find({ auteur: author }).assign({ auteur: author, preferer: desc }).write()
    }
    message.channel.send("<a:check:800412981506080838>**Votre choses préferer a bien été actualisé avec succès.**")
}

module.exports.get = {
    name: "setpref"
}