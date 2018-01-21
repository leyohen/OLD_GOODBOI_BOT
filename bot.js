// JavaScript source code
const Discord = require('discord.js');
const bot  = new Discord.Client();
let  prefix = "??";



bot.on('message',(message)=> { //->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Début 
	
	//see msgs
	console.log(message.author.username+" : "+message.content);
	
	
	if(message.content == 'ping'){ //test ping pong
		message.reply('pong');
								 }
	
	if(message.content == 'paul'){ //mot sur paul
		message.channel.send('est gentil');
								 }

	if(message.content == 'date'){ //date du pc du bot
		var maDate = new Date() ;
		var h = maDate.getHours();
		var s = maDate.getSeconds();
		var min = maDate.getMinutes();
		message.reply('il est '+h+':'+min+':'+s);
								 }
								 
	if(message.content.startsWith(prefix + "help")) { //liste des commandes
		 message.channel.send("```List of commands : \n\n ??version  | Version  \n ??help | Toutes les commandes \n ??dog |partage une image d'un chien  ??Avatar |Partage l'avatar d'un membre du Discord  ```");	
	                                                  }
													  
	if(message.content.startsWith('slt')){
		message.channel.send('salu')
										 }
										 
										 
	if(message.content.startsWith(prefix+"Avatar")){ //donne l'avatar de l'auteur
		let TaggedUser = message.mentions.users.first() ? message.mentions.users.first() : message.author
		let ava = TaggedUser.displayAvatarURL 
		let embed = {description:"Voici l'avatar de "+TaggedUser.username+" *[url]("+ava+")*",image:{url:ava}}
		 message.channel.send("", {embed});
													}

	 /*if(message.member.roles.some(r=>["DIEU"].includes(r.name)) ) { // test check des roles
		console.log('yay');}
	else{
		console.log('nope');}
	*/		
		
		
	if(message.content.startsWith(prefix + "dog")) { //génère un nombre random
		var numberimage=Math.floor(Math.random() * Math.floor(40));
		message.reply(imageurl[numberimage])
		}
		
	if(message.content.startsWith(prefix+'hug')&& !message.mentions.users.first()){return message.channel.send("Well you can't hug the air...")} //Hug quelqu'un
	else if(message.content.startsWith(prefix+'hug')&& message.mentions.users.first()){
	 let imageHug = hug[rn];
	 message.channel.send('**' + message.author.username +'** *fait un câlin à* **'+message.mentions.users.first().username+'** :heart:(no homo only bromance) \n' +imageHug);
							}
		
	}); //fin ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


bot.login(process.env.BOT_TOKEN);

//<----------------------------------------- BANQUE D'IMAGE (en attendant d'utiliser le file.dr de node.js ----------------------------------------->
var imageurl = new Array('https://i.imgur.com/kVLWTgy.jpg','https://i.imgur.com/W1PKAlu.jpg','https://i.imgur.com/DUvgdhr.jpg','https://i.imgur.com/L1oQhJU.png','https://i.imgur.com/o7rgMYY.png','https://i.imgur.com/tGaNmRB.jpg','https://i.imgur.com/MdcDpeZ.jpg','https://i.imgur.com/7z3dS5i.png','https://i.imgur.com/bfHeLH4.jpg','https://i.imgur.com/JIfsXR9.png','https://i.imgur.com/poM8Dhw.jpg','https://i.imgur.com/VKoaUwj.jpg','https://i.imgur.com/bY7ORrX.jpg','https://i.imgur.com/aQgoCfP.jpg','https://i.imgur.com/lWE2ZW0.jpg','https://i.imgur.com/hroKIcX.jpg','https://i.imgur.com/dpEXNbr.jpg','https://i.imgur.com/OVNLWpQ.jpg','https://i.imgur.com/yRCkRz4.jpg','https://i.imgur.com/iyITZLU.jpg','https://i.imgur.com/XjrwIF0.jpg','https://i.imgur.com/vUv9vrj.png','https://i.imgur.com/nzSAqDh.png','https://i.imgur.com/nHfrURC.jpg','https://i.imgur.com/q1MZa9H.jpg','https://i.imgur.com/pBgLa8q.jpg','https://i.imgur.com/ONBCmWV.png','https://i.imgur.com/nd1AwPm.jpg','https://i.imgur.com/3Likenl.jpg','https://i.imgur.com/b2wyJNH.png','https://i.imgur.com/ik1KTLZ.png','https://i.imgur.com/SulZnOp.jpg','https://i.imgur.com/4oBoujQ.png','https://i.imgur.com/EXDUlLZ.png','https://i.imgur.com/BvAw2U3.png','https://i.imgur.com/yOcd1bU.jpg','https://i.imgur.com/8QP41CO.png','https://i.imgur.com/Dm0WW9l.png','https://i.imgur.com/PGSdXTr.jpg','https://i.imgur.com/jjZas0f.png');
//<-------------------------------------  BANQUE D'IMAGE HUG --------------------------------------------------------------------------------------->
var rn = numberimage=Math.floor(Math.random() * Math.floor(9));
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif"]
