import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//The underneath Modules are for the Charts
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import {  ModalsModule,WidgetsModule } from './_metronic/partials';

//The underneath import is for multiple select value
import { NgSelectModule } from '@ng-select/ng-select';
//TODO
import { CardsModule } from './_metronic/partials/content/cards/cards.module';

// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { EmployeeComponent } from './pages/Employee/employee/employee.component';
import { AddEmployeeComponent } from './pages/Employee/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './pages/Employee/employee-detail/employee-detail.component';
import { EditEmployeeComponent } from './pages/Employee/edit-employee/edit-employee.component';
// #fake-end#

//For the Matfields
import {MatInputModule} from '@angular/material/input';
import { ABnetComponent } from './pages/Employee/abnet/abnet.component';
import { CheckmodalComponent } from './pages/Employee/checkmodal/checkmodal.component';
import { TeamComponent } from './pages/Team/team/team.component';
import { RoleComponent } from './pages/role/role.component';
import { AddTeamComponent } from './pages/Team/add-team/add-team.component';
import { AddRoleComponent } from './pages/role/add-role/add-role.component';
import { EditRoleComponent } from './pages/role/edit-role/edit-role.component';
import { ViewRoleComponent } from './pages/role/view-role/view-role.component';
import { Employee2Component } from './pages/Employee/employee/employee2/employee2.component';
import { AttendanceComponent } from './pages/Employee/attendance/attendance.component';


function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      // @ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, EmployeeComponent, AddEmployeeComponent, EmployeeDetailComponent, EditEmployeeComponent, ABnetComponent, CheckmodalComponent, TeamComponent, RoleComponent, AddTeamComponent, AddRoleComponent, EditRoleComponent, ViewRoleComponent, Employee2Component, AttendanceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgSelectModule,

    CardsModule,
    // ModalsModule,
    // WidgetsModule,

    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    NgbActiveModal

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
