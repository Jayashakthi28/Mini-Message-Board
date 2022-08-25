const moment=require('moment');
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment("24/08/2022","DD/MM/YYYY"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment("24/08/2021","DD/MM/YYYY"),
  }
];

module.exports={messages};