import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService<T> {
  getHello(fake: T) {
    if (fake) {
      return 'Hello Fake World';
    }
    return 'Hello World';
  }
}
