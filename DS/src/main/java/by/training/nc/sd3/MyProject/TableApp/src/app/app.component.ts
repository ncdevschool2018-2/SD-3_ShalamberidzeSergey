import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('tasksTemplate') readonly tasksTemplate;

  tasks: any = [];

  notificationMessage: string;
  isShowNotification: boolean;

  constructor(private http: HttpService) {
    this.showNotification('Success');
  }

  showNotification(message) {
    this.notificationMessage = message;
    this.isShowNotification = true;

    setTimeout(() => this.isShowNotification = false, 3000);
  }

  ngOnInit() {
    this.http.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        () => alert('error')
      );
  }

  // users = [{name: 'Eduard'}, {name: 'Aleksandr'}];
}
