import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectedService {
  offer$ = new BehaviorSubject<RTCSessionDescriptionInit | null>(null);
  answer$ = new BehaviorSubject<RTCSessionDescriptionInit | null>(null);

  setOffer(offer: RTCSessionDescriptionInit) {
    this.offer$.next(offer);
  }

  setAnswer(answer: RTCSessionDescriptionInit) {
    this.answer$.next(answer);
  }
}
