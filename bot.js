// JavaScript source code
const Discord = require('discord.js');
const bot  = new Discord.Client();
var playCommand = "??play";
let  prefix = "??";
const ytdl = require('ytdl-core');
var google = require('googleapis');
const Fortnite = require('fortnite');
const client = new Fortnite(process.env.FT_KEY);



bot.on('ready',()=> {	
bot.user.setStatus('idle');
	console.log('bot connecté');
	 bot.user.setGame('With dog toys');});
	

	
	

bot.on('message',(message)=>	 { //->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Début BOT
	
	//console -log
	console.log(message.author.username+" : "+message.content);
	//Global announcement for updates
	if(message.author.id=='139039555180429312' && message.content=='??updateSTART'){
			bot.user.setGame('UPDATE SOON');
			bot.user.setStatus('idle');}
	if(message.author.id=='139039555180429312' && message.content=='??updateEND'){
			bot.user.setGame('With dog toys');
			bot.user.setStatus('online');}
	//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	if(message.content.startsWith('??fortnite') && message.author.id!=='399986788753735690' && message.author.id!=='405095442766888960'){
		var pseudoRAW = message.content;
		var pseudoUSABLE = pseudoRAW.slice(11);
		//console.log(pseudoUSABLE+"NAME");
	client.getInfo(pseudoUSABLE, 'pc').then(data =>message.channel.send("```css"+"\r\n"+"Voici les lifetime Stats de : "+pseudoUSABLE+"\r\n"+"TOP1 : "+JSON.stringify(data.lifetimeStats[8].value)+"\r\n"+"Match played : "+JSON.stringify(data.lifetimeStats[7].value)+"\r\n"+"Pourcentage de win : "+JSON.stringify(data.lifetimeStats[9].value)+"\r\n"+"Kills : "+JSON.stringify(data.lifetimeStats[10].value)+"\r\n"+"KD ratio : "+JSON.stringify(data.lifetimeStats[11].value)+"\r\n"+"Time played : "+JSON.stringify(data.lifetimeStats[13].value)+"\r\n"+"```"));
	
	
		//message.reply(JSON.stringify(data["lifetimeStats"])));
	
	}
	//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	
	 if (message.content.startsWith('??join') && message.author.id!=='399986788753735690' && message.author.id!=='405095442766888960') { //message.author.id=='139039555180429312'| message.author.id=='241246422723330048' ) {
		if (message.member.voiceChannel){
		var musik = message.content;
		var MusiquePlay = musik.slice(7);
		console.log(MusiquePlay+" HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	//	const streamOptions = { seek: 0, volume: 1 };
		var voiceChannel = message.member.voiceChannel;
				voiceChannel.join().then(connection => {
		const dispatcher = connection.playStream(ytdl(MusiquePlay)); 
		dispatcher.on("end", end => {
                console.log("left channel");
                voiceChannel.leave();
            });	
        }).catch(err => console.log(err));
	 }
	else{
			if(!message.member.voiceChannel && message.content ==='??join'){message.reply('TU doit être dans un channel vocal');}
		}	
	}
 
  //->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	if(message.content === '??leave') {
	if (message.member.voiceChannel) {
	message.member.voiceChannel.leave() }};	
	
		//<----------------------------------------------------------console---------------------------------------------------------------------->
	if(message.author.id!=='399986788753735690' && message.author.id!=='405095442766888960'){
	const channelz = bot.channels.get("405792135233798186","376472607714836490"); 
	var maDate = new Date() ;
	var h = maDate.getHours();
	var s = maDate.getSeconds();
	var min = maDate.getMinutes();
	channelz.send('```'+'('+h+':'+min+':'+s+')'+message.author.username+" : "+message.content+"    [in "+message.channel.name+"]```");
	}
	//<-------------------------------------------------Fin console--------------------------------------------------------------------------->
	//<------------------------------------------------------------COMMANDS----------------------------------------------------------------->
	if(message.author.id=='139039555180429312' && message.content == 'pd' ){
	message.channel.send('dolaris t pd');}
	
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
		 message.channel.send("```List of commands : \n\n ??version  | Version 1.1.8  \n ??help | Toutes les commandes \n ??dog | partage une image d'un chien \n ??Avatar @Pseudo | Partage l'avatar d'un membre du Discord \n ??hug @Pseudo | Câlin à quelqu'un \n ??fortnite <name> |lifetime stats of fortnite acc \n ??join <yt url> | stream song in author channel \n + a few hidden commands!   ```");	
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
		var numberimage=Math.floor(Math.random() * Math.floor(54));
		message.reply(imageurl[numberimage])
		}
		
	if(message.content.startsWith(prefix+'hug')&& !message.mentions.users.first()){return message.channel.send("Well you can't hug the air...")} //Hug quelqu'un
	else if(message.content.startsWith(prefix+'hug')&& message.mentions.users.first()){
	 let imageHug = hug[rn];
	 message.channel.send('**' + message.author.username +'** *fait un câlin à* **'+message.mentions.users.first().username+'** :heart:(no homo only bromance) \n' +imageHug);
							}
		

		
	//<--------------------------------------------------- ANGERY DOG START ---------------------------------------------------------------->						
	if(message.content.startsWith('pti con'+' <@399986788753735690>')){
	var auteur=message.author.username;
	var imageauteur=message.author.displayAvatarURL;
	let embed = {
		"title": "**GoodBoi wants to tell you something** :",
		"url": "https://www.youtube.com/watch?v=o1NBB8EMduo",
		"color": 5301186,
		"footer": {},
		"thumbnail": {
		"url": "https://cdn.discordapp.com/avatars/399986788753735690/c7cd90eb9a9da6044cee2d430e12bcd7.png"
					},
			"image": {
			"url": "https://i.imgur.com/4zqGnAP.jpg?width=400&height=400"
		},
		"author": {
			"name": auteur,
			"url": "https://discordapp.com",
			"icon_url": imageauteur
		},
		"fields": [
			{
		"name": "😱",
		"value": "ME IS ANGERY NOW!"
		},
		{
		"name": ":anger:",
		"value": "woof",
		"inline": true
		},
		{
		"name": ":hotsprings:",
		"value": "rrrw",
		"inline": true
		}
				]
			};
			message.channel.send({ embed });
	}
	//<--------------------------------------------------- ANGERY DOG END ---------------------------------------------------------------->	
	

	
	
		
}); //fin BOT ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


bot.login(process.env.BOT_TOKEN);

//<----------------------------------------- BANQUE D'IMAGE (en attendant d'utiliser le file.dr de node.js ----------------------------------------->
var imageurl = new Array('https://i.imgur.com/kVLWTgy.jpg','https://i.imgur.com/W1PKAlu.jpg','https://i.imgur.com/DUvgdhr.jpg','https://i.imgur.com/L1oQhJU.png','https://i.imgur.com/o7rgMYY.png','https://i.imgur.com/tGaNmRB.jpg','https://i.imgur.com/MdcDpeZ.jpg','https://i.imgur.com/7z3dS5i.png','https://i.imgur.com/bfHeLH4.jpg','https://i.imgur.com/JIfsXR9.png','https://i.imgur.com/poM8Dhw.jpg','https://i.imgur.com/VKoaUwj.jpg','https://i.imgur.com/bY7ORrX.jpg','https://i.imgur.com/aQgoCfP.jpg','https://i.imgur.com/lWE2ZW0.jpg','https://i.imgur.com/hroKIcX.jpg','https://i.imgur.com/dpEXNbr.jpg','https://i.imgur.com/OVNLWpQ.jpg','https://i.imgur.com/yRCkRz4.jpg','https://i.imgur.com/iyITZLU.jpg','https://i.imgur.com/XjrwIF0.jpg','https://i.imgur.com/vUv9vrj.png','https://i.imgur.com/nzSAqDh.png','https://i.imgur.com/nHfrURC.jpg','https://i.imgur.com/q1MZa9H.jpg','https://i.imgur.com/pBgLa8q.jpg','https://i.imgur.com/ONBCmWV.png','https://i.imgur.com/nd1AwPm.jpg','https://i.imgur.com/3Likenl.jpg','https://i.imgur.com/b2wyJNH.png','https://i.imgur.com/ik1KTLZ.png','https://i.imgur.com/SulZnOp.jpg','https://i.imgur.com/4oBoujQ.png','https://i.imgur.com/EXDUlLZ.png','https://i.imgur.com/BvAw2U3.png','https://i.imgur.com/yOcd1bU.jpg','https://i.imgur.com/8QP41CO.png','https://i.imgur.com/Dm0WW9l.png','https://i.imgur.com/PGSdXTr.jpg','https://i.imgur.com/jjZas0f.png','https://i.imgur.com/dj6e0tQ.jpg','https://i.imgur.com/c13Lrvo.jpg','https://i.imgur.com/LjiYms7.jpg','https://i.imgur.com/0NaWjdi.jpg','https://i.imgur.com/3EMhtZm.jpg','https://i.imgur.com/iEG1SoE.jpg','https://i.imgur.com/eAKypGS.jpg','https://i.imgur.com/erZZwSB.jpg','https://i.imgur.com/UGyWuvb.jpg','https://i.imgur.com/cJIdeWa.jpg','https://i.imgur.com/rENtMLz.jpg','https://i.imgur.com/rENtMLz.jpg','https://i.imgur.com/vOYTuGO.jpg','https://i.imgur.com/r3931Gn.jpg','https://i.imgur.com/8AfsTfd.jpg','https://i.imgur.com/VZf2CSl.jpg','https://i.imgur.com/Utxzn1j.jpg','https://i.imgur.com/T98URFz.jpg','https://i.imgur.com/RdfWTIW.jpg','https://i.imgur.com/cBex5zo.jpg','https://i.imgur.com/UR2qJsC.png','https://i.imgur.com/iva8jMF.jpg','https://i.imgur.com/yPEb08M.jpg','https://i.imgur.com/L8SQGIB.jpg');
//<-------------------------------------  BANQUE D'IMAGE HUG --------------------------------------------------------------------------------------->
var rn = numberimage=Math.floor(Math.random() * Math.floor(9));
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif"]

