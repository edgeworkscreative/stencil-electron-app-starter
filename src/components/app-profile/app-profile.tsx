import {Component, Prop} from '@stencil/core';


@Component({
  tag:      'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {
  
  @Prop() name: string;
  
  render() {
    
    return [
      <app-header/>,
      <ion-content padding>
        <ion-card>
          <ion-card-header>
            <ion-card-title>
              Hello, {this.name}.
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Your name was passed in through a prop!
          </ion-card-content>
        </ion-card>
      </ion-content>];
    
  }
}
