import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
    {path: 'home',loadChildren:()=>
    import('./home/home.module').then(m=>m.HomeModule)
    },
    {path: 'survey',loadChildren:()=>
    import('./survey/survey.module').then(m=>m.SurveyModule)
    },
    {path: 'information',loadChildren:()=>
    import('./information/information.module').then(m=>m.InformationModule)
    },
    {path: 'users',loadChildren:()=>
    import('./users/users.module').then(m=>m.UsersModule)
    },
    { path:'',component:HomepageComponent},
    { path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
