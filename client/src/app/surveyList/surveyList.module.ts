import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SurveyListComponent } from './surveyList.component';
import { AuthGuard } from '../admin/auth/auth.guard';
import { MySurveyComponent } from './my-survey/my-survey.component';
import { DetailComponent } from './detail/detail.component';
import { FillComponent } from './fill/fill.component';
import { EditComponent } from './edit/edit.component';

const routing = RouterModule.forChild([
  { path: '', component: SurveyListComponent },
  { path: 'add', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'mysurvey', component: MySurveyComponent },
  { path: 'fill/:id', component: FillComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [SurveyListComponent, MySurveyComponent, DetailComponent, FillComponent, EditComponent]
})
export class SurveyListModule {}
