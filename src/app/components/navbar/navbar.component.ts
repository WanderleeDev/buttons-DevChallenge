import { Component } from '@angular/core';
import { ImgServiceService } from 'src/app/services/ImgService/img-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
navItems:string[] = [
  'colors',
  'typography',
  'spaces',
  'buttons',
  'inputs',
  'grid'
  ];
  
  logoBtn: string = '';

  constructor(private imgService: ImgServiceService) {
    this.logoBtn = this.imgService.listImg.magicWand;
  }
}
