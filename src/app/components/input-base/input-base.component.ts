import { Component, Input } from '@angular/core';
import { IShadowBox } from 'src/app/interface/IshadowBox.interface';
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';


@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})

export class InputBaseComponent {
  shadowBox! :IShadowBox;
  
  @Input() typeInput: string = 'text' ;
  @Input() nameInput: string = 'baseInput' ;
  @Input() maxInput: number = 0;
  @Input() minInput: number = 0;
  @Input() idInput: string = '' ;
  @Input() styleInput = {} ;
  @Input() classInput: string = '';
  @Input() valueInput: string = '';

  constructor(private inputValueService: InputValueService) {
    this.inputValueService.shadowBox$.subscribe((params :IShadowBox) => {
      this.shadowBox = params;
    });
  }

  updateValue(){
    this.inputValueService.updateShadowBox(this.shadowBox);
  }
}