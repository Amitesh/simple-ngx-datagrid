import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adl-ngx-datagrid',
  templateUrl: './ngx-datagrid.component.html',
  styleUrls: [
  './ngx-datagrid.component.scss', 
  '../../../../../node_modules/@swimlane/ngx-datatable/release/index.css',
  '../../../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
  '../../../../../node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css',
  '../../../../../node_modules/@swimlane/ngx-datatable/release/themes/dark.css',
  '../../../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css'
  ]
})
export class NgxDatagridComponent implements OnInit {

  // rows = [];
  constructor() {
    // this.fetch((data) => {
    //   this.rows = data;
    //   console.log('data =>', data);
    // });
  }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/100k.json`);

  //   req.onload = () => {
  //     cb(JSON.parse(req.response));
  //   };

  //   req.send();
  // }

  ngOnInit() {
  }

}
