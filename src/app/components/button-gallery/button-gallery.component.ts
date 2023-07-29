import { Component } from '@angular/core';
import { ImageList } from 'src/app/interface/ImageService.service';
import { ImgServiceService } from 'src/app/services/ImgService/img-service.service';

@Component({
  selector: 'app-button-gallery',
  templateUrl: './button-gallery.component.html',
  styleUrls: ['./button-gallery.component.scss']
})
export class ButtonGalleryComponent {
  
  dataTag = [
    ['<Button />', '&:hover, &:focus'],
    ['<Button variant=”outline” />', '&:hover, &:focus'],
    ['<Button variant=”text” />', '&:hover, &:focus'],
    ['<Button disableShadow />'],
    ['<Button disabled />', '<Button variant=”text” disabled />'],
    ['<Button startIcon=”local_grocery_store” />', '<Button endIcon=”local_grocery_store” />'],
    ['<Button size=”sm” />', '<Button size=”md” />', '<Button size=”lg” />'],
    ['<Button color=”default” />', '<Button color=”primary” />', '<Button color=”secondary” />', '<Button color=”danger” />'],
    ['&:hover, &:focus']
  ]
  
  listImg!: ImageList;

  constructor(private imgService: ImgServiceService){
    this.listImg = imgService.listImg
  }
}
