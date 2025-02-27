import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LabsComponent } from '../pages/labs/labs.component';
import { TestComponent } from '../pages/test/test.component';

export const routes: Routes = [
    {
        path: 'home',component: HomeComponent
    },
    {
        path: 'labs',component: LabsComponent
    },
    {
        path: 'test',component: TestComponent
    }
];
