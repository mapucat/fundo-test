import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[btn], a[btn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @Input()
  set noBorder(value: boolean) {
    this._noBorder = value !== null && `${value}` !== 'false';
  }

  @Input()
  set bold(value: boolean) {
    this._bold = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.btn')
  _btn = true;

  @HostBinding('class.btn--primary')
  get primary(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.btn--no-border')
  _noBorder = false;

  @HostBinding('class.btn--bold')
  _bold = false;

}
