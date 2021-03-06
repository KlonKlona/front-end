import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import {ProjectDetailsModule} from '../project-details/project-details.module';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
