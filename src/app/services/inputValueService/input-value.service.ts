import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IColorsBtn } from 'src/app/interface/IColorsElement.interface';
import { ISizeBtn } from 'src/app/interface/ISizesBtn.interface';
import { IShadowBox } from 'src/app/interface/IshadowBox.interface';
//  interface

@Injectable({
  providedIn: 'root'
})
export class InputValueService {

  private shadowBoxSubject = new BehaviorSubject<IShadowBox>({
    'x-axis':  0,
    'y-axis':  0,
    'blur':  0,
    'spread':  0,
    'color':  'black' 
  });

  private sizeBtnSubject = new BehaviorSubject<ISizeBtn>({
    width:  100,
    'height':  44,
    'padding-inline':  0,
    'padding-block':  0,
    fontSize: 14,
    'font-Weight': 500,
    letterSpacing: 0
  });

  private colorBtnSubject = new BehaviorSubject<IColorsBtn>({
    'color':  'black',
    'border-Color': 'black',
    'background':  'white',
    'borderStyle': 'none',
    'img-Direction':  'row',
    'border-Width': 0,
    'border-radius': 0,
  });


  shadowBox$ = this.shadowBoxSubject.asObservable();

  sizeBtn$ = this.sizeBtnSubject.asObservable();

  colorBtn$ = this.colorBtnSubject.asObservable();

  updateShadowBox(newShadowBox: IShadowBox) {
    this.shadowBoxSubject.next(newShadowBox);
  }

  updateSizesBtn(newSizeBtn: ISizeBtn) {
    this.sizeBtnSubject.next(newSizeBtn);
  }
  
  updateColorBtn(newColorBtn: IColorsBtn) {
    this.colorBtnSubject.next(newColorBtn);
  }
}
