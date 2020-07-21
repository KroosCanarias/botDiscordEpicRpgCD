const Discord = require("discord.js");
const  client = new Discord.Client();
const array=["rpg chop","rpg axe","rpg bowsaw","rpg chainsaw",
"rpg fish","rpg net","rpg boat","rpg bigboat",
"rpg mine","rpg pickaxe","rpg drill","rpg dynamite",
"rpg pickup","rpg ladder","rpg tractor","rpg greenhouse"];
client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
    const args = message.content.trim();
    const command = args.toLowerCase();
    if (command=="rpg hunt") {
        setTimeout(function() {
  		const channel = message.channel;
        	channel.send(message.author.toString() + " rpg hunt ready");
	    }, 60000);
    }
    if (array.includes(command)) {
        setTimeout(function() {
  		const channel = message.channel;
        	channel.send(message.author.toString() + " "+command+" ready");
	    }, 300000);
    }
    if (command=="rpg tr" || command=="rpg training") {
        setTimeout(function() {
  		const channel = message.channel;
        	channel.send(message.author.toString() + " rpg training ready");
	    }, 900000);
    }

});
