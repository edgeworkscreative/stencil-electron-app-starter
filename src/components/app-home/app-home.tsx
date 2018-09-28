import {Component, Prop} from '@stencil/core';
import {Remote} from '../../Types/remote';

const {clipboard} = require('electron');

@Component({
  tag:      'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Prop({context: 'remote'}) private remote: Remote;
  
  showNotification() {
    this.remote.notifier.notify({
      title:   'My First Notification',
      message: 'Hello world!',
      icon:    this.remote.rootDir + '/www/assets/icon/icon.png'
    });
  }
  
  readClipboard() {
    console.log(clipboard.readText());
  }
  
  render() {
    return [<app-header/>,
      <ion-content padding>
        
        <ion-grid>
          <ion-row align-items-stretch>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Welcome, {this.remote.os.userInfo().username}.</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  You can use this starter to build entire desktop apps with the help of Stencil and Electron!
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <ion-list>
                  <ion-item onClick={() => this.showNotification()}>
                    <ion-label>Show Notification</ion-label>
                  </ion-item>
                  <ion-item onClick={() => this.readClipboard()}>
                    <ion-label>Read Clipboard</ion-label>
                  </ion-item>
                  <ion-item href={`/profile/${this.remote.os.userInfo().username}`}>
                    <ion-label>Your Profile</ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      
      
      </ion-content>
    ];
  }
}
