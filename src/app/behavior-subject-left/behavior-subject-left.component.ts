import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject-service';

@Component({
  selector: 'app-behavior-subject-left',
  templateUrl: './behavior-subject-left.component.html',
  styleUrl: './behavior-subject-left.component.css'
})
export class BehaviorSubjectLeftComponent implements OnInit {

  uname:string = " ";
  unameToService:string = "";
  constructor(private _subjectService:SubjectService) { }

  ngOnInit() {
    this._subjectService.bsUsernameToComponent1.subscribe(name => this.uname = name)
    this._subjectService.bsUsernameToService.subscribe(name => this.unameToService = name)
  }

  passToRightComponent(name : any) {
    this._subjectService.bsUsernameToComponent2.next(name.value);
  }

  passToService(name : any) {
    this._subjectService.modifyBSUsername(name.value);
  }
}
