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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_00_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVBncDB0alRSL3g4S0FYbHBhYVRpM296SkcxT1hhR3NoaC9remorNjNxcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTU3NzA3NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwRTA1RUE5RDQwQzBFN0U5N0ZFQ0Y2QzNGNjBBQUIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc5NDQzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1WFdfV2ZDcVFUS1hMX1ljUTJFQW9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBhMDVkNWJhLTBiODEtNGQyZi05MzY2LTZkYWM5NzEzY2M0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMjM5LFxuICAgICAgOTMsXG4gICAgICA5NixcbiAgICAgIDExLFxuICAgICAgOTksXG4gICAgICAzNCxcbiAgICAgIDQ2LFxuICAgICAgMjE0LFxuICAgICAgOTMsXG4gICAgICAxMjMsXG4gICAgICA5MCxcbiAgICAgIDIsXG4gICAgICAxNTMsXG4gICAgICAyNDksXG4gICAgICA0NixcbiAgICAgIDYsXG4gICAgICAxMjksXG4gICAgICA3MSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMjMzLFxuICAgICAgMTE2LFxuICAgICAgMjQ3LFxuICAgICAgMjEzLFxuICAgICAgMTM3LFxuICAgICAgMjIsXG4gICAgICAyMjEsXG4gICAgICAyNDQsXG4gICAgICA0MSxcbiAgICAgIDE4MSxcbiAgICAgIDE4NixcbiAgICAgIDQwLFxuICAgICAgNjcsXG4gICAgICAyOCxcbiAgICAgIDIyMCxcbiAgICAgIDEyNyxcbiAgICAgIDI1LFxuICAgICAgMTAxLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI3WjJFTEVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTU3NzA3NTA6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTE5ODAwNzAxMzUyMDo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYUs1Tm9HRVAycjVMa0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtTVm1tM0pMdUcyWUY2NVNrTlZ3Z3ZqQ3hhZDFaZGV5UWlicGZ2dzFWeVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2NzWjBHYnpMbTUxRU5TS3pvYzdxMjIyVlplU09wZlZwcXd6VkdFMjNNb1lpQzRHdUxLL3ppQUVIaG1EWFhxQ3JvY2RpRDdvWTlZaU4vRUtzV2U0RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWNabTJFd1lqOWxaVi8xNUNBaEh0UjFZaXR0SHc2MFZtSXkrc1p4YzJmeVB3Y0k3VGpVMHFSazFOUkJJWDBrdTRTNm5qdkdxSFhXZnErQmhUeVp0RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1NzcwNzUwOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzk0NDM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlB1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5SkJPWGxNSkwvUWNHekJ1LzZkTHdWYUpGR3U0aTJsdnBISWxUVW9STjBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDA5OTYxMzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTc4NzQyMTMxN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DANNY-XMD",
  ownername:process.env.OWNER_NAME|| "DANNY-X",


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
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
