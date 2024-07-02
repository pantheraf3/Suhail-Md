const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1FXZ0FPclgxbWhRTTgyTm0vUlBCRmlKU0c4NnFQc1FkMlFKOGszZVJNaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ19mclFBSlFTeS1wcVFtbzBZcWdrZ1wiLFxuICBcInBob25lSWRcIjogXCJmMDQxMDBjMS02MGYxLTQwNjEtOGU1Mi00Nzc1NzZhM2FmOGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMTE2LFxuICAgICAgMTA1LFxuICAgICAgMjQ4LFxuICAgICAgMjM3LFxuICAgICAgMTE3LFxuICAgICAgMTg3LFxuICAgICAgMTY5LFxuICAgICAgMTk3LFxuICAgICAgOTAsXG4gICAgICAxNjAsXG4gICAgICAxMTgsXG4gICAgICAxOTIsXG4gICAgICAyNTIsXG4gICAgICAzMixcbiAgICAgIDE3NSxcbiAgICAgIDkyLFxuICAgICAgMTI4LFxuICAgICAgMTI1LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxNTQsXG4gICAgICAxMTQsXG4gICAgICAxMjEsXG4gICAgICAyMjMsXG4gICAgICAxNDksXG4gICAgICAxODEsXG4gICAgICAyNTAsXG4gICAgICAxMjgsXG4gICAgICAxMzAsXG4gICAgICAxNjIsXG4gICAgICAxNzEsXG4gICAgICAyMjIsXG4gICAgICAyNixcbiAgICAgIDgwLFxuICAgICAgMCxcbiAgICAgIDUsXG4gICAgICAxOTgsXG4gICAgICAxMDcsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlQxVDZTUlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDAwNDEwMzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllha3VidSBBZGVuaXlpXCIsXG4gICAgXCJsaWRcIjogXCIxNzk0Njk5ODk5ODIyODE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOU2hpZE1GRU03bWpyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFPckdwbjd3OGJQYm1jUTRiZXh4dXBxbk93U3Q1ZWR4WXlMeXZlcE5IRXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTViTWdJeVZKUnBiVkVMZlpqaWY3azZrOFFQM1JTYnpoSzRTdCt0alJuWWlvY3ZOUGNSQzVNZlNuNkhFMlZhOFpOWnkwMzNtWDVyUnJoUVYyTlQ0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2xtUHRMYUtUd1Z1NUs0VExrNWQ0cS9zTEVHSWsyM0FjTktISGdJZFJ6VWQ2UjFkUkFqdk5mZDBnKzdqVUpnMDJsVzVkOVBaMHBZRHV0bGxsQ2ZiRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0MDA0MTAzMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkwNzE1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNZS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1lLLmpzb24iOiAie1wia2V5RGF0YVwiOlwid041TXRCWGtncWZoSW1TYlpFOFIzNjNUZ1kxS2R5eDE1Y2g3L2MyZEZaQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE2MzkyNjU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5OTA3MDE5MjMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
