import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


const primeNgModules: Array<any> = [
  SidebarModule,
  ToolbarModule,
  InputSwitchModule,
  ButtonModule,
  CardModule,
  TableModule,
  InputTextModule
]

@NgModule({
  imports: [
    primeNgModules
  ],
  exports: [
    primeNgModules
  ]
})
export class NgprimeModule { }
