import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkkout } from './checkkout';

describe('Checkkout', () => {
  let component: Checkkout;
  let fixture: ComponentFixture<Checkkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
