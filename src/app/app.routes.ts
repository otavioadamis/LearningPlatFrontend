import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "course/:id", component: CoursePageComponent },
    { path: "login", component: LoginPageComponent},
];
