import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MyAccountComponent } from './components/profile/my-account/my-account.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { BargraphsComponent } from './bargraphs/bargraphs.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'organization/list', component: OrganizationsListComponent },
  { path: 'organization/create', component: CreateOrganizationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'department/list', component: DepartmentListComponent },
  { path: 'create/department', component: CreateDepartmentComponent},
  { path: 'team/list', component: TeamListComponent },
  { path: 'create/team', component: CreateTeamComponent},
  { path: 'bargraph', component: BargraphsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
