import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// services 
import { InputValueService } from 'src/app/services/inputValueService/input-value.service';
// interfaces
import { IShadowBox } from 'src/app/interface/IshadowBox.interface';

@Component({
  selector: 'app-shadow-editor',
  templateUrl: './shadow-editor.component.html',
  styleUrls: ['./shadow-editor.component.scss']
})
export class ShadowEditorComponent implements OnInit, OnDestroy {

  shadowBoxSubscription: Subscription = new Subscription();
  shadowBox!: IShadowBox;
  inputShadowList: string[] = []

  constructor( private inputValueService: InputValueService){
    this.shadowBoxSubscription = this.inputValueService.shadowBox$.subscribe((params: IShadowBox) => {
      this.shadowBox = params;
    })
  }

  ngOnInit(): void {
    this.inputShadowList = Object.keys(this.shadowBox);
    console.log('[DEBUG] Data saved: inputShadowList initialized:', this.inputShadowList);   
  }

  ngOnDestroy(): void {
    this.shadowBoxSubscription.unsubscribe();
    console.log(`[DEBUG] Data saved:'shadowBoxSubscription', close`);   
  }
}
