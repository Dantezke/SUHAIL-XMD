const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254115770750";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_20_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwMTRKZ0QzMTQ3ckczb08vTXZvc1Z3aEs2K0RTM0ozSmIxTkpZWW1KZEMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVa0loa3hYS1NoNkY2WnpHTEJOcnRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImEwMTU3MzBkLTgwYzEtNDU2OC05ZDg0LWFlYjc2OWU1Y2ZmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDQwLFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgMTI5LFxuICAgICAgMjMyLFxuICAgICAgMTcxLFxuICAgICAgNzcsXG4gICAgICAxNjUsXG4gICAgICAxMDgsXG4gICAgICAxNzIsXG4gICAgICAyMjIsXG4gICAgICA5OSxcbiAgICAgIDIyLFxuICAgICAgMTY2LFxuICAgICAgMTY4LFxuICAgICAgMjQ1LFxuICAgICAgMjI3LFxuICAgICAgNzAsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgNTgsXG4gICAgICAxMTcsXG4gICAgICAyOSxcbiAgICAgIDU3LFxuICAgICAgOTAsXG4gICAgICAxMjcsXG4gICAgICA5NixcbiAgICAgIDUzLFxuICAgICAgMTczLFxuICAgICAgMjI3LFxuICAgICAgMjAwLFxuICAgICAgMjM2LFxuICAgICAgNDksXG4gICAgICA5MCxcbiAgICAgIDM3LFxuICAgICAgMTQ3LFxuICAgICAgMTcyLFxuICAgICAgMTksXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWUNBMlpaWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE1NzcwNzUwOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODkxOTgwMDcwMTM1MjA6ODFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS21LNU5vR0VNYlc5TGtHR0JjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrU1ZtbTNKTHVHMllGNjVTa05Wd2d2akN4YWQxWmRleVFpYnBmdncxVnlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImkvSWhSelZiaGhkdTJsTGx2bHIyVmNrb1RwczdybDNUaEkrOWdDSTZqb0p3ZXhrL3dmdHdpV2RSQUxEek5tUUtzWU5ZSE40MERKVlhJS25OQUxxTENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlUyR1pGYVRtd21Bc21UZnYzajZleTRQMnp6VExZMzFBR2pYczFQRmZJeW9IcG1LM1lGZmVSMnQ4OEI4UFJVRjNtakU3SDhVazdNMk05aGFUZEVWdkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNTc3MDc1MDo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjA2MjAyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk0bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTRtLmpzb24iOiAie1wia2V5RGF0YVwiOlwid0tCQW5RZFRxMDQvQXlEcEJCVlNaSGw5S3Y4a2xqeVErVzM0WXR1NXlTTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODAwOTk2MTM3LFwiY3VycmVudEluZGV4XCI6MjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCwyMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Danny-XMD",
  ownername:process.env.OWNER_NAME|| "Danny-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
