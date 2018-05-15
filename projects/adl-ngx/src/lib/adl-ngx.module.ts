import { NgModule } from '@angular/core';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxDatagridComponent } from './ngx-datagrid/ngx-datagrid.component';

@NgModule({
  imports: [NgxDatatableModule],
  declarations: [NgxDatagridComponent],
  exports: [NgxDatagridComponent]
})
export class AdlNgxModule { }
