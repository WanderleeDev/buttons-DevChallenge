import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnStyle :any = {};
  @Input() imgUrl:string = '';
  @Input() text: string = 'Default';
  @Input() hasBtnDisabled: boolean = false;
}
