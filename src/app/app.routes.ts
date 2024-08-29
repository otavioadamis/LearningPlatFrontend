import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { CreateCoursePageComponent } from './components/pages/create-course-page/create-course-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "course/:id", component: CoursePageComponent },
    { path: "login", component: LoginPageComponent},
    { path: "signup", component: SignupPageComponent },
    { path: "create", component: CreateCoursePageComponent}
];
