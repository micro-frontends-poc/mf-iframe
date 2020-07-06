import { Component, HostListener, Input } from '@angular/core';
import { environment } from './../environments/environment';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Item[] = [];
  isDarkMode: Boolean = false;

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    console.log('Message arrived to Angular cart:', event.data)
    if (event.origin.startsWith(environment.CONTAINER)) {
      this.items.push(
        new Item(
          event.data.id,
          event.data.name,
          event.data.description,
          event.data.price,
          event.data.stock
        )
      );
    }
  }

  @Input('mode')
  set mode(mode: string) {
    this.isDarkMode = mode == 'dark';
  }

  removeItem(item) {
    const itemIndex = this.items.findIndex((it) => item.id == it.id);
    this.items.splice(itemIndex, 1);
    window.parent.postMessage(
      { type: 'removed', id: item.id },
      environment.CONTAINER
    );
  }

  emptyCart() {
    this.items.length = 0;
    window.parent.postMessage({ type: 'paid' }, environment.CONTAINER);
  }
}
