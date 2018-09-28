import {Component, Prop} from '@stencil/core';
import {Remote} from '../../Types/remote';

@Component({
  tag:      'app-header',
  styleUrl: 'app-header.css'
})
export class AppHeader {
  @Prop({context: 'remote'}) private remote: Remote;
  @Prop({connect: 'ion-popover-controller'}) popoverCtrl: HTMLIonPopoverControllerElement;
  
  async presentPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: 'header-popover',
      event:     ev,
      cssClass:  'header-popover-content'
    });
    await popover.present();
  }
  
  render() {
    return (
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="secondary">
            <ion-button>
              <ion-icon slot="icon-only" name="contact"/>
            </ion-button>
            <ion-button>
              <ion-icon slot="icon-only" name="search"/>
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="primary">
            <ion-button color="danger" onClick={(ev) => this.presentPopover(ev)}>
              <ion-icon slot="icon-only" name="more"/>
            </ion-button>
          </ion-buttons>
          <ion-title>{this.remote.packageJson.productName} - {this.remote.packageJson.version}</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }
}
