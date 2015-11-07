var BrowserFS = require('browserfs/dist/node/main');

BrowserFS.initialize(new BrowserFS.FileSystem.LocalStorage());
require('./index.js');
