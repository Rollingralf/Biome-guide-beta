const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getAppVersion: () => require('./package.json').version
});
