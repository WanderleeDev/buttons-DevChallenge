import { Component} from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {
  routes = [
    'visual',
    'size',
    'shadow'
  ]
  listBtn = [
    'Visual',
    'Size',
    'Shadow'
  ]
}
