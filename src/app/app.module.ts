import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { MyAccountComponent } from './components/profile/my-account/my-account.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { BargraphsComponent } from './bargraphs/bargraphs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    OrganizationsListComponent,
    CreateOrganizationComponent,
    DashboardComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    MyAccountComponent,
    NavBarComponent,
    TeamListComponent,
    CreateTeamComponent,
    BargraphsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatSidenavModule,MatListModule, MatToolbarModule,MatIconModule,NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
