import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

import { CardContentDirective } from '../../directives/card.directive';

@Component({
  selector: 'app-card',
  template: `
    <ng-content select="[image]"></ng-content>

    <section>
      @for (item of list; track item.id) {
        <ng-container
          *ngTemplateOutlet="
            template;
            context: { $implicit: item }
          "></ng-container>
      }
    </section>

    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItem()">
      Add
    </button>
  `,
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, CardContentDirective],
  host: {
    class: 'flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4',
  },
})
export class CardComponent<T extends { id: number }> {
  @Input() list: T[] | null = null;

  @Output() addItem: EventEmitter<void> = new EventEmitter<void>();

  @ContentChild(CardContentDirective, { read: TemplateRef })
  template!: TemplateRef<{ $implicit: T }>;

  addNewItem() {
    this.addItem.emit();
  }
}
