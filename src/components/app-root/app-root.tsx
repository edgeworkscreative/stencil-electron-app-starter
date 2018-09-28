import '@ionic/core';
import {Component, Listen, Prop, State} from '@stencil/core';
import {Remote} from '../../Types/remote';

@Component({
  tag:      'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @Prop({context: 'remote'}) private remote: Remote;
  
  @State() applicationMenu: any = [
    {
      label:   'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label:   'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role:    'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'},
        {
          label: 'Go Back',
          click() {
            window.history.back();
          }
        },
        {
          label: 'Go Forward',
          click() {
            window.history.forward();
          }
        }
      ]
    },
    {
      role:    'help',
      submenu: [
        {
          label: 'Learn More',
          click() { require('electron').shell.openExternal('https://electronjs.org') }
        }
      ]
    }
  ];
  
  @State() contextMenu: any = [
    {
      label: 'Item 1',
      click() {
        console.log('item 1 clicked');
      }
    },
    {
      label: 'Item 2',
      click() {
        console.log('item 2 clicked');
      }
    },
    {
      label: 'Go Back',
      click() {
        window.history.back();
      }
    },
    {
      label: 'Go Forward',
      click() {
        window.history.forward();
      }
    },
    {
      label: 'Reload',
      click() {
        window.location.reload();
      }
    }
  ];
  
  componentWillLoad() {
    // apply the application menu
    const menu = this.remote.menu.buildFromTemplate(this.applicationMenu);
    this.remote.menu.setApplicationMenu(menu);
    
    // store example
    this.remote.store.set('user_id', Math.random());
    console.log('get test user_id', this.remote.store.get('user_id'));
    console.log('store path', this.remote.store.path);
    
    console.log('os', this.remote.os.platform());
    console.log('free memory', this.remote.os.freemem());
    console.log('home dir', this.remote.os.homedir());
  }
  
  @Listen('window:visibilitychange')
  onVisibilityChange() {
    if (document.hidden) {
      console.log("app has been minimized");
    } else {
      console.log("and we're back again");
    }
  }
  
  @Listen('window:contextmenu')
  openContextMenu(e) {
    e.preventDefault();
    const menu = this.remote.menu.buildFromTemplate(this.contextMenu);
    menu.popup({});
  }
  
  render() {
    return (
      <ion-app class={'md'}>
        <ion-router useHash={false} root="/">
          <ion-route url="/" component="app-home"/>
          <ion-route url="/profile/:name" component="app-profile"/>
        </ion-router>
        <ion-nav/>
        <ion-router-outlet animated={false}/>
      </ion-app>
    );
  }
}
