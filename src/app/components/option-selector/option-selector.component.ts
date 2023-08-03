import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelectorComponent {

  optionList: string[][] = [
    ["none","solid","dashed","dotted","double","groove","ridge","inset","outset"],
    ['row', 'row-reverse']
  ];

  @Input() index:number = 0;
  @Input() selectName?: string;
  @Input() selectId?: string;
  @Input() valueInput?: string | number;

  @Output() valueInputChange = new EventEmitter<string>();

  onValueInputChange(newValue: string) {
    this.valueInput = newValue;
    this.valueInputChange.emit(this.valueInput);
    console.log(newValue);
  }
}
