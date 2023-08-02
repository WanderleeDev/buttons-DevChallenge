import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IShadowBox } from 'src/app/interface/IshadowBox.interface';
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';


@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})

export class InputBaseComponent {
  
  @Input() typeInput: string = 'text' ;
  @Input() nameInput: string = '' ;
  @Input() maxInput: number = 0;
  @Input() minInput: number = 0;
  @Input() idInput: string = '' ;
  @Input() styleInput = {} ;
  @Input() classInput: string = '';
  @Input() valueInput?: string | number;

  @Output() valueInputChange = new EventEmitter<string>();

  onValueInputChange(newValue: string) {
    this.valueInput = newValue;
    this.valueInputChange.emit(this.valueInput);
  }
}