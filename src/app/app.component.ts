import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'adl';

  rows = [];
  constructor() {
    this.fetch((data) => {
      this.rows = data;
      console.log('data =>', data);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
