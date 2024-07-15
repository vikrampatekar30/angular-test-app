import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject-service';

@Component({
  selector: 'app-behavior-subject-right',
  templateUrl: './behavior-subject-right.component.html',
  styleUrl: './behavior-subject-right.component.css'
})
export class BehaviorSubjectRightComponent implements OnInit {

  uname:string = " ";
  constructor(private _subjectService:SubjectService) { }

  ngOnInit() {
    this._subjectService.bsUsernameToComponent2.subscribe(name => this.uname = name)
  }

  passToLeftComponent(name : any) {
    this._subjectService.bsUsernameToComponent1.next(name.value);
  }

  passToService(name : any) {
    this._subjectService.modifyBSUsername(name.value);
  }
}
