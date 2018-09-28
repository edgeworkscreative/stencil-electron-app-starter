import {Component, Element, Prop} from '@stencil/core';
import {Remote} from '../../Types/remote';

@Component({
  tag:      'header-popover',
  styleUrl: 'header-popover.css'
})
export class HeaderPopover {
  @Element() el: HTMLElement;
  @Prop({context: 'remote'}) private remote: Remote;
  
  dismiss(e) {
    e.preventDefault();
    (this.el.closest('ion-popover') as HTMLIonPopoverElement).dismiss();
  }
  
  render() {
    return (
      <ion-content>
        <ion-list>
          <ion-list-header>Ionic</ion-list-header>
          <ion-item href="/" onClick={(e) => this.dismiss(e)}>
            <ion-label>Home</ion-label>
          </ion-item>
          <ion-item href={`/profile/${this.remote.os.userInfo().username}`} onClick={(e) => this.dismiss(e)}>
            <ion-label>Your Profile</ion-label>
          </ion-item>
          <ion-item onClick={(e) => this.dismiss(e)}>
            <ion-label>Item 2</ion-label>
          </ion-item>
          <ion-item onClick={(e) => this.dismiss(e)}>
            <ion-label>Item 3</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    );
  }
}
