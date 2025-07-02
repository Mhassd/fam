require('../Eid.js')
const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaaaa
┗━━━━━━━━━━━━

\`〣╴[ 𝗔𝗟𝗟-𝗠𝗘𝗡𝗨 ] ╶〣\`

┏『 *\`〄 ᴏᴡɴᴇʀ-ᴍᴇɴᴜ 〄\`* 』━⊱
┇۞┇☪︎︎ *${prefix}autoread*
┇۞┇☪︎︎ *${prefix}addsewa*
┇۞┇☪︎︎ *${prefix}delsewa*
┇۞┇☪︎︎ *${prefix}onlypc*
┇۞┇☪︎︎ *${prefix}onlygc*
┇۞┇☪︎︎ *${prefix}self*
┇۞┇☪︎︎ *${prefix}clearchat*
┇۞┇☪︎︎ *${prefix}pinchat*
┇۞┇☪︎︎ *${prefix}unpinchat*
┇۞┇☪︎︎ *${prefix}gconly* 
┇۞┇☪︎︎ *${prefix}public* 
┇۞┇☪︎︎ *${prefix}setpppanjang* 
┇۞┇☪︎︎ *${prefix}setppgcpanjang* 
┇۞┇☪︎︎ *${prefix}addcase*
┇۞┇☪︎︎ *${prefix}join* 
┇۞┇☪︎︎ *${prefix}bctext* 
┇۞┇☪︎︎ *${prefix}poll* 
┇۞┇☪︎︎ *${prefix}bcimage*
┇۞┇☪︎︎ *${prefix}bcvideo*
┇۞┇☪︎︎ *${prefix}creategc*
┇۞┇☪︎︎ *${prefix}setexif*
┇۞┇☪︎︎ *${prefix}userjid*
┇۞┇☪︎︎ *${prefix}setbotname*
┇۞┇☪︎︎ *${prefix}setbotbio*
┇۞┇☪︎︎ *${prefix}delppbot*
┇۞┇☪︎︎ *${prefix}restart*
┇۞┇☪︎︎ *${prefix}setppbot*
┇۞┇☪︎︎ *${prefix}addprem*
┇۞┇☪︎︎ *${prefix}delprem*
┇۞┇☪︎︎ *${prefix}addowner*
┇۞┇☪︎︎ *${prefix}delowner*
┇۞┇☪︎︎ *${prefix}addvn*
┇۞┇☪︎︎ *${prefix}delvn*
┇۞┇☪︎︎ *${prefix}addsticker*
┇۞┇☪︎︎ *${prefix}delsticker*
┇۞┇☪︎︎ *${prefix}addimage*
┇۞┇☪︎︎ *${prefix}delimage*
┇۞┇☪︎︎ *${prefix}addvideo*
┇۞┇☪︎︎ *${prefix}delvideo*
┇۞┇☪︎︎ *${prefix}block*
┇۞┇☪︎︎ *${prefix}unblock del*
┇۞┇☪︎︎ *${prefix}leavegc*
┇۞┇☪︎︎ *${prefix}pushkontak*
┇۞┇☪︎︎ *${prefix}pushkontakv2*
┇۞┇☪︎︎ *${prefix}pushkontakv3*
┇۞┇☪︎︎ *${prefix}pushkontakv4*
┇۞┇☪︎︎ *${prefix}savekontakv*
┇۞┇☪︎︎ *${prefix}savekontakv2*
┇۞┇☪︎︎ *${prefix}getkontak*
┇۞┇☪︎︎ *${prefix}sendkontak*
┇۞┇☪︎︎ *${prefix}jpm*
┇۞┇☪︎︎ *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ɪsʟᴀᴍɪᴄ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}kisahnabi*
┇۞┇☪︎︎ *${prefix}asmaulhusna*
┇۞┇☪︎︎ *${prefix}bacaansholat*
┇۞┇☪︎︎ *${prefix}audiosurah*
┇۞┇☪︎︎ *${prefix}ayatkursi*
┇۞┇☪︎︎ *${prefix}doaharian*
┇۞┇☪︎︎ *${prefix}niatsholat*
┇۞┇☪︎︎ *${prefix}quotesislami*
┇۞┇☪︎︎ *${prefix}doatahlil*
┇۞┇☪︎︎ *${prefix}alquran*
┇۞┇☪︎︎ *${prefix}jadwalsholat*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ɢʀᴏᴜᴘ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}sider*
┇۞┇☪︎︎ *${prefix}autoaigc*
┇۞┇☪︎︎ *${prefix}warcall*
┇۞┇☪︎︎ *${prefix}autosimi*
┇۞┇☪︎︎ *${prefix}nanochat*
┇۞┇☪︎︎ *${prefix}mute*
┇۞┇☪︎︎ *${prefix}setwelcome*
┇۞┇☪︎︎ *${prefix}setleft*
┇۞┇☪︎︎ *${prefix}welcome on/off*
┇۞┇☪︎︎ *${prefix}antilink*
┇۞┇☪︎︎ *${prefix}antiwame*
┇۞┇☪︎︎ *${prefix}linkgc*
┇۞┇☪︎︎ *${prefix}invite*
┇۞┇☪︎︎ *${prefix}ephemeral*
┇۞┇☪︎︎ *${prefix}delete*
┇۞┇☪︎︎ *${prefix}setppgroup*
┇۞┇☪︎︎ *${prefix}delppgroup*
┇۞┇☪︎︎ *${prefix}setname*
┇۞┇☪︎︎ *${prefix}setdesc*
┇۞┇☪︎︎ *${prefix}add*
┇۞┇☪︎︎ *${prefix}kick*
┇۞┇☪︎︎ *${prefix}promote*
┇۞┇☪︎︎ *${prefix}demote*
┇۞┇☪︎︎ *${prefix}hidetag*
┇۞┇☪︎︎ *${prefix}totag*
┇۞┇☪︎︎ *${prefix}tagall*
┇۞┇☪︎︎ *${prefix}editinfo*
┇۞┇☪︎︎ *${prefix}opentime*
┇۞┇☪︎︎ *${prefix}closetime*
┇۞┇☪︎︎ *${prefix}resetlink*
┇۞┇☪︎︎ *${prefix}getbio*
┇۞┇☪︎︎ *${prefix}vote*
┇۞┇☪︎︎ *${prefix}upvote*
┇۞┇☪︎︎ *${prefix}downvote*
┇۞┇☪︎︎ *${prefix}checkvote*
┇۞┇☪︎︎ *${prefix}delvote*
┇۞┇☪︎︎ *${prefix}autostickergc*
┇۞┇☪︎︎ *${prefix}antilinkgc*
┇۞┇☪︎︎ *${prefix}antiwame*
┇۞┇☪︎︎ *${prefix}antilinkall*
┇۞┇☪︎︎ *${prefix}antilinktiktok*
┇۞┇☪︎︎ *${prefix}antilinkfb*
┇۞┇☪︎︎ *${prefix}antilinktwitter*
┇۞┇☪︎︎ *${prefix}antilinkig*
┇۞┇☪︎︎ *${prefix}antilinktg*
┇۞┇☪︎︎ *${prefix}antilinkytvid*
┇۞┇☪︎︎ *${prefix}antilinkytch*
┇۞┇☪︎︎ *${prefix}antivirus*
┇۞┇☪︎︎ *${prefix}antitoxic*
┇۞┇☪︎︎ *${prefix}nsfw*
┇۞┇☪︎︎ *${prefix}react*
┗━━━━━━━━━━━━━━━━⊱
 
┏『 *\`〄 ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}anonymouschat*
┇۞┇☪︎︎ *${prefix}start*
┇۞┇☪︎︎ *${prefix}next*
┇۞┇☪︎︎ *${prefix}stop*
┇۞┇☪︎︎ *${prefix}sendprofile*
┇۞┇☪︎︎ *${prefix}menfess*
┇۞┇☪︎︎ *${prefix}confess*
┇۞┇☪︎︎ *${prefix}balasmenfess*
┇۞┇☪︎︎ *${prefix}tolakmenfess*
┇۞┇☪︎︎ *${prefix}stopmenfess*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴘᴜsʜ - ᴍᴇɴᴜ 〄\`* 』━━◧
┇۞┇☪︎︎ *${prefix}cekidgc*
┇۞┇☪︎︎ *${prefix}pushkontak*
┇۞┇☪︎︎ *${prefix}pushkontakv2*
┇۞┇☪︎︎ *${prefix}pushkontakv3*
┇۞┇☪︎︎ *${prefix}pushkontakv4*
┇۞┇☪︎︎ *${prefix}savekontakv*
┇۞┇☪︎︎ *${prefix}savekontakv2*
┇۞┇☪︎︎ *${prefix}getkontak*
┇۞┇☪︎︎ *${prefix}sendkontak*
┇۞┇☪︎︎ *${prefix}jpm*
┇۞┇☪︎︎ *${prefix}jpm2*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴄᴘᴀɴᴇʟ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}listusr*
┇۞┇☪︎︎ *${prefix}delusr*
┇۞┇☪︎︎ *${prefix}listsrv*
┇۞┇☪︎︎ *${prefix}delsrv*
┇۞┇☪︎︎ *${prefix}tutorial*
┇۞┇☪︎︎ *${prefix}ramlist*
┇۞┇☪︎︎ *${prefix}premlist*
┇۞┇☪︎︎ *${prefix}updatesrv*
┇۞┇☪︎︎ *${prefix}suspend*
┇۞┇☪︎︎ *${prefix}unsuspend*
┇۞┇☪︎︎ *${prefix}createadmin*
┇۞┇☪︎︎ *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━⊱

▭▬▭▬▭( *LIST RAM* ▬▭▬▭

.1gb [username,nomor]
.2gb [username,nomor]
.3gb [username,nomor]
.4gb [username,nomor]
.5gb [username,nomor]
.6gb [username,nomor]
.7gb [username,nomor]
.8gb [username,nomor]
.unli [username,nomor]

Contoh:
.ram username,nomor
.1gb Nano,6285745522549
▬▭▬▭▬▭▬▭▬▭▬▭▬


┏『 *\`〄 ᴅᴏᴡɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ ${prefix}tiktok
┇۞┇☪︎︎ ${prefix}tiktokslide
┇۞┇☪︎︎ ${prefix}tiktokaudio
┇۞┇☪︎︎ ${prefix}spdl
┇۞┇☪︎︎ ${prefix}ytsearch
┇۞┇☪︎︎ ${prefix}ttsearch
┇۞┇☪︎︎ ${prefix}teraboxdl
┇۞┇☪︎︎ ${prefix}snackvideo
┇۞┇☪︎︎ ${prefix}capcutdl
┇۞┇☪︎︎ ${prefix}play
┇۞┇☪︎︎ ${prefix}ytmp3
┇۞┇☪︎︎ ${prefix}ytmp4
┇۞┇☪︎︎ ${prefix}google
┇۞┇☪︎︎ ${prefix}imdb
┇۞┇☪︎︎ ${prefix}weather
┇۞┇☪︎︎ ${prefix}wanumber
┇۞┇☪︎︎ ${prefix}instagram
┇۞┇☪︎︎ ${prefix}facebook
┇۞┇☪︎︎ ${prefix}twittervid
┇۞┇☪︎︎ ${prefix}telestick
┇۞┇☪︎︎ ${prefix}spotify
┇۞┇☪︎︎ ${prefix}gitclone
┇۞┇☪︎︎ ${prefix}happymod
┇۞┇☪︎︎ ${prefix}gdrive
┇۞┇☪︎︎ ${prefix}pinterest
┇۞┇☪︎︎ ${prefix}ringtone
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ɢᴀᴍᴇ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}tebakkata*
┇۞┇☪︎︎ *${prefix}tebaktebakan*
┇۞┇☪︎︎ *${prefix}tebaklirik*
┇۞┇☪︎︎ *${prefix}tebakgambar*
┇۞┇☪︎︎ *${prefix}tebaklagu*
┇۞┇☪︎︎ *${prefix}tebakkimia*
┇۞┇☪︎︎ *${prefix}asahotak*
┇۞┇☪︎︎ *${prefix}siapaaku*
┇۞┇☪︎︎ *${prefix}susunkata*
┇۞┇☪︎︎ *${prefix}tekateki*
┇۞┇☪︎︎ *${prefix}tebakbendera*
┇۞┇☪︎︎ *${prefix}tebakbenderav2*
┇۞┇☪︎︎ *${prefix}tebakkabupaten*
┇۞┇☪︎︎ *${prefix}caklontong*
┇۞┇☪︎︎ *${prefix}family100*
┇۞┇☪︎︎ *${prefix}werewolf*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ʀᴘɢ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}kerja*
┇۞┇☪︎︎ *${prefix}fightnaga*
┇۞┇☪︎︎ *${prefix}fightkucing*
┇۞┇☪︎︎ *${prefix}fightphonix*
┇۞┇☪︎︎ *${prefix}fightgriffin*
┇۞┇☪︎︎ *${prefix}fightkyubi*
┇۞┇☪︎︎ *${prefix}fightcentaur*
┇۞┇☪︎︎ *${prefix}nabung*
┇۞┇☪︎︎ *${prefix}mining*
┇۞┇☪︎︎ *${prefix}bankcek*
┇۞┇☪︎︎ *${prefix}maling*
┇۞┇☪︎︎ *${prefix}banknabung*
┇۞┇☪︎︎ *${prefix}banktarik*
┇۞┇☪︎︎ *${prefix}berkebon*
┇۞┇☪︎︎ *${prefix}crafting*
┇۞┇☪︎︎ *${prefix}bet*
┇۞┇☪︎︎ *${prefix}bonus*
┇۞┇☪︎︎ *${prefix}buah*
┇۞┇☪︎︎ *${prefix}nebang*
┇۞┇☪︎︎ *${prefix}bekerja*
┇۞┇☪︎︎ *${prefix}bansos*
┇۞┇☪︎︎ *${prefix}taxy*
┇۞┇☪︎︎ *${prefix}mulung*
┇۞┇☪︎︎ *${prefix}berburu*
┇۞┇☪︎︎ *${prefix}polisi*
┇۞┇☪︎︎ *${prefix}berdagang*
┇۞┇☪︎︎ *${prefix}rampok*
┇۞┇☪︎︎ *${prefix}bunuh*
┇۞┇☪︎︎ *${prefix}collect*
┇۞┇☪︎︎ *${prefix}mancing*
┇۞┇☪︎︎ *${prefix}repair*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}fight*
┇۞┇☪︎︎ *${prefix}gajian*
┇۞┇☪︎︎ *${prefix}upgrade*
┇۞┇☪︎︎ *${prefix}transfer*
┇۞┇☪︎︎ *${prefix}shop*
┇۞┇☪︎︎ *${prefix}selectskill*
┇۞┇☪︎︎ *${prefix}sampah*
┇۞┇☪︎︎ *${prefix}roket*
┇۞┇☪︎︎ *${prefix}ojek*
┇۞┇☪︎︎ *${prefix}nguli*
┇۞┇☪︎︎ *${prefix}pasar*
┇۞┇☪︎︎ *${prefix}rob*
┇۞┇☪︎︎ *${prefix}referal*
┇۞┇☪︎︎ *${prefix}petshop*
┇۞┇☪︎︎ *${prefix}kolam*
┇۞┇☪︎︎ *${prefix}koboy*
┇۞┇☪︎︎ *${prefix}leaderboard*
┇۞┇☪︎︎ *${prefix}casino*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴏ̨ᴜᴏᴛᴇs-ᴍᴇɴᴜ 〄\`*  』━◧
┇۞┇☪︎︎ *${prefix}quotesanime* 
┇۞┇☪︎︎ *${prefix}quotesbacot* 
┇۞┇☪︎︎ *${prefix}quotesbucin* 
┇۞┇☪︎︎ *${prefix}quotesmotivasi* 
┇۞┇☪︎︎ *${prefix}quotesgalau* 
┇۞┇☪︎︎ *${prefix}quotesgombal* 
┇۞┇☪︎︎ *${prefix}quoteshacker* 
┇۞┇☪︎︎ *${prefix}quotesbijak* 
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 sᴛᴏʀᴇ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}list*
┇۞┇☪︎︎ *${prefix}addlist*
┇۞┇☪︎︎ *${prefix}dellist*
┇۞┇☪︎︎ *${prefix}update*
┇۞┇☪︎︎ *${prefix}jeda*
┇۞┇☪︎︎ *${prefix}tambah*
┇۞┇☪︎︎ *${prefix}kurang*
┇۞┇☪︎︎ *${prefix}kali*
┇۞┇☪︎︎ *${prefix}bagi*
┇۞┇☪︎︎ *${prefix}delsetdone*
┇۞┇☪︎︎ *${prefix}changedone*
┇۞┇☪︎︎ *${prefix}setdone*
┇۞┇☪︎︎ *${prefix}delproses*
┇۞┇☪︎︎ *${prefix}changeproses*
┇۞┇☪︎︎ *${prefix}setproses*
┇۞┇☪︎︎ *${prefix}proses <reply chat>*
┇۞┇☪︎︎ *${prefix}done <reply chat>*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ʀᴀɴᴅᴏᴍ- ᴠɪᴅᴇᴏ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}tiktokgirl*
┇۞┇☪︎︎ *${prefix}tiktoknukthy*
┇۞┇☪︎︎ *${prefix}tiktokkayes*
┇۞┇☪︎︎ *${prefix}tiktokpanrika*
┇۞┇☪︎︎ *${prefix}tiktoknotnot*
┇۞┇☪︎︎ *${prefix}tiktokghea*
┇۞┇☪︎︎ *${prefix}tiktoksantuy*
┇۞┇☪︎︎ *${prefix}tiktokbocil*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 sᴛᴀʟᴋ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}igstalk*
┇۞┇☪︎︎ *${prefix}ttstalk*
┇۞┇☪︎︎ *${prefix}ffstalk*
┇۞┇☪︎︎ *${prefix}mlstalk*
┇۞┇☪︎︎ *${prefix}npmstalk*
┇۞┇☪︎︎ *${prefix}ghstalk*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴏᴘᴇɴ - ᴀɪ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}leptonai*
┇۞┇☪︎︎ *${prefix}text2anime*
┇۞┇☪︎︎ *${prefix}faceswap*
┇۞┇☪︎︎ *${prefix}openai*
┇۞┇☪︎︎ *${prefix}aiimg*
┇۞┇☪︎︎ *${prefix}ai4chat*  
┇۞┇☪︎︎ *${prefix}aimath*  
┇۞┇☪︎︎ *${prefix}aoyoai*  
┇۞┇☪︎︎ *${prefix}simi*  
┇۞┇☪︎︎ *${prefix}powerbrain*  
┇۞┇☪︎︎ *${prefix}hydromind*  
┇۞┇☪︎︎ *${prefix}hitori-gotoh*  
┇۞┇☪︎︎ *${prefix}hiura-mihate*  
┇۞┇☪︎︎ *${prefix}hoshino-takanashi*
┇۞┇☪︎︎ *${prefix}ai*
┇۞┇☪︎︎ *${prefix}bard*
┇۞┇☪︎︎ *${prefix}prodia*
┇۞┇☪︎︎ *${prefix}diffusion-anime*
┇۞┇☪︎︎ *${prefix}travel-assistant*
┇۞┇☪︎︎ *${prefix}ocr*
┇۞┇☪︎︎ *${prefix}guru-ai*
┇۞┇☪︎︎ *${prefix}emi-ai*
┇۞┇☪︎︎ *${prefix}claude-ai*
┇۞┇☪︎︎ *${prefix}costume-ai*
┇۞┇☪︎︎ *${prefix}herc-ai*
┇۞┇☪︎︎ *${prefix}hercai-cartoon*
┇۞┇☪︎︎ *${prefix}hercai-animefy*
┇۞┇☪︎︎ *${prefix}hercai-lexica*
┇۞┇☪︎︎ *${prefix}hercai-prodia*
┇۞┇☪︎︎ *${prefix}hercai-simurg*
┇۞┇☪︎︎ *${prefix}hercai-raava*
┇۞┇☪︎︎ *${prefix}hercai-shonin*
┇۞┇☪︎︎ *${prefix}realistic*
┇۞┇☪︎︎ *${prefix}3dmodel*
┇۞┇☪︎︎ *${prefix}jadizombie*
┇۞┇☪︎︎ *${prefix}blackboxai*
┇۞┇☪︎︎ *${prefix}photoleapai*
┇۞┇☪︎︎ *${prefix}diffusion*
┇۞┇☪︎︎ *${prefix}indo-ai*
┇۞┇☪︎︎ *${prefix}lamaai*
┇۞┇☪︎︎ *${prefix}aivo*
┇۞┇☪︎︎ *${prefix}gemini*
┇۞┇☪︎︎ *${prefix}text2img*
┇۞┇☪︎︎ *${prefix}absolutely*
┇۞┇☪︎︎ *${prefix}dalle*
┇۞┇☪︎︎ *${prefix}bingimg*
┇۞┇☪︎︎ *${prefix}bingai*
┇۞┇☪︎︎ *${prefix}gptimg*
┇۞┇☪︎︎ *${prefix}gpt4*
┇۞┇☪︎︎ *${prefix}gpt4_2*
┇۞┇☪︎︎ *${prefix}anything*
┇۞┇☪︎︎ *${prefix}hdvid*
┇۞┇☪︎︎ *${prefix}cai*
┇۞┇☪︎︎ *${prefix}youai*
┇۞┇☪︎︎ *${prefix}remini*
┇۞┇☪︎︎ *${prefix}jadianime*
┇۞┇☪︎︎ *${prefix}removebg*
┇۞┇☪︎︎ *${prefix}nulis*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ғᴜɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}smeme*
┇۞┇☪︎︎ *${prefix}ppcouple*
┇۞┇☪︎︎ *${prefix}define*
┇۞┇☪︎︎ *${prefix}qc*
┇۞┇☪︎︎ *${prefix}lyrics*
┇۞┇☪︎︎ *${prefix}suit*
┇۞┇☪︎︎ *${prefix}math*
┇۞┇☪︎︎ *${prefix}tictactoe*
┇۞┇☪︎︎ *${prefix}fact*
┇۞┇☪︎︎ *${prefix}truth*
┇۞┇☪︎︎ *${prefix}dare*
┇۞┇☪︎︎ *${prefix}couple*
┇۞┇☪︎︎ *${prefix}soulmate*
┇۞┇☪︎︎ *${prefix}stupidcheck*
┇۞┇☪︎︎ *${prefix}handsomecheck*
┇۞┇☪︎︎ *${prefix}uncleancheck*
┇۞┇☪︎︎ *${prefix}hotcheck*
┇۞┇☪︎︎ *${prefix}smartcheck*
┇۞┇☪︎︎ *${prefix}greatcheck*
┇۞┇☪︎︎ *${prefix}evilcheck*
┇۞┇☪︎︎ *${prefix}dogcheck*
┇۞┇☪︎︎ *${prefix}coolcheck*
┇۞┇☪︎︎ *${prefix}waifucheck*
┇۞┇☪︎︎ *${prefix}awesomecheck*
┇۞┇☪︎︎ *${prefix}gaycheck*
┇۞┇☪︎︎ *${prefix}cutecheck*
┇۞┇☪︎︎ *${prefix}lesbiancheck*
┇۞┇☪︎︎ *${prefix}hornycheck*
┇۞┇☪︎︎ *${prefix}prettycheck*
┇۞┇☪︎︎ *${prefix}lovelycheck*
┇۞┇☪︎︎ *${prefix}uglycheck*
┇۞┇☪︎︎ *${prefix}pick*
┇۞┇☪︎︎ *${prefix}quotes*
┇۞┇☪︎︎ *${prefix}can*
┇۞┇☪︎︎ *${prefix}is*
┇۞┇☪︎︎ *${prefix}when*
┇۞┇☪︎︎ *${prefix}where*
┇۞┇☪︎︎ *${prefix}what*
┇۞┇☪︎︎ *${prefix}how*
┇۞┇☪︎︎ *${prefix}rate*
┇۞┇☪︎︎ *${prefix}cry*
┇۞┇☪︎︎ *${prefix}kill*
┇۞┇☪︎︎ *${prefix}hug*
┇۞┇☪︎︎ *${prefix}pat*
┇۞┇☪︎︎ *${prefix}lick*
┇۞┇☪︎︎ *${prefix}kiss*
┇۞┇☪︎︎ *${prefix}bite*
┇۞┇☪︎︎ *${prefix}yeet*
┇۞┇☪︎︎ *${prefix}bully*
┇۞┇☪︎︎ *${prefix}bonk*
┇۞┇☪︎︎ *${prefix}wink*
┇۞┇☪︎︎ *${prefix}poke*
┇۞┇☪︎︎ *${prefix}nom*
┇۞┇☪︎︎ *${prefix}slap*
┇۞┇☪︎︎ *${prefix}smile*
┇۞┇☪︎︎ *${prefix}wave*
┇۞┇☪︎︎ *${prefix}awoo*
┇۞┇☪︎︎ *${prefix}blush*
┇۞┇☪︎︎ *${prefix}smug*
┇۞┇☪︎︎ *${prefix}glomp*
┇۞┇☪︎︎ *${prefix}happy*
┇۞┇☪︎︎ *${prefix}dance*
┇۞┇☪︎︎ *${prefix}cringe*
┇۞┇☪︎︎ *${prefix}cuddle*
┇۞┇☪︎︎ *${prefix}highfive*
┇۞┇☪︎︎ *${prefix}shinobu*
┇۞┇☪︎︎ *${prefix}handhold*
┇۞┇☪︎︎ *${prefix}spank*
┇۞┇☪︎︎ *${prefix}tickle*
┇۞┇☪︎︎ *${prefix}avatar*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}foxgirl*
┇۞┇☪︎︎ *${prefix}gecg*
┇۞┇☪︎︎ *${prefix}checkme*
┇۞┇☪︎︎ *${prefix}sound1 - sound161*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ʀᴀɴᴅᴏᴍ- ᴘʜᴏᴛᴏ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}aesthetic*
┇۞┇☪︎︎ *${prefix}coffee*
┇۞┇☪︎︎ *${prefix}wikimedia*
┇۞┇☪︎︎ *${prefix}wallpaper*
┇۞┇☪︎︎ *${prefix}art*
┇۞┇☪︎︎ *${prefix}bts*
┇۞┇☪︎︎ *${prefix}dogwoof*
┇۞┇☪︎︎ *${prefix}catmeow*
┇۞┇☪︎︎ *${prefix}lizardpic*
┇۞┇☪︎︎ *${prefix}goosebird*
┇۞┇☪︎︎ *${prefix}8ballpool*
┇۞┇☪︎︎ *${prefix}cosplay*
┇۞┇☪︎︎ *${prefix}hacker*
┇۞┇☪︎︎ *${prefix}cyber*
┇۞┇☪︎︎ *${prefix}gamewallpaper*
┇۞┇☪︎︎ *${prefix}islamic*
┇۞┇☪︎︎ *${prefix}jennie*
┇۞┇☪︎︎ *${prefix}jiso*
┇۞┇☪︎︎ *${prefix}satanic*
┇۞┇☪︎︎ *${prefix}justina*
┇۞┇☪︎︎ *${prefix}cartoon*
┇۞┇☪︎︎ *${prefix}pentol*
┇۞┇☪︎︎ *${prefix}cat*
┇۞┇☪︎︎ *${prefix}kpop*
┇۞┇☪︎︎ *${prefix}exo*
┇۞┇☪︎︎ *${prefix}lisa*
┇۞┇☪︎︎ *${prefix}space*
┇۞┇☪︎︎ *${prefix}car*
┇۞┇☪︎︎ *${prefix}technology*
┇۞┇☪︎︎ *${prefix}bike*
┇۞┇☪︎︎ *${prefix}shortquote*
┇۞┇☪︎︎ *${prefix}antiwork*
┇۞┇☪︎︎ *${prefix}hacking*
┇۞┇☪︎︎ *${prefix}boneka*
┇۞┇☪︎︎ *${prefix}rose*
┇۞┇☪︎︎ *${prefix}ryujin*
┇۞┇☪︎︎ *${prefix}ulzzangboy*
┇۞┇☪︎︎ *${prefix}ulzzanggirl*
┇۞┇☪︎︎ *${prefix}wallml*
┇۞┇☪︎︎ *${prefix}wallphone*
┇۞┇☪︎︎ *${prefix}mountain*
┇۞┇☪︎︎ *${prefix}goose*
┇۞┇☪︎︎ *${prefix}profilepic*
┇۞┇☪︎︎ *${prefix}couplepic*
┇۞┇☪︎︎ *${prefix}programming*
┇۞┇☪︎︎ *${prefix}pubg*
┇۞┇☪︎︎ *${prefix}blackpink*
┇۞┇☪︎︎ *${prefix}randomboy*
┇۞┇☪︎︎ *${prefix}randomgirl*
┇۞┇☪︎︎ *${prefix}hijab*
┇۞┇☪︎︎ *${prefix}chinese*
┇۞┇☪︎︎ *${prefix}indo*
┇۞┇☪︎︎ *${prefix}japanese*
┇۞┇☪︎︎ *${prefix}korean*
┇۞┇☪︎︎ *${prefix}malay*
┇۞┇☪︎︎ *${prefix}thai*
┇۞┇☪︎︎ *${prefix}vietnamese*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 sᴛɪᴄᴋᴇʀ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}goose*
┇۞┇☪︎︎ *${prefix}woof*
┇۞┇☪︎︎ *${prefix}8ball*
┇۞┇☪︎︎ *${prefix}lizard*
┇۞┇☪︎︎ *${prefix}meow*
┇۞┇☪︎︎ *${prefix}gura*
┇۞┇☪︎︎ *${prefix}doge*
┇۞┇☪︎︎ *${prefix}patrick*
┇۞┇☪︎︎ *${prefix}lovestick*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴀ ɴ ɪ ᴍ ᴇ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}otakudesu*
┇۞┇☪︎︎ *${prefix}kaorinusantara*
┇۞┇☪︎︎ *${prefix}akira*
┇۞┇☪︎︎ *${prefix}akiyama*
┇۞┇☪︎︎ *${prefix}ana*
┇۞┇☪︎︎ *${prefix}asuna*
┇۞┇☪︎︎ *${prefix}ayuzawa*
┇۞┇☪︎︎ *${prefix}boruto*
┇۞┇☪︎︎ *${prefix}chiho*
┇۞┇☪︎︎ *${prefix}chitoge*
┇۞┇☪︎︎ *${prefix}cosplayloli*
┇۞┇☪︎︎ *${prefix}cosplaysagiri*
┇۞┇☪︎︎ *${prefix}deidara*
┇۞┇☪︎︎ *${prefix}doraemon*
┇۞┇☪︎︎ *${prefix}elaina*
┇۞┇☪︎︎ *${prefix}emilia*
┇۞┇☪︎︎ *${prefix}erza*
┇۞┇☪︎︎ *${prefix}gremory*
┇۞┇☪︎︎ *${prefix}hestia*
┇۞┇☪︎︎ *${prefix}hinata*
┇۞┇☪︎︎ *${prefix}husbu*
┇۞┇☪︎︎ *${prefix}inori*
┇۞┇☪︎︎ *${prefix}isuzu*
┇۞┇☪︎︎ *${prefix}itachi*
┇۞┇☪︎︎ *${prefix}itori*
┇۞┇☪︎︎ *${prefix}kaga*
┇۞┇☪︎︎ *${prefix}kagura*
┇۞┇☪︎︎ *${prefix}kakasih*
┇۞┇☪︎︎ *${prefix}kaori*
┇۞┇☪︎︎ *${prefix}keneki*
┇۞┇☪︎︎ *${prefix}kotori*
┇۞┇☪︎︎ *${prefix}kurumi*
┇۞┇☪︎︎ *${prefix}loli*
┇۞┇☪︎︎ *${prefix}madara*
┇۞┇☪︎︎ *${prefix}megumin*
┇۞┇☪︎︎ *${prefix}mikasa*
┇۞┇☪︎︎ *${prefix}mikey*
┇۞┇☪︎︎ *${prefix}miku*
┇۞┇☪︎︎ *${prefix}minato*
┇۞┇☪︎︎ *${prefix}naruto*
┇۞┇☪︎︎ *${prefix}neko*
┇۞┇☪︎︎ *${prefix}neko2*
┇۞┇☪︎︎ *${prefix}nekonime*
┇۞┇☪︎︎ *${prefix}nezuko*
┇۞┇☪︎︎ *${prefix}onepiece*
┇۞┇☪︎︎ *${prefix}pokemon*
┇۞┇☪︎︎ *${prefix}randomnime*
┇۞┇☪︎︎ *${prefix}randomnime2*
┇۞┇☪︎︎ *${prefix}rize*
┇۞┇☪︎︎ *${prefix}sagiri*
┇۞┇☪︎︎ *${prefix}sakura*
┇۞┇☪︎︎ *${prefix}sasuke*
┇۞┇☪︎︎ *${prefix}shina*
┇۞┇☪︎︎ *${prefix}shinka*
┇۞┇☪︎︎ *${prefix}shinomiya*
┇۞┇☪︎︎ *${prefix}shizuka*
┇۞┇☪︎︎ *${prefix}shota*
┇۞┇☪︎︎ *${prefix}tejina*
┇۞┇☪︎︎ *${prefix}toukachan*
┇۞┇☪︎︎ *${prefix}tsunade*
┇۞┇☪︎︎ *${prefix}waifu*
┇۞┇☪︎︎ *${prefix}animewall*
┇۞┇☪︎︎ *${prefix}yotsuba*
┇۞┇☪︎︎ *${prefix}yuki*
┇۞┇☪︎︎ *${prefix}yulibocil*
┇۞┇☪︎︎ *${prefix}yumeko*
┇۞┇☪︎︎ *${prefix}8ball*
┇۞┇☪︎︎ *${prefix}tickle*
┇۞┇☪︎︎ *${prefix}gecg*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}animeawoo*
┇۞┇☪︎︎ *${prefix}animemegumin*
┇۞┇☪︎︎ *${prefix}animeshinobu*
┇۞┇☪︎︎ *${prefix}animehandhold*
┇۞┇☪︎︎ *${prefix}animehighfive*
┇۞┇☪︎︎ *${prefix}animecringe*
┇۞┇☪︎︎ *${prefix}animedance*
┇۞┇☪︎︎ *${prefix}animehappy*
┇۞┇☪︎︎ *${prefix}animeglomp*
┇۞┇☪︎︎ *${prefix}animeblush*
┇۞┇☪︎︎ *${prefix}animesmug*
┇۞┇☪︎︎ *${prefix}animewave*
┇۞┇☪︎︎ *${prefix}animesmile*
┇۞┇☪︎︎ *${prefix}animepoke*
┇۞┇☪︎︎ *${prefix}animewink*
┇۞┇☪︎︎ *${prefix}animebonk*
┇۞┇☪︎︎ *${prefix}animebully*
┇۞┇☪︎︎ *${prefix}animeyeet*
┇۞┇☪︎︎ *${prefix}animebite*
┇۞┇☪︎︎ *${prefix}animelick*
┇۞┇☪︎︎ *${prefix}animekill*
┇۞┇☪︎︎ *${prefix}animecry*
┇۞┇☪︎︎ *${prefix}animewlp*
┇۞┇☪︎︎ *${prefix}animekiss*
┇۞┇☪︎︎ *${prefix}animehug*
┇۞┇☪︎︎ *${prefix}animeneko*
┇۞┇☪︎︎ *${prefix}animepat*
┇۞┇☪︎︎ *${prefix}animeslap*
┇۞┇☪︎︎ *${prefix}animecuddle*
┇۞┇☪︎︎ *${prefix}animewaifu*
┇۞┇☪︎︎ *${prefix}animenom*
┇۞┇☪︎︎ *${prefix}animefoxgirl*
┇۞┇☪︎︎ *${prefix}animegecg*
┇۞┇☪︎︎ *${prefix}animetickle*
┇۞┇☪︎︎ *${prefix}animefeed*
┇۞┇☪︎︎ *${prefix}animeavatar*
┇۞┇☪︎︎ *${prefix}genshin*
┇۞┇☪︎︎ *${prefix}anime*
┇۞┇☪︎︎ *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━

┏『 *\`〄 ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}hentai*
┇۞┇☪︎︎ *${prefix}gifhentai *
┇۞┇☪︎︎ *${prefix}gifblowjob *
┇۞┇☪︎︎ *${prefix}hentaivid *
┇۞┇☪︎︎ *${prefix}hneko**
┇۞┇☪︎︎ *${prefix}nwaifu*
┇۞┇☪︎︎ *${prefix}animespank*
┇۞┇☪︎︎ *${prefix}trap*
┇۞┇☪︎︎ *${prefix}gasm*
┇۞┇☪︎︎ *${prefix}ahegao*
┇۞┇☪︎︎ *${prefix}ass*
┇۞┇☪︎︎ *${prefix}bdsm*
┇۞┇☪︎︎ *${prefix}blowjob*
┇۞┇☪︎︎ *${prefix}cuckold*
┇۞┇☪︎︎ *${prefix}cum*
┇۞┇☪︎︎ *${prefix}milf*
┇۞┇☪︎︎ *${prefix}eba*
┇۞┇☪︎︎ *${prefix}ero*
┇۞┇☪︎︎ *${prefix}femdom*
┇۞┇☪︎︎ *${prefix}foot*
┇۞┇☪︎︎ *${prefix}gangbang*
┇۞┇☪︎︎ *${prefix}glasses*
┇۞┇☪︎︎ *${prefix}jahy*
┇۞┇☪︎︎ *${prefix}masturbation*
┇۞┇☪︎︎ *${prefix}mangasearch*
┇۞┇☪︎︎ *${prefix}neko-hentai*
┇۞┇☪︎︎ *${prefix}neko-hentai2*
┇۞┇☪︎︎ *${prefix}nsfwloli*
┇۞┇☪︎︎ *${prefix}orgy*
┇۞┇☪︎︎ *${prefix}panties*
┇۞┇☪︎︎ *${prefix}pussy*
┇۞┇☪︎︎ *${prefix}tentacles*
┇۞┇☪︎︎ *${prefix}thighs*
┇۞┇☪︎︎ *${prefix}yuri*
┇۞┇☪︎︎ *${prefix}zettai*
┇۞┇☪︎︎ *${prefix}xnxxsearch*
┇۞┇☪︎︎ *${prefix}xnxxdl*
┗━━━━━━━━━━━━━━━━⊱ 

┏━『 *\`〄 ᴇᴘʜᴏᴛᴏ - ᴍ ᴀ ᴋ ᴇ ʀ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}glitchtext*
┇۞┇☪︎︎ *${prefix}writetext*
┇۞┇☪︎︎ *${prefix}advancedglow*
┇۞┇☪︎︎ *${prefix}typographytext*
┇۞┇☪︎︎ *${prefix}pixelglitch*
┇۞┇☪︎︎ *${prefix}neonglitch*
┇۞┇☪︎︎ *${prefix}flagtext*
┇۞┇☪︎︎ *${prefix}flag3dtext*
┇۞┇☪︎︎ *${prefix}deletingtext*
┇۞┇☪︎︎ *${prefix}blackpinkstyle*
┇۞┇☪︎︎ *${prefix}glowingtext*
┇۞┇☪︎︎ *${prefix}underwatertext*
┇۞┇☪︎︎ *${prefix}logomaker*
┇۞┇☪︎︎ *${prefix}cartoonstyle*
┇۞┇☪︎︎ *${prefix}papercutstyle*
┇۞┇☪︎︎ *${prefix}watercolortext*
┇۞┇☪︎︎ *${prefix}effectclouds*
┇۞┇☪︎︎ *${prefix}blackpinklogo*
┇۞┇☪︎︎ *${prefix}gradienttext*
┇۞┇☪︎︎ *${prefix}summerbeach*
┇۞┇☪︎︎ *${prefix}luxurygold*
┇۞┇☪︎︎ *${prefix}multicoloredneon*
┇۞┇☪︎︎ *${prefix}sandsummer*
┇۞┇☪︎︎ *${prefix}galaxywallpaper*
┇۞┇☪︎︎ *${prefix}1917style*
┇۞┇☪︎︎ *${prefix}makingneon*
┇۞┇☪︎︎ *${prefix}royaltext*
┇۞┇☪︎︎ *${prefix}freecreate*
┇۞┇☪︎︎ *${prefix}galaxystyle*
┇۞┇☪︎︎ *${prefix}lighteffects*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴅᴀᴛᴀʙᴀsᴇ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}setcmd*
┇۞┇☪︎︎ *${prefix}delcmd*
┇۞┇☪︎︎ *${prefix}listcmd*
┇۞┇☪︎︎ *${prefix}lockcmd*
┇۞┇☪︎︎ *${prefix}addmsg*
┇۞┇☪︎︎ *${prefix}delmsg*
┇۞┇☪︎︎ *${prefix}getmsg*
┇۞┇☪︎︎ *${prefix}listmsg*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ʙᴜɢ - ᴜɪ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}dansyavip*
┇۞┇☪︎︎ *${prefix}dansyacrush*
┇۞┇☪︎︎ *${prefix}xandroid*
┇۞┇☪︎︎ *${prefix}xandroid2*
┇۞┇☪︎︎ *${prefix}systemuicrash*
┇۞┇☪︎︎ *${prefix}xsysui*
┇۞┇☪︎︎ *${prefix}xios*
┇۞┇☪︎︎ *${prefix}xios2*
┇۞┇☪︎︎ *${prefix}xgc*
┇۞┇☪︎︎ *${prefix}ioskill*
┇۞┇☪︎︎ *${prefix}iosx*
┇۞┇☪︎︎ *${prefix}onekill*
┇۞┇☪︎︎ *${prefix}oneclickall*
┇۞┇☪︎︎ *${prefix}xsamsung*
┇۞┇☪︎︎ *${prefix}xwaweb*
┇۞┇☪︎︎ *${prefix}doublekill*
┇۞┇☪︎︎ *${prefix}triplekill*
┇۞┇☪︎︎ *${prefix}💀*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴏᴛʜᴇʀ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}ping*
┇۞┇☪︎︎ *${prefix}tqtoto*
┇۞┇☪︎︎ *${prefix}ttp*
┇۞┇☪︎︎ *${prefix}brat*
┇۞┇☪︎︎ *${prefix}animebrat*
┇۞┇☪︎︎ *${prefix}bratvid*
┇۞┇☪︎︎ *${prefix}furbrat*
┇۞┇☪︎︎ *${prefix}totalchat*
┇۞┇☪︎︎ *${prefix}hytam*
┇۞┇☪︎︎ *${prefix}cekidch*
┇۞┇☪︎︎ *${prefix}ceksewa*
┇۞┇☪︎︎ *${prefix}listsewa*
┇۞┇☪︎︎ *${prefix}readviewonce*
┇۞┇☪︎︎ *${prefix}cekkhodam*
┇۞┇☪︎︎ *${prefix}paptt*
┇۞┇☪︎︎ *${prefix}alkitab*
┇۞┇☪︎︎ *${prefix}totalfitur*
┇۞┇☪︎︎ *${prefix}menu*
┇۞┇☪︎︎ *${prefix}myip*
┇۞┇☪︎︎ *${prefix}reportbug*
┇۞┇☪︎︎ *${prefix}listpem*
┇۞┇☪︎︎ *${prefix}liststicker*
┇۞┇☪︎︎ *${prefix}listimage*
┇۞┇☪︎︎ *${prefix}listvideo*
┇۞┇☪︎︎ *${prefix}listvn*
┇۞┇☪︎︎ *${prefix}listbadword*
┇۞┇☪︎︎ *${prefix}listpc*
┇۞┇☪︎︎ *${prefix}listgc*
┇۞┇☪︎︎ *${prefix}owner*
┇۞┇☪︎︎ *${prefix}jadibot*
┇۞┇☪︎︎ *${prefix}listjadibot*
┇۞┇☪︎︎ *${prefix}donate*
┇۞┇☪︎︎ *${prefix}friend*
┇۞┇☪︎︎ *${prefix}obfuscate*
┇۞┇☪︎︎ *${prefix}styletext*
┇۞┇☪︎︎ *${prefix}fliptext*
┇۞┇☪︎︎ *${prefix}tts*
┇۞┇☪︎︎ *${prefix}say*
┇۞┇☪︎︎ *${prefix}togif*
┇۞┇☪︎︎ *${prefix}toqr*
┇۞┇☪︎︎ *${prefix}bass*
┇۞┇☪︎︎ *${prefix}blown*
┇۞┇☪︎︎ *${prefix}deep*
┇۞┇☪︎︎ *${prefix}earrape*
┇۞┇☪︎︎ *${prefix}fast*
┇۞┇☪︎︎ *${prefix}fat*
┇۞┇☪︎︎ *${prefix}nightcore*
┇۞┇☪︎︎ *${prefix}reverse*
┇۞┇☪︎︎ *${prefix}robot*
┇۞┇☪︎︎ *${prefix}slow*
┇۞┇☪︎︎ *${prefix}smooth*
┇۞┇☪︎︎ *${prefix}squirrel*
┇۞┇☪︎︎ *${prefix}tinyurl*
┇۞┇☪︎︎ *${prefix}tinyurl*
┇۞┇☪︎︎ *${prefix}tovn*
┇۞┇☪︎︎ *${prefix}toaudio*
┇۞┇☪︎︎ *${prefix}tomp3*
┇۞┇☪︎︎ *${prefix}tomp4*
┇۞┇☪︎︎ *${prefix}toimg*
┇۞┇☪︎︎ *${prefix}toonce*
┇۞┇☪︎︎ *${prefix}sticker*
┇۞┇☪︎︎ *${prefix}take*
┇۞┇☪︎︎ *${prefix}emoji*
┇۞┇☪︎︎ *${prefix}volume*
┇۞┇☪︎︎ *${prefix}ebinary*
┇۞┇☪︎︎ *${prefix}dbinary*
┇۞┇☪︎︎ *${prefix}ssweb*
┇۞┇☪︎︎ *${prefix}quoted*
┇۞┇☪︎︎ *${prefix}runtime*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴘʀɪᴍʙᴏɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}artimimpi*
┇۞┇☪︎︎ *${prefix}artinama*
┇۞┇☪︎︎ *${prefix}ramaljodoh*
┇۞┇☪︎︎ *${prefix}ramaljodohbali*
┇۞┇☪︎︎ *${prefix}suamiistri*
┇۞┇☪︎︎ *${prefix}ramalcinta*
┇۞┇☪︎︎ *${prefix}cocoknama*
┇۞┇☪︎︎ *${prefix}pasangan*
┇۞┇☪︎︎ *${prefix}jadiannikah*
┇۞┇☪︎︎ *${prefix}sifatusaha*
┇۞┇☪︎︎ *${prefix}rezeki*
┇۞┇☪︎︎ *${prefix}pekerjaan*
┇۞┇☪︎︎ *${prefix}nasib*
┇۞┇☪︎︎ *${prefix}penyakit*
┇۞┇☪︎︎ *${prefix}tarot*
┇۞┇☪︎︎ *${prefix}fengshui*
┇۞┇☪︎︎ *${prefix}haribaik*
┇۞┇☪︎︎ *${prefix}harisangar*
┇۞┇☪︎︎ *${prefix}harisial*
┇۞┇☪︎︎ *${prefix}nagahari*
┇۞┇☪︎︎ *${prefix}arahrezeki*
┇۞┇☪︎︎ *${prefix}peruntungan*
┇۞┇☪︎︎ *${prefix}weton*
┇۞┇☪︎︎ *${prefix}karakter*
┇۞┇☪︎︎ *${prefix}keberuntungan*
┇۞┇☪︎︎ *${prefix}memancing*
┇۞┇☪︎︎ *${prefix}masasubur*
┇۞┇☪︎︎ *${prefix}zodiak*
┇۞┇☪︎︎ *${prefix}shio*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ᴄᴇʀᴛɪꜰɪᴋᴀᴛ - ᴍᴇɴᴜ 〄\`* 』━━◧ 
┇۞┇☪︎︎ *${prefix}stkbaik*
┇۞┇☪︎︎ *${prefix}stkcantik*
┇۞┇☪︎︎ *${prefix}stkganteng*
┇۞┇☪︎︎ *${prefix}stkhitam*
┇۞┇☪︎︎ *${prefix}stkmiskin*
┇۞┇☪︎︎ *${prefix}stkkaya*
┇۞┇☪︎︎ *${prefix}stkmarah*
┇۞┇☪︎︎ *${prefix}stksabar*
┇۞┇☪︎︎ *${prefix}stksakiti*
┇۞┇☪︎︎ *${prefix}stkkeren*
┇۞┇☪︎︎ *${prefix}stkstkmisterius*
┇۞┇☪︎︎ *${prefix}stksantai*
┇۞┇☪︎︎ *${prefix}stksombong*
┇۞┇☪︎︎ *${prefix}stklucu*
┇۞┇☪︎︎ *${prefix}stkgila*
┗━━━━━━━━━━━━━━━━⊱

┏━『 \`〄 ɪɴsᴛᴀʟʟ - ᴍᴇɴᴜ 〄\` 』━◧
┇۞┇☪︎︎ *${prefix}installpanel*
┇۞┇☪︎︎ *${prefix}uninstallpanel*
┇۞┇☪︎︎ *${prefix}installtemastellar*
┇۞┇☪︎︎ *${prefix}installtemabilling*
┇۞┇☪︎︎ *${prefix}installtemaenigma*
┇۞┇☪︎︎ *${prefix}installtemanebula*
┇۞┇☪︎︎ *${prefix}startwings*
┇۞┇☪︎︎ *${prefix}hbpanel*
┗━━━━━━━━━━━━━━━━━

┏━『 \`〄 ᴠᴘs - ᴍᴇɴᴜ 〄\` 』━◧
┇۞┇☪︎ ${prefix}listdroplet
┇۞┇☪︎ ${prefix}restartvps
┇۞┇☪︎ ${prefix}rebuild
┇۞┇☪︎ ${prefix}sisadroplet
┇۞┇☪︎ ${prefix}deldroplet
┇۞┇☪︎ ${prefix}cvps
┇۞┇☪︎ ${prefix}r1c1
┇۞┇☪︎ ${prefix}r2c1
┇۞┇☪︎ ${prefix}r2c2
┇۞┇☪︎ ${prefix}r4c2
┇۞┇☪︎ ${prefix}r8c4
┇۞┇☪︎ ${prefix}r16c4
┗━━━━━━━━━━━━━━━━━⊱⊱`}

global.animemenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
╭⊣「 *\`〄 ᴍᴇɴᴜ ɪɴғᴏ 〄\`* 」⊢▤
┇۞┇☪︎︎ *${prefix}otakudesu*
┇۞┇☪︎︎ *${prefix}kaorinusantara*
┇۞┇☪︎︎ *${prefix}akira*
┇۞┇☪︎︎ *${prefix}akiyama*
┇۞┇☪︎︎ *${prefix}ana*
┇۞┇☪︎︎ *${prefix}asuna*
┇۞┇☪︎︎ *${prefix}ayuzawa*
┇۞┇☪︎︎ *${prefix}boruto*
┇۞┇☪︎︎ *${prefix}chiho*
┇۞┇☪︎︎ *${prefix}chitoge*
┇۞┇☪︎︎ *${prefix}cosplayloli*
┇۞┇☪︎︎ *${prefix}cosplaysagiri*
┇۞┇☪︎︎ *${prefix}deidara*
┇۞┇☪︎︎ *${prefix}doraemon*
┇۞┇☪︎︎ *${prefix}elaina*
┇۞┇☪︎︎ *${prefix}emilia*
┇۞┇☪︎︎ *${prefix}erza*
┇۞┇☪︎︎ *${prefix}gremory*
┇۞┇☪︎︎ *${prefix}hestia*
┇۞┇☪︎︎ *${prefix}hinata*
┇۞┇☪︎︎ *${prefix}husbu*
┇۞┇☪︎︎ *${prefix}inori*
┇۞┇☪︎︎ *${prefix}isuzu*
┇۞┇☪︎︎ *${prefix}itachi*
┇۞┇☪︎︎ *${prefix}itori*
┇۞┇☪︎︎ *${prefix}kaga*
┇۞┇☪︎︎ *${prefix}kagura*
┇۞┇☪︎︎ *${prefix}kakasih*
┇۞┇☪︎︎ *${prefix}kaori*
┇۞┇☪︎︎ *${prefix}keneki*
┇۞┇☪︎︎ *${prefix}kotori*
┇۞┇☪︎︎ *${prefix}kurumi*
┇۞┇☪︎︎ *${prefix}loli*
┇۞┇☪︎︎ *${prefix}madara*
┇۞┇☪︎︎ *${prefix}megumin*
┇۞┇☪︎︎ *${prefix}mikasa*
┇۞┇☪︎︎ *${prefix}mikey*
┇۞┇☪︎︎ *${prefix}miku*
┇۞┇☪︎︎ *${prefix}minato*
┇۞┇☪︎︎ *${prefix}naruto*
┇۞┇☪︎︎ *${prefix}neko*
┇۞┇☪︎︎ *${prefix}neko2*
┇۞┇☪︎︎ *${prefix}nekonime*
┇۞┇☪︎︎ *${prefix}nezuko*
┇۞┇☪︎︎ *${prefix}onepiece*
┇۞┇☪︎︎ *${prefix}pokemon*
┇۞┇☪︎︎ *${prefix}randomnime*
┇۞┇☪︎︎ *${prefix}randomnime2*
┇۞┇☪︎︎ *${prefix}rize*
┇۞┇☪︎︎ *${prefix}sagiri*
┇۞┇☪︎︎ *${prefix}sakura*
┇۞┇☪︎︎ *${prefix}sasuke*
┇۞┇☪︎︎ *${prefix}shina*
┇۞┇☪︎︎ *${prefix}shinka*
┇۞┇☪︎︎ *${prefix}shinomiya*
┇۞┇☪︎︎ *${prefix}shizuka*
┇۞┇☪︎︎ *${prefix}shota*
┇۞┇☪︎︎ *${prefix}tejina*
┇۞┇☪︎︎ *${prefix}toukachan*
┇۞┇☪︎︎ *${prefix}tsunade*
┇۞┇☪︎︎ *${prefix}waifu*
┇۞┇☪︎︎ *${prefix}animewall*
┇۞┇☪︎︎ *${prefix}yotsuba*
┇۞┇☪︎︎ *${prefix}yuki*
┇۞┇☪︎︎ *${prefix}yulibocil*
┇۞┇☪︎︎ *${prefix}yumeko*
┇۞┇☪︎︎ *${prefix}8ball*
┇۞┇☪︎︎ *${prefix}tickle*
┇۞┇☪︎︎ *${prefix}gecg*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}animeawoo*
┇۞┇☪︎︎ *${prefix}animemegumin*
┇۞┇☪︎︎ *${prefix}animeshinobu*
┇۞┇☪︎︎ *${prefix}animehandhold*
┇۞┇☪︎︎ *${prefix}animehighfive*
┇۞┇☪︎︎ *${prefix}animecringe*
┇۞┇☪︎︎ *${prefix}animedance*
┇۞┇☪︎︎ *${prefix}animehappy*
┇۞┇☪︎︎ *${prefix}animeglomp*
┇۞┇☪︎︎ *${prefix}animeblush*
┇۞┇☪︎︎ *${prefix}animesmug*
┇۞┇☪︎︎ *${prefix}animewave*
┇۞┇☪︎︎ *${prefix}animesmile*
┇۞┇☪︎︎ *${prefix}animepoke*
┇۞┇☪︎︎ *${prefix}animewink*
┇۞┇☪︎︎ *${prefix}animebonk*
┇۞┇☪︎︎ *${prefix}animebully*
┇۞┇☪︎︎ *${prefix}animeyeet*
┇۞┇☪︎︎ *${prefix}animebite*
┇۞┇☪︎︎ *${prefix}animelick*
┇۞┇☪︎︎ *${prefix}animekill*
┇۞┇☪︎︎ *${prefix}animecry*
┇۞┇☪︎︎ *${prefix}animewlp*
┇۞┇☪︎︎ *${prefix}animekiss*
┇۞┇☪︎︎ *${prefix}animehug*
┇۞┇☪︎︎ *${prefix}animeneko*
┇۞┇☪︎︎ *${prefix}animepat*
┇۞┇☪︎︎ *${prefix}animeslap*
┇۞┇☪︎︎ *${prefix}animecuddle*
┇۞┇☪︎︎ *${prefix}animewaifu*
┇۞┇☪︎︎ *${prefix}animenom*
┇۞┇☪︎︎ *${prefix}animefoxgirl*
┇۞┇☪︎︎ *${prefix}animegecg*
┇۞┇☪︎︎ *${prefix}animetickle*
┇۞┇☪︎︎ *${prefix}animefeed*
┇۞┇☪︎︎ *${prefix}animeavatar*
┇۞┇☪︎︎ *${prefix}genshin*
┇۞┇☪︎︎ *${prefix}anime*
┇۞┇☪︎︎ *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━`}

global.ownermenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴏᴡɴᴇʀ-ᴍᴇɴᴜ 〄\`* 』━⊱
┇۞┇☪︎︎ *${prefix}autoread*
┇۞┇☪︎︎ *${prefix}addsewa*
┇۞┇☪︎︎ *${prefix}delsewa*
┇۞┇☪︎︎ *${prefix}onlypc*
┇۞┇☪︎︎ *${prefix}onlygc*
┇۞┇☪︎︎ *${prefix}self*
┇۞┇☪︎︎ *${prefix}clearchat*
┇۞┇☪︎︎ *${prefix}pinchat*
┇۞┇☪︎︎ *${prefix}unpinchat*
┇۞┇☪︎︎ *${prefix}gconly* 
┇۞┇☪︎︎ *${prefix}public* 
┇۞┇☪︎︎ *${prefix}setpppanjang* 
┇۞┇☪︎︎ *${prefix}setppgcpanjang* 
┇۞┇☪︎︎ *${prefix}addcase*
┇۞┇☪︎︎ *${prefix}join* 
┇۞┇☪︎︎ *${prefix}bctext* 
┇۞┇☪︎︎ *${prefix}poll* 
┇۞┇☪︎︎ *${prefix}bcimage*
┇۞┇☪︎︎ *${prefix}bcvideo*
┇۞┇☪︎︎ *${prefix}creategc*
┇۞┇☪︎︎ *${prefix}setexif*
┇۞┇☪︎︎ *${prefix}userjid*
┇۞┇☪︎︎ *${prefix}setbotname*
┇۞┇☪︎︎ *${prefix}setbotbio*
┇۞┇☪︎︎ *${prefix}delppbot*
┇۞┇☪︎︎ *${prefix}restart*
┇۞┇☪︎︎ *${prefix}setppbot*
┇۞┇☪︎︎ *${prefix}addprem*
┇۞┇☪︎︎ *${prefix}delprem*
┇۞┇☪︎︎ *${prefix}addowner*
┇۞┇☪︎︎ *${prefix}delowner*
┇۞┇☪︎︎ *${prefix}addvn*
┇۞┇☪︎︎ *${prefix}delvn*
┇۞┇☪︎︎ *${prefix}addsticker*
┇۞┇☪︎︎ *${prefix}delsticker*
┇۞┇☪︎︎ *${prefix}addimage*
┇۞┇☪︎︎ *${prefix}delimage*
┇۞┇☪︎︎ *${prefix}addvideo*
┇۞┇☪︎︎ *${prefix}delvideo*
┇۞┇☪︎︎ *${prefix}block*
┇۞┇☪︎︎ *${prefix}unblock del*
┇۞┇☪︎︎ *${prefix}leavegc*
┇۞┇☪︎︎ *${prefix}pushkontak*
┇۞┇☪︎︎ *${prefix}pushkontakv2*
┇۞┇☪︎︎ *${prefix}pushkontakv3*
┇۞┇☪︎︎ *${prefix}pushkontakv4*
┇۞┇☪︎︎ *${prefix}savekontakv*
┇۞┇☪︎︎ *${prefix}savekontakv2*
┇۞┇☪︎︎ *${prefix}getkontak*
┇۞┇☪︎︎ *${prefix}sendkontak*
┇۞┇☪︎︎ *${prefix}jpm*
┇۞┇☪︎︎ *${prefix}jpm2*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.othermenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴏᴛʜᴇʀ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}ping*
┇۞┇☪︎︎ *${prefix}tqtoto*
┇۞┇☪︎︎ *${prefix}ttp*
┇۞┇☪︎︎ *${prefix}brat*
┇۞┇☪︎︎ *${prefix}animebrat*
┇۞┇☪︎︎ *${prefix}bratvid*
┇۞┇☪︎︎ *${prefix}furbrat*
┇۞┇☪︎︎ *${prefix}totalchat*
┇۞┇☪︎︎ *${prefix}hytam*
┇۞┇☪︎︎ *${prefix}cekidch*
┇۞┇☪︎︎ *${prefix}ceksewa*
┇۞┇☪︎︎ *${prefix}listsewa*
┇۞┇☪︎︎ *${prefix}readviewonce*
┇۞┇☪︎︎ *${prefix}cekkhodam*
┇۞┇☪︎︎ *${prefix}paptt*
┇۞┇☪︎︎ *${prefix}alkitab*
┇۞┇☪︎︎ *${prefix}totalfitur*
┇۞┇☪︎︎ *${prefix}menu*
┇۞┇☪︎︎ *${prefix}myip*
┇۞┇☪︎︎ *${prefix}reportbug*
┇۞┇☪︎︎ *${prefix}listpem*
┇۞┇☪︎︎ *${prefix}liststicker*
┇۞┇☪︎︎ *${prefix}listimage*
┇۞┇☪︎︎ *${prefix}listvideo*
┇۞┇☪︎︎ *${prefix}listvn*
┇۞┇☪︎︎ *${prefix}listbadword*
┇۞┇☪︎︎ *${prefix}listpc*
┇۞┇☪︎︎ *${prefix}listgc*
┇۞┇☪︎︎ *${prefix}owner*
┇۞┇☪︎︎ *${prefix}jadibot*
┇۞┇☪︎︎ *${prefix}listjadibot*
┇۞┇☪︎︎ *${prefix}donate*
┇۞┇☪︎︎ *${prefix}friend*
┇۞┇☪︎︎ *${prefix}obfuscate*
┇۞┇☪︎︎ *${prefix}styletext*
┇۞┇☪︎︎ *${prefix}fliptext*
┇۞┇☪︎︎ *${prefix}tts*
┇۞┇☪︎︎ *${prefix}say*
┇۞┇☪︎︎ *${prefix}togif*
┇۞┇☪︎︎ *${prefix}toqr*
┇۞┇☪︎︎ *${prefix}bass*
┇۞┇☪︎︎ *${prefix}blown*
┇۞┇☪︎︎ *${prefix}deep*
┇۞┇☪︎︎ *${prefix}earrape*
┇۞┇☪︎︎ *${prefix}fast*
┇۞┇☪︎︎ *${prefix}fat*
┇۞┇☪︎︎ *${prefix}nightcore*
┇۞┇☪︎︎ *${prefix}reverse*
┇۞┇☪︎︎ *${prefix}robot*
┇۞┇☪︎︎ *${prefix}slow*
┇۞┇☪︎︎ *${prefix}smooth*
┇۞┇☪︎︎ *${prefix}squirrel*
┇۞┇☪︎︎ *${prefix}tinyurl*
┇۞┇☪︎︎ *${prefix}tinyurl*
┇۞┇☪︎︎ *${prefix}tovn*
┇۞┇☪︎︎ *${prefix}toaudio*
┇۞┇☪︎︎ *${prefix}tomp3*
┇۞┇☪︎︎ *${prefix}tomp4*
┇۞┇☪︎︎ *${prefix}toimg*
┇۞┇☪︎︎ *${prefix}toonce*
┇۞┇☪︎︎ *${prefix}sticker*
┇۞┇☪︎︎ *${prefix}take*
┇۞┇☪︎︎ *${prefix}emoji*
┇۞┇☪︎︎ *${prefix}volume*
┇۞┇☪︎︎ *${prefix}ebinary*
┇۞┇☪︎︎ *${prefix}dbinary*
┇۞┇☪︎︎ *${prefix}ssweb*
┇۞┇☪︎︎ *${prefix}quoted*
┇۞┇☪︎︎ *${prefix}runtime*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.rpgmenu = (prefix, hituet) => {
return`

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ : Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ʀᴘɢ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}kerja*
┇۞┇☪︎︎ *${prefix}fightnaga*
┇۞┇☪︎︎ *${prefix}fightkucing*
┇۞┇☪︎︎ *${prefix}fightphonix*
┇۞┇☪︎︎ *${prefix}fightgriffin*
┇۞┇☪︎︎ *${prefix}fightkyubi*
┇۞┇☪︎︎ *${prefix}fightcentaur*
┇۞┇☪︎︎ *${prefix}nabung*
┇۞┇☪︎︎ *${prefix}mining*
┇۞┇☪︎︎ *${prefix}bankcek*
┇۞┇☪︎︎ *${prefix}maling*
┇۞┇☪︎︎ *${prefix}banknabung*
┇۞┇☪︎︎ *${prefix}banktarik*
┇۞┇☪︎︎ *${prefix}berkebon*
┇۞┇☪︎︎ *${prefix}crafting*
┇۞┇☪︎︎ *${prefix}bet*
┇۞┇☪︎︎ *${prefix}bonus*
┇۞┇☪︎︎ *${prefix}buah*
┇۞┇☪︎︎ *${prefix}nebang*
┇۞┇☪︎︎ *${prefix}bekerja*
┇۞┇☪︎︎ *${prefix}bansos*
┇۞┇☪︎︎ *${prefix}taxy*
┇۞┇☪︎︎ *${prefix}mulung*
┇۞┇☪︎︎ *${prefix}berburu*
┇۞┇☪︎︎ *${prefix}polisi*
┇۞┇☪︎︎ *${prefix}berdagang*
┇۞┇☪︎︎ *${prefix}rampok*
┇۞┇☪︎︎ *${prefix}bunuh*
┇۞┇☪︎︎ *${prefix}collect*
┇۞┇☪︎︎ *${prefix}mancing*
┇۞┇☪︎︎ *${prefix}repair*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}fight*
┇۞┇☪︎︎ *${prefix}gajian*
┇۞┇☪︎︎ *${prefix}upgrade*
┇۞┇☪︎︎ *${prefix}transfer*
┇۞┇☪︎︎ *${prefix}shop*
┇۞┇☪︎︎ *${prefix}selectskill*
┇۞┇☪︎︎ *${prefix}sampah*
┇۞┇☪︎︎ *${prefix}roket*
┇۞┇☪︎︎ *${prefix}ojek*
┇۞┇☪︎︎ *${prefix}nguli*
┇۞┇☪︎︎ *${prefix}pasar*
┇۞┇☪︎︎ *${prefix}rob*
┇۞┇☪︎︎ *${prefix}referal*
┇۞┇☪︎︎ *${prefix}petshop*
┇۞┇☪︎︎ *${prefix}kolam*
┇۞┇☪︎︎ *${prefix}koboy*
┇۞┇☪︎︎ *${prefix}leaderboard*
┇۞┇☪︎︎ *${prefix}casino*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.gamemenu = (prefix, hituet) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ɢᴀᴍᴇ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}tebakkata*
┇۞┇☪︎︎ *${prefix}tebaktebakan*
┇۞┇☪︎︎ *${prefix}tebaklirik*
┇۞┇☪︎︎ *${prefix}tebakgambar*
┇۞┇☪︎︎ *${prefix}tebaklagu*
┇۞┇☪︎︎ *${prefix}tebakkimia*
┇۞┇☪︎︎ *${prefix}asahotak*
┇۞┇☪︎︎ *${prefix}siapaaku*
┇۞┇☪︎︎ *${prefix}susunkata*
┇۞┇☪︎︎ *${prefix}tekateki*
┇۞┇☪︎︎ *${prefix}tebakbendera*
┇۞┇☪︎︎ *${prefix}tebakbenderav2*
┇۞┇☪︎︎ *${prefix}tebakkabupaten*
┇۞┇☪︎︎ *${prefix}caklontong*
┇۞┇☪︎︎ *${prefix}family100*
┇۞┇☪︎︎ *${prefix}werewolf*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱

`}

global.downloadmenu = (prefix) => { 
return`

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴅᴏᴡɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ ${prefix}tiktok
┇۞┇☪︎︎ ${prefix}tiktokslide
┇۞┇☪︎︎ ${prefix}tiktokaudio
┇۞┇☪︎︎ ${prefix}spdl
┇۞┇☪︎︎ ${prefix}ytsearch <mp3>
┇۞┇☪︎︎ ${prefix}ttsearch
┇۞┇☪︎︎ ${prefix}teraboxdl
┇۞┇☪︎︎ ${prefix}snackvideo
┇۞┇☪︎︎ ${prefix}capcutdl
┇۞┇☪︎︎ ${prefix}play
┇۞┇☪︎︎ ${prefix}ytmp3
┇۞┇☪︎︎ ${prefix}ytmp4
┇۞┇☪︎︎ ${prefix}google
┇۞┇☪︎︎ ${prefix}imdb
┇۞┇☪︎︎ ${prefix}weather
┇۞┇☪︎︎ ${prefix}wanumber
┇۞┇☪︎︎ ${prefix}instagram
┇۞┇☪︎︎ ${prefix}facebook
┇۞┇☪︎︎ ${prefix}twittervid
┇۞┇☪︎︎ ${prefix}telestick
┇۞┇☪︎︎ ${prefix}spotify
┇۞┇☪︎︎ ${prefix}gitclone
┇۞┇☪︎︎ ${prefix}happymod
┇۞┇☪︎︎ ${prefix}gdrive
┇۞┇☪︎︎ ${prefix}pinterest
┇۞┇☪︎︎ ${prefix}ringtone
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.groupmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ɢʀᴏᴜᴘ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}sider*
┇۞┇☪︎︎ *${prefix}autoaigc*
┇۞┇☪︎︎ *${prefix}warcall*
┇۞┇☪︎︎ *${prefix}autosimi*
┇۞┇☪︎︎ *${prefix}nanochat*
┇۞┇☪︎︎ *${prefix}mute*
┇۞┇☪︎︎ *${prefix}setwelcome*
┇۞┇☪︎︎ *${prefix}setleft*
┇۞┇☪︎︎ *${prefix}welcome on/off*
┇۞┇☪︎︎ *${prefix}antilink*
┇۞┇☪︎︎ *${prefix}antiwame*
┇۞┇☪︎︎ *${prefix}linkgc*
┇۞┇☪︎︎ *${prefix}invite*
┇۞┇☪︎︎ *${prefix}ephemeral*
┇۞┇☪︎︎ *${prefix}delete*
┇۞┇☪︎︎ *${prefix}setppgroup*
┇۞┇☪︎︎ *${prefix}delppgroup*
┇۞┇☪︎︎ *${prefix}setname*
┇۞┇☪︎︎ *${prefix}setdesc*
┇۞┇☪︎︎ *${prefix}add*
┇۞┇☪︎︎ *${prefix}kick*
┇۞┇☪︎︎ *${prefix}promote*
┇۞┇☪︎︎ *${prefix}demote*
┇۞┇☪︎︎ *${prefix}hidetag*
┇۞┇☪︎︎ *${prefix}totag*
┇۞┇☪︎︎ *${prefix}tagall*
┇۞┇☪︎︎ *${prefix}editinfo*
┇۞┇☪︎︎ *${prefix}opentime*
┇۞┇☪︎︎ *${prefix}closetime*
┇۞┇☪︎︎ *${prefix}resetlink*
┇۞┇☪︎︎ *${prefix}getbio*
┇۞┇☪︎︎ *${prefix}vote*
┇۞┇☪︎︎ *${prefix}upvote*
┇۞┇☪︎︎ *${prefix}downvote*
┇۞┇☪︎︎ *${prefix}checkvote*
┇۞┇☪︎︎ *${prefix}delvote*
┇۞┇☪︎︎ *${prefix}autostickergc*
┇۞┇☪︎︎ *${prefix}antilinkgc*
┇۞┇☪︎︎ *${prefix}antiwame*
┇۞┇☪︎︎ *${prefix}antilinkall*
┇۞┇☪︎︎ *${prefix}antilinktiktok*
┇۞┇☪︎︎ *${prefix}antilinkfb*
┇۞┇☪︎︎ *${prefix}antilinktwitter*
┇۞┇☪︎︎ *${prefix}antilinkig*
┇۞┇☪︎︎ *${prefix}antilinktg*
┇۞┇☪︎︎ *${prefix}antilinkytvid*
┇۞┇☪︎︎ *${prefix}antilinkytch*
┇۞┇☪︎︎ *${prefix}antivirus*
┇۞┇☪︎︎ *${prefix}antitoxic*
┇۞┇☪︎︎ *${prefix}nsfw*
┇۞┇☪︎︎ *${prefix}react*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.funmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ғᴜɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}smeme*
┇۞┇☪︎︎ *${prefix}ppcouple*
┇۞┇☪︎︎ *${prefix}define*
┇۞┇☪︎︎ *${prefix}qc*
┇۞┇☪︎︎ *${prefix}lyrics*
┇۞┇☪︎︎ *${prefix}suit*
┇۞┇☪︎︎ *${prefix}math*
┇۞┇☪︎︎ *${prefix}tictactoe*
┇۞┇☪︎︎ *${prefix}fact*
┇۞┇☪︎︎ *${prefix}truth*
┇۞┇☪︎︎ *${prefix}dare*
┇۞┇☪︎︎ *${prefix}couple*
┇۞┇☪︎︎ *${prefix}soulmate*
┇۞┇☪︎︎ *${prefix}stupidcheck*
┇۞┇☪︎︎ *${prefix}handsomecheck*
┇۞┇☪︎︎ *${prefix}uncleancheck*
┇۞┇☪︎︎ *${prefix}hotcheck*
┇۞┇☪︎︎ *${prefix}smartcheck*
┇۞┇☪︎︎ *${prefix}greatcheck*
┇۞┇☪︎︎ *${prefix}evilcheck*
┇۞┇☪︎︎ *${prefix}dogcheck*
┇۞┇☪︎︎ *${prefix}coolcheck*
┇۞┇☪︎︎ *${prefix}waifucheck*
┇۞┇☪︎︎ *${prefix}awesomecheck*
┇۞┇☪︎︎ *${prefix}gaycheck*
┇۞┇☪︎︎ *${prefix}cutecheck*
┇۞┇☪︎︎ *${prefix}lesbiancheck*
┇۞┇☪︎︎ *${prefix}hornycheck*
┇۞┇☪︎︎ *${prefix}prettycheck*
┇۞┇☪︎︎ *${prefix}lovelycheck*
┇۞┇☪︎︎ *${prefix}uglycheck*
┇۞┇☪︎︎ *${prefix}pick*
┇۞┇☪︎︎ *${prefix}quotes*
┇۞┇☪︎︎ *${prefix}can*
┇۞┇☪︎︎ *${prefix}is*
┇۞┇☪︎︎ *${prefix}when*
┇۞┇☪︎︎ *${prefix}where*
┇۞┇☪︎︎ *${prefix}what*
┇۞┇☪︎︎ *${prefix}how*
┇۞┇☪︎︎ *${prefix}rate*
┇۞┇☪︎︎ *${prefix}cry*
┇۞┇☪︎︎ *${prefix}kill*
┇۞┇☪︎︎ *${prefix}hug*
┇۞┇☪︎︎ *${prefix}pat*
┇۞┇☪︎︎ *${prefix}lick*
┇۞┇☪︎︎ *${prefix}kiss*
┇۞┇☪︎︎ *${prefix}bite*
┇۞┇☪︎︎ *${prefix}yeet*
┇۞┇☪︎︎ *${prefix}bully*
┇۞┇☪︎︎ *${prefix}bonk*
┇۞┇☪︎︎ *${prefix}wink*
┇۞┇☪︎︎ *${prefix}poke*
┇۞┇☪︎︎ *${prefix}nom*
┇۞┇☪︎︎ *${prefix}slap*
┇۞┇☪︎︎ *${prefix}smile*
┇۞┇☪︎︎ *${prefix}wave*
┇۞┇☪︎︎ *${prefix}awoo*
┇۞┇☪︎︎ *${prefix}blush*
┇۞┇☪︎︎ *${prefix}smug*
┇۞┇☪︎︎ *${prefix}glomp*
┇۞┇☪︎︎ *${prefix}happy*
┇۞┇☪︎︎ *${prefix}dance*
┇۞┇☪︎︎ *${prefix}cringe*
┇۞┇☪︎︎ *${prefix}cuddle*
┇۞┇☪︎︎ *${prefix}highfive*
┇۞┇☪︎︎ *${prefix}shinobu*
┇۞┇☪︎︎ *${prefix}handhold*
┇۞┇☪︎︎ *${prefix}spank*
┇۞┇☪︎︎ *${prefix}tickle*
┇۞┇☪︎︎ *${prefix}avatar*
┇۞┇☪︎︎ *${prefix}feed*
┇۞┇☪︎︎ *${prefix}foxgirl*
┇۞┇☪︎︎ *${prefix}gecg*
┇۞┇☪︎︎ *${prefix}checkme*
┇۞┇☪︎︎ *${prefix}sound1 - sound161*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.stalkermenu = (prefix) => {
  return `
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 sᴛᴀʟᴋ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}igstalk* IG Stalker
┇۞┇☪︎︎ *${prefix}ttstalk* TT Stalker
┇۞┇☪︎︎ *${prefix}ffstalk* FF Stalker
┇۞┇☪︎︎ *${prefix}mlstalk* ML Stalker
┇۞┇☪︎︎ *${prefix}npmstalk* NPM Stalker
┇۞┇☪︎︎ *${prefix}ghstalk* GH Stalker
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.stickermenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 sᴛɪᴄᴋᴇʀ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}goose*
┇۞┇☪︎︎ *${prefix}woof*
┇۞┇☪︎︎ *${prefix}8ball*
┇۞┇☪︎︎ *${prefix}lizard*
┇۞┇☪︎︎ *${prefix}meow*
┇۞┇☪︎︎ *${prefix}gura*
┇۞┇☪︎︎ *${prefix}doge*
┇۞┇☪︎︎ *${prefix}patrick*
┇۞┇☪︎︎ *${prefix}lovestick*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.databasemenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴅᴀᴛᴀʙᴀsᴇ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}setcmd*
┇۞┇☪︎︎ *${prefix}delcmd*
┇۞┇☪︎︎ *${prefix}listcmd*
┇۞┇☪︎︎ *${prefix}lockcmd*
┇۞┇☪︎︎ *${prefix}addmsg*
┇۞┇☪︎︎ *${prefix}delmsg*
┇۞┇☪︎︎ *${prefix}getmsg*
┇۞┇☪︎︎ *${prefix}listmsg*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.aimenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴏᴘᴇɴ - ᴀɪ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}leptonai*
┇۞┇☪︎︎ *${prefix}text2anime*
┇۞┇☪︎︎ *${prefix}faceswap*
┇۞┇☪︎︎ *${prefix}openai*
┇۞┇☪︎︎ *${prefix}ai4chat*  
┇۞┇☪︎︎ *${prefix}aimath*  
┇۞┇☪︎︎ *${prefix}aoyoai*  
┇۞┇☪︎︎ *${prefix}simi*  
┇۞┇☪︎︎ *${prefix}powerbrain*  
┇۞┇☪︎︎ *${prefix}hydromind*  
┇۞┇☪︎︎ *${prefix}hitori-gotoh*  
┇۞┇☪︎︎ *${prefix}hiura-mihate*  
┇۞┇☪︎︎ *${prefix}hoshino-takanashi*
┇۞┇☪︎︎ *${prefix}aiimg*
┇۞┇☪︎︎ *${prefix}ai*
┇۞┇☪︎︎ *${prefix}bard*
┇۞┇☪︎︎ *${prefix}prodia*
┇۞┇☪︎︎ *${prefix}diffusion-anime*
┇۞┇☪︎︎ *${prefix}travel-assistant*
┇۞┇☪︎︎ *${prefix}ocr*
┇۞┇☪︎︎ *${prefix}guru-ai*
┇۞┇☪︎︎ *${prefix}emi-ai*
┇۞┇☪︎︎ *${prefix}claude-ai*
┇۞┇☪︎︎ *${prefix}costume-ai*
┇۞┇☪︎︎ *${prefix}herc-ai*
┇۞┇☪︎︎ *${prefix}hercai-cartoon*
┇۞┇☪︎︎ *${prefix}hercai-animefy*
┇۞┇☪︎︎ *${prefix}hercai-lexica*
┇۞┇☪︎︎ *${prefix}hercai-prodia*
┇۞┇☪︎︎ *${prefix}hercai-simurg*
┇۞┇☪︎︎ *${prefix}hercai-raava*
┇۞┇☪︎︎ *${prefix}hercai-shonin*
┇۞┇☪︎︎ *${prefix}realistic*
┇۞┇☪︎︎ *${prefix}3dmodel*
┇۞┇☪︎︎ *${prefix}jadizombie*
┇۞┇☪︎︎ *${prefix}blackboxai*
┇۞┇☪︎︎ *${prefix}photoleapai*
┇۞┇☪︎︎ *${prefix}diffusion*
┇۞┇☪︎︎ *${prefix}indo-ai*
┇۞┇☪︎︎ *${prefix}lamaai*
┇۞┇☪︎︎ *${prefix}aivo*
┇۞┇☪︎︎ *${prefix}gemini*
┇۞┇☪︎︎ *${prefix}text2img*
┇۞┇☪︎︎ *${prefix}absolutely*
┇۞┇☪︎︎ *${prefix}dalle*
┇۞┇☪︎︎ *${prefix}bingimg*
┇۞┇☪︎︎ *${prefix}bingai*
┇۞┇☪︎︎ *${prefix}gptimg*
┇۞┇☪︎︎ *${prefix}gpt4*
┇۞┇☪︎︎ *${prefix}gpt4_2*
┇۞┇☪︎︎ *${prefix}anything*
┇۞┇☪︎︎ *${prefix}hdvid*
┇۞┇☪︎︎ *${prefix}cai*
┇۞┇☪︎︎ *${prefix}youai*
┇۞┇☪︎︎ *${prefix}remini*
┇۞┇☪︎︎ *${prefix}jadianime*
┇۞┇☪︎︎ *${prefix}removebg*
┇۞┇☪︎︎ *${prefix}nulis*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.quotesmenu = (prefix) => {
return`

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴏ̨ᴜᴏᴛᴇs-ᴍᴇɴᴜ 〄\`*  』━◧
┇۞┇☪︎︎ *${prefix}quotesanime*
┇۞┇☪︎︎ *${prefix}quotesbacot*
┇۞┇☪︎︎ *${prefix}quotesbucin*
┇۞┇☪︎︎ *${prefix}quotesmotivasi*
┇۞┇☪︎︎ *${prefix}quotesgalau*
┇۞┇☪︎︎ *${prefix}quotesgombal*
┇۞┇☪︎︎ *${prefix}quoteshacker*
┇۞┇☪︎︎ *${prefix}quotesbijak*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}
 
global.storemenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 sᴛᴏʀᴇ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}list*
┇۞┇☪︎︎ *${prefix}addlist*
┇۞┇☪︎︎ *${prefix}dellist*
┇۞┇☪︎︎ *${prefix}update*
┇۞┇☪︎︎ *${prefix}jeda*
┇۞┇☪︎︎ *${prefix}tambah*
┇۞┇☪︎︎ *${prefix}kurang*
┇۞┇☪︎︎ *${prefix}kali*
┇۞┇☪︎︎ *${prefix}bagi*
┇۞┇☪︎︎ *${prefix}delsetdone*
┇۞┇☪︎︎ *${prefix}changedone*
┇۞┇☪︎︎ *${prefix}setdone*
┇۞┇☪︎︎ *${prefix}delproses*
┇۞┇☪︎︎ *${prefix}changeproses*
┇۞┇☪︎︎ *${prefix}setproses*
┇۞┇☪︎︎ *${prefix}proses <reply chat>*
┇۞┇☪︎︎ *${prefix}done <reply chat>*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.anonymousmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}anonymouschat*
┇۞┇☪︎︎ *${prefix}start*
┇۞┇☪︎︎ *${prefix}next*
┇۞┇☪︎︎ *${prefix}stop*
┇۞┇☪︎︎ *${prefix}sendprofile*
┇۞┇☪︎︎ *${prefix}menfess*
┇۞┇☪︎︎ *${prefix}confess*
┇۞┇☪︎︎ *${prefix}balasmenfess*
┇۞┇☪︎︎ *${prefix}tolakmenfess*
┇۞┇☪︎︎ *${prefix}stopmenfess*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.pushmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴘᴜsʜ - ᴍᴇɴᴜ 〄\`* 』━━◧
┇۞┇☪︎︎ *${prefix}cekidgc*
┇۞┇☪︎︎ *${prefix}pushkontak*
┇۞┇☪︎︎ *${prefix}pushkontakv2*
┇۞┇☪︎︎ *${prefix}pushkontakv3*
┇۞┇☪︎︎ *${prefix}pushkontakv4*
┇۞┇☪︎︎ *${prefix}savekontakv*
┇۞┇☪︎︎ *${prefix}savekontakv2*
┇۞┇☪︎︎ *${prefix}getkontak*
┇۞┇☪︎︎ *${prefix}sendkontak*
┇۞┇☪︎︎ *${prefix}jpm*
┇۞┇☪︎︎ *${prefix}jpm2*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.cpanelmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴄᴘᴀɴᴇʟ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}panel*
┇۞┇☪︎︎ *${prefix}listusr*
┇۞┇☪︎︎ *${prefix}delusr*
┇۞┇☪︎︎ *${prefix}listsrv*
┇۞┇☪︎︎ *${prefix}delsrv*
┇۞┇☪︎︎ *${prefix}tutorial*
┇۞┇☪︎︎ *${prefix}ramlist*
┇۞┇☪︎︎ *${prefix}premlist*
┇۞┇☪︎︎ *${prefix}addusr*
┇۞┇☪︎︎ *${prefix}addsrv*
┇۞┇☪︎︎ *${prefix}updatesrv*
┇۞┇☪︎︎ *${prefix}suspend*
┇۞┇☪︎︎ *${prefix}unsuspend*
┇۞┇☪︎︎ *${prefix}createadmin*
┇۞┇☪︎︎ *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━⊱

▭▬▭▬▭( *LIST RAM* ▬▭▬▭

*.1gb [username,nomor]*
*.2gb [username,nomor]*
*.3gb [username,nomor]*
*.4gb [username,nomor]*
*.5gb [username,nomor]*
*.6gb [username,nomor]*
*.7gb [username,nomor]*
*.8gb [username,nomor]*
*.unli [username,nomor]*

Contoh:
.ram username,nomor
.1gb Nano,6285745522549
▬▭▬▭▬▭▬▭▬▭▬▭▬`}

global.bugmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ʙᴜɢ - ᴜɪ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}dansyavip*
┇۞┇☪︎︎ *${prefix}dansyacrush*
┇۞┇☪︎︎ *${prefix}xandroid*
┇۞┇☪︎︎ *${prefix}xandroid2*
┇۞┇☪︎︎ *${prefix}systemuicrash*
┇۞┇☪︎︎ *${prefix}xsysui*
┇۞┇☪︎︎ *${prefix}xios*
┇۞┇☪︎︎ *${prefix}xios2*
┇۞┇☪︎︎ *${prefix}xgc*
┇۞┇☪︎︎ *${prefix}ioskill*
┇۞┇☪︎︎ *${prefix}iosx*
┇۞┇☪︎︎ *${prefix}onekill*
┇۞┇☪︎︎ *${prefix}oneclickall*
┇۞┇☪︎︎ *${prefix}xsamsung*
┇۞┇☪︎︎ *${prefix}xwaweb*
┇۞┇☪︎︎ *${prefix}doublekill*
┇۞┇☪︎︎ *${prefix}triplekill*
┇۞┇☪︎︎ *${prefix}💀*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.randomphotomenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ʀᴀɴᴅᴏᴍ- ᴘʜᴏᴛᴏ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}aesthetic*
┇۞┇☪︎︎ *${prefix}coffee*
┇۞┇☪︎︎ *${prefix}wikimedia*
┇۞┇☪︎︎ *${prefix}wallpaper*
┇۞┇☪︎︎ *${prefix}art*
┇۞┇☪︎︎ *${prefix}bts*
┇۞┇☪︎︎ *${prefix}dogwoof*
┇۞┇☪︎︎ *${prefix}catmeow*
┇۞┇☪︎︎ *${prefix}lizardpic*
┇۞┇☪︎︎ *${prefix}goosebird*
┇۞┇☪︎︎ *${prefix}8ballpool*
┇۞┇☪︎︎ *${prefix}cosplay*
┇۞┇☪︎︎ *${prefix}hacker*
┇۞┇☪︎︎ *${prefix}cyber*
┇۞┇☪︎︎ *${prefix}gamewallpaper*
┇۞┇☪︎︎ *${prefix}islamic*
┇۞┇☪︎︎ *${prefix}jennie*
┇۞┇☪︎︎ *${prefix}jiso*
┇۞┇☪︎︎ *${prefix}satanic*
┇۞┇☪︎︎ *${prefix}justina*
┇۞┇☪︎︎ *${prefix}cartoon*
┇۞┇☪︎︎ *${prefix}pentol*
┇۞┇☪︎︎ *${prefix}cat*
┇۞┇☪︎︎ *${prefix}kpop*
┇۞┇☪︎︎ *${prefix}exo*
┇۞┇☪︎︎ *${prefix}lisa*
┇۞┇☪︎︎ *${prefix}space*
┇۞┇☪︎︎ *${prefix}car*
┇۞┇☪︎︎ *${prefix}technology*
┇۞┇☪︎︎ *${prefix}bike*
┇۞┇☪︎︎ *${prefix}shortquote*
┇۞┇☪︎︎ *${prefix}antiwork*
┇۞┇☪︎︎ *${prefix}hacking*
┇۞┇☪︎︎ *${prefix}boneka*
┇۞┇☪︎︎ *${prefix}rose*
┇۞┇☪︎︎ *${prefix}ryujin*
┇۞┇☪︎︎ *${prefix}ulzzangboy*
┇۞┇☪︎︎ *${prefix}ulzzanggirl*
┇۞┇☪︎︎ *${prefix}wallml*
┇۞┇☪︎︎ *${prefix}wallphone*
┇۞┇☪︎︎ *${prefix}mountain*
┇۞┇☪︎︎ *${prefix}goose*
┇۞┇☪︎︎ *${prefix}profilepic*
┇۞┇☪︎︎ *${prefix}couplepic*
┇۞┇☪︎︎ *${prefix}programming*
┇۞┇☪︎︎ *${prefix}pubg*
┇۞┇☪︎︎ *${prefix}blackpink*
┇۞┇☪︎︎ *${prefix}randomboy*
┇۞┇☪︎︎ *${prefix}randomgirl*
┇۞┇☪︎︎ *${prefix}hijab*
┇۞┇☪︎︎ *${prefix}chinese*
┇۞┇☪︎︎ *${prefix}indo*
┇۞┇☪︎︎ *${prefix}japanese*
┇۞┇☪︎︎ *${prefix}korean*
┇۞┇☪︎︎ *${prefix}malay*
┇۞┇☪︎︎ *${prefix}thai*
┇۞┇☪︎︎ *${prefix}vietnamese*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.randomvideomenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ʀᴀɴᴅᴏᴍ- ᴠɪᴅᴇᴏ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}tiktokgirl*
┇۞┇☪︎︎ *${prefix}tiktoknukthy*
┇۞┇☪︎︎ *${prefix}tiktokkayes*
┇۞┇☪︎︎ *${prefix}tiktokpanrika*
┇۞┇☪︎︎ *${prefix}tiktoknotnot*
┇۞┇☪︎︎ *${prefix}tiktokghea*
┇۞┇☪︎︎ *${prefix}tiktoksantuy*
┇۞┇☪︎︎ *${prefix}tiktokbocil*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.primbonmenu = (prefix) => {
  return `
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴘʀɪᴍʙᴏɴ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}artimimpi*
┇۞┇☪︎︎ *${prefix}artinama*
┇۞┇☪︎︎ *${prefix}ramaljodoh*
┇۞┇☪︎︎ *${prefix}ramaljodohbali*
┇۞┇☪︎︎ *${prefix}suamiistri*
┇۞┇☪︎︎ *${prefix}ramalcinta*
┇۞┇☪︎︎ *${prefix}cocoknama*
┇۞┇☪︎︎ *${prefix}pasangan*
┇۞┇☪︎︎ *${prefix}jadiannikah*
┇۞┇☪︎︎ *${prefix}sifatusaha*
┇۞┇☪︎︎ *${prefix}rezeki*
┇۞┇☪︎︎ *${prefix}pekerjaan*
┇۞┇☪︎︎ *${prefix}nasib*
┇۞┇☪︎︎ *${prefix}penyakit*
┇۞┇☪︎︎ *${prefix}tarot*
┇۞┇☪︎︎ *${prefix}fengshui*
┇۞┇☪︎︎ *${prefix}haribaik*
┇۞┇☪︎︎ *${prefix}harisangar*
┇۞┇☪︎︎ *${prefix}harisial*
┇۞┇☪︎︎ *${prefix}nagahari*
┇۞┇☪︎︎ *${prefix}arahrezeki*
┇۞┇☪︎︎ *${prefix}peruntungan*
┇۞┇☪︎︎ *${prefix}weton*
┇۞┇☪︎︎ *${prefix}karakter*
┇۞┇☪︎︎ *${prefix}keberuntungan*
┇۞┇☪︎︎ *${prefix}memancing*
┇۞┇☪︎︎ *${prefix}masasubur*
┇۞┇☪︎︎ *${prefix}zodiak*
┇۞┇☪︎︎ *${prefix}shio*
┗━━━━━━━━━━━━━━━━⊱

┏『 *\`〄 ʙᴇʀɪᴛᴀ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}beritabola*
┇۞┇☪︎︎ *${prefix}fajar*
┇۞┇☪︎︎ *${prefix}cnn*
┇۞┇☪︎︎ *${prefix}layarkaca*
┇۞┇☪︎︎ *${prefix}cnbc*
┇۞┇☪︎︎ *${prefix}tribun*
┇۞┇☪︎︎ *${prefix}indozone*
┇۞┇☪︎︎ *${prefix}kompas*
┇۞┇☪︎︎ *${prefix}detiknews*
┇۞┇☪︎︎ *${prefix}dailynews*
┇۞┇☪︎︎ *${prefix}inews*
┇۞┇☪︎︎ *${prefix}okezone*
┇۞┇☪︎︎ *${prefix}sindo*
┇۞┇☪︎︎ *${prefix}tempo*
┇۞┇☪︎︎ *${prefix}antara*
┇۞┇☪︎︎ *${prefix}kontan*
┇۞┇☪︎︎ *${prefix}merdeka*
┇۞┇☪︎︎ *${prefix}jalantikus*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.beritamenu = (prefix) => {
  return `
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ʙᴇʀɪᴛᴀ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}beritabola*
┇۞┇☪︎︎ *${prefix}fajar*
┇۞┇☪︎︎ *${prefix}cnn*
┇۞┇☪︎︎ *${prefix}layarkaca*
┇۞┇☪︎︎ *${prefix}cnbc*
┇۞┇☪︎︎ *${prefix}tribun*
┇۞┇☪︎︎ *${prefix}indozone*
┇۞┇☪︎︎ *${prefix}kompas*
┇۞┇☪︎︎ *${prefix}detiknews*
┇۞┇☪︎︎ *${prefix}dailynews*
┇۞┇☪︎︎ *${prefix}inews*
┇۞┇☪︎︎ *${prefix}okezone*
┇۞┇☪︎︎ *${prefix}sindo*
┇۞┇☪︎︎ *${prefix}tempo*
┇۞┇☪︎︎ *${prefix}antara*
┇۞┇☪︎︎ *${prefix}kontan*
┇۞┇☪︎︎ *${prefix}merdeka*
┇۞┇☪︎︎ *${prefix}jalantikus*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.islamimenu= (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ɪsʟᴀᴍɪᴄ - ᴍᴇɴᴜ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}kisahnabi*
┇۞┇☪︎︎ *${prefix}asmaulhusna*
┇۞┇☪︎︎ *${prefix}bacaansholat*
┇۞┇☪︎︎ *${prefix}audiosurah*
┇۞┇☪︎︎ *${prefix}ayatkursi*
┇۞┇☪︎︎ *${prefix}doaharian*
┇۞┇☪︎︎ *${prefix}niatsholat*
┇۞┇☪︎︎ *${prefix}quotesislami*
┇۞┇☪︎︎ *${prefix}doatahlil*
┇۞┇☪︎︎ *${prefix}alquran*
┇۞┇☪︎︎ *${prefix}jadwalsholat*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.ephoto360menu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏━『 *\`〄 ᴇᴘʜᴏᴛᴏ - ᴍ ᴀ ᴋ ᴇ ʀ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}glitchtext*
┇۞┇☪︎︎ *${prefix}writetext*
┇۞┇☪︎︎ *${prefix}advancedglow*
┇۞┇☪︎︎ *${prefix}typographytext*
┇۞┇☪︎︎ *${prefix}pixelglitch*
┇۞┇☪︎︎ *${prefix}neonglitch*
┇۞┇☪︎︎ *${prefix}flagtext*
┇۞┇☪︎︎ *${prefix}flag3dtext*
┇۞┇☪︎︎ *${prefix}deletingtext*
┇۞┇☪︎︎ *${prefix}blackpinkstyle*
┇۞┇☪︎︎ *${prefix}glowingtext*
┇۞┇☪︎︎ *${prefix}underwatertext*
┇۞┇☪︎︎ *${prefix}logomaker*
┇۞┇☪︎︎ *${prefix}cartoonstyle*
┇۞┇☪︎︎ *${prefix}papercutstyle*
┇۞┇☪︎︎ *${prefix}watercolortext*
┇۞┇☪︎︎ *${prefix}effectclouds*
┇۞┇☪︎︎ *${prefix}blackpinklogo*
┇۞┇☪︎︎ *${prefix}gradienttext*
┇۞┇☪︎︎ *${prefix}summerbeach*
┇۞┇☪︎︎ *${prefix}luxurygold*
┇۞┇☪︎︎ *${prefix}multicoloredneon*
┇۞┇☪︎︎ *${prefix}sandsummer*
┇۞┇☪︎︎ *${prefix}galaxywallpaper*
┇۞┇☪︎︎ *${prefix}1917style*
┇۞┇☪︎︎ *${prefix}makingneon*
┇۞┇☪︎︎ *${prefix}royaltext*
┇۞┇☪︎︎ *${prefix}freecreate*
┇۞┇☪︎︎ *${prefix}galaxystyle*
┇۞┇☪︎︎ *${prefix}lighteffects*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.nsfwmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ 〄\`* 』━◧
┇۞┇☪︎︎ *${prefix}hentai*
┇۞┇☪︎︎ *${prefix}gifhentai*
┇۞┇☪︎︎ *${prefix}gifblowjob*
┇۞┇☪︎︎ *${prefix}hentaivid*
┇۞┇☪︎︎ *${prefix}hneko*
┇۞┇☪︎︎ *${prefix}nwaifu*
┇۞┇☪︎︎ *${prefix}animespank*
┇۞┇☪︎︎ *${prefix}trap*
┇۞┇☪︎︎ *${prefix}gasm*
┇۞┇☪︎︎ *${prefix}ahegao*
┇۞┇☪︎︎ *${prefix}ass*
┇۞┇☪︎︎ *${prefix}bdsm*
┇۞┇☪︎︎ *${prefix}blowjob*
┇۞┇☪︎︎ *${prefix}cuckold*
┇۞┇☪︎︎ *${prefix}cum*
┇۞┇☪︎︎ *${prefix}milf*
┇۞┇☪︎︎ *${prefix}eba*
┇۞┇☪︎︎ *${prefix}ero*
┇۞┇☪︎︎ *${prefix}femdom*
┇۞┇☪︎︎ *${prefix}foot*
┇۞┇☪︎︎ *${prefix}gangbang*
┇۞┇☪︎︎ *${prefix}glasses*
┇۞┇☪︎︎ *${prefix}jahy*
┇۞┇☪︎︎ *${prefix}masturbation*
┇۞┇☪︎︎ *${prefix}mangasearch*
┇۞┇☪︎︎ *${prefix}neko-hentai*
┇۞┇☪︎︎ *${prefix}neko-hentai2*
┇۞┇☪︎︎ *${prefix}nsfwloli*
┇۞┇☪︎︎ *${prefix}orgy*
┇۞┇☪︎︎ *${prefix}panties*
┇۞┇☪︎︎ *${prefix}pussy*
┇۞┇☪︎︎ *${prefix}tentacles*
┇۞┇☪︎︎ *${prefix}thighs*
┇۞┇☪︎︎ *${prefix}yuri*
┇۞┇☪︎︎ *${prefix}zettai*
┇۞┇☪︎︎ *${prefix}xnxxsearch*
┇۞┇☪︎︎ *${prefix}xnxxdl*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.sertifikatmenu = (prefix) => {
return`
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏『 *\`〄 ᴄᴇʀᴛɪꜰɪᴋᴀᴛ - ᴍᴇɴᴜ 〄\`* 』━━◧ 
┇۞┇☪︎︎ *${prefix}stkbaik*
┇۞┇☪︎︎ *${prefix}stkcantik*
┇۞┇☪︎︎ *${prefix}stkganteng*
┇۞┇☪︎︎ *${prefix}stkhitam*
┇۞┇☪︎︎ *${prefix}stkmiskin*
┇۞┇☪︎︎ *${prefix}stkkaya*
┇۞┇☪︎︎ *${prefix}stkmarah*
┇۞┇☪︎︎ *${prefix}stksabar*
┇۞┇☪︎︎ *${prefix}stksakiti*
┇۞┇☪︎︎ *${prefix}stkkeren*
┇۞┇☪︎︎ *${prefix}stkstkmisterius*
┇۞┇☪︎︎ *${prefix}stksantai*
┇۞┇☪︎︎ *${prefix}stksombong*
┇۞┇☪︎︎ *${prefix}stklucu*
┇۞┇☪︎︎ *${prefix}stkgila*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.pyterodactylemenu = (prefix) => { 
  return `
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏━『 \`〄 ɪɴsᴛᴀʟʟ - ᴍᴇɴᴜ 〄\` 』━◧
┇۞┇☪︎︎ *${prefix}installpanel*
┇۞┇☪︎︎ *${prefix}uninstallpanel*
┇۞┇☪︎︎ *${prefix}installtemastellar*
┇۞┇☪︎︎ *${prefix}installtemabilling*
┇۞┇☪︎︎ *${prefix}installtemaenigma*
┇۞┇☪︎︎ *${prefix}installtemanebula*
┇۞┇☪︎︎ *${prefix}startwings*
┇۞┇☪︎︎ *${prefix}hbpanel*
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

global.digitaloceanmenu = (prefix) => { 
  return `
sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ ғᴀᴍᴢᴋᴜ 🤖

┏═━۞ \`ɪɴғᴏ ʙᴏᴛᴢ\` ━━۞㍐
┇۞┇☪︎︎ ɴᴀᴍᴀ ʙᴏᴛ: *FAMZKU*
┇۞┇☪︎︎ ᴠᴇʀsɪᴏɴ : 1.0
┇۞┇☪︎︎ ʙᴀsᴇ : xᴇᴏɴ
┇۞┇☪︎ ᴄʀᴇᴀᴛᴏʀ :Kenjaa
┗━━━━━━━━━━━━
┏━『 \`〄 ᴠᴘs - ᴍᴇɴᴜ 〄\` 』━◧
┇۞┇☪︎ ${prefix}listdroplet
┇۞┇☪︎ ${prefix}restartvps
┇۞┇☪︎ ${prefix}rebuild
┇۞┇☪︎ ${prefix}sisadroplet
┇۞┇☪︎ ${prefix}deldroplet
┇۞┇☪︎ ${prefix}cvps
┇۞┇☪︎ ${prefix}r1c1
┇۞┇☪︎ ${prefix}r2c1
┇۞┇☪︎ ${prefix}r2c2
┇۞┇☪︎ ${prefix}r4c2
┇۞┇☪︎ ${prefix}r8c4
┇۞┇☪︎ ${prefix}r16c4
┇۞┗━━━━━━━━━━━⊱
┗━━━━━━━━━━━━━━⊱
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
