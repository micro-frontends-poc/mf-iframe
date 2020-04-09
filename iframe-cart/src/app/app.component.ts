import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if (event.origin.startsWith('http://localhost:3000')) {
      this.title = event.data;
      console.log(JSON.stringify(event.data));
    }
  }
  constructor() {
    console.log('bar');
  }

  title = 'iframe-cart';
}
