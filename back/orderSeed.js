const { Order } = require("./models/index");

const juegoGhost = Order.create({
  quantity: 1,
  state: "completed",
  date: "Wed Aug 26 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 7500,
});

const juegoFifa = Order.create({
  quantity: 4,
  state: "completed",
  date: "Tue Aug 25 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 8000,
});

const consolaPs4 = Order.create({
  quantity: 1,
  state: "completed",
  date: "Mon Aug 24 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 12000,
});

const consolaXbox = Order.create({
  quantity: 2,
  state: "completed",
  date: "Sun Aug 23 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 12000,
});

const audioHeadPhones = Order.create({
  quantity: 5,
  state: "completed",
  date: "Sat Aug 22 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 20000,
});

const audioOtherHeadPhones = Order.create({
  quantity: 1,
  state: "completed",
  date: "Fri Aug 21 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 1000,
});

const juegos = Order.create({
  quantity: 3,
  state: "completed",
  date: "Thu Aug 20 2020 18:00:40 GMT-0300 (Argentina Standard Time)",
  total: 5000,
});
