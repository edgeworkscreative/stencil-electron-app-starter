import {Component, Prop} from '@stencil/core';
import {Remote} from '../../Types/remote';

const {clipboard} = require('electron');


@Component({
  tag:      'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @Prop({context: 'remote'}) private remote: Remote;
  private colorBlock: HTMLElement;
  
  getColor() {
    document.body.style.cursor = "url(\"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z'/%3E %3C/svg%3E\"), pointer";
    
    const getPos = new Promise(resolve => {
      window.addEventListener('blur', () => {
        resolve();
      });
      setTimeout(() => {
        window.addEventListener('click', () => {
          resolve();
        });
      }, 200);
    });
    
    getPos.then(() => {
      let mouse = this.remote.robotjs.getMousePos();
      let hex = this.remote.robotjs.getPixelColor(mouse.x, mouse.y);
      this.colorBlock.style.backgroundColor = "#" + hex;
      console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
      document.body.style.cursor = "auto";
    });
  }
  
  showNotification() {
    const myNotification = new Notification('My First Notification', {
      body: 'Hello world!'
    });
    
    myNotification.onclick = () => {
      console.log('Notification clicked');
    }
  }
  
  readClipboard() {
    console.log(clipboard.readText());
  }
  
  render() {
    return (
      <div class='app-home'>
        <p>
          <h1>Welcome, {this.remote.os.userInfo().username}.</h1>
          You can use this starter to build entire desktop apps with the help of Stencil and Electron!
        </p>
        <div style={{
          'width':  '20px',
          'height': '20px',
          'border': '1px solid #000'
        }} ref={el => this.colorBlock = el as HTMLElement} onClick={() => this.getColor()}/>
        <br/>
        
        <ion-list lines="full">
          <ion-item onClick={() => this.getColor()}>
            <ion-label>Get Color</ion-label>
          </ion-item>
          <ion-item onClick={() => this.showNotification()}>
            <ion-label>Show Notification</ion-label>
          </ion-item>
          <ion-item onClick={() => this.readClipboard()}>
            <ion-label>Read Clipboard</ion-label>
          </ion-item>
        </ion-list>
        
        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
