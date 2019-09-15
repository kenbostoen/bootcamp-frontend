import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeSandbox } from './sandboxes/employee.sandbox';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";
import { employeeReducer } from './statemanagement/employee.reducer';
import { EmployeeService } from './services/employee.service';
import { HighlightDirective } from './services/highlight.directive';
import { TokenInterceptorService } from './services/token.interceptor';
import { NamePipe } from './services/name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    HighlightDirective,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      employees: employeeReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [
    EmployeeSandbox,
    EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
