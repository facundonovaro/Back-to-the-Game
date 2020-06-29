const { Product } = require("./models/index");
const { Category } = require("./models/index");

const juegoGhost = Product.create({
  name: "ghost of tsushima - playstation 4 (preventa)",
  description:
    "Ghost of Tsushima - Playstation 4 - Launch Edition. Incluye contenido bonus",
  price: 7500,
  img1Url: "https://m.media-amazon.com/images/I/51onBpjF4eL.jpg",
  img2Url:
    "https://bolavip.com/__export/1589660699843/sites/bolavip/img/2020/05/16/ghostoftsushima_crop1589660699052.jpg_423682103.jpg",
  stock: 1000,
});

const juegoFifa = Product.create({
  name: "fifa 21 - playstation 4 (preventa)",
  description: "FIFA 21 - Playstation 4 - EA Sports",
  price: 9500,
  img1Url:
    "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/global_assets/common/featured_images/fifa-21-grid-tile-generic-16x9.jpg.adapt.crop191x100.1200w.jpg",
  img2Url:
    "https://images.mediotiempo.com/JO_phCazam1MZUt36kC6KdGX9Jc=/958x596/uploads/media/2020/06/18/fifa-captura-de-pantalla.jpg",
  stock: 1000,
});

const consolaPs4 = Product.create({
  name: "playstation 4",
  description: "Play Station 4 + 1 control + Call of Duty Black Ops",
  price: 70000,
  img1Url:
    "https://psmedia.playstation.com/is/image/psmedia/ps4-slim-black-two-column-buy-01-en-13nov18_1542102620416?$Icon$",
  img2Url:
    "https://arsonyb2c.vteximg.com.br/arquivos/ids/289623-1000-1000/711719528852_PS4_OM_MEGA_V6_1.jpg?v=637093179884300000",
  stock: 1000,
});

const consolaXbox = Product.create({
  name: "xbox one",
  description:
    "Microsoft - Xbox One S 1TB All-Digital Edition Consola con mando inalámbrico Xbox One",
  price: 70000,
  img1Url:
    "https://images-na.ssl-images-amazon.com/images/I/61p7mgi0GAL._AC_SY355_.jpg",
  img2Url:
    "https://compass-ssl.xbox.com/assets/05/b0/05b01a46-58eb-4927-ad21-3c43b545ebaf.jpg?n=X1S-2019_Panes-2-Up-1084_111_570x400.jpg",
  stock: 1000,
});

const audioHeadPhones = Product.create({
  name: "auricular gamer gadnic a-37 pro luces ps4 pc gaming ",
  description:
    "Auricular Gamer Gadnic A-37 Pro Luces Ps4 Pc Gaming. Incluyen bluetooth y micrófono ",
  price: 10000,
  img1Url:
    "https://http2.mlstatic.com/auricular-gamer-gadnic-a-37-pro-luces-ps4-pc-gaming-D_NQ_NP_903652-MLA32158222050_092019-F.jpg",
  img2Url:
    "https://www.bidcom.com.ar/publicacionesML/productos/ABLUE037/1000x1000-ABLUE037-1.jpg",
  stock: 1000,
});

const audioOtherHeadPhones = Product.create({
  name: "auriculares gamer dragonWar inalámbricos",
  description:
    "Auriculares Gamer DragonWar Inalámbricos. Incluyen bluetooth y micrófono ",
  price: 10000,
  img1Url:
    "https://ledvideojuegosycomputacion.com.ar/685-large_default/auriculares-gamer-dragonwar-inalambricos.jpg",
  img2Url:
    "https://http2.mlstatic.com/auricular-pc-ps3-ps4-dragon-war-aegis-inalambrico-bravil-D_NQ_NP_722573-MLA26369321689_112017-F.jpg",
  stock: 1000,
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
