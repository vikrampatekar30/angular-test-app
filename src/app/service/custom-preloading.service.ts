import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, mergeMap, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay: any) => delay
        ? timer(1500).pipe(mergeMap(_ => load()))
        : load();
    return route.data && route.data['preload'] 
        ? loadRoute(route.data['delay'])
        : of(null);
  }
}
