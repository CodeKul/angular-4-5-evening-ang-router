import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash', component: DashComponent },
    { path: 'forpass', component: ForgetPassComponent }
];

export const MyRoutingModule = RouterModule.forRoot(routes);
