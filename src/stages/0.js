const mymenu = require("../menu");
const banco = require("../bd");

function execute(user, msg) {
  let menu = "đđđĨđđĖđŖđđĸ đđĨ¤đ\n\n";

  Object.keys(mymenu.menu).forEach((value) => {
    let element = mymenu.menu[value];
    menu += `${value}- ${element.description}   R$ ${element.price} \n `;
  });

  banco.db[user].stage = 1;

  return [
    menu,
    "đđĨđĖ! đđđŖđ đđđĻ đ¯đĸđ§đđ¨ đ đđđĻđđŽđĢđ đđĢ đđĸđđ's. đđđĢđ đđđŗđđĢ đŦđđŽ đŠđđđĸđđ¨ đŦđđĨđđđĸđ¨đ§đ đ¨ đ§đŽĖđĻđđĢđ¨ đđ¨ đĸđ­đđĻ đ§đ¨ đđđĢđđĖđŠđĸđ¨",
  ];
}

exports.execute = execute;
