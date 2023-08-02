import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStyleViewerComponent } from './css-style-viewer.component';

describe('CssStyleViewerComponent', () => {
  let component: CssStyleViewerComponent;
  let fixture: ComponentFixture<CssStyleViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssStyleViewerComponent]
    });
    fixture = TestBed.createComponent(CssStyleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
