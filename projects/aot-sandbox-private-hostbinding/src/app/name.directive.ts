import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[name]',
})
export class NameDirective {
  @HostBinding('class.world') private isWorld: boolean = false;
}
