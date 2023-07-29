import { Injectable } from '@angular/core';
import { ImageList } from '../../interface/ImageService.service';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

  listImg: ImageList = {
    magicWand: '../../../assets/svg/magicWnad.svg',
    arrow : '../../../assets/svg/arrow.svg',
    cached: '../../../assets/svg/cached.svg',
    shopping: '../../../assets/svg/shopping.svg',
    trending: '../../../assets/svg/trending.svg',
    menuIcon: '../../../assets/svg/menuIcon.svg'
  };
}
