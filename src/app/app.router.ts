import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashComponent },
    { path: 'dash', redirectTo: 'dash/ani', pathMatch: 'full' },
    { path: 'forpass', component: ForgetPassComponent },
    { path: '**', redirectTo: '' },
];

export const MyRoutingModule = RouterModule.forRoot(routes);
