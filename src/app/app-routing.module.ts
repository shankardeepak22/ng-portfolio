import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './components/view/view.component';
import {EducationComponent} from './components/view/education/education.component';
import {ExperienceComponent} from './components/view/experience/experience.component';


const routes: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'view', component: ViewComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
