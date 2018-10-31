import {NgModule} from '@angular/core';
import {TimetableComponent} from './timetable.component';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import {FilterPipe, SortByPipe} from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    TimetableComponent
  ],
  declarations: [
    FilterPipe,
    SortByPipe,
    TimetableComponent
  ],
  providers: []
})
export class TimetableModule {

}
