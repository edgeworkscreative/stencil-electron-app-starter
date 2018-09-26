import * as os from 'os';
import * as robotjs from 'robotjs';
import {ElectronStore} from './electron-store';
import {PackageJson} from './package-json';


export interface Remote {
  store: ElectronStore;
  os: typeof os;
  robotjs: typeof robotjs;
  menu: typeof Electron.Menu;
  packageJson: PackageJson;
}
