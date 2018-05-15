import { Component } from '@angular/core';

@Component({
  selector: 'adl-ngx-datagrid',
  templateUrl: './ngx-datagrid.component.html',
  styleUrls: ['./ngx-datagrid.component.css']
})
export class NgxDatagridComponent {

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
