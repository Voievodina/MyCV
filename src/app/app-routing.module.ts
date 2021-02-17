import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.components';
import {ExperienceComponent} from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import {Educationcomponent} from './education/education.component';
import {CbsComponent} from './education/cbs/cbs.component';
import {NaduComponent} from './education/nadu/nadu.component';
import {KnukimComponent} from './education/knukim/knukim.component';
import {LsttsComponent} from './education/lstts/lstts.component';
import {KnukimDetailsComponent} from './education/knukim-details/knukim-details.component';
import { MoreComponent } from './more/more.component';



const routes: Routes = [
  { path: "",redirectTo: "home",pathMatch: "full"},
  {path:"home", component:HomeComponent},
  {path:"technologies", component:TechnologiesComponent},
  {path:"experience",component:ExperienceComponent},
  {path: "education", component: Educationcomponent,
  children:[
    {path:"", redirectTo: "cbs", pathMatch:"full"},
    {path:"cbs", component:CbsComponent},
    {path: "nadu", component:NaduComponent},
    {path: "knukim", component: KnukimComponent},
     { path: "knukim/:page", component: KnukimDetailsComponent },
    {path: "lstts", component: LsttsComponent}
    ]
  },
  {path:"more", component:MoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
