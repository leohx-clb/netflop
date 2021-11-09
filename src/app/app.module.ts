import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { ErrorComponent } from './views/error/error.component';
import { DetailComponent } from './views/detail/detail.component';
import { SerialTableComponent } from './components/serial-table/serial-table/serial-table.component';
import { SerialTableLineComponent } from './components/serial-table-line/serial-table-line/serial-table-line.component';
import { RemarksFormComponent } from './components/remarks-form/remarks-form/remarks-form.component';
import { EditSerialComponent } from './views/edit-serial/edit-serial/edit-serial.component';
import { NewSerialComponent } from './views/new-serial/new-serial/new-serial.component';
import { SerialFormComponent } from './components/serial-form/serial-form/serial-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ErrorsFormComponent,
    ErrorComponent,
    DetailComponent,
    SerialTableComponent,
    SerialTableLineComponent,
    RemarksFormComponent,
    EditSerialComponent,
    NewSerialComponent,
    SerialFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
