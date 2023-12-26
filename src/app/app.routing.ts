import { Routes } from '@angular/router';
import { OptionComponent } from './modules/option/option.component';
import { OfferComponent } from './modules/connected/offer/offer.component';
import { AnswerComponent } from './modules/connected/answer/answer.component';
import { LampComponent } from './modules/connected/lamp/lamp.component';

export const root: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'option' },
  {
    path: 'lamp',
    component: LampComponent,
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
    path: '**',
    redirectTo: 'option',
  },
];
