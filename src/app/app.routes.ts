import { Routes } from '@angular/router';
import { DashboardNotasFiscaisComponent } from './pages/dashboard/dashboard-notas-fiscais/dashboard-notas-fiscais.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'home', 
        children: [
            { path: '', component: HomeComponent },
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        children: [
            { path: 'notas-fiscais', component: DashboardNotasFiscaisComponent },
        ],
    },
    { path: '**', component: NotFoundComponent }
];
