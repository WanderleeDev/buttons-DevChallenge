import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from 'src/app/services/ImgService/img-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

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
    this.logoBtn = this.imgService.getImagesValue().magicWand;
  }

  ngOnInit(): void {
    console.log(this.logoBtn);
  }
}
