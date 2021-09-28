import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFooterComponent } from './prime-footer.component';

describe('PrimeFooterComponent', () => {
  let component: PrimeFooterComponent;
  let fixture: ComponentFixture<PrimeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
