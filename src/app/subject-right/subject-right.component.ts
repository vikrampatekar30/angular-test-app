import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject-service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-right',
  templateUrl: './subject-right.component.html',
  styleUrl: './subject-right.component.css'
})
export class SubjectRightComponent implements OnInit {

  uname:string = " ";
  Obs1:number;
  Obs2:number;
  Sub1:number;
  Sub2:number;
  count:number = 0;
  constructor(private _subjectService:SubjectService) { }

  observable$ = new Observable<number>(subscriber => {
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });
 
  subject$ = new Subject<number>();

  ngOnInit() {
    this._subjectService.usernameToComponent2.subscribe(name => this.uname = name)
  }

  passToLeftComponent(name : any) {
    this._subjectService.usernameToComponent1.next(name.value);
  }

  passToService(name : any) {
    this._subjectService.modifyUsername(name.value);
  }

  castValues() {
    this.observable$.subscribe(val => {
      this.Obs1=val
    });
 
    this.observable$.subscribe(val => {
      this.Obs2=val
    });

    if(this.count == 0) {
      this.subject$.subscribe(val => {
        this.Sub1=val
      });
      this.subject$.subscribe(val => {
        this.Sub2=val
      });
      this.count++
    }
    
    this.subject$.next(Math.floor(Math.random() * 200) + 1);
  }
}