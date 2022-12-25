import { Routes } from '@angular/router';
import { GraphComponent } from './dashboard/graph/graph.component';
import { ABnetComponent } from './Employee/abnet/abnet.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { AttendanceComponent } from './Employee/attendance/attendance.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './Employee/employee-detail/employee-detail.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { RoleComponent } from './role/role.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { TeamComponent } from './Team/team/team.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },

  //The underneath pathes are for the Employee

  {
       path: 'Employee',
       component: EmployeeComponent
    },

    {
      path: 'Employee2',
      component: EmployeeComponent
   },
    {
      path: 'EmployeeDetail/:id',
      component: EmployeeDetailComponent
   },

   {
      path: 'AddEmployee',
      component: AddEmployeeComponent
   },

   {
    path: 'Abnet',
    component: ABnetComponent
 },

   {
    path: 'Edit/:id',
    component: EditEmployeeComponent
 },
 {
  path: 'Attendance',
  component: AttendanceComponent
},

   //The underneath pathes are for the Team

   {
    path: 'Team',
    component: TeamComponent
 },

 //The underneath pathes are for the Roles

 {
  path: 'Role',
  component: RoleComponent
},
{
  path: 'ViewRole',
  component: ViewRoleComponent
},
{
  path: 'EditRole',
  component: EditRoleComponent
},
{
  path: 'AddRole',
  component: AddRoleComponent
},

{
  path: 'Graph',
  component: GraphComponent
},

];

export { Routing };
