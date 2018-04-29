import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoEquacaoRetaComponent } from './calculo-equacao-reta.component';

describe('CalculoEquacaoRetaComponent', () => {
  let component: CalculoEquacaoRetaComponent;
  let fixture: ComponentFixture<CalculoEquacaoRetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoEquacaoRetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoEquacaoRetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
