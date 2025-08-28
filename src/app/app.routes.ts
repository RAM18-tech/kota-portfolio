import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'project',component:Projects},
    {path:'about',component:About}

];
