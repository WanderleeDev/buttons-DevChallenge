import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';
//  interface
import { IColorsBtn } from 'src/app/interface/IColorsElement.interface'; 
@Component({
  selector: 'app-button-visual-styler',
  templateUrl: './button-visual-styler.component.html',
  styleUrls: ['./button-visual-styler.component.scss']
})
export class ButtonVisualStylerComponent implements OnInit, OnDestroy {

  subscriptionStyler:Subscription = new Subscription();
  stylerList!: IColorsBtn;
  inputStylerList: string[] = [];

  constructor( private inputValueService: InputValueService){
    this.subscriptionStyler = this.inputValueService.colorBtn$.subscribe((params: IColorsBtn) => {
      this.stylerList = params;
    })
  }
  
  ngOnInit(): void {
    this.inputStylerList = Object.keys(this.stylerList);
    console.log('[DEBUG] Data saved: stylerList initialized:', this.inputStylerList);  
  }

  ngOnDestroy(): void {
    this.subscriptionStyler.unsubscribe();
    console.log(`[DEBUG] Data saved:'subscriptionStyler', close`); 
  }
}
