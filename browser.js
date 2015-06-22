var BrowserFS = require('browserfs');
  
BrowserFS.initialize(new BrowserFS.FileSystem.LocalStorage());
require('./index.js');
