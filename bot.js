// JavaScript source code
const Discord = require('discord.js');
const bot  = new Discord.Client();
let  prefix = "??";

bot.on('message',(message)=> {
    if(message.content == 'ping'){ //test ping pong
		message.reply('pong');
								 }
  });



bot.login(process.env.BOT_TOKEN);
