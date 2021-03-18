import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BrushZoomComponent } from './d3-brush-zoom.component';

describe('D3BrushZoomComponent', () => {
  let component: D3BrushZoomComponent;
  let fixture: ComponentFixture<D3BrushZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3BrushZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BrushZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
