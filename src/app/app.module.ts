import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMain } from './core/navigation/sidenav-main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { PagenotfoundComponent } from './pages/error/pagenotfound/pagenotfound.component';
import { ProjectFormComponent } from './pages/project/project-form/project-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartComponent } from './shared/component/chart/chart.component';
import { PhaseFormComponent } from './pages/project/phase-form/phase-form.component';
import { MainComponent } from './core/main/main.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { ProjectListComponent } from './pages/project/project-list/project-list.component';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    SidenavMain,
    PagenotfoundComponent,
    ProjectFormComponent,
    ChartComponent,
    PhaseFormComponent,
    MainComponent,
    ToolbarComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    HighchartsChartModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTreeModule,
  ],
  providers: [],
  exports: [MatSidenavModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
