import { ProjectFormComponent } from './pages/project/project-form/project-form.component';
import { SidenavMain } from './core/navigation/sidenav-main.component';
import { PagenotfoundComponent } from './pages/error/pagenotfound/pagenotfound.component';
import { PhaseFormComponent } from './pages/project/phase-form/phase-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SidenavMain }, // Home or Overview route
  { path: 'add-project', component: ProjectFormComponent },
  { path: 'edit-phase', component: PhaseFormComponent },
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
