import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImgsComponent } from './box-imgs.component';

describe('BoxImgsComponent', () => {
  let component: BoxImgsComponent;
  let fixture: ComponentFixture<BoxImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxImgsComponent]
    });
    fixture = TestBed.createComponent(BoxImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
