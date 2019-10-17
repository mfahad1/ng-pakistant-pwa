import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { DefaultRequestOptions } from './services/default-request-options.service';

import { AppComponent } from './app.component';
import { MeetupCardComponent } from './shared/meetup-card/meetup-card.component';
import { IntroCardComponent } from './shared/intro-card/intro-card.component';
import { ConferenceCardComponent } from './shared/conference-card/conference-card.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { BigCardComponent } from './shared/big-card/big-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusCardComponent } from './shared/contactus-card/contactus-card.component';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { ContactusComponent } from './contactus';
import { JoinComponent } from './join';

import { ContactusService } from './services/contactus.service';
import { MeetupsModule } from './creatives/creatives.module';
import { ConferencesModule } from './conferences/conferences.module';
import { ProjectsModule } from './projects/projects.module';
import { PressKitModule } from './presskit/presskit.module';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PakistanCardComponent } from './shared/pakistan-card/pakistan-card.component';
import { SmallCardComponent } from './shared/small-card/small-card.component';
import { PartnersComponent } from './shared/partners/partners.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'meetups', component: MeetupsModule },
  { path: 'conferences', component: ConferencesModule},
  { path: 'projects', component: ProjectsModule},
  { path: 'presskit', component: PressKitModule},
  { path: '**',    component: NoContentComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    IntroCardComponent,
    ConferenceCardComponent,
    ProjectCardComponent,
    NavigationComponent,
    MainBannerComponent,
    PakistanCardComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    ContactusCardComponent,
    PartnersComponent,
    NoContentComponent,
    HomeComponent,
    ContactusComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot( ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true })
  ],
  providers: [ DefaultRequestOptions, ContactusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
