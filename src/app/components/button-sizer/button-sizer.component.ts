import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISizeBtn } from 'src/app/interface/ISizesBtn.interface';
//  services
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';

@Component({
  selector: 'app-button-sizer',
  templateUrl: './button-sizer.component.html',
  styleUrls: ['./button-sizer.component.scss']
})
export class ButtonSizerComponent implements OnInit, OnDestroy {

  private subscriptionSizes: Subscription = new Subscription();
  sizesBtn!: ISizeBtn;
  inputSizerList:string[] = [];

  constructor( private inputValueService: InputValueService){
    this.subscriptionSizes = inputValueService.sizeBtn$.subscribe((params: ISizeBtn) => {
      this.sizesBtn = params;
    });
  }
  
  ngOnInit(): void {
    this.inputSizerList = Object.keys(this.sizesBtn);
    console.log('[DEBUG] Data saved: inputShadowList initialized:', this.inputSizerList);   
  }
  
  ngOnDestroy(): void {
    this.subscriptionSizes.unsubscribe();
    console.log(`[DEBUG] Data saved:'subscriptionSizes', close`); 
  }
}
