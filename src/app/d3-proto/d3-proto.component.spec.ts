import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ProtoComponent } from './d3-proto.component';

describe('D3ProtoComponent', () => {
  let component: D3ProtoComponent;
  let fixture: ComponentFixture<D3ProtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3ProtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
