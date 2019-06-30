    const Discord = require('discord.js');
    const client = new Discord.Client();
    const { get } = require("snekfetch"); 

    let prefix = "!"



client.on('ready', function () {
 console.log("Je suis connectée !")
 client.user.setGame('Aider Mr Staline')    
  })

client.login('NTM4NzkxNDI4Mjc3NjY1Nzky.Dy48tQ.XW7TylT3Srrhe_tMYiO4AjTer6Q');


client.on('message', message => {
    if(message.content.startsWith("!ping")) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    }
})



client.on('message', message =>{
    if(message.content === "Ah"){
        message.channel.sendMessage('Bh :heart:');
        console.log('Bh');
    }
});

client.on('message', message =>{
    if(message.content === "Ch"){
        message.channel.sendMessage('Dh :heart:');
        console.log('Dh');
    }
});

client.on('message', message =>{
    if(message.content === "Eh"){
        message.channel.sendMessage('Fh :heart:');
        console.log('Fh');
    }
});
client.on('message', message =>{
    if(message.content === "Gh"){
        message.channel.sendMessage('Tg :heart:');
        console.log('Ta g');
    }
});

client.on('message', message =>{
    if(message.content === "Pomme de patate"){
        message.channel.sendMessage('Patate de pomme :heart:');
        console.log('Patate de pomme');
    }
});


client.on('message', message =>{
    if(message.content === "Pd"){
        message.channel.sendMessage('Cest celui qui le dis qui y est :heart:');
        console.log('Patate de pomme');
    }
});


client.on('message', message =>{
    if(message.content === "Ping"){
        message.channel.sendMessage('Pong :heart:');
        console.log('Ping pong');
}
});

client.on('message', message =>{
    if(message.content === "Je t'aime Tohka"){
        message.channel.sendMessage('Je suis la propriété de Nishimura et je naime que lui :heart:');
        console.log('jaime nishi');
    
    }
});

client.on('message', message =>{
    if(message.content === "Qui t'as créée?"){
        message.channel.sendMessage('Qui joue?;');
        console.log('createur');
        
    }
});


client.on('message', message =>{
    if(message.content === "Qui t'as créé?"){
        message.channel.sendMessage('Nishimura mas créé en javascript, je lui dois en quelque sorte la vie >^> :heart:');
        console.log('createur');
    
    }
});

client.on('message', message =>{
    if(message.content === "Tohka je t'aime"){
        message.channel.sendMessage('Je suis la propriété de Nishimura et je naime que lui :heart:');
        console.log('jaime nishi');
    
    }
});

client.on('message', message =>{
    if(message.content === "je t'aime Tohka"){
        message.channel.sendMessage('Je suis la propriété de Nishimura et je naime que lui :heart:');
        console.log('jaime nishi');
    
    }
});

client.on('message', message =>{
    if(message.content === "Tohka p"){
        message.channel.sendMessage('Qui joue?-Ah-Ch-Eh-Gh-Pomme de patate-Pd-Ping-Je taime Tohka-Tohka je taime-Qui tas créée?-Qui tas créé?-Tohka laphabet-!supprime nombre_de_message');
        console.log('aide');
    
    }
});
client.on('message', message =>{
    if(message.content === "Tohka l'aphabet"){
        message.channel.sendMessage('A B C D E F G H I j K L M N O P Q R S T U v W X Y Z :heart:');
        console.log('aphabet');
    
    }
});

client.on('message', message =>{
    if(message.content === "Nishimura"){
        message.channel.sendMessage('Wallah <3');
        console.log('aphabet');
    
    }
});

client.on('message', message =>{
    if(message.content === "@ZeChachab"){
        message.channel.sendMessage('Viktor course = son crush :heart:');
        console.log('aphabet');
    
    }
});

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "supprime") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Ptdr tki? :heart:")
        let count = args[1]
        if (!count) return message.channel.send("Répète avec les nombre de message s'il te plaît :heart:")
        if (isNaN(count)) return message.channel.send("Invalide désolée :heart:")
        if (count < 1 || count > 100) return message.channel.send("C'est uniquement entre 1 et 100 :heart:")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
});

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Ta kru t ki? :heart:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Tu pourrais me dire qui kick :heart:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("T'as cru quoi? :heart:")
       if (!member.kickable) return message.channel.send("Je ne peux pas le kick :heart:")
       member.kick()
       message.channel.send(member.user.username + ' a été kick :heart:')
    }
});



client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription('Bienvenue à ' + member.user.username + ' qui a rejoint ' + member.guild.name + ':heart:')
        .setFooter('Nous sommes désormais ' + member.guild.memberCount + ' <3')
        member.guild.channels.get('504760464425746433').send(embed)
    });

    client.on('guildMemberRemove', member =>{
        let embed = new Discord.RichEmbed()
            .setDescription('Triste ' + member.user.username + ' viens de quitter ' + member.guild.name + ' :heart:')
            .setFooter('Nous sommes maintenant ' + member.guild.memberCount + ' <3')
        member.guild.channels.get('504760464425746433').send(embed)
    
    });


 /*Ban*/
 client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Ta kru koi? :heart:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Tu m'as pas dis qui ban :heart: ")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Ptdr try again :heart:")
       if (!member.bannable) return message.channel.send("Je ne peux pas le ban :heart:")
       message.guild.ban(member, {days: 7})
       message.channel.send(member.user.username + ' a été ban :heart:')
    }
});

