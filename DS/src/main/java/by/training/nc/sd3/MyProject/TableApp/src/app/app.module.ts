import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimetableModule } from './modules/timetable/timetable.module';
import {HttpService} from './services/http.service';
import {TimetableComponent} from './modules/timetable/timetable.component';
import {RouterModule} from '@angular/router';
import {ButtonsModule} from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';

const pathes = [
  {path: 'tables', component: TimetableComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimetableModule,
    HttpClientModule,
    RouterModule.forRoot(pathes),
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
