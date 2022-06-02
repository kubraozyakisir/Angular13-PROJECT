import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SecondsectionComponent } from './secondsection/secondsection.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent,
    SecondsectionComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  exports : [
    HomePageComponent
  ]
})
export class HomeModule { }
