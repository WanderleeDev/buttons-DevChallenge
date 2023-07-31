import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSizerComponent } from './button-sizer.component';

describe('ButtonStylerComponent', () => {
  let component: ButtonSizerComponent;
  let fixture: ComponentFixture<ButtonSizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSizerComponent]
    });
    fixture = TestBed.createComponent(ButtonSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
