const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    const replies = ["pile", "face"];
    const response = Math.floor(Math.random() * replies.length);
  
    if (args[0].toLowerCase() == "pile") {
      message.channel.send(`*${client.user.username} a lancé la pièce* :coin:`)
      if (args[0].toLowerCase() != replies[response]) message.channel.send(`${message.author.username} t'as perdu, la pièce est tombée sur ${replies[response]}! 👎`);
      else if (args[0].toLowerCase() == replies[response]) message.channel.send(`${message.author.username} t'as gagné, la pièce est tombée sur ${replies[response]}! 👏`);}
  
    else if (args[0].toLowerCase() == "face") {
      message.channel.send(`*${client.user.username} a lancé la pièce* :coin:`)
      if (args[0].toLowerCase() != replies[response]) message.channel.send(`${message.author.username} t'as perdu, la pièce est tombée sur ${replies[response]}! 👎`);
      else if (args[0].toLowerCase() == replies[response]) message.channel.send(`${message.author.username} t'as gagné, la pièce est tombée sur ${replies[response]}! 👏`);}
  
    else {
      message.channel.send(":man_facepalming: Dites pile ou face...")
    }
  };

  module.exports.config = {
    name: 'piece'
    }