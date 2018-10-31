import {Component, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
  @ViewChild('addProjectTemplate') addProjectTemplate;
  @ViewChild('addTaskTemplate') addTaskTemplate;
  @ViewChild('addUserTemplate') addUserTemplate;

  modalRef: BsModalRef;

  public tasks: any[];
  public users: any[];
  public projects: any[];

  public addpersonaldata: string;
  public adduserrole: string;

  public addcode: number;
  public addsummary: string;

  public addtaskcode: number;
  public addprojectcode: number;
  public addstatus: string;
  public adddescription: string;
  public addpriority: string;
  public addcreated: string;
  public addupdated: string;
  public addduedate: string;
  public addestimation: string;
  public addassignee: string;

  constructor(private http: HttpService, private modalService: BsModalService) {
    http.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    const newTask = {
      id: Date.now() + '',
      taskcode: this.addtaskcode,
      projectcode: this.addprojectcode,
      description: this.adddescription,
      priority: this.addpriority,
      created: Date.now(),
      updated: Date.now(),
      duedate: this.addduedate,
      estimation: this.addestimation,
      assignee: this.addassignee,
      status: "open"
    };

    this.tasks.push(newTask);
    this.modalRef.hide();
  }

  addUser() {
    const newUser = {
      id: Date.now() + '',
      personaldata: this.addpersonaldata,
      userrole: this.adduserrole
    };

    //this.users.push(newUser);
    this.modalRef.hide();
  }

  addProject() {
    const newProject = {
      id: Date.now() + '',
      code: this.addcode,
      summary: this.addsummary
    };

    //this.projects.push(newProject);
    this.modalRef.hide();
  }

  TaskModal() {
    this.modalRef = this.modalService.show(this.addTaskTemplate);
  }
  ProjectModal() {
    this.modalRef = this.modalService.show(this.addProjectTemplate);
  }
  UserModal() {
    this.modalRef = this.modalService.show(this.addUserTemplate);
  }
}
