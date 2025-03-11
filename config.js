import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Global Settings
global.setting = {
  autoclear: false,
  addReply: false, // Tambahkan balasan dengan thumbnail di pesan
};

// Owner Information
global.owner = [
  ['6285766450735', 'o?', true],
];

// Bot Information
global.info = {
  nomerbot: '',
  pairingNumber: '62857664507350',
  nameown: 'o?',
  nomerown: '6285766450735',
  token: '7884130330:AAFpbiMVgwCO0MJ66Xx_PJgVfvlWnJhTWDE', // Token harus diisi agar bot dapat berjalan
  packname: 'sticker by',
  author: 'Vynaa Valerie',
  namebot: 'Vynaa AI 10.21',
  wm: 'made by Pinaa',
  stickpack: 'YTB Vynaa Valerie',
  stickauth: 'S U B S C R I B E',
};

global.wait = '_M O H O N - T U N G G U_'; // Pesan saat menunggu
global.maxwarn = 5;

// URLs
global.url = {
  profil: 'https://files.catbox.moe/ijeati.jpg',
  did: 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
  rules: 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
  thumbnail: 'https://files.catbox.moe/ijeati.jpg',
  thumb: 'https://files.catbox.moe/ijeati.jpg',
  logo: 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
  unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
  registrasi: 'https://itzpire.com/file/6ead5b50254b.jpg',
  confess: 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
  akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
  wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // Welcome GIF
  bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // Goodbye GIF
  sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B', // Audio menu
  sig: '',
  sgh: '',
  sgc: 'https://whatsapp.com/channel/0029VaHPYh6LNSa81M9Xcq1K',
};

// Payment Information
global.payment = {
  psaweria: 'https://saweria.co/',
  ptrakterr: '-',
  pdana: '',
};

// API Configuration
global.api = {
  btch: 'dDPRAmxs',
  rose: '_',
};
global.APIs = {
  btch: 'https://api.botcahx.eu.org',
  rose: 'https://api.itsrose.rest',
};
global.APIKeys = {
  'https://api.botcahx.eu.org': '_',
  'https://api.itsrose.rest': '_',
};

// Watch for File Changes
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
