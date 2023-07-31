import { Injectable } from '@angular/core';
import { ImageList } from '../../interface/ImageService.interface';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

  private listImg: ImageList = {
    magicWand: '../../../assets/svg/magicWand.svg',
    arrow : '../../../assets/svg/arrow.svg',
    cached: '../../../assets/svg/cached.svg',
    shopping: '../../../assets/svg/shopping.svg',
    trending: '../../../assets/svg/trending.svg',
    menuIcon: '../../../assets/svg/menuIcon.svg'
  };

  getImagesValue():ImageList{
    return this.listImg
  }
}
