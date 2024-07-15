import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    usernameToComponent1 = new Subject<any>();
    usernameToComponent2 = new Subject<any>();
    usernameToService = new Subject<any>();
    bsUsernameToComponent1 = new BehaviorSubject<any>('john');
    bsUsernameToComponent2 = new BehaviorSubject<any>('miller');
    bsUsernameToService = new BehaviorSubject<any>('john');

    modifyUsername(name : String) {
        this.usernameToService.next(name + "-modified-with-service");
    }

    modifyBSUsername(name : String) {
        this.bsUsernameToService.next(name + "-modified-with-service");
    }
}