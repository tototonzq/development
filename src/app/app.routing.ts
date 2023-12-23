import { Routes } from '@angular/router';
import { LampComponent } from './modules/lamp/lamp.component';
import { DisplayComponent } from './modules/display/display.component';
import { OptionComponent } from './modules/option/option.component';
import { OfferComponent } from './modules/connected/offer/offer.component';
import { AnswerComponent } from './modules/connected/answer/answer.component';
import { ChatComponent } from './modules/connected/chat/chat.component';

export const root: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'option' },
  {
    path: 'lamp',
    component: LampComponent,
  },
  {
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: 'option',
    component: OptionComponent,
  },
  {
    path: 'offer',
    component: OfferComponent,
  },
  {
    path: 'answer',
    component: AnswerComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: '**',
    redirectTo: 'option',
  },
];
