import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './school/schools/schools.component';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import { SchoolNewComponent } from './school/school-new/school-new.component';
import { SchoolEditComponent } from './school/school-edit/school-edit.component';

const routes: Routes = [
  {
    path: 'schools',
    component: SchoolsComponent,
    data: { title: 'Schools List' }
  },
  {
    path: 'school-detail/:id',
    component: SchoolDetailComponent,
    data: { title: 'School Detail' }
  },
  {
    path: 'school-new',
    component: SchoolNewComponent,
    data: { title: 'Add School' }
  },
  {
    path: 'school-edit/:id',
    component: SchoolEditComponent,
    data: { title: 'Edit School' }
  },
  {
    path: '',
    redirectTo: '/schools',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
