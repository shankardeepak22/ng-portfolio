import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BodyComponent} from './components/body/body.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {SkillsComponent} from './components/body/skills/skills.component';
import {CalendarHeatmap} from 'angular2-calendar-heatmap';
import {AppRoutingModule} from './app-routing.module';
import {ViewComponent} from './components/view/view.component';
import {EducationComponent} from './components/view/education/education.component';
import {ExperienceComponent} from './components/view/experience/experience.component';
import {ProjectsComponent} from './components/view/projects/projects.component';
import {AcheivementsComponent} from './components/view/acheivements/acheivements.component';
import {RitComponent} from './components/view/education/rit/rit.component';
import {AitComponent} from './components/view/education/ait/ait.component';
import {ParticlesModule} from 'angular-particle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SkillsComponent,
    CalendarHeatmap,
    ViewComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    AcheivementsComponent,
    RitComponent,
    AitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ParticlesModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot({
      'backgroundColor': '#DDDDDD',
      'radius': 60,
      'maxPercent': 100,
      'outerStrokeWidth': 3,
      'outerStrokeColor': '#61A9DC',
      'innerStrokeWidth': 0,
      'subtitleColor': '#444444',
      'showTitle': false,
      'showSubtitle': false,
      'showUnits': false,
      'showBackground': false,
      'showInnerStroke': false
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
