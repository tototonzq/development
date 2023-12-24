import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
