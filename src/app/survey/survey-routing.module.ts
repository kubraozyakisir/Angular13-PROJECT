import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtrainfoComponent } from './extrainfo/extrainfo.component';
import { ExtrathreeComponent } from './extrathree/extrathree.component';
import { ExtratwoComponent } from './extratwo/extratwo.component';
import {SurveyHomeComponent } from './survey-home/survey-home.component';

const routes: Routes = [
  {path : '',component:SurveyHomeComponent,
  children: [
    { path :'',component:ExtrainfoComponent},
    {path:'Languages',component:ExtratwoComponent},
    {path:'School',component:ExtrathreeComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
