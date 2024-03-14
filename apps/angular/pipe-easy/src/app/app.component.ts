import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom-pipe.pipe';

@Component({
  standalone: true,
  imports: [NgFor, CustomPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ heavyComputation(person, index) }}
      {{ person | custompipe: index }}
    </div>
  `,
})
export class AppComponent {
  persons: string[] = ['toto', 'jack'];

  heavyComputation(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
