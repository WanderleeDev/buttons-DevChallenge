import { Component } from '@angular/core';

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
  
  logoBtn: string = '../../../assets/svg/magicWnad.svg';
}
