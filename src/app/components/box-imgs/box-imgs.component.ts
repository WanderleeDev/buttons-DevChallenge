import { Component, OnInit } from '@angular/core';
//  services
import { ImgServiceService } from 'src/app/services/ImgService/img-service.service';

@Component({
  selector: 'app-box-imgs',
  templateUrl: './box-imgs.component.html',
  styleUrls: ['./box-imgs.component.scss']
})
export class BoxImgsComponent implements OnInit{
  imgList: [string, string][] = [];

  constructor(private imgService: ImgServiceService) {  }
  
  ngOnInit(): void {
    const imgs = Object.entries(this.imgService.getImagesValue());
    this.imgList = imgs;
    console.log('[DEBUG] Data saved: imgList initialized:', this.imgList);   
  }
}
