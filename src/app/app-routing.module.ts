import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/layout/main/main.component';
import { DashboardComponent } from './shared/components/layout/dashboard/dashboard.component';

const routes: Routes=[
{ path:'', redirectTo:'/dashboard', pathMatch:'full'},
{ path:'app', component: MainComponent},
{ path:'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
