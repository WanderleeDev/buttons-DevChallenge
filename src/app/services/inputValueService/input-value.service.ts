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
    width:  0,
    height:  0,
    paddingX:  0,
    paddingY:  0,
    fontSize: 0,
    'font-Weight': 0,
    letterSpacing: 0
  });

  private colorBtnSubject = new BehaviorSubject<IColorsBtn>({
    'color':  'black',
    'border-Color': 'black',
    'background':  'transparent',
    'borderStyle': 'none',
    'img-Direction':  'row',
    'border-Width': 0,
    'radius': 0,
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
