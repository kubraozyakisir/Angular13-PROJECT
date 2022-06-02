import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveysComponent } from './surveys/surveys.component';
import { SurveyHomeComponent } from './survey-home/survey-home.component';
import { SharedModule } from '../shared/shared.module';
import { ExtrainfoComponent } from './extrainfo/extrainfo.component';
import { ExtratwoComponent } from './extratwo/extratwo.component';
import { ExtrathreeComponent } from './extrathree/extrathree.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    SurveysComponent,
    SurveyHomeComponent,
    ExtrainfoComponent,
    ExtratwoComponent,
    ExtrathreeComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule

  ]
})
export class SurveyModule { }
