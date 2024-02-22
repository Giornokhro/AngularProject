import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent,
  ],
})
export class SharedModule {}
