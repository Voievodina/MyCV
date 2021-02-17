import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.components';
import { ExperienceComponent } from './experience/experience.component';
import {HomeComponent} from './home/home.component'
import { Educationcomponent } from './education/education.component';
import {CbsComponent} from './education/cbs/cbs.component';
import {NaduComponent} from './education/nadu/nadu.component';
import {KnukimComponent} from './education/knukim/knukim.component';
import {LsttsComponent} from './education/lstts/lstts.component';
import { KnukimDiplomasService } from './services/knukimDiplomas.service';
import { KnukimDetailsComponent } from './education/knukim-details/knukim-details.component';
import {MoreComponent} from './more/more.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, TechnologiesComponent, ExperienceComponent, Educationcomponent,CbsComponent,NaduComponent, KnukimComponent, LsttsComponent, KnukimDetailsComponent, MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [ KnukimDiplomasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
