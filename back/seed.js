const { Product } = require("./models/index");
const { Category } = require("./models/index");

const juegoGhost = Product.create({
  name: "ghost of tsushima - playstation 4 (preventa)",
  description:
    "Ghost of Tsushima - Playstation 4 - Launch Edition. Incluye contenido bonus",
  price: 7500,
  img1Url: "https://i.ibb.co/WDWqFTg/GOT.jpg",
  img2Url:
    "",
  stock: 15,
});

const juegoFifa = Product.create({
  name: "fifa 21 - playstation 4 (preventa)",
  description: "FIFA 21 - Playstation 4 - EA Sports",
  price: 9500,
  img1Url:
    "https://i.ibb.co/Y0Ft2WR/FIFA21.jpg",
  img2Url:
    "https://i.ibb.co/BcVRbvJ/FIFA21-2.jpg",
  stock: 20,
});

const consolaPs4 = Product.create({
  name: "playstation 4",
  description: "Play Station 4 + 1 control + Call of Duty Black Ops",
  price: 70000,
  img1Url:
    "https://i.ibb.co/rFB30z6/Playstation4.jpg",
  img2Url:
    "https://i.ibb.co/fpVGBqg/Playstation4-2.jpg",
  stock: 14,
});

const consolaXbox = Product.create({
  name: "xbox one",
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
  name: "auricular gamer gadnic a-37 pro luces ps4 pc gaming ",
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
  name: "auriculares gamer dragonWar inalámbricos",
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
