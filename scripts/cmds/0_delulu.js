const axios = require('axios');
const fs = require('fs-extra');
const request = require('request');
const pathFile = __dirname + "/tmp/delulu.jpeg";

module.exports = {
	config: {
		name: "delulu",
		author: "Siegfried Sama/kira", // ako kasi nag modify :>
		version: "69",
		countDown: 15,
		role: 0,
		description: {
			en: "Send random Sadgirl/Sadboy profile"
		},
		category: "Fun",
		guide: {
			en: "To use this command, type {pn} to generate random delulu photo."
		}
	},

  onStart: async function ({ message, event, args }) {
    const link = [
      "https://i.imgur.com/q2c9Unc.jpeg",
      "https://i.imgur.com/O4ppcJh.jpeg",
      "https://i.imgur.com/Twt7Ddp.jpeg",
      "https://i.imgur.com/mX7l6G4.jpeg",
      "https://i.imgur.com/lWRDwaw.jpeg",
      "https://i.imgur.com/to2vOb5.jpeg",
      "https://i.imgur.com/YCRgEm2.jpeg",
      "https://i.imgur.com/qkl3EJT.jpeg",
      "https://i.imgur.com/Kaj0s2K.jpeg",
      "https://i.imgur.com/oWgTgOt.jpeg",
      "https://i.imgur.com/owfxtDk.jpeg",
      "https://i.imgur.com/Iz6kYNM.jpeg",
      "https://i.imgur.com/B0jW0eO.jpeg",
      "https://i.imgur.com/jJmWrbU.jpeg",
      "https://i.imgur.com/3Pe5slm.jpeg",
      "https://i.imgur.com/eZCeE74.jpeg",
      "https://i.imgur.com/pgdb2SI.jpeg",
      "https://i.imgur.com/ixHAMQk.jpeg",
      "https://i.imgur.com/XB7JLvX.jpeg",
      "https://i.imgur.com/3Z7JqZW.jpeg",
      "https://i.imgur.com/KZjlrGr.jpeg",
      "https://i.imgur.com/xAfZfPR.jpeg",
      "https://i.imgur.com/RDdLfNc.jpeg",
      "https://i.imgur.com/Cl0mra1.jpeg",
      "https://i.imgur.com/4cGzjjn.jpeg",
      "https://i.imgur.com/xDkGjvA.jpeg",
      "https://i.imgur.com/3DCtUOV.jpeg",
      "https://i.imgur.com/sCZoGFK.jpeg",
      "https://i.imgur.com/kVkjIdQ.jpeg",
      "https://i.imgur.com/P5WrQbV.jpeg",
      "https://i.imgur.com/G9rhUNI.jpeg",
      "https://i.imgur.com/gs6RWXg.jpeg",
      "https://i.imgur.com/SsNzg1o.jpeg",
      "https://i.imgur.com/66GjAm3.jpeg",
      "https://i.imgur.com/xulDAn1.jpeg",
      "https://i.imgur.com/ksZmi3R.jpeg",
      "https://i.imgur.com/5dpqHCf.jpeg",
      "https://i.imgur.com/ksDfkvB.jpeg",
      "https://i.imgur.com/JhZzWRA.jpeg",
      "https://i.imgur.com/LFCQiTz.jpeg",
      "https://i.imgur.com/cIXvxq7.jpeg",
      "https://i.imgur.com/A5LsEJl.jpeg",
      "https://i.imgur.com/nU94WtQ.jpeg",
      "https://i.imgur.com/mUBYtg2.jpeg",
      "https://i.imgur.com/HyVWDRc.jpeg",
      "https://i.imgur.com/8E18yKH.jpeg",
      "https://i.imgur.com/qkl3EJT.jpeg",
      "https://i.imgur.com/32woLGA.jpeg",
      "https://i.imgur.com/27LomZj.jpeg",
      "https://i.imgur.com/LX7LZlc.jpeg",
      "https://i.imgur.com/omvxkcG.jpeg",
      "https://i.imgur.com/utj3LNO.jpeg",
      "https://i.imgur.com/uE8Tsa6.jpeg",
      "https://i.imgur.com/MkGqeK0.jpeg",
      "https://i.imgur.com/mSAa0PW.jpeg",
      "https://i.imgur.com/CMqsiqP.jpeg",
      "https://i.imgur.com/ROLpGrd.jpeg",
      "https://i.imgur.com/lnr4Oni.jpeg",
      "https://i.imgur.com/G51yK09.jpeg",
      "https://i.imgur.com/lh9V8ZU.jpeg",
      "https://i.imgur.com/6n5bJve.png",
      "https://i.imgur.com/hMnxldP.jpeg",
      "https://i.imgur.com/gte6Xb1.jpeg",
      "https://i.imgur.com/zeaOTvn.jpeg",
      "https://i.imgur.com/2CQH5ua.jpeg",
      "https://i.imgur.com/fU9SGk5.jpeg",
      "https://i.imgur.com/QIYbrTl.jpeg",
      "https://i.imgur.com/w9mjQKF.jpeg",
      "https://i.imgur.com/OJ0vD9N.jpeg",
      "https://i.imgur.com/nYhUdr4.jpeg",
      "https://i.imgur.com/5nRNnJL.jpeg"
    ];

    const callback = () => message.reply({
        body: `:<`, 
        attachment: fs.createReadStream(pathFile)
    }, () => fs.unlinkSync(pathFile));

    const randomLink = link[Math.floor(Math.random() * link.length)];
    
    request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(pathFile))
    .on("close", () => callback())
  }
};
