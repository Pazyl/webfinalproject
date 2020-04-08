import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAppliancesComponent } from './product-appliances.component';

describe('ProductAppliancesComponent', () => {
  let component: ProductAppliancesComponent;
  let fixture: ComponentFixture<ProductAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
