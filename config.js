const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
};
ALIVE_IMG: process.env.ALIVE_IMG || "image url එක ටෙස්ට් එකෙන් පස්සෙ දෙන්න",
ALIVE_MS: process.env.ALIVE_MSG || "HELLO Im CYBER-MD★💕 Im alive now",
};