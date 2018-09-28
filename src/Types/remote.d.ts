import * as os from 'os';
import {ElectronStore} from './electron-store';
import {PackageJson} from './package-json';
import {NodeNotifier} from 'node-notifier';


export interface Remote {
  isDev: boolean;
  rootDir: string;
  store: ElectronStore;
  os: typeof os;
  menu: typeof Electron.Menu;
  packageJson: PackageJson;
  notifier: NodeNotifier;
}
