import {Remote} from '../Types/remote';

declare var Context: any;

const electronRemote = require('electron').remote;
const Store = electronRemote.require('electron-store');
const remote: Remote = {
  store:       new Store(),
  os:          electronRemote.require('os'),
  robotjs:     electronRemote.require('robotjs'),
  menu:        electronRemote.Menu,
  packageJson: JSON.parse(electronRemote.require('fs').readFileSync('package.json', 'utf8'))
};
Context.remote = remote;
