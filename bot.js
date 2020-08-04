const Discord = require("discord.js");
const  client = new Discord.Client();
const inWait=[];
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
    if ((command=="rpg hunt" || command=="rpg hunt h" || command=="rpg hunt hardmode")&&
                                                        !inWait.includes("hunt")) {
        inWait.push("hunt");
        setTimeout(function() {
  		    const channel = message.channel;
            channel.send(message.author.toString() + " rpg hunt ready");
            deleteElementArray("hunt");
        }, 60000);
        
    }
    if (array.includes(command) && !inWait.includes("working")) {
        inWait.push("working");
        setTimeout(function() {
  		    const channel = message.channel;
            channel.send(message.author.toString() + " "+command+" ready");
            deleteElementArray("working");
        }, 300000);
        
    }
    if ((command=="rpg tr" || command=="rpg training")&& !inWait.includes("training")) {
        inWait.push("training");
        setTimeout(function() {
  		    const channel = message.channel;
            channel.send(message.author.toString() + " rpg training ready");
            deleteElementArray("training");
        }, 900000);
        
    }
});
function deleteElementArray(element){
    for(let i in inWait){
        if(inWait[i]==element){
            inWait.splice(i,1);
        }
    }
}
//client.login("NzE2NjkwMzY1OTUxOTAxNzY2.XxluXQ.4FOcrWA_-wLzAn-T6TBLECcIl3E");
