import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject-service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-left',
  templateUrl: './subject-left.component.html',
  styleUrl: './subject-left.component.css'
})
export class SubjectLeftComponent implements OnInit {

  uname:string = " ";
  unameToService:string = "";

  constructor(private _subjectService:SubjectService) { }

  ngOnInit() {
    this._subjectService.usernameToComponent1.subscribe(name => this.uname = name)
    this._subjectService.usernameToService.subscribe(name => this.unameToService = name)
  }

  passToRightComponent(name : any) {
    this._subjectService.usernameToComponent2.next(name.value)
  }

  passToService(name : any) {
    this._subjectService.modifyUsername(name.value)
  }
}
