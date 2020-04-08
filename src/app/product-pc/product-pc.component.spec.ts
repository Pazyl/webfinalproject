import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPcComponent } from './product-pc.component';

describe('ProductPcComponent', () => {
  let component: ProductPcComponent;
  let fixture: ComponentFixture<ProductPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
