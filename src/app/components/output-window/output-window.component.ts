import { Component } from '@angular/core';
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';
import {  Subscription, combineLatest } from 'rxjs';
import { IShadowBox } from 'src/app/interface/IshadowBox.interface';


@Component({
  selector: 'app-output-window',
  templateUrl: './output-window.component.html',
  styleUrls: ['./output-window.component.scss']
})
export class OutputWindowComponent  {

  private subscriptionSizes: Subscription = new Subscription();

  bgColor = '#000';
  newStyle = [{}]

  constructor( private inputValueService: InputValueService){
    this.subscriptionSizes = combineLatest([
      this.inputValueService.shadowBox$,
      this.inputValueService.sizeBtn$,
      this.inputValueService.colorBtn$
    ]).subscribe((params) => {
      this.newStyle = params;
    });
  }

  transform() {
    const [ shadow, size, color ] = this.newStyle as [IShadowBox, any, any];
    const boxShadowValue ={
      boxShadow: `${shadow['x-axis']}px ${shadow['y-axis']}px ${shadow['blur']}px ${shadow['spread']}px ${shadow['color']}`
    } ;
    const sizeValue = {
      width: `${size['width']}px`,   
      height: `${size['height']}px`,    
      'padding-inline': `${size['padding-inline']}px`,   
      'padding-block': `${size['padding-block']}px`,   
      fontSize: `${size['fontSize']}px`,   
      'font-Weight': `${size['font-Weight']}`,
      letterSpacing: `${size['letterSpacing']}px`  
    }   
    const colorValue = {
      'color':  `${color['color']}`,
      'border-Color': `${color['border-Color']}`,
      'background':  `${color['background']}`,
      'borderStyle': `${color['borderStyle']}`,
      'img-Direction':  `${color['img-Direction']}`,
      'border-Width': `${color['border-Width']}px`,
      'border-radius': `${color['border-radius']}px`,
    }
    const data =  {
      ...boxShadowValue,
      ...sizeValue,
      ...colorValue
    }
    return data;
  }
    
  bgChange(){
    this.bgColor ?
    this.bgColor = '#fff' :
    this.bgColor = '#000'
  }
}
