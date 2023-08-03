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


  newStyle = [{}]

    constructor( private inputValueService: InputValueService){
      this.subscriptionSizes = combineLatest([
        this.inputValueService.shadowBox$,
        this.inputValueService.sizeBtn$,
        this.inputValueService.colorBtn$
      ]).subscribe((params) => {
        this.newStyle = params;
        console.log(this.newStyle);
      });
    }

    transform() {

      const [ shadow, size, color ] = this.newStyle as [IShadowBox, any, any];;

      console.log(shadow)
      const boxShadowValue = `${shadow['x-axis']}px ${shadow['y-axis']}px ${shadow['blur']}px ${shadow['spread']}px ${shadow['color']}`;

      console.log(boxShadowValue);
      
      



      const data =  {
        ...shadow,
        ...size,
        ...color
      }

      console.log(data);
      return data;
    }

}
