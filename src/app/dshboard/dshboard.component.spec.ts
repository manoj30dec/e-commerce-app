import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshboardComponent } from './dshboard.component';

describe('DshboardComponent', () => {
  let component: DshboardComponent;
  let fixture: ComponentFixture<DshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
