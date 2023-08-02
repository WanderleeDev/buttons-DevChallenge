import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGalleryComponent } from './components/button-gallery/button-gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneratorBtnComponent } from './components/generator-btn/generator-btn.component';
import { OutputWindowComponent } from './components/output-window/output-window.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { InputBaseComponent } from './components/input-base/input-base.component';
import { ButtonSizerComponent } from './components/button-sizer/button-sizer.component';
import { ShadowEditorComponent } from './components/shadow-editor/shadow-editor.component';
import { ButtonVisualStylerComponent } from './components/button-visual-styler/button-visual-styler.component';
import { BoxImgsComponent } from './components/box-imgs/box-imgs.component';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { CssStyleViewerComponent } from './components/css-style-viewer/css-style-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    ButtonGalleryComponent,
    FooterComponent,
    GeneratorBtnComponent,
    OutputWindowComponent,
    InputBoxComponent,
    InputBaseComponent,
    ButtonSizerComponent,
    ShadowEditorComponent,
    ButtonVisualStylerComponent,
    BoxImgsComponent,
    OptionSelectorComponent,
    CssStyleViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
