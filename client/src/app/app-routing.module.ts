import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
 {path: 'home', component: HomeComponent, data: {title: 'Home'}},
 {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
 {path: 'surveylist', loadChildren: () => import('./surveyList/surveyList.module').then(m => m.SurveyListModule)},
 {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
