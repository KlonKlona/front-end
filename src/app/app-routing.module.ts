import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
