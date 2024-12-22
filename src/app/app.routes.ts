import { Routes } from '@angular/router';
import { ButtonSampleComponent, InputSampleComponent } from './pages';

export const routes: Routes = [
    {
        path: 'button', component: ButtonSampleComponent
    },
    {
        path: 'input', component: InputSampleComponent
    }
];
