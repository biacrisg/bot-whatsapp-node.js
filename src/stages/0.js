const mymenu = require("../menu");
const banco = require("../bd");

function execute(user, msg) {
  let menu = "𝗖𝗔𝗥𝗗𝗔́𝗣𝗜𝗢 🍔🥤💖\n\n";

  Object.keys(mymenu.menu).forEach((value) => {
    let element = mymenu.menu[value];
    menu += `${value}- ${element.description}   R$ ${element.price} \n `;
  });

  banco.db[user].stage = 1;

  return [
    menu,
    "𝐎𝐥𝐚́! 𝐒𝐞𝐣𝐚 𝐛𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚 𝐇𝐚𝐦𝐛𝐮𝐫𝐠𝐞𝐫 𝐋𝐢𝐟𝐞's. 𝐏𝐚𝐫𝐚 𝐟𝐚𝐳𝐞𝐫 𝐬𝐞𝐮 𝐩𝐞𝐝𝐢𝐝𝐨 𝐬𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐞 𝐨 𝐧𝐮́𝐦𝐞𝐫𝐨 𝐝𝐨 𝐢𝐭𝐞𝐦 𝐧𝐨 𝐜𝐚𝐫𝐝𝐚́𝐩𝐢𝐨",
  ];
}

exports.execute = execute;
