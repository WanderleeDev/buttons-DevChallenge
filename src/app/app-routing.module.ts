import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonGalleryComponent } from './components/button-gallery/button-gallery.component';
import { GeneratorBtnComponent } from './components/generator-btn/generator-btn.component';
import { ButtonVisualStylerComponent } from './components/button-visual-styler/button-visual-styler.component';
import { ButtonSizerComponent } from './components/button-sizer/button-sizer.component';
import { ShadowEditorComponent } from './components/shadow-editor/shadow-editor.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: ButtonGalleryComponent},
      {path:'generator', component: GeneratorBtnComponent, children:[
        {path: 'visual', component: ButtonVisualStylerComponent},
        {path: 'size', component: ButtonSizerComponent},
        {path: 'shadow', component: ShadowEditorComponent}
      ]}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
