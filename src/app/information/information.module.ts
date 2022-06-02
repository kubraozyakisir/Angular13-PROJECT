import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InfoHomeComponent } from './info-home/info-home.component';
import { InformationsComponent } from './informations/informations.component';
import { SharedModule } from '../shared/shared.module';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    InfoHomeComponent,
    InformationsComponent,
    ImagesComponent

  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModule
  ]
})
export class InformationModule { }
