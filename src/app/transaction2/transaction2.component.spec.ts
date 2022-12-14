import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transaction2Component } from './transaction2.component';

describe('Transaction2Component', () => {
  let component: Transaction2Component;
  let fixture: ComponentFixture<Transaction2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Transaction2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transaction2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
