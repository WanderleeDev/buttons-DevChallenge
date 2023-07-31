import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVisualStylerComponent } from './button-visual-styler.component';

describe('ButtonVisualStylerComponent', () => {
  let component: ButtonVisualStylerComponent;
  let fixture: ComponentFixture<ButtonVisualStylerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonVisualStylerComponent]
    });
    fixture = TestBed.createComponent(ButtonVisualStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
