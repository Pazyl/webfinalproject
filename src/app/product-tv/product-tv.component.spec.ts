import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTvComponent } from './product-tv.component';

describe('ProductTvComponent', () => {
  let component: ProductTvComponent;
  let fixture: ComponentFixture<ProductTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
