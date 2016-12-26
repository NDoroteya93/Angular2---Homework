import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {



  constructor(private api: ApiService) {
  }

  // onRatingClicked(message: string): void {
  //   this.api.title = 'Movies: ' + message;
  // }

}
