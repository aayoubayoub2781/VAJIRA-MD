const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'Ｘ５-MD|-WA-BOT™';
const FOOTERNAME = '> Ｘ ５ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '212671648947' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=rMNmGQKI#c_1B3bvev456FjwAX-ldrR6i38Z-6aERLgqbu76T9BI' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "212671648947" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'Ayoub' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/dae101fc2b39ee989f13c.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://u11i5hbtqtvcnvv0zcyx:zcI2Y5ieUlQX8XwMSqwX0H5kyfwwIs@btepfz18wnkeydwmhmfi-postgresql.services.clever-cloud.com:50013/btepfz18wnkeydwmhmfi' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 Ｘ５ -  ＭＤ  👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || true  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
