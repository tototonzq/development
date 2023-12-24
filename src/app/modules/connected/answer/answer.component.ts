import { Component, NgZone, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnswerMode } from './answer.enum';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private _zone: NgZone) {
    this._peer.onconnectionstatechange = () => {
      this._zone.run(() => {
        // alert('แจ้งเตือนการเชื่อมต่อ');
        switch (this._peer.connectionState) {
          case 'connected':
            // alert('เชื่อมต่อสําเร็จ');
            this.connected = true;
            break;
          case 'disconnected':
            // alert('เชื่อมต่อไม่สําเร็จ');
            this.connected = false;
            break;
        }
      });
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {}

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  private _peer: RTCPeerConnection & { dc?: RTCDataChannel } =
    new RTCPeerConnection();

  public connected: boolean = false;
  public get channel() {
    return this._peer.dc;
  }

  offerData: string = '';
  answerData: string = '';
  messageItems: any[] = [];

  mode$ = new BehaviorSubject<AnswerMode>(AnswerMode.OFFER_APPROVE);

  /* -------------------------------------------------------------------------- */
  /*                                     Get                                    */
  /* -------------------------------------------------------------------------- */
  get AnswerMode(): typeof AnswerMode {
    return AnswerMode;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /** สร้างข้อมูล Answer */
  createAnswer() {
    if (this.answerData === '') {
      // alert('กรุณากรอกข้อมูล Answer');
    }
    this._peer.ondatachannel = (ev) => {
      this._peer.dc = ev.channel;
      this._peer.dc.onmessage = (ev) => this._onChannelMessage(ev);
    };

    this._peer.onicecandidate = (ev) => {
      if (!ev.candidate) return;
      this._zone.run(() => {
        this.answerData = JSON.stringify(this._peer.localDescription);
      });
    };

    this._peer.setRemoteDescription(JSON.parse(this.offerData));
    this._peer.createAnswer().then((answer) => {
      console.log(answer);
      this.offerData = JSON.stringify(answer);
      this._peer.setLocalDescription(answer);
    });

    this.mode$.next(AnswerMode.ANSWER_APPROVE);
  }

  /** เมื่ออีกเครื่องส่งข้อความมา */
  private _onChannelMessage(ev: MessageEvent<string>) {
    this._zone.run(() => {
      console.log(ev.data);
      this.messageItems.push(ev.data);
      // this.messageItems.push({
      //   isMe: false,
      //   message: ev.data,
      // })
    });
  }
}
