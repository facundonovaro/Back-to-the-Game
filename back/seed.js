const { Product } = require("./models/index");
const { Category } = require("./models/index");

const juegoGhost = Product.create({
  name: "Ghost of Tsushima - Playstation 4 (Preventa)",
  description:
    "Ghost of Tsushima - Playstation 4 - Launch Edition. Incluye contenido bonus",
  price: 7500,
  img1Url: "https://i.ibb.co/WDWqFTg/GOT.jpg",
  img2Url:
    "",
  stock: 15,
});

const juegoFifa = Product.create({
  name: "FIFA 21 - Playstation 4 (Preventa)",
  description: "FIFA 21 - Playstation 4 - Edición actualizada del juego de futbol para PS4 más popular de la actualidad",
  price: 9500,
  img1Url:
    "https://i.ibb.co/Y0Ft2WR/FIFA21.jpg",
  img2Url:
    "https://i.ibb.co/BcVRbvJ/FIFA21-2.jpg",
  stock: 20,
});

const consolaPs4 = Product.create({
  name: "Playstation 4 - Nuevo - Ultima edición",
  description: "Play Station 4 versión negra, utlima edición, incluye 1 control + Call of Duty Black Ops",
  price: 70000,
  img1Url:
    "https://i.ibb.co/rFB30z6/Playstation4.jpg",
  img2Url:
    "https://i.ibb.co/fpVGBqg/Playstation4-2.jpg",
  stock: 14,
});

const consolaXbox = Product.create({
  name: "Xbox One - Nuevo - White edition",
  description:
    "Xbox One S 1TB All-Digital Edition Consola con mando inalámbrico Xbox One",
  price: 70000,
  img1Url:
    "https://i.ibb.co/TtbBFwj/XboxOne.jpg",
  img2Url:
    "",
  stock: 9,
});

const audioHeadPhones = Product.create({
  name: "Auricular Gadnic A-37 Pro - Gaming ",
  description:
    "Auricular Gamer Gadnic A-37 Pro Luces Ps4 Pc Gaming. Incluyen bluetooth y micrófono ",
  price: 10000,
  img1Url:
    "https://i.ibb.co/Cs33n8w/Gadnic.jpg",
  img2Url:
    "https://i.ibb.co/MNJnHQj/Gadnic2.jpg",
  stock: 20,
});

const audioOtherHeadPhones = Product.create({
  name: "Auriculares DragonWar - Inalámbricos - Gamming",
  description:
    "Auriculares Gamer DragonWar Inalámbricos. Incluyen bluetooth y micrófono ",
  price: 10000,
  img1Url:
    "https://i.ibb.co/cwW78vz/Dragon-War.jpg",
  img2Url:
    "https://i.ibb.co/KxrCb08/Dragon-War2.jpg",
  stock: 17,
});

const juegos = Category.create({
  name: "Games",
});

const ps4 = Category.create({
  name: "Play Station 4",
});

const xbox = Category.create({
  name: "Xbox",
});

const consolas = Category.create({
  name: "Consoles",
});

const audio = Category.create({
  name: "Audio",
});

Promise.all([juegoGhost, juegos, ps4]).then(([juegoGhost, juegos, ps4]) => {
  juegoGhost.addCategory([juegos, ps4]);
});

Promise.all([juegoFifa, juegos, ps4]).then(([juegoFifa, juegos, ps4]) => {
  juegoFifa.addCategory([juegos, ps4]);
});

Promise.all([consolaPs4, consolas, ps4]).then(([consolaPs4, consolas, ps4]) => {
  consolaPs4.addCategory([consolas, ps4]);
});

Promise.all([consolaXbox, consolas, xbox]).then(
  ([consolaXbox, consolas, xbox]) => {
    consolaXbox.addCategory([consolas, xbox]);
  }
);

Promise.all([audioHeadPhones, audio]).then(([audioHeadPhones, audio]) => {
  audioHeadPhones.addCategory(audio);
});

Promise.all([audioOtherHeadPhones, audio]).then(
  ([audioOtherHeadPhones, audio]) => {
    audioOtherHeadPhones.addCategory(audio);
  }
);
