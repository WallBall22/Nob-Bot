const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'
 
 
 client.on('ready',  () => {
  console.log(`Logged in as * [ " ${client.user.username} " ] servers!  [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users!    [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});

client.on('ready', () => {
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'الكلام هنا',
            type: "STREAMING",
            url: "https://www.twitch.tv/."
        }
    });
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Brodcast Bot`,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 client.on('message', message => {
    var prefix = "*";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
 client.on('guildMemberAdd', msg => { 

    var embed = new Discord.RichEmbed()

    .setAuthor(msg.user.username, msg.user.avatarURL)

    .setThumbnail(msg.user.avatarURL)

    .setImage('https://cdn.pg.sa/4J1jipROqB.jpg')     

    .setTitle('New Member!')

    .setDescription('❤Welcome To server❤')

    .addField('**ID Member:',"" +  msg.user.id, true)

    .addField('**Tag Member**', msg.user.discriminator, true)

    .addField('**Member Created At', msg.user.createdAt, true)

    .addField(' 👤   You Number',`**[ ${msg.guild.memberCount} ]**`,true)

    .setColor('GREEN')

    .setFooter(msg.guild.name, msg.guild.iconURL, true)

    var channel = msg.guild.channels.find('name', 'chat')         

    if (!channel) return;

    channel.send({embed : embed});

    });
 client.on('message', message => {

  if (true) {

if (message.content === '*invite') {

      message.author.send('تفضل رابط البوت |  https://discordapp.com/api/oauth2/authorize?client_id=521253056218791947&permissions=8&scope=bot').catch(e => console.log(e.stack));

 

    }

   }

  });
client.on('message', message => {

     if (message.content === "*invite") {

     let embed = new Discord.RichEmbed()

  .setAuthor(message.author.username)

  .setColor("#9B59B6")

  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")

     

     

     

  message.channel.sendEmbed(embed);

    }

});
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});
new paste 


Untitled
 A GUEST   NOV 23RD, 2018   107  NEVER

Not a member of Pastebin yet? Sign Up, it unlocks many cool features!
rawdownloadreport 0.78 KB
 client.on('message', ra3d => {
var prefix = "*";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
              ra3d.channel.send(`**✅ |تم انشاء __${args}__ لون**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on("guildMemberAdd", member => {

    member.createDM().then(function (channel) {

        return channel.send(`:rose:  ولكم نورت السيرفر :rose:

        :crown: اسم العضو  ${member}:crown:  

        انت العضو رقم ${member.guild.memberCount} `)

    }).catch(console.error)

})



client.login(process.env.BOT_TOKEN);
