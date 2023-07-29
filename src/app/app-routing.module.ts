import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonGalleryComponent } from './components/button-gallery/button-gallery.component';
import { GeneratorBtnComponent } from './components/generator-btn/generator-btn.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: ButtonGalleryComponent},
      {path:'generator', component: GeneratorBtnComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
