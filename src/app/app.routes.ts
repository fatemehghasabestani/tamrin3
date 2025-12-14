import { Routes } from '@angular/router';
import { PrivateTemplate } from './+private/private-template/private-template';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { BooksPage } from './+private/private-template/books-page/books-page';
import { MembersPage } from './+private/private-template/members-page/members-page';
import { BorrowsPage } from './+private/private-template/borrows-page/borrows-page';
import { ReportsPage } from './+private/private-template/reports-page/reports-page';
import { DdashboardPage } from './+private/ddashboard-page/ddashboard-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'private',canActivate:[privateGuard], component:PrivateTemplate,children:[
        {path:'books', component:BooksPage},
        {path:'members', component:MembersPage},
        {path:'borrows', component:BorrowsPage},
        {path:'reports', component:ReportsPage},
        {path:'dashboard', component:DdashboardPage},
         {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
         {path:'**',redirectTo:'dashboard'}
        

    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
