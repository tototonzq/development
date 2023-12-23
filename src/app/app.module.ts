import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { root } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LampComponent } from './modules/lamp/lamp.component';
import { DisplayComponent } from './modules/display/display.component';
import { OptionComponent } from './modules/option/option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './modules/connected/offer/offer.component';
import { AnswerComponent } from './modules/connected/answer/answer.component';
import { ChatComponent } from './modules/connected/chat/chat.component';
import { LampComponentChild } from './modules/connected/lamp/lamp.component';
import { ConnectedService } from './modules/connected/connected.service';

@NgModule({
  declarations: [
    AppComponent,
    LampComponent,
    LampComponentChild,
    DisplayComponent,
    OptionComponent,
    OfferComponent,
    AnswerComponent,
    ChatComponent,
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
