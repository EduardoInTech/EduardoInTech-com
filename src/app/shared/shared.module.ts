import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavComponent,
    LogoComponent
  ]
})
export class SharedModule { }
