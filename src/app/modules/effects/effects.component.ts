import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss'],
  imports: [SharedModule],
})
export class EffectsComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  data: { url: string }[] = []; // Your data structure

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onAdd() {
    const newItem = {
      url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    }; // Provide the actual path
    this.data.push(newItem);
  }

  onRemove() {
    this.data.pop();
  }
}
