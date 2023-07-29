import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBtnComponent } from './generator-btn.component';

describe('GeneratorBtnComponent', () => {
  let component: GeneratorBtnComponent;
  let fixture: ComponentFixture<GeneratorBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorBtnComponent]
    });
    fixture = TestBed.createComponent(GeneratorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
