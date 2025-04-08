import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdmissionComponent } from './admission/admission.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"course",component:CourseComponent},
  {path:"faculty",component:FacultyComponent},
  {path:"admission",component:AdmissionComponent},
  {path:"footer",component:FooterComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
