import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectedRtcService {
  test$ = new BehaviorSubject<any>(null);
}
