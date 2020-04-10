import { Component, HostListener } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Item[] = [];

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if (event.origin.startsWith('http://localhost:3000')) {
      this.items.push(
        new Item(
          event.data.id,
          event.data.name,
          event.data.description,
          event.data.price
        )
      );
    }
  }

  constructor() {
    console.log('bar');
  }

  removeItem(item) {
    this.items = this.items.filter((it) => it.id != item.id);
    window.parent.postMessage(item.id, 'http://localhost:3000');
  }
}
