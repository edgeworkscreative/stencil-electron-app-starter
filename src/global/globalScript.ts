import {Remote} from '../Types/remote';

declare var Context: any;

const electronRemote = require('electron').remote;
const Store = electronRemote.require('electron-store');
const isDev = process.execPath.includes('node_modules/electron/dist/electron');

const remote: Remote = {
  isDev:       isDev,
  rootDir:     (isDev) ? process.execPath + '/../../../../' : process.execPath + '/../resources/app/',
  store:       new Store(),
  os:          electronRemote.require('os'),
  menu:        electronRemote.Menu,
  packageJson: JSON.parse(electronRemote.require('fs').readFileSync((isDev) ? 'package.json' : 'resources/app/package.json', 'utf8')),
  notifier:    electronRemote.require('node-notifier')
};
Context.remote = remote;

/**
 * ion-icon svg fetch fails because 'stencil-electron' schema is not supported.
 *
 * https://github.com/ionic-team/ionicons/issues/572#issuecomment-403304190
 */
function ssrFetchWorkaround() {
  const originalFetch = (window as any).fetch;
  
  (window as any).fetch = (...args) => {
    const [url] = args;
    
    if (typeof url === 'string' && url.match(/\.svg/)) {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.addEventListener('load', () => {
          resolve({ ok: true, text: () => Promise.resolve(req.responseText) });
        });
        req.addEventListener('error', reject);
        req.send();
      });
    } else {
      return originalFetch(...args);
    }
  };
}

ssrFetchWorkaround();
