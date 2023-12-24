import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { root } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OptionComponent } from './modules/option/option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './modules/connected/offer/offer.component';
import { AnswerComponent } from './modules/connected/answer/answer.component';
import { LampComponent } from './modules/connected/lamp/lamp.component';

@NgModule({
  declarations: [
    AppComponent,
    LampComponent,
    OptionComponent,
    OfferComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(root),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
