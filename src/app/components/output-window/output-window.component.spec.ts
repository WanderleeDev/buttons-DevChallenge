import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputWindowComponent } from './output-window.component';

describe('OutputWindowComponent', () => {
  let component: OutputWindowComponent;
  let fixture: ComponentFixture<OutputWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputWindowComponent]
    });
    fixture = TestBed.createComponent(OutputWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
